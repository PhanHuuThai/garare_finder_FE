import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Search from "../../components/client/Search"
import axios from "axios";
import config from "../../config";
import ReactLoading from 'react-loading';

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [help, setHelp] = useState({
        email: '',
        name: '',
        phone: '',
        message: '',
    });

    const handleInputChange = (setter) => (e) => {
        const { name, value } = e.target;
        setter(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateForm = () => {
        return help.name && help.phone && help.email && help.message;
      };

      const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };
    
    const validatePhone = (phone) => {
        const regex = /^[0-9]{10,11}$/;
        return regex.test(phone);
    };


    const handleHelp = async (e) => {
        // e.preventDefault();
        console.log("aaa")
        if (!validateForm()) {
            setError('Bạn cần nhập đầy đủ thông tin');
            return;
        }

        if (!validateEmail(help.email)) {
            setError('Email không đúng định dạng');
            return;
        }
    
        if (!validatePhone(help.phone)) {
            setError('Số điện thoại không đúng định dạng');
            return;
        }       

        setLoading(true);
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(`${config.apiBaseUrl}/client/help`, help, {
                headers: {
                    'Authorization': `Bearer ${token}` 
                }
            });
            if(response.data.success) {
                alert("đăng ký hỗ trợ thành công")
                setHelp({
                    email: '',
                    name: '',
                    phone: '',
                    message: '',
                })
                setError('')
            } else {
                setError(response.data.message)
            }
            setLoading(false)
        } catch (error) {
          setError(error.message);
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

    return (
        <div className="client container-xxl bg-white p-0">
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
            <div className="client container-fluid header bg-white p-0">
                <div className="client row g-0 align-items-center flex-column-reverse flex-md-row">
                    <div className="client col-md-6 p-5 mt-lg-5 mt-3">
                        <h1 className="client display-5 animated fadeIn mb-4 text-start">Liên hệ chúng tôi</h1>
                        <nav aria-label="breadcrumb animated fadeIn">
                            <ol className="client breadcrumb text-uppercase">
                                <li className="client breadcrumb-item">
                                    <Link to="/">Trang chủ</Link>
                                </li>

                                <li className="client breadcrumb-item">
                                    <a href="#">Pages</a>
                                </li>
                                <li
                                    className="client breadcrumb-item text-body active"
                                    aria-current="page"
                                >
                                    Liên hệ
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <div className="client col-md-6 animated fadeIn" style={{ height: "390px" }}>
                        <img
                            className="client imgHeaderPage"
                            src={require('../../assets/images/contact.webp')}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            {/* Header End */}
            {/* Search Start */}
            <Search />
            {/* Search End */}
            {/* Contact Start */}
            <div className="client container-xxl py-4">
                <div className="client container">
                    <div
                        className="client text-center mx-auto mb-5 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 600 }}
                    >
                        <h1 className="client mb-3">Liên hệ chúng tôi</h1>
                        <p>
                            Bạn là chủ garage cần hỗ trợ trong quá trình đăng ký hay bạn là người
                            dùng cần hỗ trợ, hãy liên hệ với chúng tôi theo các cách bên dưới!
                        </p>
                    </div>
                    <div className="client row g-4">
                        <div className="client col-12">
                            <div className="client row gy-4">
                                <div className="client col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                                    <div className="client bg-light rounded p-3">
                                        <div
                                            className="client d-flex align-items-center bg-white rounded p-3"
                                            style={{ border: "1px dashed rgba(185, 46, 0, 0.3)" }}
                                        >
                                            <div className="client icon me-3" style={{ width: 45, height: 45 }}>
                                                <i className="client fa fa-map-marker-alt text-danger" />
                                            </div>
                                            <span>654 Trường Chinh, Đà Nẵng, Việt Nam</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="client col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                                    <div className="client bg-light rounded p-3">
                                        <div
                                            className="client d-flex align-items-center bg-white rounded p-3"
                                            style={{ border: "1px dashed rgba(185, 46, 0, 0.3)" }}
                                        >
                                            <div className="client icon me-3" style={{ width: 45, height: 45 }}>
                                                <i className="client fa fa-envelope-open text-danger" />
                                            </div>
                                            <span>gfinder@gmail.com</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="client col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                                    <div className="client bg-light rounded p-3">
                                        <div
                                            className="client d-flex align-items-center bg-white rounded p-3"
                                            style={{ border: "1px dashed rgba(185, 46, 0, 0.3)" }}
                                        >
                                            <div className="client icon me-3" style={{ width: 45, height: 45 }}>
                                                <i className="client fa fa-phone-alt text-danger" />
                                            </div>
                                            <span>0914243600</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="client col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <iframe
                                style={{ width: "100%", height: "100%" }}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15338.160599593639!2d108.1728051935431!3d16.037419786530617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219744012a2d9%3A0xe9f03198e47b9151!2zNjU0IFRyxrDhu51uZyBDaGluaCwgSG_DoCBQaMOhdCwgQ-G6qW0gTOG7hywgxJDDoCBO4bq1bmcsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1700638856808!5m2!1svi!2s"
                                width="100%"
                                height=""
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                        <div className="client col-md-6">
                            <div className="client wow fadeInUp" data-wow-delay="0.5s">
                                <p className="client mb-4">
                                    Bạn có thể đăng ký hỗ trợ với chúng tôi bằng cách sau, chúng tôi
                                    sẽ liên hệ lại với bạn!
                                </p>
                                <div>
                                    <div className="client row g-3">
                                        <div className="client col-md-6">
                                            <div className="client form-floating mb-2">
                                                <input
                                                    type="text"
                                                    className="client form-control"
                                                    id="name"
                                                    name="name"
                                                    placeholder="Tên"
                                                    value={help.name}
                                                    onChange={handleInputChange(setHelp)}
                                                />
                                                <label htmlFor="name">Tên</label>
                                            </div>
                                        </div>
                                        <div className="client col-md-6">
                                            <div className="client form-floating mb-2">
                                                <input
                                                    type="email"
                                                    className="client form-control"
                                                    id="email"
                                                    name="email"
                                                    placeholder="Email"
                                                    value={help.email}
                                                    onChange={handleInputChange(setHelp)}
                                                />
                                                <label htmlFor="email">Email</label>
                                            </div>
                                        </div>
                                        <div className="client col-12">
                                            <div className="client form-floating mb-2">
                                                <input
                                                    type="text"
                                                    className="client form-control"
                                                    id="phone"
                                                    placeholder="Số điện thoại"
                                                    name="phone"
                                                    value={help.phone}
                                                    onChange={handleInputChange(setHelp)}
                                                />
                                                <label htmlFor="phone">Số điện thoại</label>
                                            </div>
                                        </div>
                                        <div className="client col-12">
                                            <div className="client form-floating mb-2">
                                                <textarea
                                                    className="client form-control"
                                                    placeholder="Tin nhắn"
                                                    id="message"
                                                    style={{ height: 150 }}
                                                    name="message"
                                                    value={help.message}
                                                    onChange={handleInputChange(setHelp)}
                                                />
                                                <label htmlFor="message">Thông tin cần hỗ trợ</label>
                                            </div>
                                        </div>
                                        {error && <div className="client text_red">{error}</div>}
                                        <div className="client col-12">
                                            <button className="client btn btn-primary w-100 py-3" 
                                                onClick={() => handleHelp()}
                                            >
                                                Gửi yêu cầu
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}
        </div>

    )
}

export default Contact