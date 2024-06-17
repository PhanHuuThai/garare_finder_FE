import { useEffect } from "react";
import { useParams } from "react-router-dom";


const GarageDetail = () => {
    const { id } = useParams()
    useEffect(() => {
        console.log('id', id)
    }, [])
    return (
        <div className="client container-xxl bg-white p-0">
            {/* Header Start */}
            <div className="client container-fluid">
                <div className="client row g-0 gx-5 align-items-start p-3">
                    <div className="client col-lg-6 col-md-12">
                        <div
                            className="client text-start mx-auto mt-2 wow slideInLeft"
                            data-wow-delay="0.1s"
                        >
                            <h4 className="client mb-3">
                                Name garage
                            </h4>
                            <p>
                                <span style={{ width: 40 }}>
                                    <i className="client bi bi-geo-alt-fill text_red me-2" />
                                </span>
                                Garage address
                            </p>
                            <p>
                                <span style={{ width: 40 }}>
                                    <i className="client bi bi-clock-fill text_red me-2" />
                                </span>
                                Giờ mở cửa - đóng cửa: time_open - time_close
                            </p>
                            <p>
                                <span style={{ width: 40 }}>
                                    <i className="client fa fa-phone-alt text_red me-2" />
                                </span>
                                phone garage
                            </p>
                        </div>
                    </div>
                    <div
                        className="client col-lg-6 col-md-12 text-lg-end wow slideInRight"
                        data-wow-delay="0.1s"
                    >
                        <div className="client d-inline-block">
                            <button
                                type="button"
                                className="client btn btn-outline-danger mt-1 me-2"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"
                            >
                                <i className="client bi bi-calendar-plus-fill" />
                                Đặt lịch
                            </button>
                        </div>
                        <div className="client btn btn-outline-danger mt-1 d-inline-block">
                            <i className="client bi bi-flag-fill" />
                            Báo cáo
                        </div>
                        <div
                            className="client modal fade mt-2"
                            id="staticBackdrop"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabIndex={-1}
                            aria-labelledby="staticBackdropLabel"
                            aria-hidden="true"
                        >
                            <div className="client modal-dialog modal-md modal-dialog-centered">
                                <div className="client modal-content">
                                    <div className="client modal-header">
                                        <h5
                                            className="client modal-title text-center"
                                            id="staticBackdropLabel"
                                        >
                                            Đặt lịch bảo dưỡng
                                        </h5>
                                        <button
                                            type="button"
                                            className="client btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        />
                                    </div>
                                    <div className="client modal-body ">
                                        <form
                                            action=""
                                            method="POST"
                                            id="book_garage"
                                            encType="multipart/form-data"
                                        >
                                            {/* Column */}
                                            <input
                                                type="hidden"
                                                defaultValue={1}
                                                name="status"
                                                id="status"
                                            />
                                            <input
                                                type="hidden"
                                                defaultValue=""
                                                name="id_garage"
                                            />
                                            <div className="client mb-3 text-start">
                                                <label htmlFor="name" className="client form-label">
                                                    Họ tên: <span className="client text_red">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="client form-control"
                                                    id="name"
                                                    name="name"
                                                    defaultValue=""
                                                    aria-describedby="name-error"
                                                />
                                                <div id="name-error" className="client form-text text_red" />
                                            </div>
                                            <div className="client mb-3 text-start">
                                                <label htmlFor="phone" className="client form-label">
                                                    Số điện thoại: <span className="client text_red">*</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    className="client form-control"
                                                    id="phone"
                                                    name="phone"
                                                    defaultValue=""
                                                    aria-describedby="phone-error"
                                                />
                                                <div id="phone-error" className="client form-text text_red" />
                                            </div>
                                            <div className="client mb-3 text-start">
                                                <label htmlFor="email" className="client form-label">
                                                    Email: <span className="client text_red">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    className="client form-control"
                                                    id="email"
                                                    name="email"
                                                    defaultValue=""
                                                    aria-describedby="email-error"
                                                />
                                                <div id="email-error" className="client form-text text_red" />
                                            </div>
                                            <div className="client mb-3 text-start">
                                                <label className="client form-label">
                                                    Chọn xe của bạn: <span className="client text_red me-3">*</span>
                                                    <span
                                                        className="client text_red"
                                                        id="selected_car"
                                                        style={{ cursor: "pointer" }}
                                                    >
                                                        <u>Chọn xe mới không có trong danh sách</u>
                                                    </span>
                                                </label>
                                                <div className="client my_car">
                                                    <select
                                                        className="client form-select mt-1"
                                                        name="car"
                                                        id="car"
                                                        aria-label=""
                                                    >
                                                        <option value={0} id="dis-0" disabled="" selected="">
                                                            Xe trong danh sách của bạn
                                                        </option>
                                                        <option value="">
                                                            car
                                                        </option>
                                                    </select>
                                                    <div id="mycar-error" className="client form-text text_red" />
                                                </div>
                                                <div className="client new_car d-none">
                                                    <div className="client mb-3 text-start">
                                                        <label htmlFor="brand_all" className="client form-label">
                                                            Hãng xe: <span className="client text_red me-3">*</span>
                                                        </label>
                                                        <select
                                                            className="client form-select"
                                                            name="brand_all"
                                                            id="brand_all"
                                                            aria-label=""
                                                        >

                                                            <option value="">
                                                                name brand
                                                            </option>
                                                        </select>
                                                        <div id="brand-error" className="client form-text text_red" />
                                                    </div>
                                                    <div className="client mb-3 text-start">
                                                        <label htmlFor="name_car" className="client form-label">
                                                            Tên xe: <span className="client text_red me-3">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="client form-control"
                                                            id="name_car"
                                                            defaultValue="null"
                                                            name="name_car"
                                                        />
                                                        <div
                                                            id="namecar-error"
                                                            className="client form-text text_red"
                                                        />
                                                    </div>
                                                    <div className="client mb-3 text-start">
                                                        <label htmlFor="license" className="client form-label">
                                                            Biển số xe: <span className="client text_red me-3">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="client form-control"
                                                            id="license"
                                                            defaultValue="null"
                                                            name="license"
                                                        />
                                                        <div
                                                            id="license-error"
                                                            className="client form-text text_red"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="client mb-3 text-start">
                                                <label htmlFor="service" className="client form-label">
                                                    Dịch vụ: <span className="client text_red">*</span>
                                                </label>
                                                <select
                                                    id="choices-multiple-remove-button-service"
                                                    className="client form-select"
                                                    name="service"
                                                    placeholder="Chọn các dịch vụ bạn có"
                                                >
                                                    <option value="">
                                                        service name
                                                    </option>
                                                </select>
                                                <div id="service-error" className="client form-text text_red" />
                                            </div>
                                            <div className="client mb-3 text-start">
                                                <div className="client row">
                                                    <div className="client col-6">
                                                        <label htmlFor="time" className="client form-label">
                                                            Giờ: <span className="client text_red">*</span>
                                                        </label>
                                                        <input
                                                            type="time"
                                                            className="client form-control"
                                                            id="time"
                                                            name="time"
                                                        />
                                                        <div id="time-error" className="client form-text text_red" />
                                                    </div>
                                                    <div className="client col-6">
                                                        <label htmlFor="date" className="client form-label">
                                                            Ngày: <span className="client text_red">*</span>
                                                        </label>
                                                        <input
                                                            type="date"
                                                            className="client form-control"
                                                            id="date"
                                                            name="date"
                                                            min=""
                                                            max="30-12-2222"
                                                        />
                                                        <div id="date-error" className="client form-text text_red" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="client mb-3 d-flex align-items-center justify-content-center">
                                                <button className="client btn btn-primary" type="submit">
                                                    Đặt lịch
                                                </button>
                                            </div>
                                            {/* <div className="client text-center" style={{ height: 100 }}>
                                                <p className="client mb-3 font-weight-bold text_red">
                                                    Bạn cần đăng nhập để tiếp tục!
                                                </p>
                                                <div className="client d-flex align-items-center justify-content-center">
                                                    <a href="{{ url('/login') }}" className="client ">
                                                        <button className="client btn btn-primary">Đăng nhập</button>
                                                    </a>
                                                </div>
                                            </div> */}
                                            {/* Column */}
                                        </form>
                                    </div>

                                    <div className="client modal-footer">
                                        <button
                                            type="button"
                                            className="client btn btn-secondary"
                                            data-bs-dismiss="modal"
                                        >
                                            Close
                                        </button>
                                        <button type="button" className="client btn btn-primary">
                                            Understood
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header End */}
            {/* img Start */}
            <div
                className="client container-xxl"
                style={{ backgroundColor: "#ffecec", padding: "20px 9px 0 18px" }}
            >
                <div className="client row g-0">
                    <div className="client col-lg-6 col-md-6 col-sm-12 d-none d-sm-none d-md-block mb-1">
                        <img
                            className="client img-fluid"
                            style={{ width: "98%", height: "96%" }}
                            src=""
                            alt=""
                        />
                    </div>
                    <div className="client col-lg-6 col-md-6 col-sm-12 d-none d-sm-none d-md-block">
                        <div className="client row g-0">
                            {/* foreach */}
                            <div className="client col-lg-6 col-md-6 col-sm-6 mb-2">
                                <img
                                    className="client img-fluid"
                                    style={{ width: "97%", height: "99%" }}
                                    src=""
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="client d-md-none">
                        <div
                            id="carouselExample"
                            className="client carousel slide"
                            style={{ paddingRight: 11, paddingBottom: 20 }}
                            data-ride="carousel"
                        >
                            <div className="client carousel-inner">
                                <div className="client carousel-item active">
                                    <img
                                        style={{ width: "100%", height: 270 }}
                                        src=""
                                        className="client d-block w-100"
                                        alt=""
                                    />
                                </div>
                                {/* foreach detail image */}
                                <div className="client carousel-item">
                                    <img
                                        style={{ width: "100%", height: 270 }}
                                        className="client "
                                        src=""
                                        alt=""
                                    />
                                </div>
                            </div>
                            <button
                                className="client carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExample"
                                data-bs-slide="prev"
                            >
                                <span className="client carousel-control-prev-icon" aria-hidden="true" />
                                <span className="client visually-hidden">Previous</span>
                            </button>
                            <button
                                className="client carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExample"
                                data-bs-slide="next"
                            >
                                <span className="client carousel-control-next-icon" aria-hidden="true" />
                                <span className="client visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* img End */}
            {/* service */}
            <div className="client container-xxl p-3 mt-3">
                <div className="client container">
                    <div
                        className="client mb-4 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 660 }}
                    >
                        <h3 className="client mb-3">Dịch vụ cung cấp</h3>
                    </div>
                    <div className="client row g-2">
                        {/* foreach service lít */}
                        <div
                            className="client col-lg-6 col-sm-12 col-12 wow fadeInUp"
                            data-wow-delay="0.1s"
                        >
                            <div className="client cat-item d-block bg-light text-center rounded p-3">
                                <div
                                    className="client rounded p-3"
                                    style={{ border: "1px dashed rgba(185, 46, 0, 0.3)" }}
                                >
                                    <div className="client row">
                                        <div className="client col-6">
                                            <div className="client icon mb-3">
                                                <img
                                                    className="client img-fluid img-card1"
                                                    src=""
                                                    alt="Icon"
                                                />
                                            </div>
                                        </div>
                                        <div className="client col-6 py-5">
                                            <h5 className="client mt-3">
                                                name
                                            </h5>

                                            <p style={{ color: "#000" }}>
                                                description
                                            </p>
                                            <a href="" className="client ">
                                                <button className="client btn btn-danger mt-3">Chi tiết</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end service */}
            {/* brand */}
            <div className="client container-xxl p-3 mt-3">
                <div className="client container">
                    <div
                        className="client mb-4 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 660 }}
                    >
                        <h3 className="client mb-3">Hãng xe sửa chữa</h3>
                    </div>
                    <div className="client row g-2">
                        {/* foreach brand list */}
                        <div
                            className="client col-lg-2 col-md-3 col-sm-4 col-6 wow brand_1"
                            data-wow-delay="0.1s"
                        >
                            <div className="client row g-0">
                                <div className="client col-4">
                                    <div className="client icon">
                                        <img
                                            className="client img-fluid"
                                            style={{ width: 40, height: 40 }}
                                            src=""
                                            alt="Icon"
                                        />
                                    </div>
                                </div>
                                <div className="client col-8 py-4">
                                    <p className="client ">
                                        brand name
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p
                        className="client text_red text-center"
                        style={{ cursor: "pointer" }}
                        id="show_brand"
                    >
                        Xem thêm hãng xe
                    </p>
                </div>
            </div>
            {/* end brand */}
            {/* map */}
            <div className="client container-xxl p-3 mt-3">
                <div className="client container">
                    <div
                        className="client mb-4 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 660 }}
                    >
                        <h3 className="client mb-3">Thông tin liên hệ</h3>
                    </div>
                    <div className="client row g-2">
                        <div
                            className="client col-lg-7 col-sm-12 col-12 wow fadeInUp"
                            data-wow-delay="0.1s"
                            style={{ height: 300 }}
                        >
                            <iframe
                                width="100%"
                                height="100%"
                                frameBorder={0}
                                scrolling="no"
                                marginHeight={0}
                                marginWidth={0}
                                id="gmap_canvas"
                                src="https://maps.google.com/maps?hl=vi&q={{ urlencode($garage->name . ', ' . $garage->address_detail) }}&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                            />
                        </div>
                        <div
                            className="client col-lg-5 col-sm-12 col-12 wow fadeInUp"
                            data-wow-delay="0.1s"
                            style={{ height: 300 }}
                        >
                            <div
                                className="client cat-item d-block bg-light text-center rounded p-3"
                                style={{ height: "100% !important" }}
                            >
                                <div
                                    className="client rounded p-3"
                                    style={{
                                        border: "1px dashed rgba(185, 46, 0, 0.3)",
                                        height: "100% !important"
                                    }}
                                >
                                    <div className="client py-2">
                                        <h5 className="client align-middle mb-4 mt-3"> Liên hệ </h5>
                                        <p className="client align-middle">
                                            <span style={{ width: 40 }}>
                                                <i className="client fa fa-phone-alt text_red me-2" />
                                            </span>
                                            phone garage
                                        </p>
                                        <p className="client align-middle">
                                            <span style={{ width: 40 }}>
                                                <i className="client bi bi-envelope-at-fill text_red me-2" />
                                            </span>
                                            email garage
                                        </p>
                                        <div className="client align-middle mb-3">
                                            <form
                                                action=""
                                                className="client d-inline-block"
                                                method="POST"
                                            >
                                                <input
                                                    type="hidden"
                                                    name="id_garage"
                                                    defaultValue=""
                                                />
                                                <button
                                                    className="client btn bg-danger text-white"
                                                    type="submit"
                                                    style={{ backgroundColor: "transparent", border: "none" }}
                                                >
                                                    Nhắn tin cho garage
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end map */}
            {/* rating */}
            <div className="client container-fluid p-3 mt-3">
                <div className="client container">
                    <div
                        className="client wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 660 }}
                    >
                        <h3 className="client mb-4">Đánh giá</h3>
                    </div>
                    <div
                        className="client row g-0 p-3 rounded"
                        style={{ backgroundColor: "#fff5f5" }}
                    >
                        <div className="client col-lg-8">
                            <div className="client card-1 p-3">
                                <div className="client row">
                                    <div className="client col-md-5">
                                        <div className="client rating-box text-center">
                                            <h1 className="client pt-4">
                                                ave star
                                            </h1>
                                            <p className="client text_red">
                                                total rating đánh giá
                                            </p>
                                        </div>
                                        <div className="client px-3 text-center">
                                            {/* check start of garage */}
                                            <span className="client bi bi-star-half star-active mx-1" />
                                            <span className="client bi bi-star star-active mx-1" />
                                            <span className="client bi bi-star star-active mx-1" />
                                            <span className="client bi bi-star star-active mx-1" />
                                            <span className="client bi bi-star star-active mx-1" />

                                        </div>
                                    </div>
                                    <div className="client col-md-7">
                                        <div className="client rating-bar0 justify-content-center">
                                            <table className="client text-left mx-auto">
                                                <tbody>
                                                    <tr>
                                                        <td className="client rating-label">5 sao</td>
                                                        <td className="client rating-bar">
                                                            <div className="client bar-container">
                                                                <div
                                                                    className="client bar-5"
                                                                    style={{
                                                                        width:
                                                                            '50%'
                                                                    }}
                                                                />
                                                            </div>
                                                        </td>
                                                        <td className="client text-right">
                                                            count star 5
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="client rating-label">4 sao</td>
                                                        <td className="client rating-bar">
                                                            <div className="client bar-container">
                                                                <div
                                                                    className="client bar-4"
                                                                    style={{
                                                                        width:
                                                                            '40%'
                                                                    }}
                                                                />
                                                            </div>
                                                        </td>
                                                        <td className="client text-right">
                                                            count star 4
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="client rating-label">3 sao</td>
                                                        <td className="client rating-bar">
                                                            <div className="client bar-container">
                                                                <div
                                                                    className="client bar-3"
                                                                    style={{
                                                                        width:
                                                                            '30%'
                                                                    }}
                                                                />
                                                            </div>
                                                        </td>
                                                        <td className="client text-right">
                                                            count star 3
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="client rating-label">2 sao</td>
                                                        <td className="client rating-bar">
                                                            <div className="client bar-container">
                                                                <div
                                                                    className="client bar-2"
                                                                    style={{
                                                                        width:
                                                                            '20%'
                                                                    }}
                                                                />
                                                            </div>
                                                        </td>
                                                        <td className="client text-right">
                                                            count star 2
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="client rating-label">1 sao</td>
                                                        <td className="client rating-bar">
                                                            <div className="client bar-container">
                                                                <div
                                                                    className="client bar-1"
                                                                    style={{
                                                                        width:
                                                                            '10%'
                                                                    }}
                                                                />
                                                            </div>
                                                        </td>
                                                        <td className="client text-right">
                                                            count star 1
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="client col-lg-4 col-md-none"
                            style={{ backgroundColor: "#fff" }}
                        ></div>
                    </div>
                    <div className="client row">
                        <div className="client col-sm-12">
                            <hr />
                            <div className="client review-block">
                                {/* foreach rating comment */}
                                <div className="client row">
                                    <div className="client col-md-2 col-sm-3 col-6">
                                        <img
                                            src=""
                                            className="client img-rounded"
                                        />
                                        <div className="client review-block-name">
                                            user name
                                        </div>
                                        <div className="client review-block-date">
                                            created at
                                        </div>
                                    </div>
                                    <div className="client col-md-10 col-sm-9 col-6">
                                        <div className="client review-block-rate">
                                            {/* star rating */}
                                            <i className="client bi bi-star-fill text_red " />

                                        </div>
                                        <div className="client review-block-title">
                                            Star sao
                                        </div>
                                        <div className="client review-block-description">
                                            comment
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end rating */}
            <div className="client container-fluid p-3 mt-2">
                <div className="client container">
                    <div
                        className="client wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 660 }}
                    >
                        <h3 className="client mb-4">Gợi ý garage</h3>
                    </div>
                    <div className="client row g-3 mt-2">
                        {/* foreach recommend garage */}
                        <div
                            className="client col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
                            data-wow-delay="0.1s"
                        >
                            <div className="client property-item rounded overflow-hidden">
                                <div className="client position-relative overflow-hidden">
                                    <a href="">
                                        <img
                                            className="client img-fluid"
                                            style={{ width: "100%", height: "80%" }}
                                            src=""
                                            alt=""
                                        />
                                    </a>
                                    <div className="client bg-white rounded-top text_red position-absolute start-0 bottom-0 mx-4 pt-1 px-2">
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
                                                className="client text_red"
                                                type="submit"
                                                style={{
                                                    backgroundColor: "transparent",
                                                    border: "none",
                                                    width: 39
                                                }}
                                            >
                                                <i className="client bi bi-heart font-weight-bold" />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="client p-3 pb-0">
                                    <h5 className="client text_red mb-3">$12,345</h5>
                                    <a
                                        className="client d-block h5 mb-2"
                                        href=""
                                        style={{ height: 48 }}
                                    >
                                        name garage
                                    </a>
                                    <p
                                        className="client mt-2 "
                                        style={{
                                            height: 48,
                                            overflow: "hidden",
                                            display: "-webkit-box",
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: "vertical"
                                        }}
                                    >
                                        <i className="client fa fa-map-marker-alt text_red me-2" />
                                        address garage
                                    </p>
                                </div>
                                <div className="client d-flex">
                                    <small className="client flex-fill text-start mx-4 me-5">Đánh giá</small>
                                    <small className="client flex-fill text-start pb-2 ms-5">
                                        total star
                                        <i className="client bi bi-star-fill text_red " />

                                        count star
                                    </small>
                                </div>
                                <div className="client d-flex border-top mt-2">
                                    <small className="client flex-fill text-start border-end py-2 mx-4">
                                        <i className="client far fa-calendar-plus text_red me-3" />
                                        <a href="" className="client text_red">
                                            Đặt lịch ngay
                                        </a>
                                    </small>
                                    <small className="client flex-fill text-start py-2">
                                        <i className="client bi bi-chat-dots-fill text_red me-2 d-inline-block" />
                                        <form
                                            action=""
                                            className="client d-inline-block"
                                            method="POST"
                                        >
                                            <input
                                                type="hidden"
                                                name="id_garage"
                                                defaultValue=""
                                            />
                                            <button
                                                className="client text_red"
                                                type="submit"
                                                style={{ backgroundColor: "transparent", border: "none" }}
                                            >
                                                Nhắn tin
                                            </button>
                                        </form>
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default GarageDetail