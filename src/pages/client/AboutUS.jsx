import { Link } from "react-router-dom"
import Search from "../../components/client/Search"

const About = () => {
    return (
        <div className="client client container-xxl bg-white p-0">
            {/* Header Start */}
            <div className="client container-fluid header bg-white p-0">
                <div className="client row g-0 align-items-center flex-column-reverse flex-md-row">
                    <div className="client col-md-6 p-5 mt-lg-5 mt-3">
                        <h1 className="client display-5 animated fadeIn mb-4 text-start">Về chúng tôi</h1>
                        <nav aria-label="breadcrumb animated fadeIn">
                            <ol className="client breadcrumb text-uppercase">
                                <li className="client breadcrumb-item">
                                    <Link href="{{ url('/') }}">Trang chủ</Link>
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
            <div className="client container-xxl py-5">
                <div className="client container">
                    <div className="client row g-5 align-items-start">
                        <div className="client col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="client about-img position-relative overflow-hidden p-5 pe-0">
                                <img
                                    className="client img-fluid w-100"
                                    src={require('../../assets/images/about-us.jpg')}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="client col-lg-6 wow fadeIn text-start" data-wow-delay="0.5s">
                            <h1 className="client mb-4">Về chúng tôi</h1>
                            <p className="client mb-4">
                                Chúng tôi cung cấp ứng dụng đặt lịch bão dưỡng cho phương tiện của
                                bạn. Chúng tôi giúp kết nối garage với người dùng có nhu cầu tìm
                                hiểu và đặt lịch đối với garage.
                            </p>
                            <p>
                                <i className="client fa fa-check text_red me-3" />
                                Đặt lịch 24/7
                            </p>
                            <p>
                                <i className="client fa fa-check text_red me-3" />
                                Không cần thanh toán trước
                            </p>
                            <p>
                                <i className="client fa fa-check text_red me-3" />
                                Đánh giá trung thực
                            </p>
                            <a className="client btn btn-primary py-3 px-5 mt-3" href="">
                                Thêm
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
            {/* Call to Action Start */}
            <div className="client container-xxl py-4">
                <div className="client container">
                    <div className="client bg-light rounded p-3">
                        <div
                            className="client bg-white rounded p-4"
                            style={{ border: "1px dashed rgba(185, 46, 0, 0.3)" }}
                        >
                            <div className="client row g-5 align-items-center">
                                <div className="client col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                    <img
                                        className="client img-fluid rounded w-100"
                                        src={require('../../assets/images/contact.webp')}
                                        alt=""
                                    />
                                </div>
                                <div className="client col-lg-6 wow fadeIn text-start" data-wow-delay="0.5s">
                                    <div className="client mb-4">
                                        <h1 className="client mb-3">Liên hệ chúng tôi</h1>
                                        <p>
                                            Bạn là chủ garage cần hỗ trợ trong quá trình đăng ký hay bạn
                                            là người dùng cần hỗ trợ, hãy liên hệ với chúng tôi theo các
                                            cách bên dưới!
                                        </p>
                                    </div>
                                    <a href="#" className="client btn btn-primary py-3 px-4 me-2">
                                        <i className="client fa fa-phone-alt me-2" />
                                        0914243600
                                    </a>
                                    <a
                                        href=""
                                        className="client btn btn-dark py-3 px-4"
                                    >
                                        <i className="client bi bi-r-square-fill me-2" />
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