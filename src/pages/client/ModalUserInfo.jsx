
const ModalUserInfo = () => {

    return (
        <form
            className="form-block"
            id="form_info"
            action=""
            method="post"
            encType="multipart/form-data"
        >
            <div className="row">
                {/* Column */}
                <div className="col-lg-4 col-xlg-3 col-md-12">
                    <div className="">
                        <div className="img-fluid">
                            <img
                                width="100%"
                                height="80%"
                                alt="user"
                                className="avatar"
                                id="avatar"
                                src=""
                            />
                        </div>
                        <div className="user-btm-box mt-3 d-md-flex">
                            <div className="col-md-2 col-sm-2 text-start mt-2">
                                <h6>Ảnh : </h6>
                            </div>
                            <div className="col-md-10 col-sm-10">
                                <input
                                    type="file"
                                    className="form-control"
                                    name="image"
                                    id="imageAvatar"
                                    accept=".jpg, .jpeg, .png, .webp"
                                />
                            </div>
                            <span className="text-danger" id="imageErrorMsg" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-xlg-9 col-md-12 content-in-tab">
                    <div className="col-12">
                        <div className="mb-4 mt-2">
                            <h4 lass="display-5 mb-4">Thông tin của tôi</h4>
                            <p className="mb-4">Quản lý đầy đủ thông tin để bảo mật tài khoản!</p>
                        </div>
                    </div>
                    <div className="row g-3 align-items-center">
                        <div className="col-3">
                            <label htmlFor="inputName" className="col-form-label">
                                Tên người dùng:<span className="text_red">*</span>
                            </label>
                        </div>
                        <div className="col-9">
                            <input
                                type="text"
                                id="inputName"
                                name="name"
                                className="form-control"
                                aria-describedby="passwordHelpInline"
                                defaultValue=""
                            />
                            <span className="text-danger" id="nameErrorMsg" />
                        </div>
                    </div>
                    <div className="row g-3 align-items-center mt-2">
                        <div className="col-3">
                            <label htmlFor="inputEmail" className="col-form-label">
                                Email:<span className="text_red">*</span>
                            </label>
                        </div>
                        <div className="col-9">
                            <input
                                type="email"
                                id="inputEmail"
                                name="email"
                                disabled=""
                                className="form-control"
                                aria-describedby="passwordHelpInline"
                                defaultValue=""
                            />
                        </div>
                    </div>
                    <div className="row g-3 align-items-center mt-2">
                        <div className="col-3">
                            <label htmlFor="inputPhone" className="col-form-label">
                                Số điện thoại:<span className="text_red">*</span>
                            </label>
                        </div>
                        <div className="col-9">
                            <input
                                type="number"
                                id="inputPhone"
                                name="phone"
                                className="form-control"
                                aria-describedby="passwordHelpInline"
                                defaultValue=""
                            />
                            <span className="text-danger" id="phoneErrorMsg" />
                        </div>
                    </div>
                    <div className="row g-3 align-items-center mt-2">
                        <div className="col-3">
                            <label htmlFor="inputAddress" className="col-form-label">
                                Địa chỉ:
                            </label>
                            <label htmlFor="inputAddress" className="col-form-label">
                                <span className="text_red">
                                    (Nếu bạn muốn cập nhập địa chỉ, vui lòng nhập đầy đủ thông tin!)
                                </span>
                            </label>
                        </div>
                        <div className="col-9">
                            <textarea
                                className="form-control"
                                rows={2}
                                id="inputAddress"
                                name="address"
                                disabled=""
                                defaultValue={
                                    ""
                                }
                            />
                            <div className="row">
                                <div className="col-md-12 col-12 mt-4">
                                    <input
                                        type="text"
                                        name="nest"
                                        className="form-control"
                                        placeholder="Tổ, thôn, số nhà, đường"
                                        defaultValue=""
                                    />
                                    <span className="text-danger" id="nestErrorMsg" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 col-12 mt-4">
                                    <select
                                        className="form-select"
                                        name="province"
                                        id="province"
                                        aria-label="Default select example"
                                    >
                                        <option value={0} disabled="" selected="">
                                            Thành phố/Tỉnh
                                        </option>
                                        <option value="">
                                        </option>
                                    </select>
                                    <span className="text-danger" id="provinceErrorMsg" />
                                </div>
                                <div className="content-distrist">
                                    <div className="col-md-12 col-12 mt-4">
                                        <select
                                            className="form-select"
                                            name="distrist"
                                            id="distrist"
                                            aria-label="Default select example"
                                        >
                                            <option value={0} disabled="" selected="">
                                                Quận/huyện
                                            </option>
                                        </select>
                                        <span className="text-danger" id="distristErrorMsg" />
                                    </div>
                                    <div className="content-ward">
                                        <div className="col-md-12 col-12 mt-4">
                                            <select
                                                className="form-select"
                                                name="ward"
                                                id="ward"
                                                aria-label="Default select example"
                                            >
                                                <option value={0} disabled="" selected="">
                                                    Phường/xã
                                                </option>
                                            </select>
                                            <span className="text-danger" id="wardErrorMsg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-3 align-items-center">
                        <div className="col-3"></div>
                        <div className="col-9">
                            <button className="btn btn-primary mt-4">Cập nhập thông tin</button>
                        </div>
                    </div>
                </div>
                {/* Column */}
            </div>
        </form>

    )
}

export default ModalUserInfo