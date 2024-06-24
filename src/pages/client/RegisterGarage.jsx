import { useEffect, useState } from 'react'
import { useCommon } from '../../context/CommonContext'
import axios from 'axios'
import config from '../../config'
import ReactLoading from 'react-loading';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Link, useNavigate } from "react-router-dom"

const RegisterGarage = () => {
    const { cities, vehicles, services } = useCommon()
    const [districts, setDistricts] = useState([])
    const [wards, setWards] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const animatedComponents = makeAnimated();
    const navigate = useNavigate()

    const [garage, setGarage] = useState({
        address: '',
        email: '',
        image: '',
        name: '',
        phone: '',
        id_ward: '',
        id_province: '',
        id_district: '',
        time_open: '',
        time_close: '',
        brand: [],
        service: [],
    });

    useEffect(() => {
        const fetchDistrict = async () => {
            if(garage.id_province) {
                const apiUrl = `${config.apiBaseUrl}/client/get-districts/${garage.id_province}`;
                try {
                    setLoading(true); 
                  const response = await axios.get(apiUrl);
                  let data = response.data;
                  if (!data.success) {
                      setError(data.message)
                  }
                  setDistricts(data.data);
                } catch (error) {
                  setError(error.message);
                } finally {
                    setLoading(false); // Kết thúc loading
                }
        
            }
          };
          fetchDistrict()
    }, [garage.id_province])

    const [imageFile, setImageFile] = useState(null);

    const handleInputChange = (setter) => (e) => {
        const { name, value } = e.target;
        setter(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    

    const handleImageChange = (setter) => (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setter(prevUser => ({
                ...prevUser,
                image: imageUrl
            }));
        }

        setImageFile(e.target.files[0]);
    };

    const handleBrandChange = async (selectedOptions) => {
        const selectedBrands = selectedOptions ? selectedOptions.map(option => option.value) : [];
        setGarage(prevGarage => ({ ...prevGarage, brand: selectedBrands }));
    };

    const handleServiceChange = (selectedOptions) => {
        const selectedServices = selectedOptions ? selectedOptions.map(option => option.value) : [];
        setGarage(prevGarage => ({ ...prevGarage, service: selectedServices }));
    };

    const validateForm = () => {
        return garage.image && garage.address && garage.id_district && garage.id_province && garage.id_ward && garage.brand && garage.name && garage.phone && garage.email && garage.service && garage.time_close && garage.time_open;
      };

      const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };
    
    const validatePhone = (phone) => {
        const regex = /^[0-9]{10,11}$/;
        return regex.test(phone);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            setError('Bạn cần nhập đầy đủ thông tin');
            return;
        }

        if (!validateEmail(garage.email)) {
            setError('Email không đúng định dạng');
            return;
        }
    
        if (!validatePhone(garage.phone)) {
            setError('Số điện thoại không đúng định dạng');
            return;
        }    

        const formData = new FormData();
        garage.brand.forEach((value, index) => {
            formData.append(`brand[${index}]`, value);
          });
        garage.service.forEach((value, index) => {
        formData.append(`service[${index}]`, value);
        });
          
        formData.append('name', garage.name);
        formData.append('ward', garage.id_ward);
        formData.append('district', garage.id_district);
        formData.append('province', garage.id_province)
        formData.append('nest', garage.address)
        formData.append('email', garage.email);
        formData.append('phone', garage.phone)
        formData.append('time_open', garage.time_open);
        formData.append('time_close', garage.time_close)

        if (imageFile) {
            formData.append('image_thumnail', imageFile);
        }

        for (const pair of formData.entries()) {
            console.log(`${pair[0]}: ${pair[1]}`);
          }

        const token = localStorage.getItem('token');
        try {
            setLoading(true); 
            const response = await axios.post(`${config.apiBaseUrl}/garage/create`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}` 
                }
            });
            if(response.data.success){
                alert('Đăng ký garage thành công');
                navigate('/')
            }
            
            console.log(response.data);
        } catch (error) {
            console.error('There was an error updating the user!', error);
            // Handle error (e.g., show an error message)
        } finally {
            setLoading(false); // Kết thúc loading
        }
    }

    const loadingOverlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: Adds a semi-transparent background
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999

    };

    useEffect(() => {
        const fetchWards = async () => {
            if(garage.id_district)
            {
                setLoading(true); 
                const apiUrl = `${config.apiBaseUrl}/client/get-wards/${garage.id_district}`;
                try {
                  const response = await axios.get(apiUrl);
                  let data = response.data;
                  if (!data.success) {
                      setError(data.message)
                  }
                  setWards(data.data);
                } catch (error) {
                  setError(error.message);
                } finally {
                    setLoading(false); // Kết thúc loading
                }
        
            }
          };
          fetchWards()
    }, [garage.id_district])

    const brandOptions = vehicles.map(brand => ({ value: brand.id, label: brand.name }));
    const serviceOptions = services.map(service => ({ value: service.id, label: service.name }));


    return (
        <div className="client container-xxl bg-white p-5">
            <div style={{ position: 'relative' }}>
                    {loading && (
                        <div style={loadingOverlayStyle}>
                            <ReactLoading
                                type="spin"
                                color="#000"
                                height={50}
                                width={50}
                            />
                        </div>
                    )}</div>
            <h3 className="client box-title text-center mb-5">Đăng ký garage</h3>
            <form
                className="client form-block"
                id="form_info"
                onSubmit={handleSubmit}
            >
                <div className="client row">
                    {/* Column */}
                    <div className="client col-lg-6 col-xlg-6 col-md-12 mx-auto">
                        <div className="client ">
                            <div className="client img-fluid">
                                <img
                                    width="100%"
                                    height="380px"
                                    alt="user"
                                    className="client avatar"
                                    id="avatar"
                                    src={garage.image || require('../../assets/img/default-image.webp')}
                                />
                            </div>
                            <div className="client user-btm-box mt-3 d-md-flex">
                                <div className="client col-md-2 col-sm-2 text-start mt-2">
                                    <h6>Ảnh chinh: </h6>
                                </div>
                                <div className="client col-md-10 col-sm-10">
                                    <input
                                        type="file"
                                        className="client form-control"
                                        name="image"
                                        id="imageThumnail"
                                        accept=".jpg, .jpeg, .png, .webp"
                                        onChange={handleImageChange(setGarage)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Column */}
                </div>
                <div className="client row mt-4">
                    <div className="client col-lg-6 col-xlg-6 col-md-12 content-in-tab mb-4">
                        <div className="client row g-3 text-start">
                            <div className="client col-3">
                                <label htmlFor="inputName" className="client col-form-label">
                                    Tên Garage:<span className="client text_red">*</span>
                                </label>
                            </div>
                            <div className="client col-9">
                                <input
                                    type="text"
                                    id="inputName"
                                    name="name"
                                    className="client form-control"
                                    aria-describedby="passwordHelpInline"
                                    value={garage.name}
                                    onChange={handleInputChange(setGarage)}
                                />
                            </div>
                        </div>
                        <div className="client row g-3 text-start mt-2">
                            <div className="client col-3">
                                <label htmlFor="inputEmail" className="client col-form-label">
                                    Email:<span className="client text_red">*</span>
                                </label>
                            </div>
                            <div className="client col-9">
                                <input
                                    type="email"
                                    id="inputEmail"
                                    name="email"
                                    className="client form-control"
                                    value={garage.email}
                                    onChange={handleInputChange(setGarage)}
                                />
                            </div>
                        </div>
                        <div className="client row g-3 text-start mt-2">
                            <div className="client col-3">
                                <label htmlFor="inputAddress" className="client col-form-label">
                                    Địa chỉ:<span className="client text_red">*</span>
                                </label>
                                <label htmlFor="inputAddress" className="client col-form-label">
                                    <span className="client text_red">
                                        (Nếu bạn muốn cập nhập địa chỉ, vui lòng nhập đầy đủ thông tin!)
                                    </span>
                                </label>
                            </div>
                            <div className="client col-9">
                                <div className="client row">
                                    <div className="client col-md-12 col-12">
                                        <input
                                            type="text"
                                            name="address"
                                            className="client form-control"
                                            placeholder="Tổ, thôn, số nhà, đường"
                                            value={garage.address}
                                            onChange={handleInputChange(setGarage)}
                                        />
                                    </div>
                                </div>
                                <div className="client row">
                                    <div className="client col-md-12 col-12 mt-4">
                                        <select
                                            className="client form-select"
                                            name="id_province"
                                            id="province"
                                            aria-label="Default select example"
                                            value={garage.id_province}
                                            onChange={handleInputChange(setGarage)}
                                        >
                                            <option value="" disabled>
                                                Thành phố/Tỉnh
                                            </option>
                                                {cities.map((city) => (
                                                <option key={city.id} value={city.id}>
                                                    {city.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="client content-distrist">
                                        <div className="client col-md-12 col-12 mt-4">
                                            <select
                                                className="client form-select"
                                                name="id_district"
                                                id="distrist"
                                                aria-label="Default select example"
                                                value={garage.id_district}
                                                onChange={handleInputChange(setGarage)}
                                            >
                                                <option value="" disabled>
                                                    Quận/huyện
                                                </option>
                                                {districts.map((district) => (
                                                    <option key={district.id} value={district.id}>
                                                        {district.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="client content-ward">
                                            <div className="client col-md-12 col-12 mt-4">
                                                <select
                                                    className="client form-select"
                                                    name="id_ward"
                                                    id="ward"
                                                    aria-label="Default select example"
                                                    value={garage.id_ward}
                                                    onChange={handleInputChange(setGarage)}
                                                >
                                                    <option value="" disabled>
                                                        Phường/xã
                                                    </option>
                                                    {wards.map((ward) => (
                                                                <option key={ward.id} value={ward.id}>
                                                                    {ward.name}
                                                                </option>
                                                                ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="client col-lg-6 col-xlg-6 col-md-12 content-in-tab">
                        <div className="client row g-3 text-start">
                            <div className="client col-3">
                                <label htmlFor="inputPhone" className="client col-form-label">
                                    Số điện thoại:<span className="client text_red">*</span>
                                </label>
                            </div>
                            <div className="client col-9">
                                <input
                                    type="number"
                                    id="inputPhone"
                                    name="phone"
                                    className="client form-control"
                                    aria-describedby="passwordHelpInline"
                                    value={garage.phone}
                                    onChange={handleInputChange(setGarage)}
                                />
                            </div>
                        </div>
                        <div className="client row g-3 text-start mt-2">
                            <div className="client col-3">
                                <label className="client col-form-label">
                                    Thời gian mở:<span className="client text_red">*(08:00)</span>
                                </label>
                            </div>
                            <div className="client col-9">
                                <input type="text" name="time_open" className="client form-control"
                                    value={garage.time_open}
                                    onChange={handleInputChange(setGarage)}
                                />
                            </div>
                        </div>
                        <div className="client row g-3 text-start mt-2">
                            <div className="client col-3">
                                <label className="client col-form-label">
                                    Thời gian đóng:<span className="client text_red">*(18:00)</span>
                                </label>
                            </div>
                            <div className="client col-9">
                                <input type="text" name="time_close" className="client form-control"
                                value={garage.time_close}
                                onChange={handleInputChange(setGarage)}
                                />
                            </div>
                        </div>
                        <div className="client row g-3 text-start mt-2">
                            <div className="client col-3">
                                <label htmlFor="inputBrand" className="client col-form-label">
                                    Hãng xe:<span className="client text_red">*</span>
                                </label>
                            </div>
                            <div className="client col-9">
                            <Select
                                closeMenuOnSelect={false}
                                components={animatedComponents}
                                isMulti
                                onChange={handleBrandChange}
                                options={brandOptions}
                            />

                            </div>
                        </div>
                        <div className="client row g-3 text-start mt-2">
                            <div className="client col-3">
                                <label htmlFor="inputBrand" className="client col-form-label">
                                    Dịch vụ:<span className="client text_red">*</span>
                                </label>
                            </div>
                            <div className="client col-9">
                            <Select
                                closeMenuOnSelect={false}
                                components={animatedComponents}
                                isMulti
                                onChange={handleServiceChange}
                                options={serviceOptions}
                            />
                            </div>
                        </div>
                       
                    </div>
                    {error && <div className="client text_red">{error}</div>}
                    <div className="client row ">
                        <div className="client col-12 d-flex justify-content-center">
                            <button
                                className="client btn btn-primary mt-4"
                                id="submit_add"
                                type="submit"
                            >
                                Đăng ký garage
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default RegisterGarage