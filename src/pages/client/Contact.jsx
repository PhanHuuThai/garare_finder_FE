import { useEffect } from "react"
import { Link } from "react-router-dom"
import Search from "../../components/client/Search"

const Contact = () => {
    return (
        <div className="container-xxl bg-white p-0">
            {/* Header Start */}
            <div className="container-fluid header bg-white p-0">
                <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                    <div className="col-md-6 p-5 mt-lg-5 mt-3">
                        <h1 className="display-5 animated fadeIn mb-4">Liên hệ chúng tôi</h1>
                        <nav aria-label="breadcrumb animated fadeIn">
                            <ol className="breadcrumb text-uppercase">
                                <li className="breadcrumb-item">
                                    <Link to="/">Trang chủ</Link>
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
            <div className="container-xxl py-4">
                <div className="container">
                    <div
                        className="text-center mx-auto mb-5 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 600 }}
                    >
                        <h1 className="mb-3">Liên hệ chúng tôi</h1>
                        <p>
                            Bạn là chủ garage cần hỗ trợ trong quá trình đăng ký hay bạn là người
                            dùng cần hỗ trợ, hãy liên hệ với chúng tôi theo các cách bên dưới!
                        </p>
                    </div>
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="row gy-4">
                                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                                    <div className="bg-light rounded p-3">
                                        <div
                                            className="d-flex align-items-center bg-white rounded p-3"
                                            style={{ border: "1px dashed rgba(185, 46, 0, 0.3)" }}
                                        >
                                            <div className="icon me-3" style={{ width: 45, height: 45 }}>
                                                <i className="fa fa-map-marker-alt text-danger" />
                                            </div>
                                            <span>654 Trường Chinh, Đà Nẵng, Việt Nam</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                                    <div className="bg-light rounded p-3">
                                        <div
                                            className="d-flex align-items-center bg-white rounded p-3"
                                            style={{ border: "1px dashed rgba(185, 46, 0, 0.3)" }}
                                        >
                                            <div className="icon me-3" style={{ width: 45, height: 45 }}>
                                                <i className="fa fa-envelope-open text-danger" />
                                            </div>
                                            <span>gfinder@gmail.com</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                                    <div className="bg-light rounded p-3">
                                        <div
                                            className="d-flex align-items-center bg-white rounded p-3"
                                            style={{ border: "1px dashed rgba(185, 46, 0, 0.3)" }}
                                        >
                                            <div className="icon me-3" style={{ width: 45, height: 45 }}>
                                                <i className="fa fa-phone-alt text-danger" />
                                            </div>
                                            <span>0914243600</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
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
                        <div className="col-md-6">
                            <div className="wow fadeInUp" data-wow-delay="0.5s">
                                <p className="mb-4">
                                    Bạn có thể đăng ký hỗ trợ với chúng tôi bằng cách sau, chúng tôi
                                    sẽ liên hệ lại với bạn!
                                </p>
                                <form action="" method="POST">
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating mb-2">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    name="name"
                                                    placeholder="Tên"
                                                />
                                                <label htmlFor="name">Tên</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating mb-2">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    name="email"
                                                    placeholder="Email"
                                                />
                                                <label htmlFor="email">Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating mb-2">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="phone"
                                                    placeholder="Số điện thoại"
                                                    name="phone"
                                                />
                                                <label htmlFor="phone">Số điện thoại</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating mb-2">
                                                <textarea
                                                    className="form-control"
                                                    placeholder="Tin nhắn"
                                                    id="message"
                                                    style={{ height: 150 }}
                                                    name="message"
                                                />
                                                <label htmlFor="message">Thông tin cần hỗ trợ</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">
                                                Gửi yêu cầu
                                            </button>
                                        </div>
                                    </div>
                                </form>
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