import { Tab } from "@coreui/coreui"
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ModalUserInfo from "./ModalUserInfo";
import classNames from "classnames";
import { Nav, NavItem, TabContent, TabPane } from "reactstrap";


const Profile = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    return (
        <div className="client container-xxl bg-white py-4 px-4">
            <div className="client row">
                <div className="client col-lg-3 col-md-5 col-sm-5 col-12">
                    <div
                        className="client scrollProfile nav d-flex flex-sm-column flex-row flex-nowrap nav-pills py-2 me-3 shadow-sm"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                    >
                        <button
                            className="client btn btn-outline-danger btn_menu_profile border-0 py-3 me-1 h-4 my-1 rounded-1 active"
                            id="v-pills-home-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-home"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-home"
                            aria-selected="true"
                        >
                            <i className="client bi bi-person-fill" />
                            Thông tin cá nhân
                        </button>
                        <button
                            className="client btn btn-outline-danger btn_menu_profile border-0 py-3 me-1 h-4 my-1 rounded-1"
                            id="v-pills-profile-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-profile"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-profile"
                            aria-selected="false"
                        >
                            <i className="client fas fa-car" />
                            Xe của tôi
                        </button>
                        <button
                            className="client btn btn-outline-danger btn_menu_profile border-0 py-3 me-1 h-4 my-1 rounded-1"
                            id="v-pills-messages-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-messages"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-messages"
                            aria-selected="false"
                        >
                            <i className="client fas fa-lock" />
                            Đổi mật khẩu
                        </button>
                        <button
                            className="client btn btn-outline-danger btn_menu_profile border-0 py-3 me-1 h-4 my-1 rounded-1"
                            id="v-pills-settings-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-settings"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-settings"
                            aria-selected="false"
                        >
                            <i className="client fas fa-heart" />
                            Garage yêu thích
                        </button>
                        <button
                            className="client btn btn-outline-danger btn_menu_profile border-0 py-3 me-1 h-4 my-1 rounded-1"
                            id="v-pills-datebook-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-datebook"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-settings"
                            aria-selected="false"
                        >
                            <i className="client far fa-calendar-plus" /> Quản lý lịch đặt
                        </button>
                        <button
                            className="client btn btn-outline-danger btn_menu_profile border-0 py-3 me-1 h-4 my-1 rounded-1"
                            id="v-pills-datehistory-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-datehistory"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-settings"
                            aria-selected="false"
                        >
                            <i className="client far fa-calendar-alt" /> Lịch sử đặt lịch
                        </button>
                        <button
                            className="client btn btn-outline-danger btn_menu_profile border-0 py-3 me-1 h-4 my-1 rounded-1"
                            id="v-pills-chat-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-chat"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-settings"
                            aria-selected="false"
                        >
                            <i className="client fas fa-comments" /> Tin nhắn
                        </button>
                    </div>
                </div>
                <div className="client col-lg-9 col-md-7 col-sm-7 col-12 mt-3">
                    <div className="client tab-content" id="v-pills-tabContent">
                        {/* Thông tin cá nhân */}
                        <div
                            className="client tab-pane fade show active"
                            id="v-pills-home"
                            role="tabpanel"
                            aria-labelledby="v-pills-home-tab"
                        >
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
                                                <p className="client mb-4">
                                                    Quản lý đầy đủ thông tin để bảo mật tài khoản!
                                                </p>
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
                                                        (Nếu bạn muốn cập nhập địa chỉ, vui lòng nhập đầy đủ
                                                        thông tin!)
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
                                                <button className="client btn btn-primary mt-4">
                                                    Cập nhập thông tin
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Column */}
                                </div>
                            </form>
                        </div>
                        {/* Xe của tôi*/}
                        <div
                            className="client tab-pane fade"
                            id="v-pills-profile"
                            role="tabpanel"
                            aria-labelledby="v-pills-profile-tab"
                        >
                            <button className="client btn btn-dark mx-1" id="allMycar">
                                Tất cả
                            </button>
                            <button className="client btn btn-primary" id="createMycar">
                                Thêm xe
                            </button>
                            <div className="client row g-4 mt-1" id="allcar">
                                <div className="client col-lg-5 col-md-10">
                                    <div className="client property-item rounded overflow-hidden">
                                        <div className="client position-relative overflow-hidden">
                                            <a href="">
                                                <img
                                                    className="client img-fluid"
                                                    src=""
                                                    alt=""
                                                />
                                            </a>
                                            <div className="client bg-white rounded-top text_red position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                            </div>
                                        </div>
                                        <div className="client p-4 pb-0">
                                            <h5 className="client text_red mb-3">

                                            </h5>
                                            <a className="client d-block h5 mb-2" href="">

                                            </a>
                                            <p>

                                            </p>
                                        </div>
                                        <div className="client d-flex">
                                            <small className="client flex-fill text-start py-2 ms-4 me-1">
                                                <button
                                                    type="button"
                                                    className="client btn btn-dark w-100 d-flex justify-content-center"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#staticBackdrop"
                                                >
                                                    Cập nhật
                                                </button>
                                                <div
                                                    className="client modal fade mt-2"
                                                    id="staticBackdrop"
                                                    data-bs-backdrop="static"
                                                    data-bs-keyboard="false"
                                                    tabIndex={-1}
                                                    aria-labelledby="staticBackdropLabel"
                                                    aria-hidden="true"
                                                >
                                                    <div className="client modal-dialog modal-md modal-dialog-centered">
                                                        <div className="client modal-content">
                                                            <div className="client modal-header">
                                                                <h5
                                                                    className="client modal-title text-center"
                                                                    id="staticBackdropLabel"
                                                                >
                                                                    Cập nhật thông tin xe
                                                                </h5>
                                                                <button
                                                                    type="button"
                                                                    className="client btn-close"
                                                                    data-bs-dismiss="modal"
                                                                    aria-label="Close"
                                                                />
                                                            </div>
                                                            <div className="client modal-body ">
                                                                <form
                                                                    action=""
                                                                    method="POST"
                                                                    id="edit-car"
                                                                    encType="multipart/form-data"
                                                                >
                                                                    <input
                                                                        type="hidden"
                                                                        defaultValue=""
                                                                        name="id_car"
                                                                    />
                                                                    <div className="client mb-3 text-start">
                                                                        <label
                                                                            htmlFor="image_edit_car"
                                                                            className="client form-label"
                                                                        >
                                                                            Ảnh:
                                                                            <span className="client text_red">*</span>
                                                                        </label>
                                                                        <input
                                                                            type="file"
                                                                            className="client form-control"
                                                                            id="image_edit_car"
                                                                            name="image"
                                                                            aria-describedby="file-error"
                                                                        />
                                                                        <div
                                                                            id="file-error"
                                                                            className="client form-text text_red"
                                                                        ></div>
                                                                    </div>
                                                                    <div className="client mb-3 text-start">
                                                                        <label
                                                                            htmlFor="license_edit"
                                                                            className="client form-label"
                                                                        >
                                                                            Biển số:
                                                                            <span className="client text_red">*</span>
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="client form-control"
                                                                            id="license_edit"
                                                                            name="license"
                                                                            defaultValue=""
                                                                            aria-describedby="license-edit-error"
                                                                        />
                                                                        <div
                                                                            id="license-edit-error"
                                                                            className="client form-text text_red"
                                                                        ></div>
                                                                    </div>
                                                                    <div className="client mb-3 text-start">
                                                                        <label
                                                                            htmlFor="name_car_edit"
                                                                            className="client form-label"
                                                                        >
                                                                            Tên xe:
                                                                            <span className="client text_red" />
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="client form-control"
                                                                            id="name_car_edit"
                                                                            name="name_car_edit"
                                                                            aria-describedby="name-car-error"
                                                                            disabled=""
                                                                            defaultValue=""
                                                                        />
                                                                        <div
                                                                            id="name-car-error"
                                                                            className="client form-text text_red"
                                                                        ></div>
                                                                    </div>
                                                                    <div className="client mb-3 text-start">
                                                                        <label
                                                                            htmlFor="brand_car_edit"
                                                                            className="client form-label"
                                                                        >
                                                                            Hãng xe:
                                                                            <span className="client text_red" />
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="client form-control"
                                                                            id="brand_car_edit"
                                                                            name="brand_car_edit"
                                                                            disabled=""
                                                                            aria-describedby="brand-car-error"
                                                                            defaultValue=""
                                                                        />
                                                                        <div
                                                                            id="brand-car-error"
                                                                            className="client form-text text_red"
                                                                        ></div>
                                                                    </div>
                                                                    <div className="client mb-3 text-start">
                                                                        <label
                                                                            htmlFor="type_car_edit"
                                                                            className="client form-label"
                                                                        >
                                                                            Kiểu xe:
                                                                            <span className="client text_red" />
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="client form-control"
                                                                            id="type_car_edit"
                                                                            name="type_car_edit"
                                                                            disabled=""
                                                                            aria-describedby="brand-car-error"
                                                                            defaultValue=""
                                                                        />
                                                                        <div
                                                                            id="type-car-error"
                                                                            className="client form-text text_red"
                                                                        ></div>
                                                                    </div>
                                                                    <div className="client mb-3 d-flex align-items-center justify-content-center">
                                                                        <button
                                                                            className="client btn btn-primary"
                                                                            type="submit"
                                                                        >
                                                                            Cập nhật
                                                                        </button>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </small>
                                            <small className="client flex-fill text-start py-2 me-4 ms-1">
                                                <button className="client btn btn-primary w-100 d-flex justify-content-center">
                                                    Xóa
                                                </button>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="client form-car" id="form-car">
                                <form
                                    className="client form-block mt-3"
                                    id="form_mycar"
                                    action=""
                                    method="post"
                                    encType="multipart/form-data"
                                >
                                    <div className="client row">
                                        <div className="client col-lg-4 col-xlg-3 col-md-12">
                                            <div className="client ">
                                                <div className="client img-fluid">
                                                    <img
                                                        width="100%"
                                                        height="80%"
                                                        alt="user"
                                                        className="client img-car"
                                                        id="img-car"
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
                                                            id="imageCar"
                                                            accept=".jpg, .jpeg, .png, .webp"
                                                        />
                                                        <span className="client text-danger" id="imageCarErrorMsg" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="client col-lg-8 col-xlg-9 col-md-12 content-in-tab">
                                            <div className="client col-12">
                                                <div className="client mb-4 mt-2">
                                                    <h4 lass="display-5 mb-4">Xe của tôi</h4>
                                                    <p className="client mb-4">Thêm xe trước khi đặt lịch!</p>
                                                </div>
                                            </div>
                                            <div className="client row g-3 align-items-center">
                                                <div className="client col-3">
                                                    <label htmlFor="inputBrand" className="client col-form-label">
                                                        Hãng xe:<span className="client text_red">*</span>
                                                    </label>
                                                </div>
                                                <div className="client col-9">
                                                    <select
                                                        className="client form-select"
                                                        name="brand"
                                                        id="brand"
                                                        aria-label="Default select example"
                                                    >
                                                        <option value="">
                                                            name
                                                        </option>
                                                    </select>
                                                    <span className="client text-danger" id="brandErrorMsg" />
                                                </div>
                                            </div>
                                            <div className="client row g-3 align-items-center mt-2">
                                                <div className="client col-3">
                                                    <label htmlFor="inputNameCar" className="client col-form-label">
                                                        Mẫu xe:<span className="client text_red">*</span>
                                                    </label>
                                                </div>
                                                <div className="client col-9">
                                                    <input
                                                        type="text"
                                                        id="inputNameCar"
                                                        name="name"
                                                        className="client form-control"
                                                        defaultValue=""
                                                    />
                                                    <span className="client text-danger" id="nameCarErrorMsg" />
                                                </div>
                                            </div>
                                            <div className="client row g-3 align-items-center mt-2">
                                                <div className="client col-3">
                                                    <label htmlFor="inputType" className="client col-form-label">
                                                        Loại xe:<span className="client text_red">*</span>
                                                    </label>
                                                </div>
                                                <div className="client col-9">
                                                    <input
                                                        type="text"
                                                        id="inputType"
                                                        name="type"
                                                        className="client form-control"
                                                        defaultValue=""
                                                    />
                                                    <span className="client text-danger" id="typeErrorMsg" />
                                                </div>
                                            </div>
                                            <div className="client row g-3 align-items-center mt-2">
                                                <div className="client col-3">
                                                    <label htmlFor="inputLicense" className="client col-form-label">
                                                        Biển số:<span className="client text_red">*</span>
                                                    </label>
                                                </div>
                                                <div className="client col-9">
                                                    <input
                                                        type="text"
                                                        id="inputLicense"
                                                        name="license"
                                                        className="client form-control"
                                                        defaultValue=""
                                                    />
                                                    <span className="client text-danger" id="licenseErrorMsg" />
                                                </div>
                                            </div>
                                            <div className="client row g-3 align-items-center">
                                                <div className="client col-3"></div>
                                                <div className="client col-9">
                                                    <button className="client btn btn-primary mt-4">Thêm xe</button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Column */}
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* Đổi mật khẩu */}
                        <div
                            className="client tab-pane fade"
                            id="v-pills-messages"
                            role="tabpanel"
                            aria-labelledby="v-pills-messages-tab"
                        >
                            <form
                                className="client form-block mt-3"
                                id="form_repass"
                                action=""
                                method="post"
                                encType="multipart/form-data"
                            >
                                <div className="client row">
                                    {/* Column */}
                                    <div className="client col-lg-8 col-xlg-8 col-md-12 content-in-tab">
                                        <div className="client col-12">
                                            <div className="client mb-4">
                                                <h4 lass="display-5 mb-4">Đổi mật khẩu</h4>
                                                <p className="client mb-4">Thay đổi mật khẩu!</p>
                                            </div>
                                        </div>
                                        {/* <span className="client text-danger" id="">
                                            Bạn đang sử dụng tài khoản từ bên thứ 3
                                        </span> */}
                                        <div className="client row g-3 align-items-center mt-2">
                                            <div className="client col-3">
                                                <label
                                                    htmlFor="current_password"
                                                    className="client col-form-label"
                                                >
                                                    Mật khẩu cũ:<span className="client text_red">*</span>
                                                </label>
                                            </div>
                                            <div className="client col-9">
                                                <input
                                                    type="password"
                                                    id="current_password"
                                                    name="current_password"
                                                    className="client form-control"
                                                />
                                                <span className="client text-danger" id="curPassErrorMsg" />
                                            </div>
                                        </div>
                                        <div className="client row g-3 align-items-center mt-2">
                                            <div className="client col-3">
                                                <label htmlFor="password" className="client col-form-label">
                                                    Mật khẩu mới:<span className="client text_red">*</span>
                                                </label>
                                            </div>
                                            <div className="client col-9">
                                                <input
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    className="client form-control"
                                                />
                                                <span className="client text-danger" id="passErrorMsg" />
                                            </div>
                                        </div>
                                        <div className="client row g-3 align-items-center mt-2">
                                            <div className="client col-3">
                                                <label
                                                    htmlFor="password_confirmation"
                                                    className="client col-form-label"
                                                >
                                                    Xác nhận mật khẩu:<span className="client text_red">*</span>
                                                </label>
                                            </div>
                                            <div className="client col-9">
                                                <input
                                                    type="password"
                                                    id="password_confirmation"
                                                    name="password_confirmation"
                                                    className="client form-control"
                                                />
                                                <span className="client text-danger" id="cpassErrorMsg" />
                                            </div>
                                        </div>
                                        <div className="client row g-3 align-items-center">
                                            <div className="client col-3"></div>
                                            <div className="client col-9">
                                                <button className="client btn btn-primary mt-4">
                                                    Thay đổi mật khẩu
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Column */}
                                </div>
                            </form>
                        </div>
                        {/* garage yêu thích */}
                        <div
                            className="client tab-pane fade"
                            id="v-pills-settings"
                            role="tabpanel"
                            aria-labelledby="v-pills-settings-tab"
                        >
                            <div className="client row g-4">
                                <div
                                    className="client col-xl-4 col-lg-6 col-md-12 card_favourite"
                                    id="favourite"
                                >
                                    <div className="client property-item rounded overflow-hidden">
                                        <div className="client position-relative overflow-hidden">
                                            <a href="">
                                                <img
                                                    className="client img-fluid"
                                                    style={{ width: "100%", height: "80%" }}
                                                    src=""
                                                    alt=""
                                                />
                                            </a>
                                            <div className="client bg-white rounded-top text_red position-absolute start-0 bottom-0 mx-4 pt-1 px-2">
                                                <form
                                                    id="delete_favourite"
                                                    action=""
                                                    method="POST"
                                                >
                                                    <input
                                                        type="hidden"
                                                        name="id_favourite"
                                                        defaultValue=""
                                                        className="client id_favourite"
                                                    />
                                                    <input
                                                        type="hidden"
                                                        defaultValue=""
                                                        name="key"
                                                    />
                                                    <button
                                                        className="client text_red"
                                                        type="submit"
                                                        style={{
                                                            backgroundColor: "transparent",
                                                            border: "none",
                                                            width: 39
                                                        }}
                                                    >
                                                        <i className="client bi bi-heart-fill font-weight-bold text-danger" />
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="client p-3 pb-0">
                                            <h5 className="client text_red mb-3">$12,345</h5>
                                            <a className="client d-block h5 mb-2" href="" style={{ height: 48 }}>

                                            </a>
                                            <p
                                                className="client mt-2 "
                                                style={{
                                                    height: 48,
                                                    overflow: "hidden",
                                                    display: "-webkit-box",
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: "vertical"
                                                }}
                                            >
                                                <i className="client fa fa-map-marker-alt text_red me-2" />

                                            </p>
                                        </div>
                                        <div className="client d-flex">
                                            <small className="client flex-fill text-start mx-3">Đánh giá</small>
                                            <small className="client flex-fill text-start pb-2 ms-5">
                                                <i className="client bi bi-star-fill text_red ms-4" />
                                                <i className="client bi bi-star-fill text_red" />
                                                <i className="client bi bi-star-fill text_red" />
                                                <i className="client bi bi-star-fill text_red" />
                                                <i className="client bi bi-star-fill text_red" />5
                                            </small>
                                        </div>
                                        <div className="client d-flex border-top mt-2">
                                            <small className="client flex-fill text-start border-end py-2 mx-4">
                                                <i className="client far fa-calendar-plus text_red me-3" />
                                                <a href="" className="client text_red">
                                                    Đặt lịch ngay
                                                </a>
                                            </small>
                                            <small className="client flex-fill text-start py-2">
                                                <i className="client bi bi-chat-dots-fill text_red me-2 d-inline-block" />
                                                <form
                                                    action=""
                                                    className="client d-inline-block"
                                                    method="POST"
                                                >
                                                    <input
                                                        type="hidden"
                                                        name="id_garage"
                                                        defaultValue=""
                                                    />
                                                    <button
                                                        className="client text_red"
                                                        type="submit"
                                                        style={{
                                                            backgroundColor: "transparent",
                                                            border: "none"
                                                        }}
                                                    >
                                                        Nhắn tin
                                                    </button>
                                                </form>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Lịch đặt */}
                        <div
                            className="client tab-pane fade"
                            id="v-pills-datebook"
                            role="tabpanel"
                            aria-labelledby="v-pills-datebook-tab"
                        >
                            <div className="client d-flex flex-row-reverse">
                                <div
                                    className="client btn btn-outline-secondary rounded-0 border border-dark"
                                    id="canceled"
                                >
                                    Đã hủy
                                </div>
                                <div
                                    className="client btn btn-outline-danger rounded-0 border border-dark border-right-0"
                                    id="refused"
                                >
                                    Đã từ chối
                                </div>
                                <div
                                    className="client btn btn-outline-success rounded-0 border border-dark border-right-0"
                                    id="confirmed"
                                >
                                    Đã xác nhận
                                </div>
                                <div
                                    className="client btn btn-outline-warning rounded-0 border border-dark border-left-0 border-right-0"
                                    id="waited"
                                >
                                    Chờ xác nhận
                                </div>
                                <div
                                    className="client btn btn-outline-info rounded-0 border border-dark border-right-0"
                                    id="all_order"
                                >
                                    Tất cả
                                </div>
                            </div>
                            <div className="client mt-4" id="card_order">
                                <div className="client row g-3 mt-3">
                                    <div className="client col-lg-5 col-sm-12" style={{ height: 216 }}>
                                        <img
                                            style={{ height: "100%", width: "100%" }}
                                            className="client img-fluid rounded-3"
                                            src=""
                                            alt=""
                                        />
                                    </div>
                                    <div className="client col-lg-7 col-sm-12" style={{ height: 216 }}>
                                        <div className="client d-block">
                                            <h6 className="client mb-3 d-inline-block float-start">

                                            </h6>
                                            <div className="client mb-3 d-inline-block float-end">
                                                {/* status cho xac nhan */}
                                                <span className="client badge rounded-pill bg-warning font-bold">
                                                    Chờ xác nhận
                                                </span>
                                                <input
                                                    type="hidden"
                                                    id="id_booking"
                                                    defaultValue=""
                                                />
                                                <span
                                                    id="cancel-booking"
                                                    className="client badge rounded-pill bg-danger font-bold"
                                                    role="button"
                                                >
                                                    Hủy đơn
                                                </span>
                                                {/* @elseif($item-&gt;status == 2) huy don */}
                                                <span className="client badge rounded-pill bg-success font-bold">
                                                    Đã xác nhận
                                                </span>
                                                {/* @elseif($item-&gt;status == 3) */}
                                                <span className="client badge rounded-pill bg-danger font-bold">
                                                    Đã từ chối
                                                </span>
                                                {/* @elseif($item-&gt;status == 4) */}
                                                <span className="client badge rounded-pill bg-danger font-bold">
                                                    Đã hủy
                                                </span>
                                            </div>
                                        </div>
                                        <div className="client float-start">
                                            <p style={{ fontSize: 14, margin: "0 0 9px 0" }}>
                                                <span style={{ width: 40 }}>
                                                    <i className="client bi bi-geo-alt-fill text_red me-2" />
                                                </span>

                                            </p>
                                            <p style={{ fontSize: 14, margin: "0 0 9px 0" }}>
                                                <span style={{ width: 40 }}>
                                                    <i className="client fa fa-phone-alt text_red me-2" />
                                                </span>

                                            </p>
                                            <p style={{ fontSize: 14, margin: "0 0 9px 0" }}>
                                                <span style={{ width: 40 }}>
                                                    <i className="client bi bi-clock-fill text_red me-2" />
                                                </span>
                                                Giờ mở cửa - đóng cửa:

                                            </p>
                                        </div>
                                        <div className="client float-start mt-1">
                                            <p style={{ fontSize: 14, margin: "0 0 9px 0" }}>
                                                <span style={{ width: 40 }}>
                                                    <b>Xe: </b>
                                                </span>

                                            </p>
                                            <p style={{ fontSize: 14, margin: "0 0 9px 0" }}>
                                                <span style={{ width: 40 }}>
                                                    <b>Loại dịch vụ:</b>
                                                </span>

                                            </p>
                                            <p style={{ fontSize: 14, margin: "0 0 9px 0" }}>
                                                <span style={{ width: 40 }}>
                                                    <b>Thời gian:</b>
                                                </span>

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Lịch sử đặt */}
                        <div
                            className="client tab-pane fade"
                            id="v-pills-datehistory"
                            role="tabpanel"
                            aria-labelledby="v-pills-history-tab"
                        >
                            <div className="client " id="card_order">
                                <div className="client row g-3 mt-5">
                                    <div className="client col-lg-5 col-sm-12" style={{ height: 216 }}>
                                        <img
                                            style={{ height: "100%", width: "100%" }}
                                            className="client img-fluid rounded-3"
                                            src=""
                                            alt=""
                                        />
                                    </div>
                                    <div className="client col-lg-7 col-sm-12" style={{ height: 216 }}>
                                        <div className="client d-block">
                                            <h6 className="client mb-3 d-inline-block float-start">

                                            </h6>
                                            <div className="client mb-3 d-inline-block float-end">
                                                <span className="client badge rounded-pill bg-success font-bold">
                                                    Đã hoành thành
                                                </span>
                                            </div>
                                        </div>
                                        <div className="client float-start">
                                            <p style={{ fontSize: 14, margin: "0 0 9px 0" }}>
                                                <span style={{ width: 40 }}>
                                                    <i className="client bi bi-geo-alt-fill text_red me-2" />
                                                </span>

                                            </p>
                                            <p style={{ fontSize: 14, margin: "0 0 9px 0" }}>
                                                <span style={{ width: 40 }}>
                                                    <i className="client fa fa-phone-alt text_red me-2" />
                                                </span>

                                            </p>
                                            <p style={{ fontSize: 14, margin: "0 0 9px 0" }}>
                                                <span style={{ width: 40 }}>
                                                    <i className="client bi bi-clock-fill text_red me-2" />
                                                </span>
                                                Giờ mở cửa - đóng cửa: 

                                            </p>
                                        </div>
                                        <div className="client float-start mt-1">
                                            <p style={{ fontSize: 14, margin: "0 0 9px 0" }}>
                                                <span style={{ width: 40 }}>
                                                    <b>Xe:</b>
                                                </span>

                                            </p>
                                            <p style={{ fontSize: 14, margin: "0 0 9px 0" }}>
                                                <span style={{ width: 40 }}>
                                                    <b>Dịch vụ:</b>
                                                </span>

                                            </p>
                                            <p style={{ fontSize: 14, margin: "0 0 9px 0" }}>
                                                <span style={{ width: 40 }}>
                                                    <b>Thời gian:</b>
                                                </span>

                                            </p>
                                            <button
                                                type="button"
                                                className="client btn btn-outline-secondary mt-1 me-2"
                                                data-bs-toggle="modal"
                                                data-bs-target="#staticBackdrop0"
                                            >
                                                <i className="client bi bi-star-fill" />
                                                Đánh giá
                                            </button>
                                            <button
                                                type="button"
                                                className="client btn btn-outline-danger mt-1 me-2"
                                                data-bs-toggle="modal"
                                                data-bs-target="#staticBackdrop1"
                                            >
                                                <i className="client bi bi-flag-fill" />
                                                Báo cáo
                                            </button>
                                            <button
                                                type="button"
                                                className="client btn btn-outline-info mt-1 me-2"
                                                data-bs-toggle="modal"
                                                data-bs-target="#staticBackdrop2"
                                            >
                                                <i className="client bi bi-flag-fill" />
                                                Chi tiết
                                            </button>
                                            <div
                                                className="client modal fade mt-2"
                                                id="staticBackdrop0"
                                                data-bs-backdrop="static"
                                                data-bs-keyboard="false"
                                                tabIndex={-1}
                                                aria-labelledby="staticBackdropLabel"
                                                aria-hidden="true"
                                            >
                                                <div className="client modal-dialog modal-md modal-dialog-centered">
                                                    <div className="client modal-content">
                                                        <div className="client modal-header">
                                                            <h5
                                                                className="client modal-title text-center"
                                                                id="staticBackdropLabel"
                                                            >
                                                                Đánh giá
                                                            </h5>
                                                            <button
                                                                type="button"
                                                                className="client btn-close"
                                                                data-bs-dismiss="modal"
                                                                aria-label="Close"
                                                            />
                                                        </div>
                                                        <div className="client modal-body">
                                                            <form
                                                                action=""
                                                                method="POST"
                                                                id="form_rate"
                                                                encType="multipart/form-data"
                                                            >
                                                                {/* Column */}
                                                                <input
                                                                    type="hidden"
                                                                    name="id_garage_rate"
                                                                    defaultValue=""
                                                                />
                                                                <input
                                                                    type="hidden"
                                                                    name="id_order_rate"
                                                                    defaultValue=""
                                                                />
                                                                <div className="client mb-3 text-start">
                                                                    <div className="client container-wrapper">
                                                                        <div className="client container d-flex align-items-center justify-content-center">
                                                                            <div className="client row justify-content-center">
                                                                                {/* star rating */}
                                                                                <div className="client rating-wrapper">
                                                                                    {/* star 5 */}
                                                                                    <input
                                                                                        type="radio"
                                                                                        id="5-star-rating"
                                                                                        name="star_rating"
                                                                                        defaultValue={5}
                                                                                    />
                                                                                    <label
                                                                                        htmlFor="5-star-rating"
                                                                                        className="client star-rating"
                                                                                    >
                                                                                        <i className="client fas fa-star d-inline-block" />
                                                                                    </label>
                                                                                    {/* star 4 */}
                                                                                    <input
                                                                                        type="radio"
                                                                                        id="4-star-rating"
                                                                                        name="star_rating"
                                                                                        defaultValue={4}
                                                                                    />
                                                                                    <label
                                                                                        htmlFor="4-star-rating"
                                                                                        className="client star-rating star"
                                                                                    >
                                                                                        <i className="client fas fa-star d-inline-block" />
                                                                                    </label>
                                                                                    {/* star 3 */}
                                                                                    <input
                                                                                        type="radio"
                                                                                        id="3-star-rating"
                                                                                        name="star_rating"
                                                                                        defaultValue={3}
                                                                                    />
                                                                                    <label
                                                                                        htmlFor="3-star-rating"
                                                                                        className="client star-rating star"
                                                                                    >
                                                                                        <i className="client fas fa-star d-inline-block" />
                                                                                    </label>
                                                                                    {/* star 2 */}
                                                                                    <input
                                                                                        type="radio"
                                                                                        id="2-star-rating"
                                                                                        name="star_rating"
                                                                                        defaultValue={2}
                                                                                    />
                                                                                    <label
                                                                                        htmlFor="2-star-rating"
                                                                                        className="client star-rating star"
                                                                                    >
                                                                                        <i className="client fas fa-star d-inline-block" />
                                                                                    </label>
                                                                                    {/* star 1 */}
                                                                                    <input
                                                                                        type="radio"
                                                                                        id="1-star-rating"
                                                                                        name="star_rating"
                                                                                        defaultValue={1}
                                                                                    />
                                                                                    <label
                                                                                        htmlFor="1-star-rating"
                                                                                        className="client star-rating star"
                                                                                    >
                                                                                        <i className="client fas fa-star d-inline-block" />
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <p
                                                                            className="client text-danger text-center mt-2"
                                                                            id="inputRatingError"
                                                                        ></p>
                                                                    </div>
                                                                </div>
                                                                <div className="client mb-3 text-start">
                                                                    <label htmlFor="rate_text" className="client form-label">
                                                                        Bình luận đánh giá:{""}
                                                                        <span className="client text_red">*</span>
                                                                    </label>
                                                                    <textarea
                                                                        className="client form-control"
                                                                        name="rate_text"
                                                                        id="rate_text"
                                                                        rows={3}
                                                                        defaultValue={""}
                                                                    />
                                                                    <p
                                                                        className="client text-danger mt-2"
                                                                        id="inputTextRatingError"
                                                                    ></p>
                                                                </div>
                                                                <div className="client mb-3 d-flex align-items-center justify-content-center">
                                                                    <button className="client btn btn-primary" type="submit">
                                                                        Đánh giá
                                                                    </button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="client modal fade mt-2"
                                                id="staticBackdrop1"
                                                data-bs-backdrop="static"
                                                data-bs-keyboard="false"
                                                tabIndex={-1}
                                                aria-labelledby="staticBackdropLabel"
                                                aria-hidden="true"
                                            >
                                                <div className="client modal-dialog modal-md modal-dialog-centered">
                                                    <div className="client modal-content">
                                                        <div className="client modal-header">
                                                            <h5
                                                                className="client modal-title text-center"
                                                                id="staticBackdropLabel"
                                                            >
                                                                Báo cáo
                                                            </h5>
                                                            <button
                                                                type="button"
                                                                className="client btn-close"
                                                                data-bs-dismiss="modal"
                                                                aria-label="Close"
                                                            />
                                                        </div>
                                                        <div className="client modal-body">
                                                            <form
                                                                action=""
                                                                method="POST"
                                                                id="form_report"
                                                                encType="multipart/form-data"
                                                            >
                                                                @csrf
                                                                <input
                                                                    type="hidden"
                                                                    name="id_order_report"
                                                                    defaultValue=""
                                                                />
                                                                <input
                                                                    type="hidden"
                                                                    name="id_garage_report"
                                                                    defaultValue=""
                                                                />
                                                                {/* Column */}
                                                                <div className="client mb-3 text-start">
                                                                    <label htmlFor="rate_text" className="client form-label">
                                                                        Ảnh:
                                                                        <span className="client text_red">*</span>
                                                                    </label>
                                                                    <input
                                                                        type="file"
                                                                        className="client form-control"
                                                                        id="image_report"
                                                                        name="image_report"
                                                                    />
                                                                    <p
                                                                        className="client text-danger mt-2"
                                                                        id="inputImageReportError"
                                                                    ></p>
                                                                </div>
                                                                <div className="client mb-3 text-start">
                                                                    <label htmlFor="rate_text" className="client form-label">
                                                                        Nội dung báo cáo:{" "}
                                                                        <span className="client text_red">*</span>
                                                                    </label>
                                                                    <textarea
                                                                        className="client form-control"
                                                                        name="text_report"
                                                                        id="text_report"
                                                                        rows={3}
                                                                        defaultValue={""}
                                                                    />
                                                                    <p
                                                                        className="client text-danger mt-2"
                                                                        id="inputContentReportError"
                                                                    ></p>
                                                                </div>
                                                                <div className="client mb-3 d-flex align-items-center justify-content-center">
                                                                    <button className="client btn btn-primary" type="submit">
                                                                        Báo cáo
                                                                    </button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="client modal fade mt-2"
                                                id="staticBackdrop2"
                                                data-bs-keyboard="false"
                                                tabIndex={-1}
                                                aria-labelledby="staticBackdropLabel"
                                                aria-hidden="true"
                                            >
                                                <div className="client modal-dialog modal-lg modal-dialog-centered">
                                                    <div className="client modal-content">
                                                        <div className="client modal-header">
                                                            <h5
                                                                className="client modal-title text-center"
                                                                id="staticBackdropLabel"
                                                            >
                                                                Chi tiết đơn đặt lịch
                                                            </h5>
                                                            <button
                                                                type="button"
                                                                className="client btn-close"
                                                                data-bs-dismiss="modal"
                                                                aria-label="Close"
                                                            />
                                                        </div>
                                                        <div className="client modal-body ">
                                                            <div className="client row mb-3 text-start">
                                                                <div className="client col-sm-6">
                                                                    <div className="client row">
                                                                        <div className="client col-sm-5">
                                                                            <span className="client fw-bold">Họ và tên:</span>
                                                                        </div>
                                                                        <div className="client col-sm-7">
                                                                            <span>
                                                                                name
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="client col-sm-6">
                                                                    <div className="client row">
                                                                        <div className="client col-sm-5">
                                                                            <span className="client fw-bold">
                                                                                Số điện thoại:
                                                                            </span>
                                                                        </div>
                                                                        <div className="client col-sm-7">
                                                                            <span>
                                                                                phone
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="client row mb-3 text-start">
                                                                <div className="client col-sm-6">
                                                                    <div className="client row">
                                                                        <div className="client col-sm-5">
                                                                            <span className="client fw-bold">Tên xe:</span>
                                                                        </div>
                                                                        <div className="client col-sm-7">
                                                                            <span>
                                                                                carname
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="client col-sm-6">
                                                                    <div className="client row">
                                                                        <div className="client col-sm-5">
                                                                            <span className="client fw-bold">Hãng xe:</span>
                                                                        </div>
                                                                        <div className="client col-sm-7">
                                                                            <span>

                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="client row mb-3 text-start">
                                                                <div className="client col-sm-6">
                                                                    <div className="client row">
                                                                        <div className="client col-sm-5">
                                                                            <span className="client fw-bold">Dịch vụ:</span>
                                                                        </div>
                                                                        <div className="client col-sm-7">
                                                                            <span>

                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="client col-sm-6">
                                                                    <div className="client row">
                                                                        <div className="client col-sm-5">
                                                                            <span className="client fw-bold">Biển số:</span>
                                                                        </div>
                                                                        <div className="client col-sm-7">
                                                                            <span>

                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="client row mb-3 text-start">
                                                                <div className="client col-sm-6">
                                                                    <div className="client row">
                                                                        <div className="client col-sm-5">
                                                                            <span className="client fw-bold">Thời gian:</span>
                                                                        </div>
                                                                        <div className="client col-sm-7">
                                                                            <span>

                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="client col-sm-6">
                                                                    <div className="client row">
                                                                        <div className="client col-sm-5">
                                                                            <span className="client fw-bold">Đặt lúc:</span>
                                                                        </div>
                                                                        <div className="client col-sm-7">
                                                                            <span>

                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="client row mb-3 text-start">
                                                                <div className="client col-sm-6">
                                                                    <div className="client row">
                                                                        <div className="client col-sm-5">
                                                                            <span className="client fw-bold">
                                                                                Tổng số lượng:
                                                                            </span>
                                                                        </div>
                                                                        <div className="client col-sm-7">

                                                                            <span>

                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="client col-sm-6">
                                                                    <div className="client row">
                                                                        <div className="client col-sm-5">
                                                                            <span className="client fw-bold">Tổng tiền:</span>
                                                                        </div>
                                                                        <div className="client col-sm-7">

                                                                            <span>
                                                                                00000
                                                                                VNĐ
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <h5>Chi tiết dịch vụ</h5>
                                                            <div className="client table-responsive">
                                                                <table className="client table text-nowrap">
                                                                    <thead>
                                                                        <tr>
                                                                            <th className="client border-top-0">Tên thiết bị</th>
                                                                            <th className="client border-top-0">Số lượng</th>
                                                                            <th className="client border-top-0">
                                                                                Giá tiền/thiết bị
                                                                            </th>
                                                                            <th className="client border-top-0">Ghí chú</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody id="body_table">
                                                                        <tr>
                                                                            <td>
                                                                                <div className="client col-md-12 p-0">
                                                                                    <p>
                                                                                        name
                                                                                    </p>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div className="client col-md-12 p-0">
                                                                                    <p>
                                                                                        qty
                                                                                    </p>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div className="client col-md-12 p-0">
                                                                                    <p>
                                                                                        price
                                                                                        VNĐ
                                                                                    </p>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div className="client col-md-12 p-0">
                                                                                    <p>
                                                                                        note
                                                                                    </p>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="client tab-pane fade"
                            id="v-pills-chat"
                            role="tabpanel"
                            aria-labelledby="v-pills-chat-tab"
                        >
                            chat...
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Profile