import axios from "axios";
import { useEffect, useState } from "react"
import config from "../../config";
import { useCommon } from "../../context/CommonContext";
import ReactLoading from 'react-loading';

const ServicesGarage = () => {
    const [serviceGarage, setServiceGarage] = useState([]);
    const {services} = useCommon();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const id = localStorage.getItem("garageId");
    const [serviceAdd, setServiceAdd] = useState('');
    const [isUpdate, setIsUpdate] = useState(false);
    const [filteredServices, setFilteredServices] = useState([]);
    const [errorAdd, setErrorAdd] = useState('');


    useEffect(() => {
        const fetchServices = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`${config.apiBaseUrl}/garage/get-services/${id}`, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}` 
                }
            });
            if(!response.data.success) {
                setError(response.data.message)
            }
            console.log(response.data.data)
            setServiceGarage(response.data.data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
        };
        fetchServices();
    }, [isUpdate])

    const handleDeleteCar = async (idService) => {
        const token = localStorage.getItem('token');
    
        const confirmDelete = window.confirm("Are you sure you want to delete this car?");
        if (!confirmDelete) {
            return;
        }
    
        try {
            setLoading(true); 
            const response = await axios.post(
                `${config.apiBaseUrl}/garage/delete-service`,
                {
                    id_garage: id,
                    id_service: idService
                },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
    
            if (response.data.success) {
                // Handle success (e.g., refresh the car list)
                setIsUpdate(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER));
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
    

    useEffect(() => {
        // Lọc các dịch vụ không có trong garage
        const filterServices = () => {
            const filtered = services.filter(service =>
                !serviceGarage.some(garageService => garageService.id === service.id)
            );
            setFilteredServices(filtered);
        };
            filterServices();
    }, [services, serviceGarage]);

    const handleAddService = async (event) => {
        event.preventDefault();
        if(!serviceAdd) {
            setErrorAdd("Vui lòng chọn dịch vụ");
            return;
        }
        setLoading(true);
        const token = localStorage.getItem('token');
        
        try {
            const response = await axios.post(`${config.apiBaseUrl}/garage/register-service`, {
                id_garage: id,
                id_service: serviceAdd
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            
            if (response.data.success) {
                setIsUpdate(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER));
                setServiceAdd('')
                setErrorAdd("");
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            setError('Có lỗi xảy ra khi đăng ký dịch vụ.');
        } finally {
            setLoading(false);
        }
    };
    const handleServiceChange = (event) => {
        setServiceAdd(event.target.value);
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
        <>
            <div className="page-wrapper text-start">
                <div className="page-breadcrumb bg-white">
                    <div className="row align-items-start">
                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                            <h4 className="page-title">Dịch vụ</h4>
                        </div>

                    </div>
                    {/* /.col-lg-12 */}
                </div>
                <div className="container-fluid">
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
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="white-box text-start" >
                                <h3 className="box-title mb-4 mt-1" >
                                    Thêm dịch vụ cung cấp
                                </h3>
                                <form onSubmit={handleAddService} action="" className="">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <select
                                                className="form-control"
                                                id="choices-multiple-remove-button"
                                                name="service"
                                                placeholder="Chọn các dịch vụ bạn có"
                                                value={serviceAdd}
                                                onChange={handleServiceChange}
                                            >
                                                <option value="" disabled>
                                                    chọn dịch vụ
                                                </option>
                                                {filteredServices.map((service) => (
                                                    <option key={service.id} value={service.id}>
                                                        {service.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                            <button
                                                type="submit"
                                                style={{ height: "60%" }}
                                                className="btn btn-danger d-md-block mb-4 hidden-xs hidden-sm waves-effect waves-light text-white"
                                            >
                                                <i className="fas fa-plus-circle mx-2" aria-hidden="true" />
                                                Thêm dịch vụ
                                            </button>
                                        </div>
                                        {errorAdd && <p style={{ color: "red" }}>{errorAdd}</p>}
                                    </div>
                                </form>
                                <h3 className="box-title mb-4 mt-5">
                                    Danh sách dịch vụ bạn đang cung cấp dịch vụ
                                </h3>
                                <div className="table-responsive">

                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th className="border-top-0 text-center">STT</th>
                                                <th className="border-top-0 text-center">Ảnh</th>
                                                <th className="border-top-0 text-center">Tên</th>
                                                <th className="border-top-0 text-center">Mô tả</th>
                                                <th className="border-top-0" id="action">
                                                    Hành động
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {serviceGarage.map((service) => (
                                            <tr>
                                                <td className="text-center">
                                                    No. 
                                                </td>
                                                <td>
                                                    <img
                                                        src={service.image}
                                                        alt=""
                                                        style={{ height: 60, width: 60 }}
                                                    />
                                                </td>
                                                <td>
                                                    {service.name}
                                                </td>
                                                <td>
                                                    {service.description}
                                                </td>
                                                <td>
                                                    <div
                                                    >
                                                        <button
                                                            className="btn btn-danger d-md-block hidden-xs hidden-sm waves-effect waves-light text-white"
                                                            onClick={() => handleDeleteCar(service.id)}
                                                        >
                                                            <i className="fas fa-ban mx-2" aria-hidden="true" />
                                                            Xóa
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                            {/* <tr>
                                                <td colSpan={5} className="border-0">
                                                    Chưa có dịch vụ
                                                </td>
                                            </tr> */}
                                        </tbody>
                                    </table>
                                    <div className="d-flex justify-content-center my-4">
                                        <div className="Page navigation example">
                                            <div className="pagination">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Container fluid  */}
                <footer className="footer text-center">

                </footer>
            </div>

        </>
    )

}

export default ServicesGarage