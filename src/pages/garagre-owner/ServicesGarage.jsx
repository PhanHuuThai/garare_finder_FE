const ServicesGarage = () => {
    return (
        <>
            <div className="page-wrapper text-start">
                <div className="page-breadcrumb bg-white">
                    <div className="row align-items-start">
                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                            <h4 className="page-title">Dịch vụ</h4>
                        </div>

                    </div>
                    {/* /.col-lg-12 */}
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="white-box text-start" >
                                <h3 className="box-title mb-4 mt-1" >
                                    Thêm dịch vụ bạn đang cung cấp dịch vụ
                                </h3>
                                <form action="" className="">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <select
                                                className="form-control"
                                                id="choices-multiple-remove-button"
                                                name="service[]"
                                                placeholder="Chọn các dịch vụ bạn có"
                                                multiple=""
                                            >
                                                <option value="1">
                                                    Sửa xe
                                                </option>
                                            </select>
                                            <p style={{ color: "red", marginTop: 15 }}>
                                                error
                                            </p>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                            <button
                                                type="submit"
                                                style={{ height: "40%" }}
                                                className="btn btn-danger d-md-block mb-4 hidden-xs hidden-sm waves-effect waves-light text-white"
                                            >
                                                <i className="fas fa-plus-circle mx-2" aria-hidden="true" />
                                                Cập nhập dịch vụ
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <h3 className="box-title mb-4 mt-5">
                                    Danh sách dịch vụ bạn đang cung cấp dịch vụ
                                </h3>
                                <div className="table-responsive">

                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th className="border-top-0 text-center">STT</th>
                                                <th className="border-top-0 text-center">Ảnh</th>
                                                <th className="border-top-0 text-center">Tên</th>
                                                <th className="border-top-0 text-center">Mô tả</th>
                                                <th className="border-top-0" id="action">
                                                    Hành động
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="text-center">
                                                    No.
                                                </td>
                                                <td>
                                                    <img
                                                        src=""
                                                        alt=""
                                                        style={{ height: 60, width: 60 }}
                                                    />
                                                </td>
                                                <td>
                                                    name
                                                </td>
                                                <td>
                                                    description
                                                </td>
                                                <td>
                                                    <form
                                                        action="{{ url('garage/' . request()->id . '/brand/' . $item->id) }}"
                                                        method="POST"
                                                    >
                                                        @csrf @method('DELETE')
                                                        <button
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
                                                    Chưa có dịch vụ
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="d-flex justify-content-center my-4">
                                        <div className="Page navigation example">
                                            <div className="pagination">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Container fluid  */}
                <footer className="footer text-center">

                </footer>
            </div>

        </>
    )

}

export default ServicesGarage