const ChangeStaffPass = () => {
    return (
        <div className="page-wrapper text-start">
            <div className="page-breadcrumb bg-white">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                        <h4 className="page-title">Thay đổi mật khẩu của bạn</h4>
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
                    <input type="hidden" defaultValue={2} name="action" />
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="form-group mb-3">
                                        <label className="col-md-12 p-0">Mật khẩu cũ</label>
                                        <div className="col-md-12 border-bottom p-0 mb-2">
                                            <input
                                                type="password"
                                                className="form-control p-0 border-0"
                                                name="current_password"
                                                placeholder="Mật khẩu"
                                            />
                                        </div>
                                        <span style={{ color: "red" }}>
                                            $message 
                                        </span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="col-md-12 p-0">Mật khẩu mới</label>
                                        <div className="col-md-12 border-bottom p-0 mb-2">
                                            <input
                                                type="password"
                                                className="form-control p-0 border-0"
                                                name="password"
                                                placeholder="Mật khẩu"
                                            />
                                        </div>
                                        <span style={{ color: "red" }}>
                                             $message
                                        </span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="col-md-12 p-0">Nhập lại mật khẩu</label>
                                        <div className="col-md-12 border-bottom p-0 mb-2">
                                            <input
                                                type="password"
                                                className="form-control p-0 border-0"
                                                id="password_confirmation"
                                                name="password_confirmation"
                                                placeholder="Nhập lại mật khẩu"
                                            />
                                        </div>
                                        <span style={{ color: "red", marginTop: 10 }}>
                                            $message 
                                        </span>
                                    </div>
                                    <div className="form-group mb-4">
                                        <div className="col-sm-12">
                                            <button className="btn btn-primary">Đặt lại mật khẩu</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Column */}
                    </div>
                </form>
            </div>
           
        </div>

    )
}

export default ChangeStaffPass