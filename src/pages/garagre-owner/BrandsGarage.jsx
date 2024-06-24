import axios from "axios";
import { useEffect, useState } from "react";
import config from "../../config";
import { useCommon } from "../../context/CommonContext";
import ReactLoading from 'react-loading';

const BrandsGarage = () => {
    const { vehicles } = useCommon()
    const id = localStorage.getItem("garageId");
    const [brands, setBrands] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false);
    const [brandAdd, setBrandAdd] = useState('');
    const [filteredBrands, setFilteredBrands] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [errorAdd, setErrorAdd] = useState('');

    useEffect(() => {
        const fetchBrands = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`${config.apiBaseUrl}/garage/get-brands/${id}`, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}` 
                }
            });
            if(!response.data.success) {
                setError(response.data.message)
            }
            setBrands(response.data.data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
        };
        fetchBrands();
    }, [isUpdate])

    const handleBrandChange = (event) => {
        setBrandAdd(event.target.value);
    };

    useEffect(() => {
        // Lọc các dịch vụ không có trong garage
        const filterServices = () => {
            const filtered = vehicles.filter(brand =>
                !brands.some(brandGarage => brandGarage.id === brand.id)
            );
            setFilteredBrands(filtered);
        };
            filterServices();
    }, [vehicles, brands]);
    
    const handleAddService = async (event) => {
        event.preventDefault();
        if(!brandAdd) {
            setErrorAdd("Vui lòng chọn dịch vụ");
            return;
        }
        setLoading(true);
        const token = localStorage.getItem('token');
        
        try {
            const response = await axios.post(`${config.apiBaseUrl}/garage/register-brand`, {
                id_garage: id,
                id_brand: brandAdd
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.data.success) {
                setIsUpdate(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER));
                setBrandAdd('')
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

    const handleDeleteBrand = async (idBrand) => {

        const token = localStorage.getItem('token');
        const confirmDelete = window.confirm("Are you sure you want to delete this car?");
        if (!confirmDelete) {
            return;
        }
    
        try {
            setLoading(true); 
            const response = await axios.post(
                `${config.apiBaseUrl}/garage/delete-brand`,
                {
                    id_garage: id,
                    id_brand: idBrand
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
                console.log('brand deleted successfully');
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
                            <h4 className="page-title">Hãng xe</h4>
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
                                    Thêm hãng xe bạn đang cung cấp dịch vụ
                                </h3>
                                <form onSubmit={handleAddService} action="" className="">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <select
                                                className="form-control"
                                                id="choices-multiple-remove-button"
                                                name="brand"
                                                placeholder="Chọn các dịch vụ bạn có"
                                                multiple=""
                                                value={brandAdd}
                                                onChange={handleBrandChange}
                                            >
                                                <option value="" disabled>
                                                    chọn hãng xe
                                                </option>
                                                {filteredBrands.map((brand) => (
                                                    <option key={brand.id} value={brand.id}>
                                                        {brand.name}
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
                                                Thêm hãng xe
                                            </button>
                                        </div>
                                        {errorAdd && <p style={{ color: "red" }}>{errorAdd}</p>}
                                    </div>
                                </form>
                                <h3 className="box-title mb-4 mt-5">
                                    Danh sách hãng xe bạn đang cung cấp dịch vụ
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
                                        {brands.map((brand) => (
                                            <tr>
                                                <td className="text-center">
                                                    No.
                                                </td>
                                                <td>
                                                    <img
                                                        src={brand.image}
                                                        alt=""
                                                        style={{ height: 60, width: 60 }}
                                                    />
                                                </td>
                                                <td>
                                                    {brand.name}
                                                </td>
                                                <td>
                                                    {brand.description}
                                                </td>
                                                <td>
                                                    <div
                                                    >
                                                        <button
                                                            className="btn btn-danger d-md-block hidden-xs hidden-sm waves-effect waves-light text-white"
                                                            onClick={() => handleDeleteBrand(brand.id)}
                                                        >
                                                            <i className="fas fa-ban mx-2" aria-hidden="true" />
                                                            Xóa
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            ))}
                                            <tr>
                                                <td colSpan={5} className="border-0">
                                                    Chưa có hãng xe
                                                </td>
                                            </tr>
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

export default BrandsGarage