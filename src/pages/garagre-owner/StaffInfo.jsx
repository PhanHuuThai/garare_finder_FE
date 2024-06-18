const StaffInfo = () => {
    return (
        <div className="page-wrapper text-start">
            <div className="page-breadcrumb bg-white">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                        <h4 className="page-title">Cập nhập thông tin của bạn</h4>
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
            <div className="container-fluid">
                <form
                    className="form-horizontal form-material"
                    action=""
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
                                        src="{{ !empty(Auth::guard('employee')->user()->image) ? asset('uploads/garage/employee/1_' . Auth::guard('employee')->user()->image) : asset('assets/img/default-image.webp') }}"
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
                                            name="avatar"
                                            id="image_thumnail"
                                            accept=".jpg, .jpeg, .png, .webp"
                                        />
                                    </div>
                                </div>
                                <p style={{ color: "red", marginTop: 10 }}>
                                     $message 
                                </p>
                            </div>
                        </div>
                        {/* Column */}
                        {/* Column */}
                        <div className="col-lg-8 col-xlg-9 col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="form-group mb-3">
                                        <label className="col-md-12 p-0">Tên nhân viên</label>
                                        <div className="col-md-12 border-bottom p-0 mb-2">
                                            <input
                                                type="text"
                                                placeholder="Tên Garage"
                                                className="form-control p-0 border-0"
                                                name="name"
                                                defaultValue="{{ Auth::guard('employee')->user()->name }}"
                                            />
                                        </div>
                                        <span style={{ color: "red" }}>
                                            $message 
                                        </span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="col-md-12 p-0">Email (Tên đăng nhập)</label>
                                        <div className="col-md-12 border-bottom p-0 mb-2">
                                            <input
                                                type="email"
                                                placeholder="Email đăng nhập"
                                                className="form-control p-0 border-0"
                                                name="email"
                                                disabled=""
                                                defaultValue="{{ Auth::guard('employee')->user()->email }}"
                                            />
                                        </div>
                                        <span style={{ color: "red" }}>
                                            $message
                                        </span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="col-md-12 p-0">Số điện thoại</label>
                                        <div className="col-md-12 border-bottom p-0 mb-2">
                                            <input
                                                type="text"
                                                placeholder="Số điện thoại"
                                                className="form-control p-0 border-0"
                                                name="phone"
                                                defaultValue="{{ Auth::guard('employee')->user()->phone }}"
                                            />
                                        </div>
                                        <span style={{ color: "red" }}>
                                            $message 
                                        </span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="col-md-12 p-0">Giới tính</label>
                                        <div className="col-md-12 border-bottom p-0 mb-2">
                                            <select
                                                className="form-select shadow-none p-0 border-0 form-control-line"
                                                name="gender"
                                                id=""
                                                aria-label="Default select example"
                                            >
                                                
                                                <option value={2}>Nữ</option>
                                                <option value={1}>Nam</option>
                                                
                                            </select>
                                        </div>
                                        <span style={{ color: "red", marginTop: 10 }}>
                                            $message 
                                        </span>

                                    </div>
                                    <div className="form-group mb-4">
                                        <div className="col-sm-12">
                                            <button className="btn btn-primary">
                                                Cập nhập tài khoản
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
           
        </div>

    )
}

export default StaffInfo