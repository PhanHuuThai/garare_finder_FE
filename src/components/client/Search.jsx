const Search = () => {
    return (
        <div
            className="client container-fluid mb-4 wow fadeIn"
            data-wow-delay="0.1s"
            style={{ padding: 35, background: "#ffecec" }}
        >
            <div className="client container">
                <form action="" method="POST" id="garage_search">
                    <input type="hidden" defaultValue={2} name="action" />
                    <div className="client row g-2">
                        <div className="client col-md-10">
                            <div className="client row g-2">
                                <div className="client col-md-3">
                                    <input
                                        type="text"
                                        name="name"
                                        className="client form-control border-0 py-3"
                                        placeholder="Tên garage"
                                    />
                                </div>
                                <div className="client col-md-3">
                                    <select className="client form-select border-0 py-3" name="address">
                                        <option selected="" disabled="">
                                            Thành phố
                                        </option>
                                        <option value="">

                                        </option>
                                    </select>
                                </div>
                                <div className="client col-md-3">
                                    <select className="client form-select border-0 py-3" name="service">
                                        <option selected="" disabled="">
                                            Dịch vụ
                                        </option>
                                        <option value="">
                                            
                                        </option>
                                    </select>
                                </div>
                                <div className="client col-md-3">
                                    <select className="client form-select border-0 py-3" name="brand">
                                        <option selected="" disabled="">
                                            Hãng xe
                                        </option>
                                        <option value="}">
                                            
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="client col-md-2">
                            <button className="client btn btn-dark border-0 w-100 py-3" type="submit">
                                Tìm kiếm
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}
export default Search