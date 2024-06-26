
const Footer = () => {
    return (
        <div
            className="client container-fluid bg-white text-dark-50 footer pt-5 mt-5 wow fadeIn"
            data-wow-delay="0.1s"
        >
            <div className="client container py-5">
                <div className="client row g-5">
                    <div className="client col-lg-2 col-md-6">
                        <h5 className="client text-dark mb-4">GFINDER</h5>
                        <a className="client btn btn-link text-dark-50" href="">
                            Trang chủ
                        </a>
                        <a className="client btn btn-link text-dark-50" href="">
                            Danh sách garage
                        </a>
                        <a className="client btn btn-link text-dark-50" href="">
                            Về chúng tôi
                        </a>
                        <a className="client btn btn-link text-dark-50" href="">
                            Liên hệ
                        </a>
                        <a className="client btn btn-link text-dark-50" href="">
                            Dịch vụ
                        </a>
                    </div>
                    <div className="client col-lg-3 col-md-6">
                        <h5 className="client text-dark mb-4">Liên lạc</h5>
                        <p className="client mb-2" style={{ textAlign: 'left' }}>
                            <i className="client fa fa-map-marker-alt me-3" />
                            654 Trường Chinh, Đà Nẵng, Việt Nam
                        </p>
                        <p className="client mb-2" style={{textAlign: 'left'}}>
                            <i className="client fa fa-phone-alt me-3" />
                            0914243600
                        </p>
                        <p className="client mb-2" style={{textAlign: 'left'}}>
                            <i className="client fa fa-envelope me-3" />
                            gfinder@gmail.com
                        </p>
                        <div className="client d-flex pt-2">
                            <a className="client btn btn-outline-light btn-social" href="">
                                <i className="client fab fa-twitter" />
                            </a>
                            <a className="client btn btn-outline-light btn-social" href="">
                                <i className="client fab fa-facebook-f" />
                            </a>
                            <a className="client btn btn-outline-light btn-social" href="">
                                <i className="client fab fa-youtube" />
                            </a>
                            <a className="client btn btn-outline-light btn-social" href="">
                                <i className="client fab fa-linkedin-in" />
                            </a>
                        </div>
                    </div>
                    <div className="client col-lg-4 col-md-6">
                        <h5 className="client text-dark mb-4">Địa chỉ liên lạc</h5>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15338.160599593639!2d108.1728051935431!3d16.037419786530617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219744012a2d9%3A0xe9f03198e47b9151!2zNjU0IFRyxrDhu51uZyBDaGluaCwgSG_DoCBQaMOhdCwgQ-G6qW0gTOG7hywgxJDDoCBO4bq1bmcsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1700638856808!5m2!1svi!2s"
                            width="100%"
                            height=""
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    <div className="client col-lg-3 col-md-6">
                        <h5 className="client text-dark mb-4">Nhận tin mới</h5>
                        <p>
                            Đăng ký để nhận tin tức mới nhất và ưu đãi &amp; ưu đãi độc quyền của
                            GFinder.
                        </p>
                        <div className="client position-relative mx-auto" style={{ maxWidth: 400 }}>
                            <input
                                className="client form-control w-100 py-3 ps-4 pe-5"
                                style={{ backgroundColor: "#fff3f3" }}
                                type="text"
                                placeholder="Email của bạn"
                            />
                            <button
                                type="button"
                                className="client btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                            >
                                Đăng ký
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="client container">
                <div className="client copyright">
                    <div className="client row">
                        <div className="client col-md-6 text-center text-md-start mb-3 mb-md-0">
                            © Bản quyền, GFINDER 2023.
                        </div>
                        <div className="client col-md-6 text-center text-md-end">
                            <div className="client footer-menu">
                                <a href="">Home</a>
                                <a href="">Cookies</a>
                                <a href="">Help</a>
                                <a href="">FQAs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}
            {/* Back to Top */}
            <a href="#" className="client btn btn-lg btn-primary btn-lg-square back-to-top">
                <i className="client bi bi-arrow-up" />
            </a>
        </div>

    )
}

export default Footer