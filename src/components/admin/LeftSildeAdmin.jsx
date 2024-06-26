import axios from 'axios';
import { Link, useNavigate } from "react-router-dom"
import config from '../../config';
import ReactLoading from 'react-loading';
import { useState } from 'react';

const LeftSlideAD = () => {
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
                }
            });
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
                                to="/admin"
                            >
                                <i className="fa fa-user" aria-hidden="true" />
                                <span className="hide-menu">Danh sách người dùng</span>
                            </Link>
                        </li>

                        <li className="sidebar-item">
                            <Link
                                className="sidebar-link waves-effect waves-dark sidebar-link"
                                to="/admin/services"
                                aria-expanded="false"
                            >
                                <i className="fas fa-list-alt" aria-hidden="true" />
                                <span className="hide-menu">Dịch vụ</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link
                                className="sidebar-link waves-effect waves-dark sidebar-link"
                                to="/admin/brands"
                            >
                                <i className="fas fa-car" aria-hidden="true" />
                                <span className="hide-menu">Hãng xe</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link
                                className="sidebar-link waves-effect waves-dark sidebar-link"
                                to="/admin/garages"
                                aria-expanded="false"
                            >
                                <i className="fas fa-images" aria-hidden="true" />
                                <span className="hide-menu">Danh sách garage</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link
                                className="sidebar-link waves-effect waves-dark sidebar-link"
                                to="/admin/register-garage"
                                aria-expanded="false"
                            >
                                <i class="fas fa-edit" aria-hidden="true"></i>
                                <span className="hide-menu">Đơn đăng ký garage</span>
                            </Link>
                        </li>
                        {/* <li className="sidebar-item">
                            <Link
                                className="sidebar-link waves-effect waves-dark sidebar-link"
                                to="/admin/helps"
                                aria-expanded="false"
                            >
                                <i class="fas fa-question" aria-hidden="true"></i>
                                <span className="hide-menu">Hỗ trợ</span>
                            </Link>
                        </li> */}
                        <li className="sidebar-item">
                            <Link
                                className="sidebar-link waves-effect waves-dark sidebar-link"
                                to="/admin/reports"
                                aria-expanded="false"
                            >
                                <i class="fas fa-flag" aria-hidden="true"></i>
                                <span className="hide-menu">Báo cáo</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link
                                className="sidebar-link waves-effect waves-dark sidebar-link"
                                to="/admin/helps"
                                aria-expanded="false"
                            >
                                <i className="fas fa-lock" aria-hidden="true" />
                                <span className="hide-menu">Hỗ trợ</span>
                            </Link>
                        </li>
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

export default LeftSlideAD