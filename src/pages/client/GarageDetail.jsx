import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import config from "../../config";
import ReactLoading from 'react-loading';
import { Dialog } from 'primereact/dialog';
import { useCommon } from "../../context/CommonContext";


const GarageDetail = () => {
    const { id } = useParams()
    const {services} = useCommon();
    const [garage, setGarage] = useState([]);
    const [serviceGarage, setServiceGarage] = useState([]);
    const [brands, setBrands] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cars, setCars] = useState([]);
    const [recommendGarage, setRecommendGarage] = useState([]);
    const [user, setUser] = useState({
        email: '',
        name: '',
        phone: '',
        car: '',
        service: '',
        time: '',
        date: ''
    });

    useEffect(() => {
        const fetchGarages = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`${config.apiBaseUrl}/garage/get-detail/${id}`, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}` 
                }
            });
            if(!response.data.success) {
                setError(response.data.message)
            }
            setGarage(response.data.data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
        };
        fetchGarages();
    }, [])

    useEffect(() => {
        const fetchRecommendGarage = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${config.apiBaseUrl}/garage/get-recommend-garage/${id}`, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}` 
                    }
                });
                if(!response.data.success) {
                    setError(response.data.message)
                }
                setRecommendGarage(response.data.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
            };
            fetchRecommendGarage();
    }, [])

    useEffect(() => {
        const fetchServices = async () => {
        try {
            const token = localStorage.getItem('token');
            setLoading(true);
            const response = await axios.get(`${config.apiBaseUrl}/garage/get-services/${id}`, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}` 
                }
            });
            if(!response.data.success) {
                setError(response.data.message)
            }
            setServiceGarage(response.data.data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
        };
        fetchServices();
    }, [])

    useEffect(() => {
        const fetchBrands = async () => {
        try {
            const token = localStorage.getItem('token');
            setLoading(true);
            const response = await axios.get(`${config.apiBaseUrl}/garage/get-brands/${id}`, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}` 
                }
            });
            if(!response.data.success) {
                setError(response.data.message)
            }
            setBrands(response.data.data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
        };
        fetchBrands();
    }, [])

    useEffect(() => {
        const fetchCars = async () => {
        try {
            const token = localStorage.getItem('token');
            setLoading(true);
            const response = await axios.get(`${config.apiBaseUrl}/client/profile/get-cars`, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}` 
                }
            });
            if(!response.data.success) {
                setError(response.data.message)
            }
            setCars(response.data.data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
        };
        fetchCars();
    }, [])

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            const address = storedUser.address ? storedUser.address.split(',')[0] : '';
            setUser({
                email: storedUser.email,
                name: storedUser.name || '',
                phone: storedUser.phone || ''
            });
        }
    }, []);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };


    const validateForm = () => {
        return user.name && user.phone && user.email && user.car && user.service && user.time && user.date;
      };

      const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };
    
    const validatePhone = (phone) => {
        const regex = /^[0-9]{10,11}$/;
        return regex.test(phone);
    };

    const handleBooking = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            setError('Bạn cần nhập đầy đủ thông tin');
            return;
        }

        if (!validateEmail(user.email)) {
            setError('Email không đúng định dạng');
            return;
        }
    
        if (!validatePhone(user.phone)) {
            setError('Số điện thoại không đúng định dạng');
            return;
        }    
    
        const formattedTime = user.time;
        const formattedDate = new Date(user.date).toLocaleDateString('en-GB').replace(/\//g, '-'); 
    
        const bookingData = {
          ...user,
          time: formattedTime,
          date: formattedDate,
          status: 1,
          id_garage: id
        };
        setLoading(true);
        try {
          const token = localStorage.getItem('token');
          const response = await axios.post(`${config.apiBaseUrl}/client/order`, bookingData, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          setLoading(false);
          if (response.data.success) {
            setShowModal(false); // Ẩn modal khi thành công
            alert('Booking thành công!');
          } else {
            setError(response.data.message);
          }
        } catch (error) {
          setError(error.message);
        } finally {
            setLoading(false);
        }
      };
    

    const handleInputChange = (setter) => (e) => {
        const { name, value } = e.target;
        setter(prevState => ({
            ...prevState,
            [name]: value
        }));
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

    return (
        <div className="client client container-xxl bg-white p-0">
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
            {/* Header Start */}
            <div className="client client container-fluid">
                <div className="client client row g-0 gx-5 align-items-start p-3">
                    <div className="client client col-lg-6 col-md-12">
                        {/* <div
                            className="client client text-start mx-auto mt-2 wow slideInLeft"
                            data-wow-delay="0.1s"
                        >
                            <h4 className="client client mb-3">
                                { garage.name }
                            </h4>
                            <p>
                                <span style={{ width: 40 }}>
                                    <i className="client client bi bi-geo-alt-fill text_red me-2" />
                                </span>
                                {garage.address_detail}
                            </p>
                            <p>
                                <span style={{ width: 40 }}>
                                    <i className="client client bi bi-clock-fill text_red me-2" />
                                </span>
                                Giờ mở cửa - đóng cửa: {garage.time_open} - {garage.time_close}
                            </p>
                            <p>
                                <span style={{ width: 40 }}>
                                    <i className="client client fa fa-phone-alt text_red me-2" />
                                </span>
                                {garage.phone}
                            </p>
                        </div> */}
                    </div>
                    <div
                        className="client client col-lg-6 col-md-12 text-lg-end wow slideInRight"
                        data-wow-delay="0.1s"
                    >
                        <div className="client client d-inline-block">
                            <button
                                type="button"
                                className="client client btn btn-outline-danger mt-1 me-2"
                                onClick={openModal}
                            >
                                <i className="client client bi bi-calendar-plus-fill" />
                                Đặt lịch
                            </button>
                        </div>
                        {/* <div className="client client btn btn-outline-danger mt-1 d-inline-block">
                            <i className="client client bi bi-flag-fill" />
                            Báo cáo
                        </div> */}
                        <Dialog header="Đặt lịch bảo dưỡng" visible={showModal} style={{ width: '50vw' }} onHide={() => {if (!showModal) return; setShowModal(false); }}>
                            <div className="client modal-body ">
                                <form
                                    onSubmit={handleBooking}
                                    id="book_garage"
                                >
                                    {/* Column */}
                                    <input
                                        type="hidden"
                                        defaultValue={1}
                                        name="status"
                                        id="status"
                                    />
                                    <input
                                        type="hidden"
                                        defaultValue=""
                                        name="id_garage"
                                    />
                                    <div className="client mb-3 text-start">
                                        <label htmlFor="name" className="client form-label">
                                            Họ tên: <span className="client text_red">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="client form-control"
                                            id="name"
                                            name="name"
                                            defaultValue=""
                                            value={user.name}
                                            onChange={handleInputChange(setUser)}
                                            aria-describedby="name-error"
                                        />
                                        <div id="name-error" className="client form-text text_red" />
                                    </div>
                                    <div className="client mb-3 text-start">
                                        <label htmlFor="phone" className="client form-label">
                                            Số điện thoại: <span className="client text_red">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="client form-control"
                                            id="phone"
                                            name="phone"
                                            defaultValue=""
                                            value={user.phone}
                                            onChange={handleInputChange(setUser)}
                                            aria-describedby="phone-error"
                                        />
                                        <div id="phone-error" className="client form-text text_red" />
                                    </div>
                                    <div className="client mb-3 text-start">
                                        <label htmlFor="email" className="client form-label">
                                            Email: <span className="client text_red">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            className="client form-control"
                                            id="email"
                                            name="email"
                                            defaultValue=""
                                            value={user.email}
                                            onChange={handleInputChange(setUser)}
                                            aria-describedby="email-error"
                                        />
                                        <div id="email-error" className="client form-text text_red" />
                                    </div>
                                    <div className="client mb-3 text-start">
                                        <label className="client form-label">
                                            Chọn xe của bạn: <span className="client text_red me-3">*</span>
                                            <span
                                                className="client text_red"
                                                id="selected_car"
                                                style={{ cursor: "pointer" }}
                                            >
                                            </span>
                                        </label>
                                        <div className="client my_car">
                                            <select
                                                className="client form-select mt-1"
                                                name="car"
                                                id="car"
                                                aria-label=""
                                                value={user.car}
                                                onChange={handleInputChange(setUser)}
                                            >
                                                <option value={0} id="dis-0" disabled="" selected="">
                                                    Xe trong danh sách của bạn
                                                </option>
                                                {cars.map((car) => (
                                                    <option key={car.id} value={car.id}>
                                                        {car.name}
                                                    </option>
                                                    ))}
                                            </select>
                                            <div id="mycar-error" className="client form-text text_red" />
                                        </div>
                                        <div className="client new_car d-none">
                                            <div className="client mb-3 text-start">
                                                <label htmlFor="brand_all" className="client form-label">
                                                    Hãng xe: <span className="client text_red me-3">*</span>
                                                </label>
                                                <select
                                                    className="client form-select"
                                                    name="brand_all"
                                                    id="brand_all"
                                                    aria-label=""
                                                >
                                                    <option>
                                                        
                                                    </option>
                                                </select>
                                                <div id="brand-error" className="client form-text text_red" />
                                            </div>
                                            <div className="client mb-3 text-start">
                                                <label htmlFor="name_car" className="client form-label">
                                                    Tên xe: <span className="client text_red me-3">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="client form-control"
                                                    id="name_car"
                                                    defaultValue="null"
                                                    name="name_car"
                                                />
                                                <div
                                                    id="namecar-error"
                                                    className="client form-text text_red"
                                                />
                                            </div>
                                            <div className="client mb-3 text-start">
                                                <label htmlFor="license" className="client form-label">
                                                    Biển số xe: <span className="client text_red me-3">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="client form-control"
                                                    id="license"
                                                    defaultValue="null"
                                                    name="license"
                                                />
                                                <div
                                                    id="license-error"
                                                    className="client form-text text_red"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="client mb-3 text-start">
                                        <label htmlFor="service" className="client form-label">
                                            Dịch vụ: <span className="client text_red">*</span>
                                        </label>
                                        <select
                                            id="choices-multiple-remove-button-service"
                                            className="client form-select"
                                            name="service"
                                            placeholder="Chọn các dịch vụ bạn có"
                                            value={user.service}
                                            onChange={handleInputChange(setUser)}
                                        >
                                        <option value={0} id="dis-0" disabled="" selected="">
                                                    dịch vụ
                                        </option>
                                        {services.map((service) => (
                                            <option key={service.id} value={service.id}>
                                                {service.name}
                                            </option>
                                            ))}                                               
                                        </select>
                                        <div id="service-error" className="client form-text text_red" />
                                    </div>
                                    <div className="client mb-3 text-start">
                                        <div className="client row">
                                            <div className="client col-6">
                                                <label htmlFor="time" className="client form-label">
                                                    Giờ: <span className="client text_red">*</span>
                                                </label>
                                                <input
                                                    type="time"
                                                    className="client form-control"
                                                    id="time"
                                                    name="time"
                                                    value={user.time}
                                                    onChange={handleInputChange(setUser)}
                                                />
                                                <div id="time-error" className="client form-text text_red" />
                                            </div>
                                            <div className="client col-6">
                                                <label htmlFor="date" className="client form-label">
                                                    Ngày: <span className="client text_red">*</span>
                                                </label>
                                                <input
                                                    type="date"
                                                    className="client form-control"
                                                    id="date"
                                                    name="date"
                                                    min=""
                                                    max="30-12-2222"
                                                    value={user.date}
                                                    onChange={handleInputChange(setUser)}
                                                />
                                                <div id="date-error" className="client form-text text_red" />
                                            </div>
                                        </div>
                                        {error && <div className="client text_red">{error}</div>}
                                    </div>
                                    <div className="client mb-3 d-flex align-items-center justify-content-center">
                                        <button className="client btn btn-primary" type="submit">
                                            Đặt lịch
                                        </button>
                                    </div>
                                    {/* <div className="client text-center" style={{ height: 100 }}>
                                        <p className="client mb-3 font-weight-bold text_red">
                                            Bạn cần đăng nhập để tiếp tục!
                                        </p>
                                        <div className="client d-flex align-items-center justify-content-center">
                                            <a href="{{ url('/login') }}" className="client ">
                                                <button className="client btn btn-primary">Đăng nhập</button>
                                            </a>
                                        </div>
                                    </div> */}
                                    {/* Column */}
                                </form>
                            </div>

                            <div className="client modal-footer">
                                <button
                                    type="button"
                                    className="client btn btn-secondary"
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
                                </button>
                            </div>
                       </Dialog>
                    </div>
                </div>
            </div>
            {/* Header End */}
            {/* img Start */}
            <div
                className="client client container-xxl"
                style={{ backgroundColor: "#ffecec", padding: "20px 9px 0 18px" }}
            >
                <div className="client client row g-0">
                    <div className="client client col-lg-6 col-md-6 col-sm-12 d-none d-sm-none d-md-block mb-1">
                        <img
                            className="client client img-fluid"
                            style={{ width: "98%", height: "96%" }}
                            src={garage.img_thumnail}
                            alt=""
                        />
                    </div>
                    <div className="client client col-lg-6 col-md-6 col-sm-12 d-none d-sm-none d-md-block">
                        {/* <div className="client client row g-0">
                            <div className="client client col-lg-6 col-md-6 col-sm-6 mb-2">
                                <img
                                    className="client client img-fluid"
                                    style={{ width: "97%", height: "99%" }}
                                    src=""
                                    alt=""
                                />
                            </div>
                        </div> */}
                        <div
                            className="client client text-start mx-auto mt-2 wow slideInLeft"
                            data-wow-delay="0.1s"
                        >
                            <h4 className="client client mb-3">
                                { garage.name }
                            </h4>
                            <p>
                                <span style={{ width: 40 }}>
                                    <i className="client client bi bi-geo-alt-fill text_red me-2" />
                                </span>
                                {garage.address_detail}
                            </p>
                            <p>
                                <span style={{ width: 40 }}>
                                    <i className="client client bi bi-clock-fill text_red me-2" />
                                </span>
                                Giờ mở cửa - đóng cửa: {garage.time_open} - {garage.time_close}
                            </p>
                            <p>
                                <span style={{ width: 40 }}>
                                    <i className="client client fa fa-phone-alt text_red me-2" />
                                </span>
                                {garage.phone}
                            </p>
                            <p>
                                <span style={{ width: 40 }}>
                                    <i className="client client fa fa-envelope text_red me-2" />
                                </span>
                                {garage.email}
                            </p>
                        </div>
                    </div>
                    <div className="client client d-md-none">
                        <div
                            id="carouselExample"
                            className="client client carousel slide"
                            style={{ paddingRight: 11, paddingBottom: 20 }}
                            data-ride="carousel"
                        >
                            <div className="client client carousel-inner">
                                <div className="client client carousel-item active">
                                    <img
                                        style={{ width: "100%", height: 270 }}
                                        src=""
                                        className="client client d-block w-100"
                                        alt=""
                                    />
                                </div>
                                {/* foreach detail image */}
                                <div className="client client carousel-item">
                                    <img
                                        style={{ width: "100%", height: 270 }}
                                        className="client client "
                                        src=""
                                        alt=""
                                    />
                                </div>
                            </div>
                            <button
                                className="client client carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExample"
                                data-bs-slide="prev"
                            >
                                <span className="client client carousel-control-prev-icon" aria-hidden="true" />
                                <span className="client client visually-hidden">Previous</span>
                            </button>
                            <button
                                className="client client carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExample"
                                data-bs-slide="next"
                            >
                                <span className="client client carousel-control-next-icon" aria-hidden="true" />
                                <span className="client client visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* img End */}
            {/* service */}
            <div className="client client container-xxl p-3 mt-3">
                <div className="client client container">
                    <div
                        className="client client mb-4 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 660 }}
                    >
                        <h3 className="client client mb-3">Dịch vụ cung cấp</h3>
                    </div>
                    <div className="client client row g-2">
                        {/* foreach service lít */}
                        {serviceGarage.map((service) => (
                            <div
                                key={service.id}
                                className="client col-lg-6 col-sm-6 col-12 wow fadeInUp"
                                data-wow-delay="0.1s"
                            >
                                <a
                                    className="client cat-item d-block bg-light text-center rounded p-3"
                                    href=""
                                >
                                    <div
                                        className="client rounded p-3"
                                        style={{ border: "1px dashed rgba(185, 46, 0, 0.3)" }}
                                    >
                                        <div className="client icon mb-3">
                                            <img
                                                className="client img-fluid img-card1"
                                                src={service.image}
                                                alt="Icon"
                                            />
                                        </div>
                                        <h5>{service.name}</h5>
                                        <span>{service.description}</span>
                                    </div>
                                </a>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
            {/* end service */}
            {/* brand */}
            <div className="client client container-xxl p-3 mt-3">
                <div className="client client container">
                    <div
                        className="client client mb-4 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 660 }}
                    >
                        <h3 className="client client mb-3">Hãng xe sửa chữa</h3>
                    </div>
                    <div className="client row g-2">
                    {brands.map((brand) => (
                        <div
                        className="client col-lg-2 col-md-3 col-sm-4 col-6 wow brand_1"
                        data-wow-delay="0.1s"
                        >
                        <div className="client row g-0">
                            <div className="client col-4">
                                <div className="client icon">
                                    <img
                                        className="client img-fluid"
                                        style={{ width: 40, height: 40 }}
                                        src={brand.image}
                                        alt="Icon"
                                    />
                                </div>
                            </div>
                            <div className="client col-8 py-4">
                                <p className="client ">
                                    {brand.name}
                                </p>
                            </div>
                        </div>
                        </div>
                    ))}
                        {/* foreach brand list */}
                       
                    </div>
                    {/* <p
                        className="client text_red text-center"
                        style={{ cursor: "pointer" }}
                        id="show_brand"
                    >
                        Xem thêm hãng xe
                    </p> */}
                </div>
            </div>
            {/* end brand */}
            {/* map */}
            <div className="client client container-xxl p-3 mt-3">
                <div className="client client container">
                    <div
                        className="client client mb-4 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 660 }}
                    >
                        <h3 className="client client mb-3">Thông tin liên hệ</h3>
                    </div>
                    <div className="client client row g-2">
                        <div
                            className="client client col-lg-7 col-sm-12 col-12 wow fadeInUp"
                            data-wow-delay="0.1s"
                            style={{ height: 300 }}
                        >
                            <iframe
                                width="100%"
                                height="100%"
                                frameBorder={0}
                                scrolling="no"
                                marginHeight={0}
                                marginWidth={0}
                                id="gmap_canvas"
                                src="https://maps.google.com/maps?hl=vi&q={{ urlencode($garage->name . ', ' . $garage->address_detail) }}&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                            />
                        </div>
                        <div
                            className="client client col-lg-5 col-sm-12 col-12 wow fadeInUp"
                            data-wow-delay="0.1s"
                            style={{ height: 300 }}
                        >
                            <div
                                className="client client cat-item d-block bg-light text-center rounded p-3"
                                style={{ height: "100% !important" }}
                            >
                                <div
                                    className="client client rounded p-3"
                                    style={{
                                        border: "1px dashed rgba(185, 46, 0, 0.3)",
                                        height: "100% !important"
                                    }}
                                >
                                    <div className="client client py-2">
                                        <h5 className="client client align-middle mb-4 mt-3"> Liên hệ </h5>
                                        <p className="client client align-middle">
                                            <span style={{ width: 40 }}>
                                                <i className="client client fa fa-phone-alt text_red me-2" />
                                            </span>
                                            {garage.phone}
                                        </p>
                                        <p className="client client align-middle">
                                            <span style={{ width: 40 }}>
                                                <i className="client client bi bi-envelope-at-fill text_red me-2" />
                                            </span>
                                            {garage.email}
                                        </p>
                                        <div className="client client align-middle mb-3">
                                            <form
                                                action=""
                                                className="client client d-inline-block"
                                                method="POST"
                                            >
                                                <input
                                                    type="hidden"
                                                    name="id_garage"
                                                    defaultValue=""
                                                />
                                                {/* <button
                                                    className="client client btn bg-danger text-white"
                                                    type="submit"
                                                    style={{ backgroundColor: "transparent", border: "none" }}
                                                >
                                                    Nhắn tin cho garage
                                                </button> */}
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end map */}
            {/* rating */}
            <div className="client client container-fluid p-3 mt-3">
                <div className="client client container">
                    {/* <div
                        className="client client wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 660 }}
                    >
                        <h3 className="client client mb-4">Đánh giá</h3>
                    </div>
                    <div
                        className="client client row g-0 p-3 rounded"
                        style={{ backgroundColor: "#fff5f5" }}
                    >
                        <div className="client client col-lg-8">
                            <div className="client client card-1 p-3">
                                <div className="client client row">
                                    <div className="client client col-md-5">
                                        <div className="client client rating-box text-center">
                                            <h1 className="client client pt-4">
                                                ave star
                                            </h1>
                                            <p className="client client text_red">
                                                total rating đánh giá
                                            </p>
                                        </div>
                                        <div className="client client px-3 text-center">
                                            <span className="client client bi bi-star-half star-active mx-1" />
                                            <span className="client client bi bi-star star-active mx-1" />
                                            <span className="client client bi bi-star star-active mx-1" />
                                            <span className="client client bi bi-star star-active mx-1" />
                                            <span className="client client bi bi-star star-active mx-1" />

                                        </div>
                                    </div>
                                    <div className="client client col-md-7">
                                        <div className="client client rating-bar0 justify-content-center">
                                            <table className="client client text-left mx-auto">
                                                <tbody>
                                                    <tr>
                                                        <td className="client client rating-label">5 sao</td>
                                                        <td className="client client rating-bar">
                                                            <div className="client client bar-container">
                                                                <div
                                                                    className="client client bar-5"
                                                                    style={{
                                                                        width:
                                                                            '50%'
                                                                    }}
                                                                />
                                                            </div>
                                                        </td>
                                                        <td className="client client text-right">
                                                            count star 5
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="client client rating-label">4 sao</td>
                                                        <td className="client client rating-bar">
                                                            <div className="client client bar-container">
                                                                <div
                                                                    className="client client bar-4"
                                                                    style={{
                                                                        width:
                                                                            '40%'
                                                                    }}
                                                                />
                                                            </div>
                                                        </td>
                                                        <td className="client client text-right">
                                                            count star 4
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="client client rating-label">3 sao</td>
                                                        <td className="client client rating-bar">
                                                            <div className="client client bar-container">
                                                                <div
                                                                    className="client client bar-3"
                                                                    style={{
                                                                        width:
                                                                            '30%'
                                                                    }}
                                                                />
                                                            </div>
                                                        </td>
                                                        <td className="client client text-right">
                                                            count star 3
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="client client rating-label">2 sao</td>
                                                        <td className="client client rating-bar">
                                                            <div className="client client bar-container">
                                                                <div
                                                                    className="client client bar-2"
                                                                    style={{
                                                                        width:
                                                                            '20%'
                                                                    }}
                                                                />
                                                            </div>
                                                        </td>
                                                        <td className="client client text-right">
                                                            count star 2
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="client client rating-label">1 sao</td>
                                                        <td className="client client rating-bar">
                                                            <div className="client client bar-container">
                                                                <div
                                                                    className="client client bar-1"
                                                                    style={{
                                                                        width:
                                                                            '10%'
                                                                    }}
                                                                />
                                                            </div>
                                                        </td>
                                                        <td className="client client text-right">
                                                            count star 1
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="client client col-lg-4 col-md-none"
                            style={{ backgroundColor: "#fff" }}
                        ></div>
                    </div> */}
                    <div className="client client row">
                        <div className="client client col-sm-12">
                            <hr />
                            <div className="client client review-block">
                                {/* foreach rating comment */}
                                <div className="client client row">
                                    <div className="client client col-md-2 col-sm-3 col-6">
                                        <img
                                            src=""
                                            className="client client img-rounded"
                                        />
                                        <div className="client client review-block-name">
                                            user name
                                        </div>
                                        <div className="client client review-block-date">
                                            created at
                                        </div>
                                    </div>
                                    <div className="client client col-md-10 col-sm-9 col-6">
                                        <div className="client client review-block-rate">
                                            {/* star rating */}
                                            <i className="client client bi bi-star-fill text_red " />

                                        </div>
                                        <div className="client client review-block-title">
                                            Star sao
                                        </div>
                                        <div className="client client review-block-description">
                                            comment
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end rating */}
            <div className="client client container-fluid p-3 mt-2">
                <div className="client client container">
                    <div
                        className="client client wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 660 }}
                    >
                        <h3 className="client client mb-4">Gợi ý garage</h3>
                    </div>
                    <div className="client client row g-3 mt-2">
                        {/* foreach recommend garage */}
                        {recommendGarage.map((garage) => (
                        <div
                            className="client client col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
                            data-wow-delay="0.1s"
                        >
                                <div className="client client property-item rounded overflow-hidden">
                                <div className="client client position-relative overflow-hidden">
                                    <a  href={`/garage-detail/${garage.id}`}>
                                        <img
                                            className="client client img-fluid"
                                            style={{ width: "100%", height: "80%" }}
                                            src={garage.img_thumnail}
                                            alt=""
                                        />
                                    </a>
                                    <div className="client client bg-white rounded-top text_red position-absolute start-0 bottom-0 mx-4 pt-1 px-2">
                                        <form
                                            id="add_favourite"
                                            action=""
                                            method="POST"
                                        >
                                            <input
                                                type="hidden"
                                                name="id_garage"
                                                defaultValue=""
                                            />
                                            <button
                                                className="client client text_red"
                                                type="submit"
                                                style={{
                                                    backgroundColor: "transparent",
                                                    border: "none",
                                                    width: 39
                                                }}
                                            >
                                                <i className="client client bi bi-heart font-weight-bold" />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="client client p-3 pb-0">
                                    <h5 className="client client text_red mb-3">{garage.name}</h5>
                                    {/* <a
                                        className="client client d-block h5 mb-2"
                                        href=""
                                        style={{ height: 48 }}
                                    >
                                        name garage
                                    </a> */}
                                    <p
                                        className="client client mt-2 "
                                        style={{
                                            height: 48,
                                            overflow: "hidden",
                                            display: "-webkit-box",
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: "vertical"
                                        }}
                                    >
                                        <i className="client client fa fa-map-marker-alt text_red me-2" />
                                        {garage.address_detail}
                                    </p>
                                </div>
                                <div className="client client d-flex">
                                    <small className="client client flex-fill text-start mx-4 me-5">Đánh giá</small>
                                    <small className="client  flex-fill text-start pb-2 ms-5">
                                            <i className="client  bi bi-star-fill text_red " />
                                            <i className="client  bi bi-star-fill text_red" />
                                            <i className="client  bi bi-star-fill text_red" />
                                            <i className="client  bi bi-star-fill text_red" />
                                            <i className="client  bi bi-star-fill text_red me-1" /> 5
                                        </small>
                                </div>
                                <div className="client client d-flex border-top mt-2">
                                    <small className="client client flex-fill text-start border-end py-2 mx-4">
                                        <i className="client client far fa-calendar-plus text_red me-3" />
                                        <a  href={`/garage-detail/${garage.id}`} className="client client text_red">
                                            Đặt lịch ngay
                                        </a>
                                    </small>
                                    <small className="client client flex-fill text-start py-2">
                                        <i className="client client bi bi-chat-dots-fill text_red me-2 d-inline-block" />
                                        <form
                                            action=""
                                            className="client client d-inline-block"
                                            method="POST"
                                        >
                                            <input
                                                type="hidden"
                                                name="id_garage"
                                                defaultValue=""
                                            />
                                            <button
                                                className="client client text_red"
                                                type="submit"
                                                style={{ backgroundColor: "transparent", border: "none" }}
                                            >
                                                Nhắn tin
                                            </button>
                                        </form>
                                    </small>
                                </div>
                            </div>                          
                        </div>
                         ))}
                    </div>
                </div>
            </div>
        </div>

    )

}

export default GarageDetail