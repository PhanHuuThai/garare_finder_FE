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
        const fetchServices = async () => {
        try {
            const token = localStorage.getItem('token');
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
        <div className="container-xxl bg-white p-0">
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
            <div className="container-fluid">
                <div className="row g-0 gx-5 align-items-start p-3">
                    <div className="col-lg-6 col-md-12">
                        <div
                            className="text-start mx-auto mt-2 wow slideInLeft"
                            data-wow-delay="0.1s"
                        >
                            <h4 className="mb-3">
                                { garage.name }
                            </h4>
                            <p>
                                <span style={{ width: 40 }}>
                                    <i className="bi bi-geo-alt-fill text_red me-2" />
                                </span>
                                {garage.address_detail}
                            </p>
                            <p>
                                <span style={{ width: 40 }}>
                                    <i className="bi bi-clock-fill text_red me-2" />
                                </span>
                                Giờ mở cửa - đóng cửa: {garage.time_open} - {garage.time_close}
                            </p>
                            <p>
                                <span style={{ width: 40 }}>
                                    <i className="fa fa-phone-alt text_red me-2" />
                                </span>
                                {garage.phone}
                            </p>
                        </div>
                    </div>
                    <div
                        className="col-lg-6 col-md-12 text-lg-end wow slideInRight"
                        data-wow-delay="0.1s"
                    >
                        <div className="d-inline-block">
                            <button
                                type="button"
                                className="btn btn-outline-danger mt-1 me-2"
                                data-bs-toggle="modal"
                                onClick={openModal}
                            >
                                <i className="bi bi-calendar-plus-fill" />
                                Đặt lịch
                            </button>
                        </div>
                        <div className="btn btn-outline-danger mt-1 d-inline-block">
                            <i className="bi bi-flag-fill" />
                            Báo cáo
                        </div>
                        <Dialog header="Đặt lịch bảo dưỡng" visible={showModal} style={{ width: '50vw' }} onHide={() => {if (!showModal) return; setShowModal(false); }}>
                            <div className="modal-body ">
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
                                    <div className="mb-3 text-start">
                                        <label htmlFor="name" className="form-label">
                                            Họ tên: <span className="text_red">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            defaultValue=""
                                            value={user.name}
                                            onChange={handleInputChange(setUser)}
                                            aria-describedby="name-error"
                                        />
                                        <div id="name-error" className="form-text text_red" />
                                    </div>
                                    <div className="mb-3 text-start">
                                        <label htmlFor="phone" className="form-label">
                                            Số điện thoại: <span className="text_red">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="phone"
                                            name="phone"
                                            defaultValue=""
                                            value={user.phone}
                                            onChange={handleInputChange(setUser)}
                                            aria-describedby="phone-error"
                                        />
                                        <div id="phone-error" className="form-text text_red" />
                                    </div>
                                    <div className="mb-3 text-start">
                                        <label htmlFor="email" className="form-label">
                                            Email: <span className="text_red">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            defaultValue=""
                                            value={user.email}
                                            onChange={handleInputChange(setUser)}
                                            aria-describedby="email-error"
                                        />
                                        <div id="email-error" className="form-text text_red" />
                                    </div>
                                    <div className="mb-3 text-start">
                                        <label className="form-label">
                                            Chọn xe của bạn: <span className="text_red me-3">*</span>
                                            <span
                                                className="text_red"
                                                id="selected_car"
                                                style={{ cursor: "pointer" }}
                                            >
                                            </span>
                                        </label>
                                        <div className="my_car">
                                            <select
                                                className="form-select mt-1"
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
                                            <div id="mycar-error" className="form-text text_red" />
                                        </div>
                                        <div className="new_car d-none">
                                            <div className="mb-3 text-start">
                                                <label htmlFor="brand_all" className="form-label">
                                                    Hãng xe: <span className="text_red me-3">*</span>
                                                </label>
                                                <select
                                                    className="form-select"
                                                    name="brand_all"
                                                    id="brand_all"
                                                    aria-label=""
                                                >
                                                    <option>
                                                        
                                                    </option>
                                                </select>
                                                <div id="brand-error" className="form-text text_red" />
                                            </div>
                                            <div className="mb-3 text-start">
                                                <label htmlFor="name_car" className="form-label">
                                                    Tên xe: <span className="text_red me-3">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name_car"
                                                    defaultValue="null"
                                                    name="name_car"
                                                />
                                                <div
                                                    id="namecar-error"
                                                    className="form-text text_red"
                                                />
                                            </div>
                                            <div className="mb-3 text-start">
                                                <label htmlFor="license" className="form-label">
                                                    Biển số xe: <span className="text_red me-3">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="license"
                                                    defaultValue="null"
                                                    name="license"
                                                />
                                                <div
                                                    id="license-error"
                                                    className="form-text text_red"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3 text-start">
                                        <label htmlFor="service" className="form-label">
                                            Dịch vụ: <span className="text_red">*</span>
                                        </label>
                                        <select
                                            id="choices-multiple-remove-button-service"
                                            className="form-select"
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
                                        <div id="service-error" className="form-text text_red" />
                                    </div>
                                    <div className="mb-3 text-start">
                                        <div className="row">
                                            <div className="col-6">
                                                <label htmlFor="time" className="form-label">
                                                    Giờ: <span className="text_red">*</span>
                                                </label>
                                                <input
                                                    type="time"
                                                    className="form-control"
                                                    id="time"
                                                    name="time"
                                                    value={user.time}
                                                    onChange={handleInputChange(setUser)}
                                                />
                                                <div id="time-error" className="form-text text_red" />
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="date" className="form-label">
                                                    Ngày: <span className="text_red">*</span>
                                                </label>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    id="date"
                                                    name="date"
                                                    min=""
                                                    max="30-12-2222"
                                                    value={user.date}
                                                    onChange={handleInputChange(setUser)}
                                                />
                                                <div id="date-error" className="form-text text_red" />
                                            </div>
                                        </div>
                                        {error && <div className="text_red">{error}</div>}
                                    </div>
                                    <div className="mb-3 d-flex align-items-center justify-content-center">
                                        <button className="btn btn-primary" type="submit">
                                            Đặt lịch
                                        </button>
                                    </div>
                                    {/* <div className="text-center" style={{ height: 100 }}>
                                        <p className="mb-3 font-weight-bold text_red">
                                            Bạn cần đăng nhập để tiếp tục!
                                        </p>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <a href="{{ url('/login') }}" className="">
                                                <button className="btn btn-primary">Đăng nhập</button>
                                            </a>
                                        </div>
                                    </div> */}
                                    {/* Column */}
                                </form>
                            </div>

                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => setShowModal(false)}

                                >
                                    Close
                                </button>
                                <button type="button" className="btn btn-primary">
                                    Understood
                                </button>
                            </div>
                       </Dialog>
                    </div>
                </div>
            </div>
            {/* Header End */}
            {/* img Start */}
            <div
                className="container-xxl"
                style={{ backgroundColor: "#ffecec", padding: "20px 9px 0 18px" }}
            >
                <div className="row g-0">
                    <div className="col-lg-6 col-md-6 col-sm-12 d-none d-sm-none d-md-block mb-1">
                        <img
                            className="img-fluid"
                            style={{ width: "98%", height: "96%" }}
                            src=""
                            alt=""
                        />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 d-none d-sm-none d-md-block">
                        <div className="row g-0">
                            {/* foreach */}
                            <div className="col-lg-6 col-md-6 col-sm-6 mb-2">
                                <img
                                    className="img-fluid"
                                    style={{ width: "97%", height: "99%" }}
                                    src=""
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="d-md-none">
                        <div
                            id="carouselExample"
                            className="carousel slide"
                            style={{ paddingRight: 11, paddingBottom: 20 }}
                            data-ride="carousel"
                        >
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img
                                        style={{ width: "100%", height: 270 }}
                                        src=""
                                        className="d-block w-100"
                                        alt=""
                                    />
                                </div>
                                {/* foreach detail image */}
                                <div className="carousel-item">
                                    <img
                                        style={{ width: "100%", height: 270 }}
                                        className=""
                                        src=""
                                        alt=""
                                    />
                                </div>
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExample"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExample"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* img End */}
            {/* service */}
            <div className="container-xxl p-3 mt-3">
                <div className="container">
                    <div
                        className="mb-4 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 660 }}
                    >
                        <h3 className="mb-3">Dịch vụ cung cấp</h3>
                    </div>
                    <div className="row g-2">
                        {/* foreach service lít */}
                        {serviceGarage.map((service) => (
                            <div
                                key={service.id}
                                className="col-lg-6 col-sm-6 col-12 wow fadeInUp"
                                data-wow-delay="0.1s"
                            >
                                <a
                                    className="cat-item d-block bg-light text-center rounded p-3"
                                    href=""
                                >
                                    <div
                                        className="rounded p-3"
                                        style={{ border: "1px dashed rgba(185, 46, 0, 0.3)" }}
                                    >
                                        <div className="icon mb-3">
                                            <img
                                                className="img-fluid img-card1"
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
            <div className="container-xxl p-3 mt-3">
                <div className="container">
                    <div
                        className="mb-4 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 660 }}
                    >
                        <h3 className="mb-3">Hãng xe sửa chữa</h3>
                    </div>
                    <div className="row g-2">
                    {brands.map((brand) => (
                        <div
                        className="col-lg-2 col-md-3 col-sm-4 col-6 wow brand_1"
                        data-wow-delay="0.1s"
                        >
                        <div className="row g-0">
                            <div className="col-4">
                                <div className="icon">
                                    <img
                                        className="img-fluid"
                                        style={{ width: 40, height: 40 }}
                                        src=""
                                        alt="Icon"
                                    />
                                </div>
                            </div>
                            <div className="col-8 py-4">
                                <p className="">
                                    {brand.name}
                                </p>
                            </div>
                        </div>
                        </div>
                    ))}
                        {/* foreach brand list */}
                       
                    </div>
                    {/* <p
                        className="text_red text-center"
                        style={{ cursor: "pointer" }}
                        id="show_brand"
                    >
                        Xem thêm hãng xe
                    </p> */}
                </div>
            </div>
            {/* end brand */}
            {/* map */}
            <div className="container-xxl p-3 mt-3">
                <div className="container">
                    <div
                        className="mb-4 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 660 }}
                    >
                        <h3 className="mb-3">Thông tin liên hệ</h3>
                    </div>
                    <div className="row g-2">
                        <div
                            className="col-lg-7 col-sm-12 col-12 wow fadeInUp"
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
                            className="col-lg-5 col-sm-12 col-12 wow fadeInUp"
                            data-wow-delay="0.1s"
                            style={{ height: 300 }}
                        >
                            <div
                                className="cat-item d-block bg-light text-center rounded p-3"
                                style={{ height: "100% !important" }}
                            >
                                <div
                                    className="rounded p-3"
                                    style={{
                                        border: "1px dashed rgba(185, 46, 0, 0.3)",
                                        height: "100% !important"
                                    }}
                                >
                                    <div className="py-2">
                                        <h5 className="align-middle mb-4 mt-3"> Liên hệ </h5>
                                        <p className="align-middle">
                                            <span style={{ width: 40 }}>
                                                <i className="fa fa-phone-alt text_red me-2" />
                                            </span>
                                            phone garage
                                        </p>
                                        <p className="align-middle">
                                            <span style={{ width: 40 }}>
                                                <i className="bi bi-envelope-at-fill text_red me-2" />
                                            </span>
                                            email garage
                                        </p>
                                        <div className="align-middle mb-3">
                                            <form
                                                action=""
                                                className="d-inline-block"
                                                method="POST"
                                            >
                                                <input
                                                    type="hidden"
                                                    name="id_garage"
                                                    defaultValue=""
                                                />
                                                <button
                                                    className="btn bg-danger text-white"
                                                    type="submit"
                                                    style={{ backgroundColor: "transparent", border: "none" }}
                                                >
                                                    Nhắn tin cho garage
                                                </button>
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
            <div className="container-fluid p-3 mt-3">
                <div className="container">
                    <div
                        className="wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 660 }}
                    >
                        <h3 className="mb-4">Đánh giá</h3>
                    </div>
                    <div
                        className="row g-0 p-3 rounded"
                        style={{ backgroundColor: "#fff5f5" }}
                    >
                        <div className="col-lg-8">
                            <div className="card-1 p-3">
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="rating-box text-center">
                                            <h1 className="pt-4">
                                                ave star
                                            </h1>
                                            <p className="text_red">
                                                total rating đánh giá
                                            </p>
                                        </div>
                                        <div className="px-3 text-center">
                                            {/* check start of garage */}
                                            <span className="bi bi-star-half star-active mx-1" />
                                            <span className="bi bi-star star-active mx-1" />
                                            <span className="bi bi-star star-active mx-1" />
                                            <span className="bi bi-star star-active mx-1" />
                                            <span className="bi bi-star star-active mx-1" />

                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="rating-bar0 justify-content-center">
                                            <table className="text-left mx-auto">
                                                <tbody>
                                                    <tr>
                                                        <td className="rating-label">5 sao</td>
                                                        <td className="rating-bar">
                                                            <div className="bar-container">
                                                                <div
                                                                    className="bar-5"
                                                                    style={{
                                                                        width:
                                                                            '50%'
                                                                    }}
                                                                />
                                                            </div>
                                                        </td>
                                                        <td className="text-right">
                                                            count star 5
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="rating-label">4 sao</td>
                                                        <td className="rating-bar">
                                                            <div className="bar-container">
                                                                <div
                                                                    className="bar-4"
                                                                    style={{
                                                                        width:
                                                                            '40%'
                                                                    }}
                                                                />
                                                            </div>
                                                        </td>
                                                        <td className="text-right">
                                                            count star 4
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="rating-label">3 sao</td>
                                                        <td className="rating-bar">
                                                            <div className="bar-container">
                                                                <div
                                                                    className="bar-3"
                                                                    style={{
                                                                        width:
                                                                            '30%'
                                                                    }}
                                                                />
                                                            </div>
                                                        </td>
                                                        <td className="text-right">
                                                            count star 3
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="rating-label">2 sao</td>
                                                        <td className="rating-bar">
                                                            <div className="bar-container">
                                                                <div
                                                                    className="bar-2"
                                                                    style={{
                                                                        width:
                                                                            '20%'
                                                                    }}
                                                                />
                                                            </div>
                                                        </td>
                                                        <td className="text-right">
                                                            count star 2
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="rating-label">1 sao</td>
                                                        <td className="rating-bar">
                                                            <div className="bar-container">
                                                                <div
                                                                    className="bar-1"
                                                                    style={{
                                                                        width:
                                                                            '10%'
                                                                    }}
                                                                />
                                                            </div>
                                                        </td>
                                                        <td className="text-right">
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
                            className="col-lg-4 col-md-none"
                            style={{ backgroundColor: "#fff" }}
                        ></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <hr />
                            <div className="review-block">
                                {/* foreach rating comment */}
                                <div className="row">
                                    <div className="col-md-2 col-sm-3 col-6">
                                        <img
                                            src=""
                                            className="img-rounded"
                                        />
                                        <div className="review-block-name">
                                            user name
                                        </div>
                                        <div className="review-block-date">
                                            created at
                                        </div>
                                    </div>
                                    <div className="col-md-10 col-sm-9 col-6">
                                        <div className="review-block-rate">
                                            {/* star rating */}
                                            <i className="bi bi-star-fill text_red " />

                                        </div>
                                        <div className="review-block-title">
                                            Star sao
                                        </div>
                                        <div className="review-block-description">
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
            <div className="container-fluid p-3 mt-2">
                <div className="container">
                    <div
                        className="wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 660 }}
                    >
                        <h3 className="mb-4">Gợi ý garage</h3>
                    </div>
                    <div className="row g-3 mt-2">
                        {/* foreach recommend garage */}
                        <div
                            className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
                            data-wow-delay="0.1s"
                        >
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <a href="">
                                        <img
                                            className="img-fluid"
                                            style={{ width: "100%", height: "80%" }}
                                            src=""
                                            alt=""
                                        />
                                    </a>
                                    <div className="bg-white rounded-top text_red position-absolute start-0 bottom-0 mx-4 pt-1 px-2">
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
                                                className="text_red"
                                                type="submit"
                                                style={{
                                                    backgroundColor: "transparent",
                                                    border: "none",
                                                    width: 39
                                                }}
                                            >
                                                <i className="bi bi-heart font-weight-bold" />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="p-3 pb-0">
                                    <h5 className="text_red mb-3">$12,345</h5>
                                    <a
                                        className="d-block h5 mb-2"
                                        href=""
                                        style={{ height: 48 }}
                                    >
                                        name garage
                                    </a>
                                    <p
                                        className="mt-2 "
                                        style={{
                                            height: 48,
                                            overflow: "hidden",
                                            display: "-webkit-box",
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: "vertical"
                                        }}
                                    >
                                        <i className="fa fa-map-marker-alt text_red me-2" />
                                        address garage
                                    </p>
                                </div>
                                <div className="d-flex">
                                    <small className="flex-fill text-start mx-4 me-5">Đánh giá</small>
                                    <small className="flex-fill text-start pb-2 ms-5">
                                        total star
                                        <i className="bi bi-star-fill text_red " />

                                        count star
                                    </small>
                                </div>
                                <div className="d-flex border-top mt-2">
                                    <small className="flex-fill text-start border-end py-2 mx-4">
                                        <i className="far fa-calendar-plus text_red me-3" />
                                        <a href="" className="text_red">
                                            Đặt lịch ngay
                                        </a>
                                    </small>
                                    <small className="flex-fill text-start py-2">
                                        <i className="bi bi-chat-dots-fill text_red me-2 d-inline-block" />
                                        <form
                                            action=""
                                            className="d-inline-block"
                                            method="POST"
                                        >
                                            <input
                                                type="hidden"
                                                name="id_garage"
                                                defaultValue=""
                                            />
                                            <button
                                                className="text_red"
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
                    </div>
                </div>
            </div>
        </div>

    )

}

export default GarageDetail