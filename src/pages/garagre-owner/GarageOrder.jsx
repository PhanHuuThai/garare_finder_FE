const GarageOrder = () => {
    return (
        <>
            <div className="page-wrapper text-start">
                <div className="page-breadcrumb bg-white">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                            <h4 className="page-title">Danh sách đơn đặt</h4>
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
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="white-box">
                                <div className="row">
                                    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12">
                                        <a
                                            href=""
                                            className="btn btn-primary d-md-block mb-4 hidden-xs hidden-sm waves-effect waves-light text-white"
                                        >
                                            Tất cả
                                        </a>
                                    </div>
                                    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12">
                                        <a
                                            href=""
                                            className="btn btn-warning d-md-block mb-4 hidden-xs hidden-sm waves-effect waves-light text-white"
                                        >
                                            Chờ xác nhận
                                        </a>
                                    </div>
                                    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12">
                                        <a
                                            href=""
                                            className="btn btn-success d-md-block mb-4 hidden-xs hidden-sm waves-effect waves-light text-white"
                                        >
                                            Đã xác nhận
                                        </a>
                                    </div>
                                    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12">
                                        <a
                                            href=""
                                            className="btn btn-danger d-md-block mb-4 hidden-xs hidden-sm waves-effect waves-light text-white"
                                        >
                                            Từ chối
                                        </a>
                                    </div>
                                    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12">
                                        <a
                                            href=""
                                            className="btn btn-secondary d-md-block mb-4 hidden-xs hidden-sm waves-effect waves-light text-white"
                                        >
                                            Đã hủy
                                        </a>
                                    </div>
                                </div>
                                <h3 className="box-title mb-4">Danh sách đơn đặt lịch</h3>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th className="border-top-0 text-center" style={{}}>
                                                    ID
                                                </th>
                                                <th className="border-top-0 text-center" style={{}}>
                                                    Tên chủ xe
                                                </th>
                                                <th className="border-top-0 text-center" style={{}}>
                                                    Số điện thoại
                                                </th>
                                                <th className="border-top-0 text-center" style={{}}>
                                                    Tên xe
                                                </th>
                                                <th className="border-top-0 text-center" style={{}}>
                                                    Hãng xe
                                                </th>
                                                <th className="border-top-0 text-center" style={{}}>
                                                    Biển số
                                                </th>
                                                <th className="border-top-0 text-center" style={{}}>
                                                    Dịch vụ
                                                </th>
                                                <th className="border-top-0 text-center" style={{}}>
                                                    Thời gian
                                                </th>
                                                <th className="border-top-0 text-center" style={{}}>
                                                    Đặt lúc
                                                </th>
                                                <th className="border-top-0 text-center" style={{}}>
                                                    Trạng thái
                                                </th>
                                                <th
                                                    className="border-top-0"
                                                    id="action"
                                                    style={{ width: "10%" }}
                                                />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="text-center">
                                                    id
                                                </td>
                                                <td>
                                                    name
                                                </td>
                                                <td>
                                                    ;phone
                                                </td>
                                                <td>
                                                    car_name
                                                </td>
                                                <td>
                                                    brand
                                                </td>
                                                <td>
                                                    license
                                                </td>
                                                <td>
                                                    service
                                                </td>
                                                <td>
                                                    time
                                                </td>
                                                <td>
                                                    created_at
                                                </td>
                                                <td className="text-center">
                                                    <span
                                                        className="badge rounded-pill bg-warning text-while font-bold"
                                                        style={{ height: 27, width: 100, fontSize: 13 }}
                                                    >
                                                        Chờ xác nhận
                                                    </span>
                                                    <span
                                                        className="badge rounded-pill bg-success text-while font-bold"
                                                        style={{ height: 27, width: 100, fontSize: 13 }}
                                                    >
                                                        Đã Xác nhận
                                                    </span>
                                                    <span
                                                        className="badge rounded-pill bg-danger text-while font-bold"
                                                        style={{ height: 27, width: 100, fontSize: 13 }}
                                                    >
                                                        Từ chối
                                                    </span>
                                                    <span
                                                        className="badge rounded-pill bg-secondary text-while font-bold"
                                                        style={{ height: 27, width: 100, fontSize: 13 }}
                                                    >
                                                        Đã hủy
                                                    </span>
                                                </td>
                                                <td>
                                                    <form
                                                        action=""
                                                        method="POST"
                                                    >
                                                        <input type="hidden" name="status" defaultValue={2} />
                                                        <button
                                                            style={{ width: "100%" }}
                                                            className="btn btn-success d-md-block hidden-xs hidden-sm waves-effect waves-light text-white"
                                                            type="submit"
                                                        >
                                                            <i className="fas fa-check" />
                                                        </button>
                                                    </form>
                                                    <form
                                                        action=""
                                                        method="POST"
                                                        className="mt-2"
                                                    >
                                                        <input type="hidden" name="status" defaultValue={3} />
                                                        <button
                                                            style={{ width: "100%" }}
                                                            className="btn btn-danger d-md-block hidden-xs hidden-sm waves-effect waves-light text-white"
                                                            type="submit"
                                                        >
                                                            <i className="fas fa-times" />
                                                        </button>
                                                    </form>
                                                    <a
                                                        href=""
                                                        className="btn btn-outline-primary"
                                                    >
                                                        Thanh toán
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={5} className="border-0">
                                                    Chưa có yêu cầu
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

            </div>
        </>

    )
}

export default GarageOrder