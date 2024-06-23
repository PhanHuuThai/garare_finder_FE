import axios from "axios";
import { useEffect, useState } from "react";
import config from "../../config";
import ReactLoading from 'react-loading';

const StaffInfo = () => {
    const [isUpdate, setIsUpdate] = useState(0)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [errorUpdate, setErrorUpdate] = useState('');

    const [user, setUser] = useState({
        email: '',
        id: '',
        image: '',
        name: '',
        phone: '',
    });

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser({
                email: storedUser.email || '',
                id: storedUser.id || '',
                image: storedUser.image || '',
                name: storedUser.name || '',
                phone: storedUser.phone || '',
            });
        }
    }, [isUpdate]);

    const [imageFile, setImageFile] = useState(null);

    const handleInputChange = (setter) => (e) => {
        const { name, value } = e.target;
        setter(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleImageChange = (setter) => (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setter(prevUser => ({
                ...prevUser,
                image: imageUrl
            }));
        }

        setImageFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user.phone || !user.name || !user.email) {
            setErrorUpdate('Vui lòng điền đủ thông tin');
            return;
          }
          if(!validateEmail(user.email)) {
            setErrorUpdate('định dạng email ko đúng');
            return;
          }
        const formData = new FormData();
        formData.append('name', user.name);
        formData.append('phone', user.phone);
        formData.append('email', user.email);
        if (imageFile) {
            formData.append('image', imageFile);
        }

        const token = localStorage.getItem('token');
        try {
            
            setLoading(true); 
            const response = await axios.post(`${config.apiBaseUrl}/client/profile/update`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}` 
                }
            });
            if(response.data.success){
                localStorage.setItem('user', JSON.stringify((response.data.data)));
                setIsUpdate(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER))
                setErrorUpdate();
                setImageFile(null)
            }
            
            console.log(response.data);
            // Handle success (e.g., show a success message or update the UI)
        } catch (error) {
            console.error('There was an error updating the user!', error);
            // Handle error (e.g., show an error message)
        } finally {
            setLoading(false); // Kết thúc loading
        }
    }

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
            {error && <p style={{ color: 'red' }}>{error}</p>}
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
                        <h4 className="page-title">Cập nhập thông tin của bạn</h4>
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
                    onSubmit={handleSubmit}
                >
                    <div className="row">
                        {/* Column */}
                        <div className="col-lg-4 col-xlg-3 col-md-12">
                            <div className="white-box">
                                <div className="user-bg">
                                    <img
                                        width="100%"
                                        height="93%"
                                        alt="user"
                                        id="img_info"
                                        className="img_info"
                                        src={user.image}
                                    />
                                </div>
                                <div className="user-btm-box mt-5 d-md-flex">
                                    <div className="col-md-2 col-sm-2 text-start mt-2">
                                        <h5>Ảnh : </h5>
                                    </div>
                                    <div className="col-md-10 col-sm-10">
                                        <input
                                            type="file"
                                            className="form-control"
                                            name="image"
                                            id="image_thumnail"
                                            accept=".jpg, .jpeg, .png, .webp"
                                            onChange={handleImageChange(setUser)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Column */}
                        {/* Column */}
                        <div className="col-lg-8 col-xlg-9 col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="form-group mb-3">
                                        <label className="col-md-12 p-0">Tên chủ garage</label>
                                        <div className="col-md-12 border-bottom p-0 mb-2">
                                            <input
                                                type="text"
                                                placeholder="Tên Garage"
                                                className="form-control p-0 border-0"
                                                name="name"
                                                value={user.name}
                                                onChange={handleInputChange(setUser)}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="col-md-12 p-0">Email (Tên đăng nhập)</label>
                                        <div className="col-md-12 border-bottom p-0 mb-2">
                                            <input
                                                type="email"
                                                placeholder="Email đăng nhập"
                                                className="form-control p-0 border-0"
                                                name="email"
                                                disabled=""
                                                value={user.email}
                                                onChange={handleInputChange(setUser)}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="col-md-12 p-0">Số điện thoại</label>
                                        <div className="col-md-12 border-bottom p-0 mb-2">
                                            <input
                                                type="text"
                                                placeholder="Số điện thoại"
                                                className="form-control p-0 border-0"
                                                name="phone"
                                                value={user.phone}
                                                onChange={handleInputChange(setUser)}
                                            />
                                        </div>
                                    </div>
                                    {errorUpdate && <p style={{ color: 'red' }}>{errorUpdate}</p>}
                                    <div className="form-group mb-4">
                                        <div className="col-sm-12">
                                            <button className="btn btn-primary">
                                                Cập nhập tài khoản
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Column */}
                    </div>
                </form>
            </div>
            {/* End Container fluid  */}
           
        </div>

    )
}

export default StaffInfo