import { Link } from "react-router-dom"
import Search from "../../components/client/Search"

const About = () => {
    return (
        <div className="container-xxl bg-white p-0">
            {/* Header Start */}
            <div className="container-fluid header bg-white p-0">
                <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                    <div className="col-md-6 p-5 mt-lg-5 mt-3">
                        <h1 className="display-5 animated fadeIn mb-4 text-start">Về chúng tôi</h1>
                        <nav aria-label="breadcrumb animated fadeIn">
                            <ol className="breadcrumb text-uppercase">
                                <li className="breadcrumb-item">
                                    <Link href="{{ url('/') }}">Trang chủ</Link>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="#">Pages</a>
                                </li>
                                <li
                                    className="breadcrumb-item text-body active"
                                    aria-current="page"
                                >
                                    Liên hệ
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <div className="col-md-6 animated fadeIn" style={{ height: "390px" }}>
                        <img
                            className="imgHeaderPage"
                            style={{ height: "100% !important", width: "100% !important" }}
                            src={require('../../assets/images/about_us_2.webp')}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            {/* Header End */}
            {/* Search Start */}
            <Search />
            {/* Search End */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-start">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="about-img position-relative overflow-hidden p-5 pe-0">
                                <img
                                    className="img-fluid w-100"
                                    src={require('../../assets/images/about-us.jpg')}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn text-start" data-wow-delay="0.5s">
                            <h1 className="mb-4">Về chúng tôi</h1>
                            <p className="mb-4">
                                Chúng tôi cung cấp ứng dụng đặt lịch bão dưỡng cho phương tiện của
                                bạn. Chúng tôi giúp kết nối garage với người dùng có nhu cầu tìm
                                hiểu và đặt lịch đối với garage.
                            </p>
                            <p>
                                <i className="fa fa-check text_red me-3" />
                                Đặt lịch 24/7
                            </p>
                            <p>
                                <i className="fa fa-check text_red me-3" />
                                Không cần thanh toán trước
                            </p>
                            <p>
                                <i className="fa fa-check text_red me-3" />
                                Đánh giá trung thực
                            </p>
                            <a className="btn btn-primary py-3 px-5 mt-3" href="">
                                Thêm
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
            {/* Call to Action Start */}
            <div className="container-xxl py-4">
                <div className="container">
                    <div className="bg-light rounded p-3">
                        <div
                            className="bg-white rounded p-4"
                            style={{ border: "1px dashed rgba(185, 46, 0, 0.3)" }}
                        >
                            <div className="row g-5 align-items-center">
                                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                    <img
                                        className="img-fluid rounded w-100"
                                        src={require('../../assets/images/contact.webp')}
                                        alt=""
                                    />
                                </div>
                                <div className="col-lg-6 wow fadeIn text-start" data-wow-delay="0.5s">
                                    <div className="mb-4">
                                        <h1 className="mb-3">Liên hệ chúng tôi</h1>
                                        <p>
                                            Bạn là chủ garage cần hỗ trợ trong quá trình đăng ký hay bạn
                                            là người dùng cần hỗ trợ, hãy liên hệ với chúng tôi theo các
                                            cách bên dưới!
                                        </p>
                                    </div>
                                    <a href="#" className="btn btn-primary py-3 px-4 me-2">
                                        <i className="fa fa-phone-alt me-2" />
                                        0914243600
                                    </a>
                                    <a
                                        href=""
                                        className="btn btn-dark py-3 px-4"
                                    >
                                        <i className="bi bi-r-square-fill me-2" />
                                        Đăng ký Garage
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default About