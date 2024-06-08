import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext";
import config from "../../config";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const { login } = useAuth()
    const navigate = useNavigate()
    const handleLogin = async (e) => {
        e.preventDefault()
        setError(null)
        try {
            const response = await axios.post(`${config.apiBaseUrl}/auth/login`, { email, password }, {
                withCredentials: true,
            });
            if (response && response.data.status) {
                login(response.data.token)
                navigate('/')
            }
            setError(response.data.message)
        } catch (error) {
        }
    }
    return (
        <div
            className="container-xxl bg-white p-5 mt-5 login"
            style={{ paddingTop: 30, paddingBottom: 36 }}
        >
            <div className="row align-items-center">
                <div className="col-md-5 col-12 col-lg-5 col-sm-12">
                    <span className="d-block text-center my-4 text-muted">
                        Hoặc đăng nhập bằng
                    </span>
                    {/* <div className="row mt-3">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <div className="alert alert-success text-center"></div>
                        </div>
                        <div className="col-md-1"></div>
                    </div> */}
                    <div className="row mt-2">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <a
                                href="#"
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
                                Đăng nhập <span className="text_red">GFinder</span>
                            </h3>
                            <p className="mb-4">Chào mừng bạn đến với GFINDER. Đăng nhập ngay!</p>
                        </div>
                        <form onSubmit={handleLogin}>
                            <div className="row g-3">
                                <div className="col-md-12">
                                    <div className="form-floating">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            placeholder="Email đăng nhập"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
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
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <label htmlFor="password">Mật khẩu</label>
                                    </div>
                                </div>
                                {error &&
                                    <span style={{ color: "red" }}>{error}</span>
                                }
                                <div className="d-flex mb-5 align-items-center">
                                    <div className="col-md-6 col-6 justify-content-center ">
                                        {/* Checkbox */}
                                        <div className="form-check mb-3 mb-md-0">
                                            <input
                                                style={{ height: 18, width: 18 }}
                                                className="form-check-input"
                                                type="checkbox"
                                                name="remmember"
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
                                        <a
                                            style={{ color: "#ff1818", float: "right" }}
                                            href=""
                                        >
                                            Quên mật khẩu?
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">
                                    Đăng nhập
                                </button>
                            </div>
                        </form>
                        <p className="my-4 text-center">
                            Bạn chưa có tài khoản.
                            <Link to="/register">
                                <span className="text_red">Đăng kí ngay tại đây!</span>
                            </Link>
                        </p>
                        <p className="my-3 text-center">
                            Bạn là nhân viên Garage.
                            <Link>
                                <span className="text_red">Đăng nhập tại đây!</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Login