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
        <div className="container-xxl bg-white py-4 px-4">
            <div className="row">
                <div className="col-lg-3 col-md-5 col-sm-5 col-12">
                    <div
                        className="scrollProfile nav d-flex flex-sm-column flex-row flex-nowrap nav-pills py-2 me-3 shadow-sm"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                    >
                        <button
                            className="btn btn-outline-danger btn_menu_profile border-0 py-3 me-1 h-4 my-1 rounded-1 active"
                            id="v-pills-home-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-home"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-home"
                            aria-selected="true"
                        >
                            <i className="bi bi-person-fill" />
                            Thông tin cá nhân
                        </button>
                        <button
                            className="btn btn-outline-danger btn_menu_profile border-0 py-3 me-1 h-4 my-1 rounded-1"
                            id="v-pills-profile-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-profile"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-profile"
                            aria-selected="false"
                        >
                            <i className="fas fa-car" />
                            Xe của tôi
                        </button>
                        <button
                            className="btn btn-outline-danger btn_menu_profile border-0 py-3 me-1 h-4 my-1 rounded-1"
                            id="v-pills-messages-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-messages"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-messages"
                            aria-selected="false"
                        >
                            <i className="fas fa-lock" />
                            Đổi mật khẩu
                        </button>
                        <button
                            className="btn btn-outline-danger btn_menu_profile border-0 py-3 me-1 h-4 my-1 rounded-1"
                            id="v-pills-settings-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-settings"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-settings"
                            aria-selected="false"
                        >
                            <i className="fas fa-heart" />
                            Garage yêu thích
                        </button>
                        <button
                            className="btn btn-outline-danger btn_menu_profile border-0 py-3 me-1 h-4 my-1 rounded-1"
                            id="v-pills-datebook-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-datebook"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-settings"
                            aria-selected="false"
                        >
                            <i className="far fa-calendar-plus" /> Quản lý lịch đặt
                        </button>
                        <button
                            className="btn btn-outline-danger btn_menu_profile border-0 py-3 me-1 h-4 my-1 rounded-1"
                            id="v-pills-datehistory-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-datehistory"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-settings"
                            aria-selected="false"
                        >
                            <i className="far fa-calendar-alt" /> Lịch sử đặt lịch
                        </button>
                        <button
                            className="btn btn-outline-danger btn_menu_profile border-0 py-3 me-1 h-4 my-1 rounded-1"
                            id="v-pills-chat-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-chat"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-settings"
                            aria-selected="false"
                        >
                            <i className="fas fa-comments" /> Tin nhắn
                        </button>
                    </div>
                </div>
                <div className="col-lg-9 col-md-7 col-sm-7 col-12 mt-3">
                    <div className="tab-content" id="v-pills-tabContent">
                        {/* Thông tin cá nhân */}
                        <div
                            className="tab-pane fade show active"
                            id="v-pills-home"
                            role="tabpanel"
                            aria-labelledby="v-pills-home-tab"
                        >
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
                                                <p className="mb-4">
                                                    Quản lý đầy đủ thông tin để bảo mật tài khoản!
                                                </p>
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
                                                        (Nếu bạn muốn cập nhập địa chỉ, vui lòng nhập đầy đủ
                                                        thông tin!)
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
                                                <button className="btn btn-primary mt-4">
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
                            className="tab-pane fade"
                            id="v-pills-profile"
                            role="tabpanel"
                            aria-labelledby="v-pills-profile-tab"
                        >
                            <button className="btn btn-dark mx-1" id="allMycar">
                                Tất cả
                            </button>
                            <button className="btn btn-primary" id="createMycar">
                                Thêm xe
                            </button>
                            <div className="row g-4 mt-1" id="allcar">
                                <div className="col-lg-5 col-md-10">
                                    <div className="property-item rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <a href="">
                                                <img
                                                    className="img-fluid"
                                                    src=""
                                                    alt=""
                                                />
                                            </a>
                                            <div className="bg-white rounded-top text_red position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                            </div>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text_red mb-3">

                                            </h5>
                                            <a className="d-block h5 mb-2" href="">

                                            </a>
                                            <p>

                                            </p>
                                        </div>
                                        <div className="d-flex">
                                            <small className="flex-fill text-start py-2 ms-4 me-1">
                                                <button
                                                    type="button"
                                                    className="btn btn-dark w-100 d-flex justify-content-center"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#staticBackdrop"
                                                >
                                                    Cập nhật
                                                </button>
                                                <div
                                                    className="modal fade mt-2"
                                                    id="staticBackdrop"
                                                    data-bs-backdrop="static"
                                                    data-bs-keyboard="false"
                                                    tabIndex={-1}
                                                    aria-labelledby="staticBackdropLabel"
                                                    aria-hidden="true"
                                                >
                                                    <div className="modal-dialog modal-md modal-dialog-centered">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5
                                                                    className="modal-title text-center"
                                                                    id="staticBackdropLabel"
                                                                >
                                                                    Cập nhật thông tin xe
                                                                </h5>
                                                                <button
                                                                    type="button"
                                                                    className="btn-close"
                                                                    data-bs-dismiss="modal"
                                                                    aria-label="Close"
                                                                />
                                                            </div>
                                                            <div className="modal-body ">
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
                                                                    <div className="mb-3 text-start">
                                                                        <label
                                                                            htmlFor="image_edit_car"
                                                                            className="form-label"
                                                                        >
                                                                            Ảnh:
                                                                            <span className="text_red">*</span>
                                                                        </label>
                                                                        <input
                                                                            type="file"
                                                                            className="form-control"
                                                                            id="image_edit_car"
                                                                            name="image"
                                                                            aria-describedby="file-error"
                                                                        />
                                                                        <div
                                                                            id="file-error"
                                                                            className="form-text text_red"
                                                                        ></div>
                                                                    </div>
                                                                    <div className="mb-3 text-start">
                                                                        <label
                                                                            htmlFor="license_edit"
                                                                            className="form-label"
                                                                        >
                                                                            Biển số:
                                                                            <span className="text_red">*</span>
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            id="license_edit"
                                                                            name="license"
                                                                            defaultValue=""
                                                                            aria-describedby="license-edit-error"
                                                                        />
                                                                        <div
                                                                            id="license-edit-error"
                                                                            className="form-text text_red"
                                                                        ></div>
                                                                    </div>
                                                                    <div className="mb-3 text-start">
                                                                        <label
                                                                            htmlFor="name_car_edit"
                                                                            className="form-label"
                                                                        >
                                                                            Tên xe:
                                                                            <span className="text_red" />
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            id="name_car_edit"
                                                                            name="name_car_edit"
                                                                            aria-describedby="name-car-error"
                                                                            disabled=""
                                                                            defaultValue=""
                                                                        />
                                                                        <div
                                                                            id="name-car-error"
                                                                            className="form-text text_red"
                                                                        ></div>
                                                                    </div>
                                                                    <div className="mb-3 text-start">
                                                                        <label
                                                                            htmlFor="brand_car_edit"
                                                                            className="form-label"
                                                                        >
                                                                            Hãng xe:
                                                                            <span className="text_red" />
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            id="brand_car_edit"
                                                                            name="brand_car_edit"
                                                                            disabled=""
                                                                            aria-describedby="brand-car-error"
                                                                            defaultValue=""
                                                                        />
                                                                        <div
                                                                            id="brand-car-error"
                                                                            className="form-text text_red"
                                                                        ></div>
                                                                    </div>
                                                                    <div className="mb-3 text-start">
                                                                        <label
                                                                            htmlFor="type_car_edit"
                                                                            className="form-label"
                                                                        >
                                                                            Kiểu xe:
                                                                            <span className="text_red" />
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            id="type_car_edit"
                                                                            name="type_car_edit"
                                                                            disabled=""
                                                                            aria-describedby="brand-car-error"
                                                                            defaultValue=""
                                                                        />
                                                                        <div
                                                                            id="type-car-error"
                                                                            className="form-text text_red"
                                                                        ></div>
                                                                    </div>
                                                                    <div className="mb-3 d-flex align-items-center justify-content-center">
                                                                        <button
                                                                            className="btn btn-primary"
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
                                            <small className="flex-fill text-start py-2 me-4 ms-1">
                                                <button className="btn btn-primary w-100 d-flex justify-content-center">
                                                    Xóa
                                                </button>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-car" id="form-car">
                                <form
                                    className="form-block mt-3"
                                    id="form_mycar"
                                    action=""
                                    method="post"
                                    encType="multipart/form-data"
                                >
                                    <div className="row">
                                        <div className="col-lg-4 col-xlg-3 col-md-12">
                                            <div className="">
                                                <div className="img-fluid">
                                                    <img
                                                        width="100%"
                                                        height="80%"
                                                        alt="user"
                                                        className="img-car"
                                                        id="img-car"
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
                                                            id="imageCar"
                                                            accept=".jpg, .jpeg, .png, .webp"
                                                        />
                                                        <span className="text-danger" id="imageCarErrorMsg" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-xlg-9 col-md-12 content-in-tab">
                                            <div className="col-12">
                                                <div className="mb-4 mt-2">
                                                    <h4 lass="display-5 mb-4">Xe của tôi</h4>
                                                    <p className="mb-4">Thêm xe trước khi đặt lịch!</p>
                                                </div>
                                            </div>
                                            <div className="row g-3 align-items-center">
                                                <div className="col-3">
                                                    <label htmlFor="inputBrand" className="col-form-label">
                                                        Hãng xe:<span className="text_red">*</span>
                                                    </label>
                                                </div>
                                                <div className="col-9">
                                                    <select
                                                        className="form-select"
                                                        name="brand"
                                                        id="brand"
                                                        aria-label="Default select example"
                                                    >
                                                        <option value="">
                                                            name
                                                        </option>
                                                    </select>
                                                    <span className="text-danger" id="brandErrorMsg" />
                                                </div>
                                            </div>
                                            <div className="row g-3 align-items-center mt-2">
                                                <div className="col-3">
                                                    <label htmlFor="inputNameCar" className="col-form-label">
                                                        Mẫu xe:<span className="text_red">*</span>
                                                    </label>
                                                </div>
                                                <div className="col-9">
                                                    <input
                                                        type="text"
                                                        id="inputNameCar"
                                                        name="name"
                                                        className="form-control"
                                                        defaultValue=""
                                                    />
                                                    <span className="text-danger" id="nameCarErrorMsg" />
                                                </div>
                                            </div>
                                            <div className="row g-3 align-items-center mt-2">
                                                <div className="col-3">
                                                    <label htmlFor="inputType" className="col-form-label">
                                                        Loại xe:<span className="text_red">*</span>
                                                    </label>
                                                </div>
                                                <div className="col-9">
                                                    <input
                                                        type="text"
                                                        id="inputType"
                                                        name="type"
                                                        className="form-control"
                                                        defaultValue=""
                                                    />
                                                    <span className="text-danger" id="typeErrorMsg" />
                                                </div>
                                            </div>
                                            <div className="row g-3 align-items-center mt-2">
                                                <div className="col-3">
                                                    <label htmlFor="inputLicense" className="col-form-label">
                                                        Biển số:<span className="text_red">*</span>
                                                    </label>
                                                </div>
                                                <div className="col-9">
                                                    <input
                                                        type="text"
                                                        id="inputLicense"
                                                        name="license"
                                                        className="form-control"
                                                        defaultValue=""
                                                    />
                                                    <span className="text-danger" id="licenseErrorMsg" />
                                                </div>
                                            </div>
                                            <div className="row g-3 align-items-center">
                                                <div className="col-3"></div>
                                                <div className="col-9">
                                                    <button className="btn btn-primary mt-4">Thêm xe</button>
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
                            className="tab-pane fade"
                            id="v-pills-messages"
                            role="tabpanel"
                            aria-labelledby="v-pills-messages-tab"
                        >
                            <form
                                className="form-block mt-3"
                                id="form_repass"
                                action=""
                                method="post"
                                encType="multipart/form-data"
                            >
                                <div className="row">
                                    {/* Column */}
                                    <div className="col-lg-8 col-xlg-8 col-md-12 content-in-tab">
                                        <div className="col-12">
                                            <div className="mb-4">
                                                <h4 lass="display-5 mb-4">Đổi mật khẩu</h4>
                                                <p className="mb-4">Thay đổi mật khẩu!</p>
                                            </div>
                                        </div>
                                        {/* <span className="text-danger" id="">
                                            Bạn đang sử dụng tài khoản từ bên thứ 3
                                        </span> */}
                                        <div className="row g-3 align-items-center mt-2">
                                            <div className="col-3">
                                                <label
                                                    htmlFor="current_password"
                                                    className="col-form-label"
                                                >
                                                    Mật khẩu cũ:<span className="text_red">*</span>
                                                </label>
                                            </div>
                                            <div className="col-9">
                                                <input
                                                    type="password"
                                                    id="current_password"
                                                    name="current_password"
                                                    className="form-control"
                                                />
                                                <span className="text-danger" id="curPassErrorMsg" />
                                            </div>
                                        </div>
                                        <div className="row g-3 align-items-center mt-2">
                                            <div className="col-3">
                                                <label htmlFor="password" className="col-form-label">
                                                    Mật khẩu mới:<span className="text_red">*</span>
                                                </label>
                                            </div>
                                            <div className="col-9">
                                                <input
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    className="form-control"
                                                />
                                                <span className="text-danger" id="passErrorMsg" />
                                            </div>
                                        </div>
                                        <div className="row g-3 align-items-center mt-2">
                                            <div className="col-3">
                                                <label
                                                    htmlFor="password_confirmation"
                                                    className="col-form-label"
                                                >
                                                    Xác nhận mật khẩu:<span className="text_red">*</span>
                                                </label>
                                            </div>
                                            <div className="col-9">
                                                <input
                                                    type="password"
                                                    id="password_confirmation"
                                                    name="password_confirmation"
                                                    className="form-control"
                                                />
                                                <span className="text-danger" id="cpassErrorMsg" />
                                            </div>
                                        </div>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-3"></div>
                                            <div className="col-9">
                                                <button className="btn btn-primary mt-4">
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
                            className="tab-pane fade"
                            id="v-pills-settings"
                            role="tabpanel"
                            aria-labelledby="v-pills-settings-tab"
                        >
                            <div className="row g-4">
                                <div
                                    className="col-xl-4 col-lg-6 col-md-12 card_favourite"
                                    id="favourite"
                                >
                                    <div className="property-item rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <a href="">
                                                <img
                                                    className="img-fluid"
                                                    style={{ width: "100%", height: "80%" }}
                                                    src=""
                                                    alt=""
                                                />
                                            </a>
                                            <div className="bg-white rounded-top text_red position-absolute start-0 bottom-0 mx-4 pt-1 px-2">
                                                <form
                                                    id="delete_favourite"
                                                    action=""
                                                    method="POST"
                                                >
                                                    <input
                                                        type="hidden"
                                                        name="id_favourite"
                                                        defaultValue=""
                                                        className="id_favourite"
                                                    />
                                                    <input
                                                        type="hidden"
                                                        defaultValue=""
                                                        name="key"
                                                    />
                                                    <button
                                                        className="text_red"
                                                        type="submit"
                                                        style={{
                                                            backgroundColor: "transparent",
                                                            border: "none",
                                                            width: 39
                                                        }}
                                                    >
                                                        <i className="bi bi-heart-fill font-weight-bold text-danger" />
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="p-3 pb-0">
                                            <h5 className="text_red mb-3">$12,345</h5>
                                            <a className="d-block h5 mb-2" href="" style={{ height: 48 }}>

                                            </a>
                                            <p
                                                className="mt-2 "
                                                style={{
                                                    height: 48,
                                                    overflow: "hidden",
                                                    display: "-webkit-box",
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: "vertical"
                                                }}
                                            >
                                                <i className="fa fa-map-marker-alt text_red me-2" />

                                            </p>
                                        </div>
                                        <div className="d-flex">
                                            <small className="flex-fill text-start mx-3">Đánh giá</small>
                                            <small className="flex-fill text-start pb-2 ms-5">
                                                <i className="bi bi-star-fill text_red ms-4" />
                                                <i className="bi bi-star-fill text_red" />
                                                <i className="bi bi-star-fill text_red" />
                                                <i className="bi bi-star-fill text_red" />
                                                <i className="bi bi-star-fill text_red" />5
                                            </small>
                                        </div>
                                        <div className="d-flex border-top mt-2">
                                            <small className="flex-fill text-start border-end py-2 mx-4">
                                                <i className="far fa-calendar-plus text_red me-3" />
                                                <a href="" className="text_red">
                                                    Đặt lịch ngay
                                                </a>
                                            </small>
                                            <small className="flex-fill text-start py-2">
                                                <i className="bi bi-chat-dots-fill text_red me-2 d-inline-block" />
                                                <form
                                                    action=""
                                                    className="d-inline-block"
                                                    method="POST"
                                                >
                                                    <input
                                                        type="hidden"
                                                        name="id_garage"
                                                        defaultValue=""
                                                    />
                                                    <button
                                                        className="text_red"
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
                            className="tab-pane fade"
                            id="v-pills-datebook"
                            role="tabpanel"
                            aria-labelledby="v-pills-datebook-tab"
                        >
                            <div className="d-flex flex-row-reverse">
                                <div
                                    className="btn btn-outline-secondary rounded-0 border border-dark"
                                    id="canceled"
                                >
                                    Đã hủy
                                </div>
                                <div
                                    className="btn btn-outline-danger rounded-0 border border-dark border-right-0"
                                    id="refused"
                                >
                                    Đã từ chối
                                </div>
                                <div
                                    className="btn btn-outline-success rounded-0 border border-dark border-right-0"
                                    id="confirmed"
                                >
                                    Đã xác nhận
                                </div>
                                <div
                                    className="btn btn-outline-warning rounded-0 border border-dark border-left-0 border-right-0"
                                    id="waited"
                                >
                                    Chờ xác nhận
                                </div>
                                <div
                                    className="btn btn-outline-info rounded-0 border border-dark border-right-0"
                                    id="all_order"
                                >
                                    Tất cả
                                </div>
                            </div>
                            <div className="mt-4" id="card_order">
                                <div className="row g-3 mt-3">
                                    <div className="col-lg-5 col-sm-12" style={{ height: 216 }}>
                                        <img
                                            style={{ height: "100%", width: "100%" }}
                                            className="img-fluid rounded-3"
                                            src=""
                                            alt=""
                                        />
                                    </div>
                                    <div className="col-lg-7 col-sm-12" style={{ height: 216 }}>
                                        <div className="d-block">
                                            <h6 className="mb-3 d-inline-block float-start">

                                            </h6>
                                            <div className="mb-3 d-inline-block float-end">
                                                {/* status cho xac nhan */}
                                                <span className="badge rounded-pill bg-warning font-bold">
                                                    Chờ xác nhận
                                                </span>
                                                <input
                                                    type="hidden"
                                                    id="id_booking"
                                                    defaultValue=""
                                                />
                                                <span
                                                    id="cancel-booking"
                                                    className="badge rounded-pill bg-danger font-bold"
                                                    role="button"
                                                >
                                                    Hủy đơn
                                                </span>
                                                {/* @elseif($item-&gt;status == 2) huy don */}
                                                <span className="badge rounded-pill bg-success font-bold">
                                                    Đã xác nhận
                                                </span>
                                                {/* @elseif($item-&gt;status == 3) */}
                                                <span className="badge rounded-pill bg-danger font-bold">
                                                    Đã từ chối
                                                </span>
                                                {/* @elseif($item-&gt;status == 4) */}
                                                <span className="badge rounded-pill bg-danger font-bold">
                                                    Đã hủy
                                                </span>
                                            </div>
                                        </div>
                                        <div className="float-start">
                                            <p style={{ fontSize: 14, margin: "0 0 9px 0" }}>
                                                <span style={{ width: 40 }}>
                                                    <i className="bi bi-geo-alt-fill text_red me-2" />
                                                </span>

                                            </p>
                                            <p style={{ fontSize: 14, margin: "0 0 9px 0" }}>
                                                <span style={{ width: 40 }}>
                                                    <i className="fa fa-phone-alt text_red me-2" />
                                                </span>

                                            </p>
                                            <p style={{ fontSize: 14, margin: "0 0 9px 0" }}>
                                                <span style={{ width: 40 }}>
                                                    <i className="bi bi-clock-fill text_red me-2" />
                                                </span>
                                                Giờ mở cửa - đóng cửa:

                                            </p>
                                        </div>
                                        <div className="float-start mt-1">
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
                            className="tab-pane fade"
                            id="v-pills-datehistory"
                            role="tabpanel"
                            aria-labelledby="v-pills-history-tab"
                        >
                            <div className="" id="card_order">
                                <div className="row g-3 mt-5">
                                    <div className="col-lg-5 col-sm-12" style={{ height: 216 }}>
                                        <img
                                            style={{ height: "100%", width: "100%" }}
                                            className="img-fluid rounded-3"
                                            src=""
                                            alt=""
                                        />
                                    </div>
                                    <div className="col-lg-7 col-sm-12" style={{ height: 216 }}>
                                        <div className="d-block">
                                            <h6 className="mb-3 d-inline-block float-start">

                                            </h6>
                                            <div className="mb-3 d-inline-block float-end">
                                                <span className="badge rounded-pill bg-success font-bold">
                                                    Đã hoành thành
                                                </span>
                                            </div>
                                        </div>
                                        <div className="float-start">
                                            <p style={{ fontSize: 14, margin: "0 0 9px 0" }}>
                                                <span style={{ width: 40 }}>
                                                    <i className="bi bi-geo-alt-fill text_red me-2" />
                                                </span>

                                            </p>
                                            <p style={{ fontSize: 14, margin: "0 0 9px 0" }}>
                                                <span style={{ width: 40 }}>
                                                    <i className="fa fa-phone-alt text_red me-2" />
                                                </span>

                                            </p>
                                            <p style={{ fontSize: 14, margin: "0 0 9px 0" }}>
                                                <span style={{ width: 40 }}>
                                                    <i className="bi bi-clock-fill text_red me-2" />
                                                </span>
                                                Giờ mở cửa - đóng cửa: 

                                            </p>
                                        </div>
                                        <div className="float-start mt-1">
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
                                                className="btn btn-outline-secondary mt-1 me-2"
                                                data-bs-toggle="modal"
                                                data-bs-target="#staticBackdrop0"
                                            >
                                                <i className="bi bi-star-fill" />
                                                Đánh giá
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-outline-danger mt-1 me-2"
                                                data-bs-toggle="modal"
                                                data-bs-target="#staticBackdrop1"
                                            >
                                                <i className="bi bi-flag-fill" />
                                                Báo cáo
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-outline-info mt-1 me-2"
                                                data-bs-toggle="modal"
                                                data-bs-target="#staticBackdrop2"
                                            >
                                                <i className="bi bi-flag-fill" />
                                                Chi tiết
                                            </button>
                                            <div
                                                className="modal fade mt-2"
                                                id="staticBackdrop0"
                                                data-bs-backdrop="static"
                                                data-bs-keyboard="false"
                                                tabIndex={-1}
                                                aria-labelledby="staticBackdropLabel"
                                                aria-hidden="true"
                                            >
                                                <div className="modal-dialog modal-md modal-dialog-centered">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5
                                                                className="modal-title text-center"
                                                                id="staticBackdropLabel"
                                                            >
                                                                Đánh giá
                                                            </h5>
                                                            <button
                                                                type="button"
                                                                className="btn-close"
                                                                data-bs-dismiss="modal"
                                                                aria-label="Close"
                                                            />
                                                        </div>
                                                        <div className="modal-body">
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
                                                                <div className="mb-3 text-start">
                                                                    <div className="container-wrapper">
                                                                        <div className="container d-flex align-items-center justify-content-center">
                                                                            <div className="row justify-content-center">
                                                                                {/* star rating */}
                                                                                <div className="rating-wrapper">
                                                                                    {/* star 5 */}
                                                                                    <input
                                                                                        type="radio"
                                                                                        id="5-star-rating"
                                                                                        name="star_rating"
                                                                                        defaultValue={5}
                                                                                    />
                                                                                    <label
                                                                                        htmlFor="5-star-rating"
                                                                                        className="star-rating"
                                                                                    >
                                                                                        <i className="fas fa-star d-inline-block" />
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
                                                                                        className="star-rating star"
                                                                                    >
                                                                                        <i className="fas fa-star d-inline-block" />
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
                                                                                        className="star-rating star"
                                                                                    >
                                                                                        <i className="fas fa-star d-inline-block" />
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
                                                                                        className="star-rating star"
                                                                                    >
                                                                                        <i className="fas fa-star d-inline-block" />
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
                                                                                        className="star-rating star"
                                                                                    >
                                                                                        <i className="fas fa-star d-inline-block" />
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <p
                                                                            className="text-danger text-center mt-2"
                                                                            id="inputRatingError"
                                                                        ></p>
                                                                    </div>
                                                                </div>
                                                                <div className="mb-3 text-start">
                                                                    <label htmlFor="rate_text" className="form-label">
                                                                        Bình luận đánh giá:{""}
                                                                        <span className="text_red">*</span>
                                                                    </label>
                                                                    <textarea
                                                                        className="form-control"
                                                                        name="rate_text"
                                                                        id="rate_text"
                                                                        rows={3}
                                                                        defaultValue={""}
                                                                    />
                                                                    <p
                                                                        className="text-danger mt-2"
                                                                        id="inputTextRatingError"
                                                                    ></p>
                                                                </div>
                                                                <div className="mb-3 d-flex align-items-center justify-content-center">
                                                                    <button className="btn btn-primary" type="submit">
                                                                        Đánh giá
                                                                    </button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="modal fade mt-2"
                                                id="staticBackdrop1"
                                                data-bs-backdrop="static"
                                                data-bs-keyboard="false"
                                                tabIndex={-1}
                                                aria-labelledby="staticBackdropLabel"
                                                aria-hidden="true"
                                            >
                                                <div className="modal-dialog modal-md modal-dialog-centered">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5
                                                                className="modal-title text-center"
                                                                id="staticBackdropLabel"
                                                            >
                                                                Báo cáo
                                                            </h5>
                                                            <button
                                                                type="button"
                                                                className="btn-close"
                                                                data-bs-dismiss="modal"
                                                                aria-label="Close"
                                                            />
                                                        </div>
                                                        <div className="modal-body">
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
                                                                <div className="mb-3 text-start">
                                                                    <label htmlFor="rate_text" className="form-label">
                                                                        Ảnh:
                                                                        <span className="text_red">*</span>
                                                                    </label>
                                                                    <input
                                                                        type="file"
                                                                        className="form-control"
                                                                        id="image_report"
                                                                        name="image_report"
                                                                    />
                                                                    <p
                                                                        className="text-danger mt-2"
                                                                        id="inputImageReportError"
                                                                    ></p>
                                                                </div>
                                                                <div className="mb-3 text-start">
                                                                    <label htmlFor="rate_text" className="form-label">
                                                                        Nội dung báo cáo:{" "}
                                                                        <span className="text_red">*</span>
                                                                    </label>
                                                                    <textarea
                                                                        className="form-control"
                                                                        name="text_report"
                                                                        id="text_report"
                                                                        rows={3}
                                                                        defaultValue={""}
                                                                    />
                                                                    <p
                                                                        className="text-danger mt-2"
                                                                        id="inputContentReportError"
                                                                    ></p>
                                                                </div>
                                                                <div className="mb-3 d-flex align-items-center justify-content-center">
                                                                    <button className="btn btn-primary" type="submit">
                                                                        Báo cáo
                                                                    </button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="modal fade mt-2"
                                                id="staticBackdrop2"
                                                data-bs-keyboard="false"
                                                tabIndex={-1}
                                                aria-labelledby="staticBackdropLabel"
                                                aria-hidden="true"
                                            >
                                                <div className="modal-dialog modal-lg modal-dialog-centered">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5
                                                                className="modal-title text-center"
                                                                id="staticBackdropLabel"
                                                            >
                                                                Chi tiết đơn đặt lịch
                                                            </h5>
                                                            <button
                                                                type="button"
                                                                className="btn-close"
                                                                data-bs-dismiss="modal"
                                                                aria-label="Close"
                                                            />
                                                        </div>
                                                        <div className="modal-body ">
                                                            <div className="row mb-3 text-start">
                                                                <div className="col-sm-6">
                                                                    <div className="row">
                                                                        <div className="col-sm-5">
                                                                            <span className="fw-bold">Họ và tên:</span>
                                                                        </div>
                                                                        <div className="col-sm-7">
                                                                            <span>
                                                                                name
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <div className="row">
                                                                        <div className="col-sm-5">
                                                                            <span className="fw-bold">
                                                                                Số điện thoại:
                                                                            </span>
                                                                        </div>
                                                                        <div className="col-sm-7">
                                                                            <span>
                                                                                phone
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row mb-3 text-start">
                                                                <div className="col-sm-6">
                                                                    <div className="row">
                                                                        <div className="col-sm-5">
                                                                            <span className="fw-bold">Tên xe:</span>
                                                                        </div>
                                                                        <div className="col-sm-7">
                                                                            <span>
                                                                                carname
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <div className="row">
                                                                        <div className="col-sm-5">
                                                                            <span className="fw-bold">Hãng xe:</span>
                                                                        </div>
                                                                        <div className="col-sm-7">
                                                                            <span>

                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row mb-3 text-start">
                                                                <div className="col-sm-6">
                                                                    <div className="row">
                                                                        <div className="col-sm-5">
                                                                            <span className="fw-bold">Dịch vụ:</span>
                                                                        </div>
                                                                        <div className="col-sm-7">
                                                                            <span>

                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <div className="row">
                                                                        <div className="col-sm-5">
                                                                            <span className="fw-bold">Biển số:</span>
                                                                        </div>
                                                                        <div className="col-sm-7">
                                                                            <span>

                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row mb-3 text-start">
                                                                <div className="col-sm-6">
                                                                    <div className="row">
                                                                        <div className="col-sm-5">
                                                                            <span className="fw-bold">Thời gian:</span>
                                                                        </div>
                                                                        <div className="col-sm-7">
                                                                            <span>

                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <div className="row">
                                                                        <div className="col-sm-5">
                                                                            <span className="fw-bold">Đặt lúc:</span>
                                                                        </div>
                                                                        <div className="col-sm-7">
                                                                            <span>

                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row mb-3 text-start">
                                                                <div className="col-sm-6">
                                                                    <div className="row">
                                                                        <div className="col-sm-5">
                                                                            <span className="fw-bold">
                                                                                Tổng số lượng:
                                                                            </span>
                                                                        </div>
                                                                        <div className="col-sm-7">

                                                                            <span>

                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <div className="row">
                                                                        <div className="col-sm-5">
                                                                            <span className="fw-bold">Tổng tiền:</span>
                                                                        </div>
                                                                        <div className="col-sm-7">

                                                                            <span>
                                                                                00000
                                                                                VNĐ
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <h5>Chi tiết dịch vụ</h5>
                                                            <div className="table-responsive">
                                                                <table className="table text-nowrap">
                                                                    <thead>
                                                                        <tr>
                                                                            <th className="border-top-0">Tên thiết bị</th>
                                                                            <th className="border-top-0">Số lượng</th>
                                                                            <th className="border-top-0">
                                                                                Giá tiền/thiết bị
                                                                            </th>
                                                                            <th className="border-top-0">Ghí chú</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody id="body_table">
                                                                        <tr>
                                                                            <td>
                                                                                <div className="col-md-12 p-0">
                                                                                    <p>
                                                                                        name
                                                                                    </p>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div className="col-md-12 p-0">
                                                                                    <p>
                                                                                        qty
                                                                                    </p>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div className="col-md-12 p-0">
                                                                                    <p>
                                                                                        price
                                                                                        VNĐ
                                                                                    </p>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div className="col-md-12 p-0">
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
                            className="tab-pane fade"
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