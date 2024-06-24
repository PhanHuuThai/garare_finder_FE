import axios from 'axios';
import { Link, useNavigate } from "react-router-dom"
import config from '../../config';
import ReactLoading from 'react-loading';
import { useState } from 'react';

const LeftSlide = () => {
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
        <aside className="left-sidebar" data-sidebarbg="skin6">
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
            {/* Sidebar scroll*/}
            <div className="scroll-sidebar">
                {/* Sidebar navigation*/}
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">

                        <li className="sidebar-item">
                            <Link
                                className="sidebar-link waves-effect waves-dark sidebar-link"
                                aria-expanded="false"
                                to="/garage/garage"
                            >
                                <i className="fa fa-user" aria-hidden="true" />
                                <span className="hide-menu">Thông tin Garage</span>
                            </Link>
                        </li>
                        {/* <li className="sidebar-item">
                            <Link
                                className="sidebar-link waves-effect waves-dark sidebar-link"
                                to="/garage/image-detail"
                                aria-expanded="false"
                            >
                                <i className="fas fa-images" aria-hidden="true" />
                                <span className="hide-menu">Thư viện ảnh</span>
                            </Link>
                        </li> */}
                        <li className="sidebar-item">
                            <Link
                                className="sidebar-link waves-effect waves-dark sidebar-link"
                                to="/garage/services"
                                aria-expanded="false"
                            >
                                <i className="fas fa-list-alt" aria-hidden="true" />
                                <span className="hide-menu">Dịch vụ</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link
                                className="sidebar-link waves-effect waves-dark sidebar-link"
                                to="/garage/brands"
                            >
                                <i className="fas fa-car" aria-hidden="true" />
                                <span className="hide-menu">Hãng xe</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link
                                className="sidebar-link waves-effect waves-dark sidebar-link"
                                to="/garage/orders"
                                aria-expanded="false"
                            >
                                <i className="fas fa-calendar-alt" aria-hidden="true" />

                                <div
                                    style={{
                                        height: 24,
                                        width: 48,
                                        borderRadius: "60%",
                                        backgroundColor: "#ff1818"
                                    }}
                                    className="text-center me-1 d-flex align-items-center justify-content-center menu_new"
                                    id="menu_new"
                                >
                                    <span
                                        className="text-white font-weight-bold"
                                        style={{ fontSize: 15, fontWeight: 700 }}
                                    >
                                        new
                                    </span>
                                </div>
                                <span className="hide-menu menu_book" id="menu_book">
                                    Lịch đặt
                                </span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link
                                className="sidebar-link waves-effect waves-dark sidebar-link"
                                to="/garage/order-history"
                                aria-expanded="false"
                            >
                                <i className="fas fa-calendar-alt" aria-hidden="true" />
                                <span className="hide-menu">Lịch sử lịch đặt</span>
                            </Link>
                        </li>
                        {/* <li className="sidebar-item">
                            <Link
                                className="sidebar-link waves-effect waves-dark sidebar-link"
                                to="/garage/staffs"
                                aria-expanded="false"
                            >
                                <i className="fas fa-users" aria-hidden="true" />
                                <span className="hide-menu">Nhân viên</span>
                            </Link>
                        </li> */}
                        <li className="sidebar-item">
                            <Link
                                className="sidebar-link waves-effect waves-dark sidebar-link"
                                to="/garage/staff-info"
                                aria-expanded="false"
                            >
                                <i className="fas fa-car" aria-hidden="true" />
                                <span className="hide-menu">Thông tin cá nhân</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link
                                className="sidebar-link waves-effect waves-dark sidebar-link"
                                to="/garage/staff-change-pass"
                                aria-expanded="false"
                            >
                                <i className="fas fa-lock" aria-hidden="true" />
                                <span className="hide-menu">Thay đổi mật khẩu</span>
                            </Link>
                        </li>
{/* 
                        <li className="sidebar-item">
                            <a
                                className="sidebar-link waves-effect waves-dark sidebar-link"
                                href="{{ url('/garage/' . request()->id . '/message') }}"
                                aria-expanded="false"
                            >
                                <i className="fab fa-facebook-messenger" aria-hidden="true" />
                                <span className="hide-menu">Tin nhắn</span>
                            </a>
                        </li> */}
                        <li className="sidebar-item">
                            <a
                                className="sidebar-link waves-effect waves-dark sidebar-link"
                                href="#"
                                aria-expanded="false"
                            >
                                <i className="fa fa-info-circle" aria-hidden="true" />
                                <span className="hide-menu">
                                    <div>
                                        <button className="bg-white border-0"
                                            onClick={() => handleLogout()}
                                        >
                                            Đăng xuất
                                        </button>
                                    </div>
                                </span>
                            </a>
                        </li>

                    </ul>
                </nav>
                {/* End Sidebar navigation */}
            </div>
            {/* End Sidebar scroll*/}
        </aside>

    )
}

export default LeftSlide