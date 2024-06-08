import Search from "../../components/client/Search"


const GarageList = () => {
    return (
        <div className="container-xxl bg-white p-0">
            {/* Header Start */}
            <div className="container-fluid header bg-white p-0">
                <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                    <div className="col-md-6 p-5 mt-lg-5 mt-3">
                        <h1 className="display-5 animated fadeIn mb-4">Danh sách Garage</h1>
                        <nav aria-label="breadcrumb animated fadeIn">
                            <ol className="breadcrumb text-uppercase">
                                <li className="breadcrumb-item">
                                    <a href="">Trang chủ</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="#">Pages</a>
                                </li>
                                <li
                                    className="breadcrumb-item text-body active"
                                    aria-current="page"
                                >
                                    Danh sách garage
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <div className="col-md-6 animated fadeIn" style={{ height: 390 }}>
                        <img
                            className="imgHeaderPage"
                            style={{ height: "100% !important", width: "100% !important" }}
                            src="https://danangaz.com/wp-content/uploads/2019/02/sua-chua-o-to-da-nang-04-min.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            {/* Header End */}
            {/* Search Start */}
            <Search />

            {/* Search End */}
            {/* Property List Start */}
            <div
                className="container-xxl py-4"
                id="garage_list"
                style={{ minHeight: 720 }}
            >
                <div className="container">
                    <div className="row g-0 gx-5 align-items-end">
                        <div className="col-lg-12">
                            <div
                                className="text-center mx-auto mb-5 wow slideInLeft"
                                data-wow-delay="0.1s"
                            >
                                <h1 className="mb-3">Danh sách garage</h1>
                                <p>
                                    Danh sách Garage đề xuất sau đây có thể bạn sẽ cần, hãy tiếp tục
                                    tìm kiếm nếu chưa phù hợp!.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center d-none" id="spin">
                        <div
                            className="spinner-grow text-danger me-2"
                            style={{ height: 20, width: 20 }}
                            role="status"
                        >
                            <span className="sr-only">Loading...</span>
                        </div>
                        <div
                            className="spinner-grow text-danger me-2"
                            style={{ height: 20, width: 20 }}
                            role="status"
                        >
                            <span className="sr-only">Loading...</span>
                        </div>
                        <div
                            className="spinner-grow text-danger me-2"
                            style={{ height: 20, width: 20 }}
                            role="status"
                        >
                            <span className="sr-only">Loading...</span>
                        </div>
                        <div
                            className="spinner-grow text-danger me-2"
                            style={{ height: 20, width: 20 }}
                            role="status"
                        >
                            <span className="sr-only">Loading...</span>
                        </div>
                        <div
                            className="spinner-grow text-danger me-2"
                            style={{ height: 20, width: 20 }}
                            role="status"
                        >
                            <span className="sr-only">Loading...</span>
                        </div>
                        <div
                            className="spinner-grow text-danger"
                            style={{ height: 20, width: 20 }}
                            role="status"
                        >
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                    <div className="tab-content" id="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                <div
                                    className="col-lg-4 col-md-6 wow fadeInUp"
                                    data-wow-delay="0.1s"
                                >
                                    <div className="property-item rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <a href="">
                                                <img
                                                    className="img-fluid"
                                                    src=""
                                                    alt=""
                                                />
                                            </a>
                                            <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                <i className="bi bi-heart font-weight-bold" />
                                            </div>
                                            <div className="bg-white rounded-top text_red position-absolute start-0 bottom-0 mx-4 pt-1 px-2">
                                                <form
                                                    id="add_favourite"
                                                    action=""
                                                    method="POST"
                                                >
                                                    <input
                                                        type="hidden"
                                                        name="id_garage"
                                                        defaultValue=""
                                                    />
                                                    <button
                                                        className="text_red"
                                                        type="submit"
                                                        style={{
                                                            backgroundColor: "transparent",
                                                            border: "none",
                                                            width: 39
                                                        }}
                                                    >
                                                        <i className="bi bi-heart font-weight-bold" />
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text_red mb-3">$12,345</h5>
                                            <a className="d-block h5 mb-2" href="" style={{ height: 48 }}>
                                            </a>
                                            <p
                                                className="mt-2 "
                                                style={{
                                                    height: 48,
                                                    overflow: "hidden",
                                                    display: "-webkit-box",
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: "vertical"
                                                }}
                                            >
                                                <i className="fa fa-map-marker-alt text_red me-2" />
                                            </p>
                                        </div>
                                        <div className="d-flex">
                                            <small className="flex-fill text-start mx-4 me-5">
                                                Đánh giá
                                            </small>
                                            <small className="flex-fill text-start pb-2 ms-5">
                                                <i className="bi bi-star-fill text_red " />
                                                <i className="bi bi-star text_red " />
                                            </small>
                                        </div>
                                        <div className="d-flex border-top mt-2">
                                            <small className="flex-fill text-start border-end py-2 mx-4">
                                                <i className="far fa-calendar-plus text_red me-3" />
                                                <a href="" className="text_red">
                                                    Đặt lịch ngay
                                                </a>
                                            </small>
                                            <small className="flex-fill text-start py-2">
                                                <i className="bi bi-chat-dots-fill text_red me-2 d-inline-block" />
                                                <form
                                                    action=""
                                                    className="d-inline-block"
                                                    method="POST"
                                                >
                                                    <input
                                                        type="hidden"
                                                        name="id_garage"
                                                        defaultValue=""
                                                    />
                                                    <button
                                                        className="text_red"
                                                        type="submit"
                                                        style={{
                                                            backgroundColor: "transparent",
                                                            border: "none"
                                                        }}
                                                    >
                                                        Nhắn tin
                                                    </button>
                                                </form>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-12 text-center wow fadeInUp"
                                    data-wow-delay="0.1s"
                                >
                                    <div className="d-flex justify-content-center my-4">
                                        <div className="Page navigation example">
                                            <div className="pagination">
                                                {/* $garage-&gt;links('pagination::bootstrap-4') */}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default GarageList