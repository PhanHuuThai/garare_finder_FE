const { Link } = require('react-router-dom')
const { default: Search } = require('../../components/client/Search')

const Service = () => {
    return (
        <div className="container-xxl bg-white p-0">
            {/* Header Start */}
            <div className="container-fluid header bg-white p-0">
                <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                    <div className="col-md-6 p-5 mt-lg-5 mt-3">
                        <h1 className="display-5 animated fadeIn mb-4 text-start">Dịch vụ</h1>
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
                                    Dịch vụ
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
                    <div
                        className="text-center mx-auto mb-5 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 660 }}
                    >
                        <h1 className="mb-3">Dịch vụ</h1>
                        <p>
                            Chúng tôi hiện có các dịch mà mọi chiếc xe đều cần đến mỗi khi cần tìm
                            garage.
                        </p>
                    </div>
                    <div className="row g-2">
                        <div
                            className="col-lg-6 col-sm-6 col-12 wow fadeInUp"
                            data-wow-delay="0.1s"
                        >
                            <a
                                className="cat-item d-block bg-light text-center rounded p-3"
                                href=""
                            >
                                <div
                                    className="rounded p-3"
                                    style={{ border: "1px dashed rgba(185, 46, 0, 0.3)" }}
                                >
                                    <div className="icon mb-3">
                                        <img
                                            className="img-fluid img-card1"
                                            src={require('../../assets/images/repair.webp')}
                                            alt="Icon"
                                        />
                                    </div>
                                    <h5>Sửa chữa</h5>
                                    <span>Dịch vụ sửa chữa ô tô là các thủ tục được thực hiện để sửa hoặc phục hồi xe đang gặp sự cố, hư hỏng về máy móc.</span>
                                </div>
                            </a>
                        </div>
                        <div
                            className="col-lg-6 col-sm-6 col-12 wow fadeInUp"
                            data-wow-delay="0.1s"
                        >
                            <a
                                className="cat-item d-block bg-light text-center rounded p-3"
                                href=""
                            >
                                <div
                                    className="rounded p-3"
                                    style={{ border: "1px dashed rgba(185, 46, 0, 0.3)" }}
                                >
                                    <div className="icon mb-3">
                                        <img
                                            className="img-fluid img-card1"
                                            src={require('../../assets/images/re-paint-fotor.png')}
                                            alt="Icon"
                                        />
                                    </div>
                                    <h5>Tân trang</h5>
                                    <span>Dịch vụ tân trang ô tô là một quy trình toàn diện nhằm phục hồi một chiếc xe cũ hoặc bị hư hỏng về tình trạng gần như nguyên bản.</span>
                                </div>
                            </a>
                        </div>
                        <div
                            className="col-lg-6 col-sm-6 col-12 wow fadeInUp"
                            data-wow-delay="0.1s"
                        >
                            <a
                                className="cat-item d-block bg-light text-center rounded p-3"
                                href=""
                            >
                                <div
                                    className="rounded p-3"
                                    style={{ border: "1px dashed rgba(185, 46, 0, 0.3)" }}
                                >
                                    <div className="icon mb-3">
                                        <img
                                            className="img-fluid img-card1"
                                            src={require('../../assets/images/maintenance.webp')}
                                            alt="Icon"
                                        />
                                    </div>
                                    <h5>Bảo dưỡng</h5>
                                    <span>Dịch vụ bảo dưỡng ô tô là các quy trình định kỳ giúp giữ cho xe hoạt động trơn tru và ngăn ngừa các vấn đề tiềm ẩn.</span>
                                </div>
                            </a>
                        </div>
                        <div
                            className="col-lg-6 col-sm-6 col-12 wow fadeInUp"
                            data-wow-delay="0.1s"
                        >
                            <a
                                className="cat-item d-block bg-light text-center rounded p-3"
                                href=""
                            >
                                <div
                                    className="rounded p-3"
                                    style={{ border: "1px dashed rgba(185, 46, 0, 0.3)" }}
                                >
                                    <div className="icon mb-3">
                                        <img
                                            className="img-fluid img-card1"
                                            src={require('../../assets/images/rescue.webp')}
                                            alt="Icon"
                                        />
                                    </div>
                                    <h5>Cứu hộ</h5>
                                    <span>Họ sẽ giúp khắc phục nhanh chóng các trường hợp xe gặp sự cố bất ngờ như hư xăm, hư khóa, bị ngập nước, hư ắc quy, bị tai nạn…</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service