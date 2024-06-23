const RegisterGarage = () => {
    return (
        <div className="client container-xxl bg-white p-5">
            <h3 className="client box-title text-center mb-5">Đăng ký garage</h3>
            <form
                className="client form-block"
                id="form_info"
                action="{{ url('/add-garage') }}"
                method="post"
                encType="multipart/form-data"
            >
                <div className="client row">
                    {/* Column */}
                    <div className="client col-lg-6 col-xlg-6 col-md-12">
                        <div className="client ">
                            <div className="client img-fluid">
                                <img
                                    width="100%"
                                    height="380px"
                                    alt="user"
                                    className="client avatar"
                                    id="avatar"
                                    src={require('../../assets/img/default-image.webp')}
                                />
                            </div>
                            <div className="client user-btm-box mt-3 d-md-flex">
                                <div className="client col-md-2 col-sm-2 text-start mt-2">
                                    <h6>Ảnh chinh: </h6>
                                </div>
                                <div className="client col-md-10 col-sm-10">
                                    <input
                                        type="file"
                                        className="client form-control"
                                        name="image_thumnail"
                                        id="imageThumnail"
                                        accept=".jpg, .jpeg, .png, .webp"
                                    />
                                    <p style={{ color: "red", marginTop: 15 }}>
                                        {"{"}
                                        {"{"} $message {"}"}
                                        {"}"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="client col-lg-6 col-xlg-6 col-md-12 text-start">
                        <div className="client ">
                            <div className="client frames" id="frames">
                                <div className="client img-fluid">
                                    {" "}
                                    <img
                                        width="100%"
                                        height="380px"
                                        alt="user"
                                        className="client avatar"
                                        id="avatar"
                                        src={require('../../assets/img/default-image.webp')}
                                    />
                                </div>
                            </div>
                            <div className="client user-btm-box mt-3 d-md-flex">
                                <div className="client col-md-2 col-sm-2 text-start mt-2">
                                    <h6>Ảnh phụ: </h6>
                                </div>
                                <div className="client col-md-10 col-sm-10">
                                    <input
                                        type="file"
                                        className="client form-control"
                                        name="image_detail[]"
                                        id="imageDetail"
                                        multiple=""
                                        accept=".jpg, .jpeg, .png, .webp"
                                    />
                                    <p style={{ color: "red", marginTop: 15 }}>
                                        {"{"}
                                        {"{"} $message {"}"}
                                        {"}"}
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Column */}
                </div>
                <div className="client row mt-4">
                    <div className="client col-lg-6 col-xlg-6 col-md-12 content-in-tab mb-4">
                        <div className="client row g-3 text-start">
                            <div className="client col-3">
                                <label htmlFor="inputName" className="client col-form-label">
                                    Tên Garage:<span className="client text_red">*</span>
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
                                <p style={{ color: "red", marginTop: 15 }}>
                                    {"{"}
                                    {"{"} $message {"}"}
                                    {"}"}
                                </p>
                            </div>
                        </div>
                        <div className="client row g-3 text-start mt-2">
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
                                    className="client form-control"
                                    defaultValue="{{ isset(Auth::guard('web')->user()->email) ? Auth::guard('web')->user()->email : '' }}"
                                />
                                <p style={{ color: "red", marginTop: 15 }}>
                                    {"{"}
                                    {"{"} $message {"}"}
                                    {"}"}
                                </p>
                            </div>
                        </div>
                        <div className="client row g-3 text-start mt-2">
                            <div className="client col-3">
                                <label htmlFor="inputAddress" className="client col-form-label">
                                    Địa chỉ:<span className="client text_red">*</span>
                                </label>
                                <label htmlFor="inputAddress" className="client col-form-label">
                                    <span className="client text_red">
                                        (Nếu bạn muốn cập nhập địa chỉ, vui lòng nhập đầy đủ thông tin!)
                                    </span>
                                </label>
                            </div>
                            <div className="client col-9">
                                <div className="client row">
                                    <div className="client col-md-12 col-12">
                                        <input
                                            type="text"
                                            name="nest"
                                            className="client form-control"
                                            placeholder="Tổ, thôn, số nhà, đường"
                                            defaultValue=""
                                        />
                                        <p style={{ color: "red", marginTop: 15 }}>
                                            {"{"}
                                            {"{"} $message {"}"}
                                            {"}"}
                                        </p>
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
                                            <option value="{{ $item->id }}">
                                                {"{"}
                                                {"{"} $item-&gt;name {"}"}
                                                {"}"}
                                            </option>
                                        </select>
                                        <p style={{ color: "red", marginTop: 15 }}>
                                            {"{"}
                                            {"{"} $message {"}"}
                                            {"}"}
                                        </p>
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
                                            <p style={{ color: "red", marginTop: 15 }}>
                                                {"{"}
                                                {"{"} $message {"}"}
                                                {"}"}
                                            </p>
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
                                                <p style={{ color: "red", marginTop: 15 }}>
                                                    {"{"}
                                                    {"{"} $message {"}"}
                                                    {"}"}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="client col-lg-6 col-xlg-6 col-md-12 content-in-tab">
                        <div className="client row g-3 text-start">
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
                                    defaultValue="{{ isset(Auth::guard('web')->user()->phone) ? Auth::guard('web')->user()->phone : '' }}"
                                />
                                <p style={{ color: "red", marginTop: 15 }}>
                                    {"{"}
                                    {"{"} $message {"}"}
                                    {"}"}
                                </p>
                            </div>
                        </div>
                        <div className="client row g-3 text-start mt-2">
                            <div className="client col-3">
                                <label className="client col-form-label">
                                    Thời gian mở:<span className="client text_red">*(08:00)</span>
                                </label>
                            </div>
                            <div className="client col-9">
                                <input type="text" name="time_open" className="client form-control" />
                                <p style={{ color: "red", marginTop: 15 }}>
                                    {"{"}
                                    {"{"} $message {"}"}
                                    {"}"}
                                </p>
                            </div>
                        </div>
                        <div className="client row g-3 text-startr mt-2">
                            <div className="client col-3">
                                <label className="client col-form-label">
                                    Thời gian đóng:<span className="client text_red">*(18:00)</span>
                                </label>
                            </div>
                            <div className="client col-9">
                                <input type="text" name="time_close" className="client form-control" />
                                <p style={{ color: "red", marginTop: 15 }}>
                                    {"{"}
                                    {"{"} $message {"}"}
                                    {"}"}
                                </p>
                            </div>
                        </div>
                        <div className="client row g-3 text-start mt-2">
                            <div className="client col-3">
                                <label htmlFor="inputBrand" className="client col-form-label">
                                    Hãng xe:<span className="client text_red">*</span>
                                </label>
                            </div>
                            <div className="client col-9">
                                <select
                                    className='form-select'
                                    id="choices-multiple-remove-button"
                                    name="brand[]"
                                    placeholder="Chọn các hãng xe bạn có"
                                    multiple=""
                                >
                                    <option value="{{ $item->id }}">
                                        {"{"}
                                        {"{"} $item-&gt;name {"}"}
                                        {"}"}
                                    </option>
                                </select>
                                <p style={{ color: "red", marginTop: 15 }}>
                                    {"{"}
                                    {"{"} $message {"}"}
                                    {"}"}
                                </p>
                            </div>
                        </div>
                        <div className="client row g-3 text-start mt-2">
                            <div className="client col-3">
                                <label htmlFor="inputBrand" className="client col-form-label">
                                    Dịch vụ:<span className="client text_red">*</span>
                                </label>
                            </div>
                            <div className="client col-9">
                                <select
                                    className='form-select'
                                    id="choices-multiple-remove-button-service"
                                    name="service[]"
                                    placeholder="Chọn các dịch vụ bạn có"
                                    multiple=""
                                >
                                    <option value="{{ $item->id }}">
                                        {"{"}
                                        {"{"} $item-&gt;name {"}"}
                                        {"}"}
                                    </option>
                                </select>
                                <p style={{ color: "red", marginTop: 15 }}>
                                    {"{"}
                                    {"{"} $message {"}"}
                                    {"}"}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="client row ">
                        <div className="client col-12 d-flex justify-content-center">
                            <button
                                className="client btn btn-primary mt-4"
                                id="submit_add"
                                type="submit"
                            >
                                Đăng ký garage
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default RegisterGarage