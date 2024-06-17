
const DetailImage = () => {

    return (
        <div className="page-wrapper text-start">
            <div className="page-breadcrumb bg-white">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                        <h4 className="page-title">Ảnh chi tiết</h4>
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
                            <h3 className="box-title mb-4">Thêm ảnh chi tiết Garage</h3>
                            <div className="row">
                                <div className="col-12">
                                    <div className="frames" id="frames">
                                        <div className="">
                                            <img
                                                width="50%"
                                                height="240px"
                                                alt="user"
                                                className="img_add"
                                                id="img_add"
                                                src=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <form
                                        action=""
                                        method="POST"
                                        encType="multipart/form-data"
                                    >
                                        <div className="user-btm-box mt-3 d-md-flex">
                                            <div className="col-md-2 col-sm-2 text-start mt-2">
                                                <h6>Ảnh phụ: </h6>
                                            </div>
                                            <div className="col-md-10 col-sm-10">
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    name="image_detail[]"
                                                    id="imageDetail"
                                                    multiple=""
                                                    accept=".jpg, .jpeg, .png, .webp"
                                                />
                                                <p style={{ color: "red", marginTop: 15 }}>
                                                     $message 
                                                </p>
                                               
                                            </div>
                                        </div>
                                        <button className="btn btn-primary mt-3">
                                            Thêm ảnh chi tiết
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <h3 className="box-title mb-4 mt-4">Danh sách ảnh Garage</h3>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img
                                            src=""
                                            className="card-img-top"
                                            alt="..."
                                        />
                                        <div className="card-body d-flex justify-content-center">
                                            <form
                                                action=""
                                                method="POST"
                                            >
                                                <input
                                                    type="hidden"
                                                    name="name_image"
                                                    defaultValue=""
                                                />
                                                <button
                                                    className="btn btn-danger d-md-block hidden-xs hidden-sm waves-effect waves-light text-white"
                                                    type="submit"
                                                >
                                                    <i className="fas fa-ban mx-2" aria-hidden="true" />
                                                    Xóa
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
            {/* End Container fluid  */}
        </div>

    )
}

export default DetailImage