
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo-1.png'
const Header = () => {
    return (
        <>
            <div className="container-fluid bg-white p-0">
                <div className="container-xxl nav-bar bg-transparent">
                    <nav className="navbar navbar-expand-lg bg-white navbar-light py-0">
                        <Link to="/" className="navbar-brand d-flex align-items-center text-center">
                            <div className="icon p-2 me-2">
                                <img
                                    className="img-fluid"
                                    src={require('../../assets/images/logo-1.png')}
                                    alt="Icon"
                                    style={{ width: 36, height: 42 }}
                                />
                            </div>
                            <h1 className="m-0" style={{ color: "#ff1818 !important" }}>
                                GFINDER
                            </h1>
                        </Link>
                        <button
                            type="button"
                            className="navbar-toggler"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto">
                                <Link to="/" className="nav-item nav-link active" id="home_page">
                                    Trang chủ
                                </Link>
                                <Link to="/garage-list" className="nav-item nav-link" id="garage_all_page">
                                    Danh sách Garage
                                </Link>
                                <Link to="/service" className="nav-item nav-link" id="service_page">
                                    Dịch vụ
                                </Link>
                                <Link to="/about" className="nav-item nav-link" id="about_us_page">
                                    Về chúng tôi
                                </Link>
                                <Link to="/contact" className="nav-item nav-link" id="contact_us_page">
                                    Liên hệ
                                </Link>
                            </div>
                            <div
                                className="d-lg-flex d-none d-md-none d-sm-none mx-2 my-2"
                                style={{ backgroundColor: "#000", width: "1.5px", height: 39 }}
                            />
                            <div className="nav-item dropdown" style={{ minWidth: 100 }}>
                                <a
                                    href="#"
                                    className="nav-link dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                >
                                    Name
                                </a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <Link to="/profile" className="dropdown-item">
                                        Thông tin cá nhân
                                    </Link>
                                    <a href="{{ url('/list-garage') }}" className="dropdown-item">
                                        Garage của tôi
                                    </a>
                                    <a href="{{ url('/chat') }}" className="dropdown-item">
                                        Tin nhắn
                                    </a>
                                    <a href="404.html" className="dropdown-item">
                                        404 Error
                                    </a>
                                    <Link className="dropdown-item">
                                        <form action="" method="POST">
                                            <button className="btn btn-primary" type="submit">
                                                Đăng xuất
                                            </button>
                                        </form>
                                    </Link>
                                </div>
                            </div>
                            <Link
                                to="/login"
                                className="btn btn-primary px-3 d-md-flex d-sm-flex d-flex d-lg-flex "
                            >
                                Đăng nhập
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
export default Header