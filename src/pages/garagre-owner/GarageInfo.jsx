import axios from "axios";
import { useEffect, useState } from "react";
import config from "../../config";
import ReactLoading from 'react-loading';
import { useCommon } from "../../context/CommonContext";

const GarageInfo = () => {
    const [garageInfo, setGarageInfo] = useState([]);
    const [error, setError] = useState('');
    const [errorUpdate, setErrorUpdate] = useState('');
    const [loading, setLoading] = useState(true);
    const { cities } = useCommon()
    const [districts, setDistricts] = useState([])
    const [wards, setWards] = useState([])
    const [isUpdate, setIsUpdate] = useState(false);
    
    useEffect(() => {
        const fetchGarageInfo = async () => {
            const token = localStorage.getItem('token');
            setLoading(true);
            try {
            const response = await axios.get(`${config.apiBaseUrl}/garage/get-garage-by-user-id`, {
                headers: {
                'Authorization': `Bearer ${token}`
                }
            });
        
            if (response.data.success) {
                const data = response.data.data;
                // Update address_detail to split the first part of the address
                const updatedData = {
                    ...data,
                    address_detail: data.address_detail.split(',')[0]
                };
                setGarageInfo(updatedData);
                localStorage.setItem('garageId', response.data.data.id);

            } else {
                setError(response.data.message);
            }
            } catch (error) {
            setError('Có lỗi xảy ra khi lấy thông tin garage');
            } finally {
            setLoading(false);
            }
        };
      fetchGarageInfo();
    }, [isUpdate]);

    const [imageFile, setImageFile] = useState(null);

    const handleImageChange = (setter) => (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setter(prevUser => ({
                ...prevUser,
                img_thumnail: imageUrl
            }));
        }

        setImageFile(e.target.files[0]);
    };

    useEffect(() => {
        const fetchDistrict = async () => {
            if(garageInfo.id_province) {
                const apiUrl = `${config.apiBaseUrl}/client/get-districts/${garageInfo.id_province}`;
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
    }, [garageInfo.id_province])

    const handleInputChange = (setter) => (e) => {
        const { name, value } = e.target;
        setter(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    useEffect(() => {
        const fetchWards = async () => {
            if(garageInfo.id_district)
            {
                setLoading(true); 
                const apiUrl = `${config.apiBaseUrl}/client/get-wards/${garageInfo.id_district}`;
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
    }, [garageInfo.id_district])

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!garageInfo.name || !garageInfo.email || !garageInfo.phone || !garageInfo.time_open || !garageInfo.time_close ||
            !garageInfo.address_detail || !garageInfo.id_province || !garageInfo.id_district || !garageInfo.id_ward) {
                setErrorUpdate('Vui lòng điền đầy đủ thông tin.');
            return;
        }

        if (!validateEmail(garageInfo.email)) {
            setErrorUpdate('Email không đúng định dạng');
            return;
        }

        const formData = new FormData();
        formData.append('_method', 'put');
        formData.append('name', garageInfo.name);
        formData.append('email', garageInfo.email);
        formData.append('phone', garageInfo.phone);
        formData.append('time_open', garageInfo.time_open);
        formData.append('time_close', garageInfo.time_close);
        formData.append('nest', garageInfo.address_detail);
        formData.append('province', garageInfo.id_province);
        formData.append('district', garageInfo.id_district);
        formData.append('ward', garageInfo.id_ward);
        if (imageFile) {
            formData.append('image_thumnail', imageFile);
        }
        console.log(garageInfo)
        const token = localStorage.getItem('token');
        try {
            setLoading(true);
            const response = await axios.post(`${config.apiBaseUrl}/garage/update/${garageInfo.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.data.success) {
                setGarageInfo(response.data.data);
                setIsUpdate(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER));
                setImageFile(null);
                setErrorUpdate('')
                console.log('Garage information updated successfully:', response.data.data);
            } else {
                console.error('Error updating garage information:', response.data.message);
            }
            setLoading(false);
        } catch (error) {
            console.error('There was an error updating the garage!', error);
            setErrorUpdate(error)
        } finally {
            setLoading(false);
        }
    };

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
  
    if (error) {
        return <div>{error}</div>;
      }
    return (
        <>
            {/* <div aria-live="polite" aria-atomic="true" className="position-relative">
                    <div className="toast-container position-absolute top-0 end-0 p-3">
                        <div
                            className="toast bg-success"
                            role="alert"
                            aria-live="assertive"
                            aria-atomic="true"
                        >
                            <div className="toast-header">
                                <img
                                    src="{{ asset('assets/img/logo-1-1.png') }}"
                                    className="rounded me-2"
                                    alt="..."
                                />
                                <strong className="me-auto">Thông báo</strong>
                                <small className="text-muted">Mới đây</small>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="toast"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="toast-body bg-light"></div>
                        </div>
                    </div>
                </div> */}
            <div className="page-wrapper text-start">
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
                <div className="page-breadcrumb bg-white">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                            <h4 className="page-title">Thông tin Garage</h4>
                        </div>
                        <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                            <div className="d-md-flex">
                                <ol className="breadcrumb ms-auto">
                                    <li>
                                        <a href="#" className="fw-normal">
                                            Dashboard
                                        </a>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    {/* /.col-lg-12 */}
                </div>
                <input type="hidden" defaultValue="{{ $info->id }}" id="id_garage" />
                <div className="container-fluid">
                    <form
                        className="form-horizontal form-material"
                        encType="multipart/form-data"
                        onSubmit={handleSubmit}
                    >
                        <div className="row">
                            {/* Column */}
                            <div className="col-lg-4 col-xlg-3 col-md-12">
                                <div className="white-box">
                                    <div className="user-bg">
                                        <img
                                            width="100%"
                                            height="93%"
                                            alt="user"
                                            id="img_info"
                                            className="img_info"
                                            src={garageInfo.img_thumnail}
                                        />
                                    </div>
                                    <div className="user-btm-box mt-5 d-md-flex">
                                        <div className="col-md-2 col-sm-2 text-start mt-2">
                                            <h5>Ảnh : </h5>
                                        </div>
                                        <div className="col-md-10 col-sm-10">
                                            <input
                                                type="file"
                                                className="form-control"
                                                name="image_thumnail"
                                                id="image_thumnail"
                                                accept=".jpg, .jpeg, .png, .webp"
                                                onChange={handleImageChange(setGarageInfo)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Column */}
                            {/* Column */}
                            <div className="col-lg-8 col-xlg-9 col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="form-group mb-4">
                                            <label className="col-md-12 p-0">Tên Garage</label>
                                            <div className="col-md-12 border-bottom p-0">
                                                <input
                                                    type="text"
                                                    placeholder="Tên Garage"
                                                    className="form-control p-0 border-0"
                                                    name="name"
                                                    value={garageInfo.name}
                                                    onChange={handleInputChange(setGarageInfo)}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group mb-4">
                                            <label className="col-md-12 p-0">Email</label>
                                            <div className="col-md-12 border-bottom p-0">
                                                <input
                                                    type="text"
                                                    placeholder="Email"
                                                    className="form-control p-0 border-0"
                                                    name="email"
                                                    value={garageInfo.email}
                                                    onChange={handleInputChange(setGarageInfo)}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group mb-4">
                                            <label className="col-md-12 p-0">Số điện thoại</label>
                                            <div className="col-md-12 border-bottom p-0">
                                                <input
                                                    type="text"
                                                    placeholder="Số điện thoại"
                                                    className="form-control p-0 border-0"
                                                    name="phone"
                                                    value={garageInfo.phone}
                                                    onChange={handleInputChange(setGarageInfo)}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group mb-4">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label className="col-md-12 p-0">Giờ mở cửa</label>
                                                    <div className="col-md-12 border-bottom p-0">
                                                        <input
                                                            type="text"
                                                            className="form-control p-0 border-0 timepicker"
                                                            timepicker=""
                                                            name="time_open"
                                                            value={garageInfo.time_open}
                                                            onChange={handleInputChange(setGarageInfo)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="col-md-12 p-0">Giờ đóng cửa</label>
                                                    <div className="col-md-12 border-bottom p-0">
                                                        <input
                                                            type="text"
                                                            className="form-control p-0 border-0 timepicker"
                                                            timepicker=""
                                                            name="time_close"
                                                            value={garageInfo.time_close}
                                                            onChange={handleInputChange(setGarageInfo)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group mb-4">
                                            <label className="col-md-12 p-0">Số nhà, tên đường/Tổ</label>
                                            <div className="col-md-12 border-bottom p-0">
                                                <input
                                                    type="text"
                                                    className="form-control p-0 border-0"
                                                    name="address_detail"
                                                    value={ garageInfo.address_detail }
                                                    onChange={handleInputChange(setGarageInfo)}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group mb-4">
                                            <label className="col-md-12 p-0">Thành phố/Tỉnh</label>
                                            <div className="col-md-12 border-bottom p-0">
                                            <select
                                                className="form-select shadow-none p-0 border-0 form-control-line"
                                                name="district"
                                                id="district"
                                                aria-label="Default select example"
                                                value={garageInfo.id_province}
                                                onChange={handleInputChange(setGarageInfo)}
                                            >
                                                    <option value={0} disabled="" selected="">
                                                                vui lòng chọn Thành phố/Tỉnh
                                                            </option>
                                                    {cities.map((city) => (
                                                    <option key={city.id} value={city.id}>
                                                        {city.name}
                                                    </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group mb-4">
                                            <label className="col-md-12 p-0">Quận/Huyện</label>
                                            <div className="col-md-12 border-bottom p-0">
                                                <select
                                                    className="form-select shadow-none p-0 border-0 form-control-line"
                                                    name="district"
                                                    id="district"
                                                    aria-label="Default select example"
                                                    value={garageInfo.id_district}
                                                    onChange={handleInputChange(setGarageInfo)}
                                                >
                                                    {districts.map((district) => (
                                                            <option key={district.id} value={district.id}>
                                                                {district.name}
                                                            </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group mb-4">
                                            <label className="col-md-12 p-0">Phường/Xã</label>
                                            <div className="col-md-12 border-bottom p-0" id="div_ward">
                                                <select
                                                    className="form-select shadow-none p-0 border-0 form-control-line"
                                                    name="ward"
                                                    id="ward"
                                                    aria-label="Default select example"
                                                    value={garageInfo.id_ward}
                                                    onChange={handleInputChange(setGarageInfo)}
                                                >

                                                {wards.map((ward) => (
                                                    <option key={ward.id} value={ward.id}>
                                                        {ward.name}
                                                    </option>
                                                ))}
                                                </select>
                                            </div>
                                        </div>
                                        {errorUpdate && <p style={{ color: "red" }}>{errorUpdate}</p>}
                                        <div className="form-group mb-4">
                                            <div className="col-sm-12">
                                                <button className="btn btn-primary">
                                                    Cập nhật thông tin
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Column */}
                        </div>
                    </form>
                </div>
                {/* End Container fluid  */}
                <footer className="footer text-center">
                </footer>
            </div>
        </>
    )
}

export default GarageInfo