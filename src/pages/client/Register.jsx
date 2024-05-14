import { useEffect } from "react"
import { Link } from "react-router-dom"

const Register = () => {
    
    return (
        <div
            className="container-xxl bg-white p-5 mt-5 login"
            style={{ paddingTop: 30, paddingBottom: 36 }}
        >
            <div className="row align-items-center justify-content-center">
                <div className="col-md-5 col-12 col-lg-5 col-sm-12">
                    <span className="d-block text-center my-4 text-muted">
                        Hoặc đăng kí bằng
                    </span>
                    <div className="row mt-3">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <a
                                href=""
                                className="btn btn-social p-auto m-auto"
                                style={{
                                    height: 54,
                                    width: "100%",
                                    backgroundColor: "#3b5998",
                                    color: "#fff"
                                }}
                            >
                                <i className="fab fa-facebook-f" style={{ marginTop: 12 }} />
                            </a>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <a
                                href="#"
                                className="btn btn-social"
                                style={{
                                    height: 54,
                                    width: "100%",
                                    backgroundColor: "#1da1f2",
                                    color: "#fff"
                                }}
                            >
                                <i className="fab fa-twitter" style={{ marginTop: 12 }} />
                            </a>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <a
                                href="{{ route('loginGoogle') }}"
                                className="btn btn-social "
                                style={{
                                    height: 54,
                                    width: "100%",
                                    backgroundColor: "#ea4335",
                                    color: "#fff"
                                }}
                            >
                                <i
                                    className="fab fa-google text-center"
                                    style={{ marginTop: 12 }}
                                />
                            </a>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
                <div className="col-md-2 col-12 col-lg-2 col-sm-12 text-center my-3">
                    — hoặc —
                </div>
                <div className="col-md-5 col-12 col-lg-5 col-sm-12 contents">
                    <div className="form-block mt-2">
                        <div className="mb-4">
                            <h3 lass="display-5 mb-4">
                                Đăng kí <span className="text_red">GFinder</span>
                            </h3>
                            <p className="mb-4">Chào mừng bạn đến với GFINDER. Đăng kí ngay!</p>
                        </div>
                        <form method="POST" action="">
                            <div className="row g-3 mb-3">
                                <div className="col-md-12">
                                    <div className="form-floating">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            placeholder="Email đăng nhập"
                                        />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-floating">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            name="password"
                                            placeholder="Mật khẩu đăng nhập"
                                        />
                                        <label htmlFor="password">Mật khẩu</label>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-floating">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password_confirmation"
                                            name="password_confirmation"
                                            placeholder="Nhập lại mật khẩu"
                                        />
                                        <label htmlFor="password">Nhập lại mật khẩu</label>
                                    </div>
                                </div>
                                <div className="d-flex mb-5 align-items-center">
                                    <div className="col-md-6 col-6 justify-content-center ">
                                        {/* Checkbox */}
                                        <div className="form-check mb-3 mb-md-0">
                                            <input
                                                style={{ height: 18, width: 18 }}
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="loginCheck"
                                                defaultChecked=""
                                            />
                                            <label className="form-check-label float-start" htmlFor="loginCheck">
                                                Ghi nhớ đăng nhập
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-6">
                                        {/* Simple link */}
                                        <a style={{ color: "#ff1818", float: "right" }} href="#!">
                                            Quên mật khẩu?
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">
                                    Đăng kí
                                </button>
                            </div>
                            <p className="my-4 text-center">
                                Bạn đã có tài khoản.
                                <Link to="/login">
                                    <span className="text_red">Đăng nhập ngay tại đây!</span>
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Register