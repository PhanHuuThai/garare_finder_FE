
import { act, useEffect, useState } from "react";    
import axios from "axios";
import { useCommon } from "../../context/CommonContext";
import config from "../../config";
import ReactLoading from 'react-loading';
import { Dialog } from 'primereact/dialog';


const Profile = () => {
    const { cities, vehicles } = useCommon()
    const [activeTab, setActiveTab] = useState('1');
    const [districts, setDistricts] = useState([])
    const [wards, setWards] = useState([])
    const [loading, setLoading] = useState(false);
    const [cars, setCars] = useState([])
    const [error, setError] = useState(null);
    const [isUpdate, setIsUpdate] = useState(0)
    const [isCreateCar, setIscreateCar] = useState(0)
    const [createCarDi, setCreateCarDi] = useState(false)
    const [updateCarDi, setUpdateCarDi] = useState(false)
    const [favouriteGarage, setFavouriteGarage] = useState([])
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [errorChangePass, setErrorChangePass] = useState('');
    const [confirmPass, setConfirmPass] = useState('')
    const [orders, setOrders] = useState([])
    const [orderComplete, setOrderComplete] = useState([])
    const [filteredOrders, setFilteredOrders] = useState([]);
    const [currentTab, setCurrentTab] = useState('all');

    const [user, setUser] = useState({
        address: '',
        email: '',
        id: '',
        image: '',
        name: '',
        phone: '',
        username: '',
        id_ward: '',
        id_province: '',
        id_district: ''
    });

    const [newCar, setNewCar] = useState({
        brand: '',
        name: '',
        license: '',
        type: '',
        image: ''
      });

    const [carUpdate, setCarUpdate] = useState({
        id: "",
        brand: '',
        name: '',
        license: '',
        type: '',
        image: ''
    })

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            const address = storedUser.address ? storedUser.address.split(',')[0] : '';
            setUser({
                address: address,
                email: storedUser.email || '',
                id: storedUser.id || '',
                image: storedUser.image || '',
                name: storedUser.name || '',
                phone: storedUser.phone || '',
                username: storedUser.username || '',
                id_ward: storedUser.id_ward,
                id_province: storedUser.id_province,
                id_district: storedUser.id_district
            });
        }
    }, [isUpdate]);

    useEffect(() => {
        const fetchDistrict = async () => {
            if(user.id_province) {
                const apiUrl = `${config.apiBaseUrl}/client/get-districts/${user.id_province}`;
                try {
                    setLoading(true); 
                  const response = await axios.get(apiUrl);
                  let data = response.data;
                  if (!data.success) {
                      setError(data.message)
                  }
                  setDistricts(data.data);
                } catch (error) {
                  setError(error.message);
                } finally {
                    setLoading(false); // Kết thúc loading
                }
        
            }
          };
          fetchDistrict()
    }, [user.id_province])

    useEffect(() => {
        const fetchWards = async () => {
            if(user.id_district)
            {
                setLoading(true); 
                const apiUrl = `${config.apiBaseUrl}/client/get-wards/${user.id_district}`;
                try {
                  const response = await axios.get(apiUrl);
                  let data = response.data;
                  if (!data.success) {
                      setError(data.message)
                  }
                  setWards(data.data);
                } catch (error) {
                  setError(error.message);
                } finally {
                    setLoading(false); // Kết thúc loading
                }
        
            }
          };
          fetchWards()
    }, [user.id_district])

    useEffect(() => {
        const fetchCards = async () => {
            setLoading(true); 
                try {
                    const token = localStorage.getItem('token');
                    setLoading(true); 
                    const response = await axios.get(`${config.apiBaseUrl}/client/profile/get-cars`, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            'Authorization': `Bearer ${token}` 
                        }
                    });
                    if(response.data.success){
                        setCars(response.data.data)
                    }
                    setError(response.data.message)
                    // Handle success (e.g., show a success message or update the UI)
                } catch (error) {
                    console.error('There was an error updating the user!', error);
                    // Handle error (e.g., show an error message)
                } finally {
                    setLoading(false); // Kết thúc loading
                }
            };
        fetchCards()
    },[isCreateCar])

    useEffect(() => {
        const fetchFavouriteGarage = async () => {
            setLoading(true); 
                try {
                    const token = localStorage.getItem('token');
                    setLoading(true); 
                    const response = await axios.get(`${config.apiBaseUrl}/client/favourite-garage`, {
                        headers: {
                            'Authorization': `Bearer ${token}` 
                        }
                    });
                    if(response.data.success){
                        setFavouriteGarage(response.data.data)
                    }
                    setError(response.data.message)
                    // Handle success (e.g., show a success message or update the UI)
                } catch (error) {
                    console.error('There was an error updating the user!', error);
                    // Handle error (e.g., show an error message)
                } finally {
                    setLoading(false); // Kết thúc loading
                }
            };
        fetchFavouriteGarage()
    },[])

    const [imageFile, setImageFile] = useState(null);

    const handleInputChange = (setter) => (e) => {
        const { name, value } = e.target;
        setter(prevState => ({
            ...prevState,
            [name]: value
        }));
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
        const formData = new FormData();
        formData.append('name', user.name);
        formData.append('email', user.email);
        formData.append('phone', user.phone);
        formData.append('nest', user.address);
        formData.append('province', user.id_province)
        formData.append('district', user.id_district)
        formData.append('ward', user.id_ward)
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

    const handleCreateCar = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('id_brand', newCar.brand);
        formData.append('name', newCar.name);
        formData.append('type', newCar.type);
        formData.append('license', newCar.license)
        if (imageFile) {
            formData.append('image', imageFile);
        }

        const token = localStorage.getItem('token');
        try {
            setLoading(true); 
            const response = await axios.post(`${config.apiBaseUrl}/client/profile/create-car`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}` 
                }
            });
            if(response.data.success){
                setIscreateCar(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER))
                setImageFile(null)
                setCreateCarDi(false)
                setNewCar({
                    brand: '',
                    name: '',
                    license: '',
                    type: '',
                    image: ''
                })
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

    const getCarById = async (id) => {

        const token = localStorage.getItem('token');
        try {
            setLoading(true); 
            const response = await axios.get(`${config.apiBaseUrl}/client/profile/get-car/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}` 
                }
            });
            if(response.data.success){
                const data = response.data.data
                setCarUpdate({
                    id: data.id,
                    brand: data.id_brand,
                    name: data.name,
                    license: data.license,
                    type: data.type,
                    image: data.image
                })
                setUpdateCarDi(true)
            }
            setError(response.data.message)
            // Handle success (e.g., show a success message or update the UI)
        } catch (error) {
            console.error('There was an error updating the user!', error);
            // Handle error (e.g., show an error message)
        } finally {
            setLoading(false); // Kết thúc loading
        }
    }

    const handleUpdateCar = async (e) => {
        let formData = new FormData();
        formData.append('_method', 'put');
        formData.append('id_brand', carUpdate.brand);
        formData.append('type', carUpdate.type);
        formData.append('license', carUpdate.license)
        formData.append('name', carUpdate.name);
        if (imageFile) {
            formData.append('image', imageFile);
        }
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }
        const token = localStorage.getItem('token');
        try {
            setLoading(true); 
            const response = await axios.post(`${config.apiBaseUrl}/client/profile/update-car/${carUpdate.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}` 
                }
            });
            if(response.data.success){
                setIscreateCar(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER))
                setImageFile(null)
                setUpdateCarDi(false)
            }
            console.log(response)
            setError(response.data.message)
            // Handle success (e.g., show a success message or update the UI)
        } catch (error) {
            console.error('There was an error updating the user!', error);
            // Handle error (e.g., show an error message)
        } finally {
            setLoading(false); // Kết thúc loading
        }
    }

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                setLoading(true);
                const token = localStorage.getItem('token');
                const response = await axios.get(`${config.apiBaseUrl}/client/order`, {
                headers: {
                    'Authorization': `Bearer ${token}` 
                }
            });
                if (response.data.success) {
                    setOrders(response.data.data);
                    setFilteredOrders(response.data.data);
                } else {
                    setError(response.data.message);
                }
            } catch (error) {
                setError('Có lỗi xảy ra khi lấy thông tin đơn hàng của garage');
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, [isUpdate]);

    const updateOrderStatus = async (orderId, status) => {
        try {
            setLoading(true);
            const token = localStorage.getItem('token');
            const response = await axios.put(`${config.apiBaseUrl}/garage/order/update-status/${orderId}`,
                { status },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            if (response.data.success) {
                setIsUpdate(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER));
                setError('')
            } else {
                setError(response.data.message);
            }
            setLoading(false);
        } catch (error) {
            console.error('Error updating order status:', error);
            throw error;
        }
        finally {
            setLoading(false);
        }
    };

    const filterOrders = (status) => {
        let filtered;
        if (status === 'all') {
            filtered = orders;
        } else {
            filtered = orders.filter(order => order.status == status);
        }
        setFilteredOrders(filtered);
    };

    const handleTabClick = (status) => {
        setCurrentTab(status);
        filterOrders(status);
    };

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                setLoading(true);
                const token = localStorage.getItem('token');
                const response = await axios.get(`${config.apiBaseUrl}/client/order/get-complete-order/`, {
                headers: {
                    'Authorization': `Bearer ${token}` 
                }
            });
                if (response.data.success) {
                    setOrderComplete(response.data.data);
                } else {
                    setError(response.data.message);
                }
            } catch (error) {
                setError('Có lỗi xảy ra khi lấy thông tin đơn hàng của garage');
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

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

    const handleDeleteCar = async (id) => {
        const token = localStorage.getItem('token');
    
        const confirmDelete = window.confirm("Are you sure you want to delete this car?");
        if (!confirmDelete) {
            return;
        }
    
        try {
            setLoading(true); 
            const response = await axios.get(`${config.apiBaseUrl}/client/profile/delete-car/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
    
            if (response.data.success) {
                // Handle success (e.g., refresh the car list)
                setIscreateCar(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER));
                console.log('Car deleted successfully');
            } else {
                // Handle server error response
                console.error('Error deleting car:', response.data.message);
            }
        } catch (error) {
            console.error('There was an error deleting the car!', error);
        } finally {
            setLoading(false); // Kết thúc loading
        }
    };

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
    

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
        console.log(activeTab)
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
                    <div className="client tab-content" id="v-pills-tabContent">
                        {/* Thông tin cá nhân */}
                        <div
                            className="client tab-pane fade show active"
                            id="v-pills-home"
                            role="tabpanel"
                            aria-labelledby="v-pills-home-tab"
                        >
                            <form className="client form-block" id="form_info" onSubmit={handleSubmit}>
                                <div className="client row">
                                    <div className="client col-lg-4 col-xlg-3 col-md-12">
                                        <div className="client ">
                                            <div className="client img-fluid">
                                            <img
                                                width="80%"
                                                height="80%"
                                                alt="user"
                                                className="client avatar"
                                                id="avatar"
                                                src={user.image || require('../../assets/images/default-ava.webp')}
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
                                                        onChange={handleImageChange(setUser)}
                                                    />
                                                </div>
                                                <span className="client text-danger" id="imageErrorMsg" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="client col-lg-8 col-xlg-9 col-md-12 content-in-tab">
                                        <div className="client col-12">
                                            <div className="client mb-4 mt-2">
                                                <h4 className="client display-5 mb-4">Thông tin của tôi</h4>
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
                                                    value={user.name || ''}
                                                    onChange={handleInputChange(setUser)}
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
                                                    value={user.email || ''}
                                                    onChange={handleInputChange(setUser)}
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
                                                    value={user.phone || ''}
                                                    onChange={handleInputChange(setUser)}
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
                                                <div className="client row">
                                                    <div className="client col-md-12 col-12 mt-4">
                                                        <input
                                                            type="text"
                                                            className="client form-control"
                                                            placeholder="Tổ, thôn, số nhà, đường"
                                                            name="address"
                                                            value={user.address || ''}
                                                            onChange={handleInputChange(setUser)}
                                                        />
                                                        <span className="client text-danger" id="nestErrorMsg" />
                                                    </div>
                                                </div>
                                                <div className="client row">
                                                    <div className="client col-md-12 col-12 mt-4">
                                                        <select
                                                            className="client form-select"
                                                            name="id_province"
                                                            id="province"
                                                            aria-label="Default select example"
                                                            value={user.id_province}
                                                            onChange={handleInputChange(setUser)}
                                                        >
                                                            <option value={0} disabled="" selected="">
                                                                Thành phố/Tỉnh
                                                            </option>
                                                            {cities.map((city) => (
                                                            <option key={city.id} value={city.id}>
                                                                {city.name}
                                                            </option>
                                                            ))}
                                                        </select>
                                                        <span className="client text-danger" id="provinceErrorMsg" />
                                                    </div>
                                                    <div className="client content-distrist">
                                                        <div className="client col-md-12 col-12 mt-4">
                                                            <select
                                                                className="client form-select"
                                                                name="id_district"
                                                                id="distrist"
                                                                aria-label="Default select example"
                                                                value={user.id_district}
                                                                onChange={handleInputChange(setUser)}
                                                            >
                                                            {districts.map((district) => (
                                                            <option key={district.id} value={district.id}>
                                                                {district.name}
                                                            </option>
                                                            ))}
                                                            </select>
                                                            <span className="client text-danger" id="distristErrorMsg" />
                                                        </div>
                                                        <div className="client content-ward">
                                                            <div className="client col-md-12 col-12 mt-4">
                                                                <select
                                                                    className="client form-select"
                                                                    name="id_ward"
                                                                    id="ward"
                                                                    aria-label="Default select example"
                                                                    value={user.id_ward}
                                                                    onChange={handleInputChange(setUser)}
                                                                >
                                                                {wards.map((ward) => (
                                                                <option key={ward.id} value={ward.id}>
                                                                    {ward.name}
                                                                </option>
                                                                ))}
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
                                                <button type="submit" className="client btn btn-primary mt-4">
                                                    Cập nhập thông tin
                                                </button>
                                            </div>
                                        </div>
                                    </div>
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
                            <button className="client btn btn-dark mx-1" id="allMycar" >
                                Tất cả
                            </button>
                            <button className="client btn btn-primary" id="createMycar" onClick={() => setCreateCarDi(true)}>
                                Thêm xe
                            </button>
                            <div className="client row g-4 mt-1" id="allcar">
                                {cars.map(car => (
                                    <div className="client col-lg-6 col-md-6" key={car.id}>
                                        <div className="client property-item rounded overflow-hidden" style={{width: '430px'}}>
                                        <div className="client position-relative overflow-hidden">
                                            <a href="#">
                                            <img className="client img-fluid" src={car.image} alt={car.name} />
                                            </a>
                                            <div className="client bg-white rounded-top text_red position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                            {car.license}
                                            </div>
                                        </div>
                                        <div className="client p-4 pb-0">
                                            <h5 className="client text_red mb-3">{car.name}</h5>
                                            <p>Type: {car.type}</p>
                                        </div>
                                        <div className="client d-flex">
                                            <small className="client flex-fill text-start py-2 ms-4 me-1">
                                            <button
                                                type="button"
                                                className="client btn btn-dark w-100 d-flex justify-content-center"
                                                onClick={() => getCarById(car.id)}
                                            >
                                                Cập nhật
                                            </button>
                                            </small>
                                            <small className="client flex-fill text-start py-2 me-4 ms-1">
                                            <button
                                                className="client btn btn-primary w-100 d-flex justify-content-center"
                                                onClick={() => handleDeleteCar(car.id)}
                                            >
                                                Xóa
                                            </button>
                                            </small>
                                        </div>
                                        </div>
                                    </div>
                                    ))}
                                    <Dialog header="Header" visible={createCarDi} style={{ width: '50vw' }} onHide={() => {if (!createCarDi) return; setCreateCarDi(false); }}>
                                    <div className="client modal-body">
                                        <form onSubmit={handleCreateCar}>
                                        <div className="client mb-3 text-center" style={{ display: 'grid', gridTemplateColumns: 'auto auto', gap: '10px' }}>
                                        <input type="file" id="image" name="image" onChange={handleImageChange(setNewCar)} />
                                            <img 
                                                className="client img-fluid" 
                                                width="40%"
                                                height="40%"
                                                alt="car"
                                                id="image"
                                                src={newCar.image || require('../../assets/images/car_default.png')}
                                            />
                                            
                                        </div>
                                        <div className="client mb-3">
                                            <label htmlFor="brand" className="client form-label">Hãng xe:</label>
                                            <select className="client form-control" id="brand" name="brand" value={newCar.brand} onChange={handleInputChange(setNewCar)}>
                                            <option value="">Chọn hãng xe</option>
                                            {vehicles.map(vehicle => (
                                                <option key={vehicle.id} value={vehicle.id}>{vehicle.name}</option>
                                            ))}
                                            </select>
                                        </div>
                                        <div className="client mb-3">
                                            <label htmlFor="name" className="client form-label">Tên xe:</label>
                                            <input type="text" className="client form-control" id="name" name="name" value={newCar.name} onChange={handleInputChange(setNewCar)} />
                                        </div>
                                        <div className="client mb-3">
                                            <label htmlFor="license" className="client form-label">Biển số:</label>
                                            <input type="text" className="client form-control" id="license" name="license" value={newCar.license} onChange={handleInputChange(setNewCar)} />
                                        </div>
                                        <div className="client mb-3">
                                            <label htmlFor="type" className="client form-label">Kiểu xe:</label>
                                            <input type="text" className="client form-control" id="type" name="type" value={newCar.type} onChange={handleInputChange(setNewCar)} />
                                        </div>
                                        <div className="client d-flex justify-content-center">
                                            <button type="submit" className="client btn btn-primary">Thêm xe</button>
                                        </div>
                                        </form>
                                    </div>
                                 </Dialog>
                                 <Dialog header="Header" visible={updateCarDi} style={{ width: '50vw' }} onHide={() => {if (!updateCarDi) return; setUpdateCarDi(false); }}>
                                    <div className="client modal-body">
                                        <div>
                                        <div className="client mb-3 text-center" style={{ display: 'grid', gridTemplateColumns: 'auto auto', gap: '10px' }}>
                                        <input type="file" id="image" name="image" onChange={handleImageChange(setCarUpdate)} />
                                            <img 
                                                className="client img-fluid" 
                                                width="40%"
                                                height="40%"
                                                alt="car"
                                                id="image"
                                                src={carUpdate.image || require('../../assets/images/car_default.png')}
                                            />
                                            
                                        </div>
                                        <div className="client mb-3">
                                            <label htmlFor="brand" className="client form-label">Hãng xe:</label>
                                            <select className="client form-control" id="brand" name="brand" value={carUpdate.brand} onChange={handleInputChange(setCarUpdate)}>
                                            <option value="">Chọn hãng xe</option>
                                            {vehicles.map(vehicle => (
                                                <option key={vehicle.id} value={vehicle.id}>{vehicle.name}</option>
                                            ))}
                                            </select>
                                        </div>
                                        <div className="client mb-3">
                                            <label htmlFor="name" className="client form-label">Tên xe:</label>
                                            <input type="text" className="client form-control" id="name" name="name" value={carUpdate.name} onChange={handleInputChange(setCarUpdate)} />
                                        </div>
                                        <div className="client mb-3">
                                            <label htmlFor="license" className="client form-label">Biển số:</label>
                                            <input type="text" className="client form-control" id="license" name="license" value={carUpdate.license} onChange={handleInputChange(setCarUpdate)} />
                                        </div>
                                        <div className="client mb-3">
                                            <label htmlFor="type" className="client form-label">Kiểu xe:</label>
                                            <input type="text" className="client form-control" id="type" name="type" value={carUpdate.type} onChange={handleInputChange(setCarUpdate)} />
                                        </div>
                                        <div className="client d-flex justify-content-center">
                                            <button type="submit" onClick={handleUpdateCar} className="client btn btn-primary">Cập nhật</button>
                                        </div>
                                        </div>
                                    </div>
                                 </Dialog>
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
                                onSubmit={handleChangePassword}
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
                                                    name="oldPassword"
                                                    className="client form-control"
                                                    value={oldPassword} 
                                                    onChange={(e) => setOldPassword(e.target.value)}
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
                                                    value={newPassword} 
                                                    onChange={(e) => setNewPassword(e.target.value)}
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
                                                    name="confirmPass"
                                                    className="client form-control"
                                                    value={confirmPass} 
                                                    onChange={(e) => setConfirmPass(e.target.value)}
                                                />
                                                <span className="client text-danger" id="cpassErrorMsg" />
                                            </div>
                                            {errorChangePass && <p style={{ color: 'red' }}>{errorChangePass}</p>}
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
                                    {favouriteGarage.map(garage => (
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
                                                {garage.address_detail}
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
                                    ))}
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
                                    onClick={() => handleTabClick(4)}
                                >
                                    Đã hủy
                                </div>
                                <div
                                    className="client btn btn-outline-danger rounded-0 border border-dark border-right-0"
                                    id="refused"
                                    onClick={() => handleTabClick(3)}
                                >
                                    Đã từ chối
                                </div>
                                <div
                                    className="client btn btn-outline-success rounded-0 border border-dark border-right-0"
                                    id="confirmed"
                                    onClick={() => handleTabClick(2)}
                                >
                                    Đã xác nhận
                                </div>
                                <div
                                    className="client btn btn-outline-warning rounded-0 border border-dark border-left-0 border-right-0"
                                    id="waited"
                                    onClick={() => handleTabClick(1)}
                                >
                                    Chờ xác nhận
                                </div>
                                <div
                                    className="client btn btn-outline-info rounded-0 border border-dark border-right-0"
                                    id="all_order"
                                    onClick={() => handleTabClick('all')}
                                >
                                    Tất cả
                                </div>
                            </div>
                            <div className="client text-start mt-4" id="card_order">
                                {filteredOrders.map((order) => (
                                    <div className="client row g-3 mt-3">
                                    <div className="client col-lg-5 col-sm-12" style={{ height: 216 }}>
                                        <img
                                            style={{ height: "100%", width: "100%" }}
                                            className="client img-fluid rounded-3"
                                            src={order.garage_img}
                                            alt=""
                                        />
                                    </div>
                                    <div className="client col-lg-7 col-sm-12" style={{ height: 216 }}>
                                        <div className="client d-block">
                                            <h6 className="client mb-3 d-inline-block float-start">
                                                {order.garage_name}
                                            </h6>
                                            <div className="client mb-3 d-inline-block float-end">
                                                {/* status cho xac nhan */}
                                                {order.status == 1 && (
                                                    <div>
                                                        <span className="client badge rounded-pill bg-warning font-bold">
                                                        Chờ xác nhận
                                                    </span>
                                                <span
                                                    id="cancel-booking"
                                                    className="client badge rounded-pill bg-danger font-bold"
                                                    role="button"
                                                    onClick={() => updateOrderStatus(order.id, 4)}
                                                >
                                                    Hủy đơn
                                                 </span>
                                                    </div>
                                                )}
                                                
                                                
                                                {order.status == 2 && (
                                                <span className="client badge rounded-pill bg-success font-bold">
                                                    Đã xác nhận
                                                </span>
                                                )}

                                                {order.status == 3 && (
                                                <span className="client badge rounded-pill bg-danger font-bold">
                                                    Đã từ chối
                                                </span>
                                                  )}

                                               {order.status == 4 && (
                                                <span className="client badge rounded-pill bg-danger font-bold">
                                                    Đã hủy
                                                </span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="client float-start">
                                            <p style={{ fontSize: 14, margin: "0 0 9px 0" }}>
                                                <span style={{ width: 40 }}>
                                                    <i className="client bi bi-geo-alt-fill text_red me-2" />
                                                </span>
                                                {order.garage_address}
                                            </p>
                                            <p style={{ fontSize: 14, margin: "0 0 9px 0" }}>
                                                <span style={{ width: 40 }}>
                                                    <i className="client fa fa-phone-alt text_red me-2" />
                                                </span>
                                                {order.garage_phone}
                                            </p>
                                            <p style={{ fontSize: 14, margin: "0 0 9px 0" }}>
                                                <span style={{ width: 40 }}>
                                                    <i className="client bi bi-clock-fill text_red me-2" />
                                                </span>
                                                Giờ mở cửa: {order.time_open} - đóng cửa: {order.time_close}
                                            </p>
                                        </div>
                                        <div className="client float-start mt-1">
                                            <p style={{ fontSize: 14, margin: "0 0 9px 0" }}>
                                                <span style={{ width: 40 }}>
                                                    <b>Xe: {order.car_name}</b>
                                                </span>

                                            </p>
                                            <p style={{ fontSize: 14, margin: "0 0 9px 0" }}>
                                                <span style={{ width: 40 }}>
                                                    <b>Loại dịch vụ: {order.service_name}</b>
                                                </span>

                                            </p>
                                            <p style={{ fontSize: 14, margin: "0 0 9px 0" }}>
                                                <span style={{ width: 40 }}>
                                                    <b>Thời gian: {order.time}</b>
                                                </span>

                                            </p>
                                        </div>
                                    </div>
                                </div>
                                ))}
                                
                            </div>
                        </div>
                        {/* Lịch sử đặt */}
                        <div
                            className="client tab-pane fade"
                            id="v-pills-datehistory"
                            role="tabpanel"
                            aria-labelledby="v-pills-history-tab"
                        >
                            <div className="client text-start mt-4" id="card_order">
                                {orderComplete.map((order) => (
                                    <div className="client row g-3 mt-5">
                                    <div className="client col-lg-5 col-sm-12" style={{ height: 216 }}>
                                        <img
                                            style={{ height: "100%", width: "100%" }}
                                            className="client img-fluid rounded-3"
                                            src={order.garage_img}
                                            alt=""
                                        />
                                    </div>
                                    <div className="client col-lg-7 col-sm-12" style={{ height: 216 }}>
                                        <div className="client d-block">
                                            <h6 className="client mb-3 d-inline-block float-start">
                                                {order.garage_name}
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
                                                {order.garage_address}
                                            </p>
                                            <p style={{ fontSize: 14, margin: "0 0 9px 0" }}>
                                                <span style={{ width: 40 }}>
                                                    <i className="client fa fa-phone-alt text_red me-2" />
                                                </span>
                                                {order.garage_phone}
                                            </p>
                                            <p style={{ fontSize: 14, margin: "0 0 9px 0" }}>
                                                <span style={{ width: 40 }}>
                                                    <i className="client bi bi-clock-fill text_red me-2" />
                                                </span>
                                                Giờ mở cửa: {order.time_open} - đóng cửa: {order.time_close}
                                            </p>
                                        </div>
                                        <div className="client float-start mt-1">
                                            <p style={{ fontSize: 14, margin: "0 0 9px 0" }}>
                                                <span style={{ width: 40 }}>
                                                    <b>Xe: {order.car_name}</b>
                                                </span>

                                            </p>
                                            <p style={{ fontSize: 14, margin: "0 0 9px 0" }}>
                                                <span style={{ width: 40 }}>
                                                    <b>Dịch vụ: {order.service_name}</b>
                                                </span>

                                            </p>
                                            <p style={{ fontSize: 14, margin: "0 0 9px 0" }}>
                                                <span style={{ width: 40 }}>
                                                    <b>Thời gian: {order.time}</b>
                                                </span>

                                            </p>
                                            <button
                                                type="button"
                                                className="client btn btn-outline-info mt-1 me-2"
                                                data-bs-toggle="modal"
                                                data-bs-target="#staticBackdrop2"
                                            >
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
                                ))}
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