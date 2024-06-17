
const ModalUserInfo = () => {

    return (
        <form
            className="client form-block"
            id="form_info"
            action=""
            method="post"
            encType="multipart/form-data"
        >
            <div className="client row">
                {/* Column */}
                <div className="client col-lg-4 col-xlg-3 col-md-12">
                    <div className="client ">
                        <div className="client img-fluid">
                            <img
                                width="100%"
                                height="80%"
                                alt="user"
                                className="client avatar"
                                id="avatar"
                                src=""
                            />
                        </div>
                        <div className="client user-btm-box mt-3 d-md-flex">
                            <div className="client col-md-2 col-sm-2 text-start mt-2">
                                <h6>Ảnh : </h6>
                            </div>
                            <div className="client col-md-10 col-sm-10">
                                <input
                                    type="file"
                                    className="client form-control"
                                    name="image"
                                    id="imageAvatar"
                                    accept=".jpg, .jpeg, .png, .webp"
                                />
                            </div>
                            <span className="client text-danger" id="imageErrorMsg" />
                        </div>
                    </div>
                </div>
                <div className="client col-lg-8 col-xlg-9 col-md-12 content-in-tab">
                    <div className="client col-12">
                        <div className="client mb-4 mt-2">
                            <h4 lass="display-5 mb-4">Thông tin của tôi</h4>
                            <p className="client mb-4">Quản lý đầy đủ thông tin để bảo mật tài khoản!</p>
                        </div>
                    </div>
                    <div className="client row g-3 align-items-center">
                        <div className="client col-3">
                            <label htmlFor="inputName" className="client col-form-label">
                                Tên người dùng:<span className="client text_red">*</span>
                            </label>
                        </div>
                        <div className="client col-9">
                            <input
                                type="text"
                                id="inputName"
                                name="name"
                                className="client form-control"
                                aria-describedby="passwordHelpInline"
                                defaultValue=""
                            />
                            <span className="client text-danger" id="nameErrorMsg" />
                        </div>
                    </div>
                    <div className="client row g-3 align-items-center mt-2">
                        <div className="client col-3">
                            <label htmlFor="inputEmail" className="client col-form-label">
                                Email:<span className="client text_red">*</span>
                            </label>
                        </div>
                        <div className="client col-9">
                            <input
                                type="email"
                                id="inputEmail"
                                name="email"
                                disabled=""
                                className="client form-control"
                                aria-describedby="passwordHelpInline"
                                defaultValue=""
                            />
                        </div>
                    </div>
                    <div className="client row g-3 align-items-center mt-2">
                        <div className="client col-3">
                            <label htmlFor="inputPhone" className="client col-form-label">
                                Số điện thoại:<span className="client text_red">*</span>
                            </label>
                        </div>
                        <div className="client col-9">
                            <input
                                type="number"
                                id="inputPhone"
                                name="phone"
                                className="client form-control"
                                aria-describedby="passwordHelpInline"
                                defaultValue=""
                            />
                            <span className="client text-danger" id="phoneErrorMsg" />
                        </div>
                    </div>
                    <div className="client row g-3 align-items-center mt-2">
                        <div className="client col-3">
                            <label htmlFor="inputAddress" className="client col-form-label">
                                Địa chỉ:
                            </label>
                            <label htmlFor="inputAddress" className="client col-form-label">
                                <span className="client text_red">
                                    (Nếu bạn muốn cập nhập địa chỉ, vui lòng nhập đầy đủ thông tin!)
                                </span>
                            </label>
                        </div>
                        <div className="client col-9">
                            <textarea
                                className="client form-control"
                                rows={2}
                                id="inputAddress"
                                name="address"
                                disabled=""
                                defaultValue={
                                    ""
                                }
                            />
                            <div className="client row">
                                <div className="client col-md-12 col-12 mt-4">
                                    <input
                                        type="text"
                                        name="nest"
                                        className="client form-control"
                                        placeholder="Tổ, thôn, số nhà, đường"
                                        defaultValue=""
                                    />
                                    <span className="client text-danger" id="nestErrorMsg" />
                                </div>
                            </div>
                            <div className="client row">
                                <div className="client col-md-12 col-12 mt-4">
                                    <select
                                        className="client form-select"
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
                                    <span className="client text-danger" id="provinceErrorMsg" />
                                </div>
                                <div className="client content-distrist">
                                    <div className="client col-md-12 col-12 mt-4">
                                        <select
                                            className="client form-select"
                                            name="distrist"
                                            id="distrist"
                                            aria-label="Default select example"
                                        >
                                            <option value={0} disabled="" selected="">
                                                Quận/huyện
                                            </option>
                                        </select>
                                        <span className="client text-danger" id="distristErrorMsg" />
                                    </div>
                                    <div className="client content-ward">
                                        <div className="client col-md-12 col-12 mt-4">
                                            <select
                                                className="client form-select"
                                                name="ward"
                                                id="ward"
                                                aria-label="Default select example"
                                            >
                                                <option value={0} disabled="" selected="">
                                                    Phường/xã
                                                </option>
                                            </select>
                                            <span className="client text-danger" id="wardErrorMsg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="client row g-3 align-items-center">
                        <div className="client col-3"></div>
                        <div className="client col-9">
                            <button className="client btn btn-primary mt-4">Cập nhập thông tin</button>
                        </div>
                    </div>
                </div>
                {/* Column */}
            </div>
        </form>

    )
}

export default ModalUserInfo