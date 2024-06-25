import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import config from "../../config";
import ReactLoading from 'react-loading';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const isPasswordValid = (password) => {
        // Mật khẩu phải chứa ít nhất một chữ thường, một chữ hoa và một số
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
        return re.test(password);
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        console.log(email)
        console.log(password)
        console.log(confirmPassword)

        if(!email || !password || !confirmPassword) {
            setError('Bạn cần nhập đầy đủ thông tin');
            return;
        }

        if (!isEmailValid(email)) {
            setError('Email không đúng định dạng');
            return;
        }

        if (!isPasswordValid(password)) {
            setError('Mật khẩu phải chứa ít nhất một chữ viết thường, một chữ viết hoa và một số');
            return;
        }

        if (!doPasswordsMatch(password, confirmPassword)) {
            setError('Mật khẩu và xác nhận mật khẩu không khớp');
            return;
        }

        try {
            setLoading(true)
            const response = await axios.post(`${config.apiBaseUrl}/auth/register`, {
                email,
                password
            });
            if (response.data.success) {
                alert('đăng ký thành công')
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                setError('');
            } else {
                setError(response.data.message);
            }
            setLoading(false)
        } catch (error) {
            setError('Có lỗi xảy ra khi đăng ký');
        } finally {
            setLoading(false)
        }
    };

    const isEmailValid = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };
    
    const doPasswordsMatch = (password, confirmPassword) => {
        return password === confirmPassword;
    };

    const loadingOverlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: Adds a semi-transparent background
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999

    };

    return (
        <div
            className="client container-xxl bg-white p-5 mt-5 login"
            style={{ paddingTop: 30, paddingBottom: 36 }}
        >
            <div style={{ position: 'relative' }}>
                    {loading && (
                        <div style={loadingOverlayStyle}>
                            <ReactLoading
                                type="spin"
                                color="#000"
                                height={50}
                                width={50}
                            />
                        </div>
                    )}</div>
            <div className="client row align-items-center justify-content-center">
                <div className="client col-md-5 col-12 col-lg-5 col-sm-12">
                    <span className="client d-block text-center my-4 text-muted">
                        Hoặc đăng kí bằng
                    </span>
                    <div className="client row mt-3">
                        <div className="client col-md-1"></div>
                        <div className="client col-md-10">
                            <a
                                href=""
                                className="client btn btn-social p-auto m-auto"
                                style={{
                                    height: 54,
                                    width: "100%",
                                    backgroundColor: "#3b5998",
                                    color: "#fff"
                                }}
                            >
                                <i className="client fab fa-facebook-f" style={{ marginTop: 12 }} />
                            </a>
                        </div>
                        <div className="client col-md-1"></div>
                    </div>
                    <div className="client row mt-3">
                        <div className="client col-md-1"></div>
                        <div className="client col-md-10">
                            <a
                                href="#"
                                className="client btn btn-social"
                                style={{
                                    height: 54,
                                    width: "100%",
                                    backgroundColor: "#1da1f2",
                                    color: "#fff"
                                }}
                            >
                                <i className="client fab fa-twitter" style={{ marginTop: 12 }} />
                            </a>
                        </div>
                        <div className="client col-md-1"></div>
                    </div>
                    <div className="client row mt-3">
                        <div className="client col-md-1"></div>
                        <div className="client col-md-10">
                            <a
                                href="{{ route('loginGoogle') }}"
                                className="client btn btn-social "
                                style={{
                                    height: 54,
                                    width: "100%",
                                    backgroundColor: "#ea4335",
                                    color: "#fff"
                                }}
                            >
                                <i
                                    className="client fab fa-google text-center"
                                    style={{ marginTop: 12 }}
                                />
                            </a>
                        </div>
                        <div className="client col-md-1"></div>
                    </div>
                </div>
                <div className="client col-md-2 col-12 col-lg-2 col-sm-12 text-center my-3">
                    — hoặc —
                </div>
                <div className="client col-md-5 col-12 col-lg-5 col-sm-12 contents">
                    <div className="client form-block mt-2">
                        <div className="client mb-4">
                            <h3 lass="display-5 mb-4">
                                Đăng kí <span className="client text_red">GFinder</span>
                            </h3>
                            <p className="client mb-4">Chào mừng bạn đến với GFINDER. Đăng kí ngay!</p>
                        </div>
                        <form onSubmit={handleRegister}>
                            <div className="client row g-3 mb-3">
                                <div className="client col-md-12">
                                    <div className="client form-floating">
                                        <input
                                            type="email"
                                            className="client form-control"
                                            id="email"
                                            name="email"
                                            placeholder="Email đăng nhập"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}

                                        />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                </div>
                                <div className="client col-md-12">
                                    <div className="client form-floating">
                                        <input
                                            type="password"
                                            className="client form-control"
                                            id="password"
                                            name="password"
                                            placeholder="Mật khẩu đăng nhập"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}

                                        />
                                        <label htmlFor="password">Mật khẩu</label>
                                    </div>
                                </div>
                                <div className="client col-md-12">
                                    <div className="client form-floating">
                                        <input
                                            type="password"
                                            className="client form-control"
                                            id="password_confirmation"
                                            name="confirmPassword"
                                            placeholder="Nhập lại mật khẩu"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                        <label htmlFor="password">Nhập lại mật khẩu</label>
                                    </div>
                                </div>
                                {error && <p style={{ color: 'red' }}>{error}</p>}
                                <div className="client d-flex mb-5 align-items-center">
                                    <div className="client col-md-6 col-6 justify-content-center ">
                                        {/* Checkbox */}
                                        <div className="client form-check mb-3 mb-md-0">
                                            <input
                                                style={{ height: 18, width: 18 }}
                                                className="client form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="loginCheck"
                                                defaultChecked=""
                                            />
                                            <label className="client form-check-label float-start" htmlFor="loginCheck">
                                                Ghi nhớ đăng nhập
                                            </label>
                                        </div>
                                    </div>
                                    <div className="client col-md-6 col-6">
                                        {/* Simple link */}
                                        <a style={{ color: "#ff1818", float: "right" }} href="#!">
                                            Quên mật khẩu?
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="client col-12">
                                <button className="client btn btn-primary w-100 py-3" type="submit">
                                    Đăng kí
                                </button>
                            </div>
                            <p className="client my-4 text-center">
                                Bạn đã có tài khoản.
                                <Link to="/login">
                                    <span className="client text_red">Đăng nhập ngay tại đây!</span>
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