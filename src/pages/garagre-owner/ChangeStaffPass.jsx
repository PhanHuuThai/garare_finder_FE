import axios from "axios";
import { useEffect, useState } from "react";
import config from "../../config";
import ReactLoading from 'react-loading';

const ChangeStaffPass = () => {

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [errorChangePass, setErrorChangePass] = useState('');
    const [confirmPass, setConfirmPass] = useState('')
    const [loading, setLoading] = useState(false);

    const validatePassword = (password) => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        return hasUpperCase && hasLowerCase && hasNumber;
    }; 

    const handleChangePassword = async (e) => {
        e.preventDefault();
        if (!oldPassword || !newPassword || !confirmPass) {
            setErrorChangePass('Vui lòng điền đủ thông tin');
            return;
          }
        if (!validatePassword(newPassword)) {
            setErrorChangePass('Mật khẩu mới phải chứa ít nhất một ký tự viết hoa, một ký tự viết thường và một số');
            return;
          }
        if (newPassword !== confirmPass) {
            setErrorChangePass('Mật khẩu mới và xác nhận mật khẩu không trùng khớp');
            return;
          }
        const token = localStorage.getItem('token');
        setLoading(true);
        try {
            const response = await axios.post(`${config.apiBaseUrl}/auth/repass`,
                {
                  oldPassword: oldPassword,
                  newPassword: newPassword,
                },
                {
                  headers: {
                    Authorization: `Bearer ${token}`
                  }
                }
              );
            setLoading(false);
          if (response.data.success === false) {
            setErrorChangePass('Mật khẩu cũ không đúng');
          } else {
            
            setErrorChangePass('');
            setNewPassword('')
            setOldPassword('')
            setConfirmPass('')
            alert('Đổi mật khẩu thành công');
          }
       
        } catch (error) {
          console.error('Error changing password:', error);
          setErrorChangePass('Có lỗi xảy ra, vui lòng thử lại sau');
        } finally {
            setLoading(false); // Kết thúc loading
        }
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
        <div className="page-wrapper text-start">
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
            <div className="page-breadcrumb bg-white">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                        <h4 className="page-title">Thay đổi mật khẩu của bạn</h4>
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
                <form
                    className="form-horizontal form-material"
                    onSubmit={handleChangePassword}
                >
                    <input type="hidden" defaultValue={2} name="action" />
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="form-group mb-3">
                                        <label className="col-md-12 p-0">Mật khẩu cũ</label>
                                        <div className="col-md-12 border-bottom p-0 mb-2">
                                            <input
                                                type="password"
                                                className="form-control p-0 border-0"
                                                name="oldPassword"
                                                placeholder="Mật khẩu"
                                                value={oldPassword} 
                                                onChange={(e) => setOldPassword(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="col-md-12 p-0">Mật khẩu mới</label>
                                        <div className="col-md-12 border-bottom p-0 mb-2">
                                            <input
                                                type="password"
                                                className="form-control p-0 border-0"
                                                name="password"
                                                placeholder="Mật khẩu"
                                                value={newPassword} 
                                                onChange={(e) => setNewPassword(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="col-md-12 p-0">Nhập lại mật khẩu</label>
                                        <div className="col-md-12 border-bottom p-0 mb-2">
                                            <input
                                                type="password"
                                                className="form-control p-0 border-0"
                                                id="password_confirmation"
                                                name="password_confirmation"
                                                placeholder="Nhập lại mật khẩu"
                                                value={confirmPass} 
                                             onChange={(e) => setConfirmPass(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    {errorChangePass && <p style={{ color: 'red' }}>{errorChangePass}</p>}
                                    <div className="form-group mb-4">
                                        <div className="col-sm-12">
                                            <button className="btn btn-primary">Đặt lại mật khẩu</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Column */}
                    </div>
                </form>
            </div>
           
        </div>

    )
}

export default ChangeStaffPass