
const GarageInfo = () => {
    return (
        <>
            {/* <div aria-live="polite" aria-atomic="true" className="position-relative">
                    <div className="toast-container position-absolute top-0 end-0 p-3">
                        <div
                            className="toast bg-success"
                            role="alert"
                            aria-live="assertive"
                            aria-atomic="true"
                        >
                            <div className="toast-header">
                                <img
                                    src="{{ asset('assets/img/logo-1-1.png') }}"
                                    className="rounded me-2"
                                    alt="..."
                                />
                                <strong className="me-auto">Thông báo</strong>
                                <small className="text-muted">Mới đây</small>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="toast"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="toast-body bg-light"></div>
                        </div>
                    </div>
                </div> */}
            <div className="page-wrapper text-start">
                <div className="page-breadcrumb bg-white">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                            <h4 className="page-title">Thông tin Garage</h4>
                        </div>
                        <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                            <div className="d-md-flex">
                                <ol className="breadcrumb ms-auto">
                                    <li>
                                        <a href="#" className="fw-normal">
                                            Dashboard
                                        </a>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    {/* /.col-lg-12 */}
                </div>
                <input type="hidden" defaultValue="{{ $info->id }}" id="id_garage" />
                <div className="container-fluid">
                    <form
                        className="form-horizontal form-material"
                        action="{{ url('/garage/' . request()->id . '/info/' . request()->id) }}"
                        method="POST"
                        encType="multipart/form-data"
                    >
                        <div className="row">
                            {/* Column */}
                            <div className="col-lg-4 col-xlg-3 col-md-12">
                                <div className="white-box">
                                    <div className="user-bg">
                                        <img
                                            width="100%"
                                            height="93%"
                                            alt="user"
                                            id="img_info"
                                            className="img_info"
                                            src="{{ asset('uploads/garage/thumnail/' . $info->img_thumnail) }}"
                                        />
                                    </div>
                                    <div className="user-btm-box mt-5 d-md-flex">
                                        <div className="col-md-2 col-sm-2 text-start mt-2">
                                            <h5>Ảnh : </h5>
                                        </div>
                                        <div className="col-md-10 col-sm-10">
                                            <input
                                                type="file"
                                                className="form-control"
                                                name="image_thumnail"
                                                id="image_thumnail"
                                                accept=".jpg, .jpeg, .png, .webp"
                                            />
                                        </div>
                                        <p style={{ color: "red", marginTop: 10 }}>
                                            error
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Column */}
                            {/* Column */}
                            <div className="col-lg-8 col-xlg-9 col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="form-group mb-4">
                                            <label className="col-md-12 p-0">Tên Garage</label>
                                            <div className="col-md-12 border-bottom p-0">
                                                <input
                                                    type="text"
                                                    placeholder="Tên Garage"
                                                    className="form-control p-0 border-0"
                                                    name="name"
                                                    defaultValue="{{ $info->name }}"
                                                />
                                            </div>
                                        </div>
                                        <span style={{ color: "red" }}>
                                            error
                                        </span>
                                        <div className="form-group mb-4">
                                            <label className="col-md-12 p-0">Email</label>
                                            <div className="col-md-12 border-bottom p-0">
                                                <input
                                                    type="text"
                                                    placeholder="Email"
                                                    className="form-control p-0 border-0"
                                                    name="email"
                                                    defaultValue="{{ $info->email }}"
                                                />
                                            </div>
                                        </div>
                                        <span style={{ color: "red" }}>
                                            error
                                        </span>
                                        <div className="form-group mb-4">
                                            <label className="col-md-12 p-0">Số điện thoại</label>
                                            <div className="col-md-12 border-bottom p-0">
                                                <input
                                                    type="text"
                                                    placeholder="Số điện thoại"
                                                    className="form-control p-0 border-0"
                                                    name="phone"
                                                    defaultValue="{{ $info->phone }}"
                                                />
                                            </div>
                                        </div>
                                        <span style={{ color: "red" }}>
                                            errror
                                        </span>
                                        <div className="form-group mb-4">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label className="col-md-12 p-0">Giờ mở cửa</label>
                                                    <div className="col-md-12 border-bottom p-0">
                                                        <input
                                                            type="text"
                                                            className="form-control p-0 border-0 timepicker"
                                                            timepicker=""
                                                            name="time_open"
                                                            defaultValue="{{ $info->time_open }}"
                                                        />
                                                    </div>
                                                    <span style={{ color: "red" }}>
                                                        error
                                                    </span>
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="col-md-12 p-0">Giờ đóng cửa</label>
                                                    <div className="col-md-12 border-bottom p-0">
                                                        <input
                                                            type="text"
                                                            className="form-control p-0 border-0 timepicker"
                                                            timepicker=""
                                                            name="time_close"
                                                            defaultValue="{{ $info->time_close }}"
                                                        />
                                                    </div>
                                                    <span style={{ color: "red" }}>
                                                        error
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group mb-4">
                                            <label className="col-md-12 p-0">Số nhà, tên đường/Tổ</label>
                                            <div className="col-md-12 border-bottom p-0">
                                                <input
                                                    type="text"
                                                    className="form-control p-0 border-0"
                                                    name="nest"
                                                    defaultValue="{{ trim(explode(',', $info->address_detail)[0]) }}"
                                                />
                                            </div>
                                        </div>
                                        <span style={{ color: "red" }}>
                                            error
                                        </span>
                                        <div className="form-group mb-4">
                                            <label className="col-md-12 p-0">Thành phố/Tỉnh</label>
                                            <div className="col-md-12 border-bottom p-0">
                                                <input
                                                    disabled=""
                                                    type="text"
                                                    className="form-control p-0 border-0"
                                                    name="province"
                                                    defaultValue="{{ $provinces->name }}"
                                                />
                                            </div>
                                        </div>
                                        <span style={{ color: "red" }}>
                                            error
                                        </span>
                                        <div className="form-group mb-4">
                                            <label className="col-md-12 p-0">Quận/Huyện</label>
                                            <div className="col-md-12 border-bottom p-0">
                                                <select
                                                    className="form-select shadow-none p-0 border-0 form-control-line"
                                                    name="district"
                                                    id="district"
                                                    aria-label="Default select example"
                                                >
                                                    <option value="{{ $info->id_district }}" selected="">
                                                        name
                                                    </option>

                                                </select>
                                            </div>
                                        </div>
                                        <p style={{ color: "red" }}>
                                            district error
                                        </p>
                                        <div className="form-group mb-4">
                                            <label className="col-md-12 p-0">Phường/Xã</label>
                                            <div className="col-md-12 border-bottom p-0" id="div_ward">
                                                <select
                                                    className="form-select shadow-none p-0 border-0 form-control-line"
                                                    name="ward"
                                                    id="ward"
                                                    aria-label="Default select example"
                                                >

                                                    <option value="{{ $info->id_ward }}" selected="">
                                                        item ward
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <p style={{ color: "red" }}>
                                            ward error
                                        </p>
                                        <div className="form-group mb-4">
                                            <div className="col-sm-12">
                                                <button className="btn btn-primary">
                                                    Cập nhật thông tin
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Column */}
                        </div>
                    </form>
                </div>
                {/* End Container fluid  */}
                <footer className="footer text-center">
                </footer>
            </div>
        </>
    )
}

export default GarageInfo