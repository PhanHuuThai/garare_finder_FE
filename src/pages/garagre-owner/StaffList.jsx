const StaffList = () => {
    return (
        <>
            <div className="page-wrapper text-start">
                <div className="page-breadcrumb bg-white">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                            <h4 className="page-title">Danh sách nhân viên</h4>
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
                    {/* ============================================================== */}
                    {/* Start Page Content */}
                    {/* ============================================================== */}
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="white-box">

                                <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                    <a
                                        href=""
                                        className="btn btn-danger d-md-block mb-4 hidden-xs hidden-sm waves-effect waves-light text-white"
                                    >
                                        <i className="fas fa-plus-circle mx-2" aria-hidden="true" />
                                        Tạo tài khoản nhân viên
                                    </a>
                                </div>
                                <h3 className="box-title mb-4">Danh sách nhân viên</h3>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead style={{ backgroundColor: "#f8f8f8" }}>
                                            <tr>
                                                <th className="border-top-0 text-center">STT</th>
                                                <th className="border-top-0 text-center">Mã NV</th>
                                                <th className="border-top-0 text-center">Ảnh</th>
                                                <th className="border-top-0 text-center">Tên</th>
                                                <th className="border-top-0 text-center">Email</th>
                                                <th className="border-top-0 text-center">SDT</th>
                                                <th className="border-top-0 text-center">Giới tính</th>
                                                <th
                                                    className="border-top-0 text-center"
                                                    style={{ width: 117 }}
                                                >
                                                    Trạng thái
                                                </th>
                                                <th
                                                    className="border-top-0"
                                                    id="action"
                                                    style={{ width: 140 }}
                                                >
                                                    Hành động
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="text-center">
                                                    1
                                                </td>
                                                <td>
                                                    id
                                                </td>
                                                <td>
                                                    <img
                                                        src="{{ asset('uploads/garage/employee/' . $item->image) }}"
                                                        alt=""
                                                        style={{ height: 60, width: 60 }}
                                                    />
                                                </td>
                                                <td>
                                                    name
                                                </td>
                                                <td>
                                                    email
                                                </td>
                                                <td>
                                                    phone
                                                </td>
                                                <td>
                                                    gender
                                                </td>
                                                <td>

                                                    <span className="badge rounded-pill bg-danger font-bold">
                                                        Đã khóa
                                                    </span>
                                                </td>
                                                <td>
                                                    <a
                                                        href=""
                                                        className="btn btn-primary d-md-block mb-2 hidden-xs hidden-sm waves-effect waves-light text-white"
                                                    >
                                                        Reset mật khẩu
                                                    </a>
                                                    <form
                                                        action=""
                                                        method="POST"
                                                    >
                                                        <input type="hidden" defaultValue={1} name="action" />
                                                        <button
                                                            style={{ width: "100%" }}
                                                            className="btn btn-danger d-md-block mb-2 hidden-xs hidden-sm waves-effect waves-light text-white"
                                                            type="submit"
                                                        >
                                                            <i className="fas fa-lock mx-2" aria-hidden="true" />
                                                            Khóa
                                                        </button>
                                                    </form>
                                                    <form action="{{ url('') }}" method="POST">
                                                        <button
                                                            style={{ width: "100%" }}
                                                            className="btn btn-danger d-md-block hidden-xs hidden-sm waves-effect waves-light text-white"
                                                            type="submit"
                                                        >
                                                            <i className="fas fa-ban mx-2" aria-hidden="true" />
                                                            Xóa
                                                        </button>
                                                    </form>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={5} className="border-0">
                                                    Chưa có nhân viên
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="d-flex justify-content-center my-4">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Container fluid  */}
            </div>
        </>
    )
}

export default StaffList