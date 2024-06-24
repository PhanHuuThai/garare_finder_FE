import { Link } from "react-router-dom"

const LeftSlide = () => {
    return (
        <aside className="left-sidebar" data-sidebarbg="skin6">
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
                        {/* <li className="sidebar-item">
                            <Link
                                className="sidebar-link waves-effect waves-dark sidebar-link"
                                to="/admin/garages"
                                aria-expanded="false"
                            >
                                <i className="fas fa-images" aria-hidden="true" />
                                <span className="hide-menu">Danh sách garage</span>
                            </Link>
                        </li> */}
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
                                to="/admin/register-garage"
                                aria-expanded="false"
                            >
                                <i className="fas fa-car" aria-hidden="true" />
                                <span className="hide-menu">Hãng xe</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link
                                className="sidebar-link waves-effect waves-dark sidebar-link"
                                to="/garage/order-history"
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
                                to="/garage/staff-change-pass"
                                aria-expanded="false"
                            >
                                <i className="fas fa-lock" aria-hidden="true" />
                                <span className="hide-menu">Thay đổi mật khẩu</span>
                            </Link>
                        </li>

                        <li className="sidebar-item">
                            <a
                                className="sidebar-link waves-effect waves-dark sidebar-link"
                                href="{{ url('/garage/' . request()->id . '/message') }}"
                                aria-expanded="false"
                            >
                                <i className="fab fa-facebook-messenger" aria-hidden="true" />
                                <span className="hide-menu">Tin nhắn</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a
                                className="sidebar-link waves-effect waves-dark sidebar-link"
                                href="#"
                                aria-expanded="false"
                            >
                                <i className="fa fa-info-circle" aria-hidden="true" />
                                <span className="hide-menu">
                                    <form action="{{ route('logout') }}" method="POST">
                                        <button className="bg-white border-0" type="submit">
                                            Đăng xuất
                                        </button>
                                    </form>
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