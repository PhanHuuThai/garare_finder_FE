
import logo from '../../assets/images/logo-1.png'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom"
import config from '../../config';
import ReactLoading from 'react-loading';
import { useState } from 'react';
const Header = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const token = localStorage.getItem('token');
    const handleLogout = async (e) => {
        // e.preventDefault()
        try {
            setLoading(true)
            const response = await axios.get(`${config.apiBaseUrl}/auth/logout`, {
                headers: {
                    'Authorization': `Bearer ${token}` 
                }});
            console.log(response)
            if (response.data.status) {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                navigate('/')
            }
            setLoading(false)
        } catch (error) {
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
    return (
        <>
            <div className="client container-fluid bg-white p-0">
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
                <div className="client container-xxl nav-bar bg-transparent">
                    <nav className="client navbar navbar-expand-lg bg-white navbar-light py-0">
                        <Link to="/" className="client navbar-brand d-flex align-items-center text-center">
                            <div className="client icon p-2 me-2">
                                <img
                                    className="client img-fluid"
                                    src={require('../../assets/images/logo-1.png')}
                                    alt="Icon"
                                    style={{ width: 36, height: 42 }}
                                />
                            </div>
                            <h1 className="client m-0" style={{ color: "#ff1818 !important" }}>
                                GFINDER
                            </h1>
                        </Link>
                        <button
                            type="button"
                            className="client navbar-toggler"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse"
                        >
                            <span className="client navbar-toggler-icon" />
                        </button>
                        <div className="client collapse navbar-collapse" id="navbarCollapse">
                            <div className="client navbar-nav ms-auto">
                                <Link to="/" className="client nav-item nav-link active" id="home_page">
                                    Trang chủ
                                </Link>
                                <Link to="/garage-list" className="client nav-item nav-link" id="garage_all_page">
                                    Danh sách Garage
                                </Link>
                                <Link to="/service" className="client nav-item nav-link" id="service_page">
                                    Dịch vụ
                                </Link>
                                <Link to="/about" className="client nav-item nav-link" id="about_us_page">
                                    Về chúng tôi
                                </Link>
                                <Link to="/contact" className="client nav-item nav-link" id="contact_us_page">
                                    Liên hệ
                                </Link>
                            </div>
                            <div
                                className="client d-lg-flex d-none d-md-none d-sm-none mx-2 my-2"
                                style={{ backgroundColor: "#000", width: "1.5px", height: 39 }}
                            />
                            {token && 
                            <div className="client nav-item dropdown" style={{ minWidth: 100 }}>
                            
                                <a
                                    href="#"
                                    className="client nav-link dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                >
                                    Name
                                </a>
                                    <div className="client dropdown-menu rounded-0 m-0">
                                    <Link to="/profile" className="client dropdown-item">
                                        Thông tin cá nhân
                                    </Link>
                                    <Link className="client dropdown-item">
                                        <div action="" method="POST">
                                            <button className="client btn btn-primary" onClick={() => handleLogout()}>
                                                Đăng xuất
                                            </button>
                                        </div>
                                    </Link>
                            </div>
                            </div>
                            }

                            {!token && 
                            <Link
                            to="/login"
                            className="client btn btn-primary px-3 d-md-flex d-sm-flex d-flex d-lg-flex "
                        >
                            Đăng nhập
                        </Link>
                            }
                            
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
export default Header