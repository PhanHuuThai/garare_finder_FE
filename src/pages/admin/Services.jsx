import axios from "axios";
import { useEffect, useState } from "react"
import ReactLoading from 'react-loading';
import config from "../../config";
import ReactPaginate from "react-paginate";
import { Dialog } from "primereact/dialog";


const ServiceList = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [services, setServices] = useState([])
    const [showAddService, setShowAddService] = useState(false)
    const [showEditService, setShowEditService] = useState(false)
    const [serviceEdit, setServiceEdit] = useState([])
    const [newBrand, setNewBrand] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)

    const perPage = 10;
    const token = localStorage.getItem('token')

    const fetchServices = async (page) => {
        try {
            setIsLoading(true)
            const response = await axios.get(`${config.apiBaseUrl}/client/about/get-all-service`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            let result = response.data
            if (result.success) {
                console.log(response.data)
                setServices(result.data)
            }
        } catch (error) {
        } finally {
            setIsLoading(false)
        }
    }

    const handlePageClick = (data) => {
        setCurrentPage(data.selected)
    }

    useEffect(() => {
        fetchServices(currentPage + 1)
    }, [currentPage])

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

    }

    const [imageFile, setImageFile] = useState(null)

    const handleInputChange = (setter) => (e) => {
        const { name, value } = e.target
        setter(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleImageChange = (setter) => (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file)
            setter(prevUser => ({
                ...prevUser,
                image: imageUrl
            }))
        }

        setImageFile(e.target.files[0])
    }

    const handleAddService = async (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append('name', newBrand.name)
        formData.append('description', newBrand.description)
        if (imageFile) {
            formData.append('image', imageFile)
        }

        const token = localStorage.getItem('token');
        try {
            setIsLoading(true);
            const response = await axios.post(`${config.apiBaseUrl}/admin/service`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.data.success) {
                await fetchServices()
            }
            setShowAddService(false)
            console.log(response.data);
            // Handle success (e.g., show a success message or update the UI)
        } catch (error) {
            console.error('There was an error updating the user!', error)
            setShowAddService(false)
            // Handle error (e.g., show an error message)
        } finally {
            setIsLoading(false)
            setShowAddService(false)
        }
    }

    const getServiceEdit = async (id) => {
        setIsLoading(true)
        let service = services.find(item => item.id === id);

        if (service) {
            setServiceEdit({
                id: service.id,
                name: service.name,
                description: service.description,
                imgage: service.image
            })
            setShowEditService(true)
        }
        setIsLoading(false)
    }

    const handleEditService = async (e) => {
        e.preventDefault()
        let formData = new FormData();
        formData.append('name', serviceEdit.name);
        formData.append('description', serviceEdit.description);
        formData.append('_method', 'PUT');
        if (imageFile) {
            formData.append('image', imageFile);
        }
        const token = localStorage.getItem('token');
        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
        try {
            setIsLoading(true)
            const response = await axios.post(`${config.apiBaseUrl}/admin/service/${serviceEdit.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.data.success) {
                setImageFile(null)
                await fetchServices()
            }
            setShowEditService(false)
            console.log(response.data);
        } catch (error) {
            console.error('There was an error updating the user!', error)
            setShowEditService(false)
        } finally {
            setIsLoading(false)
            setShowEditService(false)
        }
    }

    const handleDeleteService = async (id) => {
        try {
            setIsLoading(true)
            const response = await axios.get(`${config.apiBaseUrl}/admin/service/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.data.success) {
                await fetchServices()
            }
            setShowEditService(false)
        } catch (error) {
            console.error('There was an error updating the user!', error)
            setShowEditService(false)
        }
        setIsLoading(false)
    }
    return (
        <div className="page-wrapper text-start">
            <div style={{ position: 'relative' }}>
                {isLoading && (
                    <div style={loadingOverlayStyle}>
                        <ReactLoading
                            type="spin"
                            color="#000"
                            height={50}
                            width={50}
                        />
                    </div>
                )}
            </div>
            <div className="page-breadcrumb bg-white">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                        <h4 className="page-title">Hãng xe</h4>
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
                {/* ============================================================== */}
                {/* Start Page Content */}
                {/* ============================================================== */}
                <div className="row">
                    <div className="col-sm-12">
                        <div className="white-box">
                            <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                <button
                                    onClick={() => setShowAddService(true)}
                                    className="btn btn-danger d-md-block mb-4 hidden-xs hidden-sm waves-effect waves-light text-white"
                                >
                                    <i className="fas fa-plus-circle mx-2" aria-hidden="true" />
                                    Thêm dịch vụ
                                </button>
                            </div>
                            <h3 className="box-title mb-4">Danh sách dịch vụ</h3>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th style={{}} className="border-top-0 text-center">STT</th>
                                            <th style={{}} className="border-top-0 text-center">Ảnh</th>
                                            <th style={{}} className="border-top-0 text-center">Tên</th>
                                            <th style={{}} className="border-top-0 text-center">Mô tả</th>
                                            <th style={{ width: '120px' }} className="border-top-0 action" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            services.length > 0 ? (
                                                services.map(service => (
                                                    <tr>
                                                        <td className="text-center" style={{}}>
                                                            {service.id}
                                                        </td>
                                                        <td>
                                                            <img
                                                                src={service.image}
                                                                alt=""
                                                                width="100px"
                                                                height="100px"
                                                            />
                                                        </td>
                                                        <td className="text-center">
                                                            {service.name}
                                                        </td>
                                                        <td className="text-center">
                                                            {service.description}
                                                        </td>
                                                        <td >
                                                            <button style={{ width: "100px" }}
                                                                onClick={() => { getServiceEdit(service.id) }}
                                                                className="btn btn-primary d-md-block mb-3 hidden-xs hidden-sm waves-effect waves-light text-white"
                                                            >
                                                                <i className="fas fa-edit mx-2" aria-hidden="true" />
                                                                Sửa
                                                            </button>

                                                            <button
                                                                className="btn btn-danger d-md-block hidden-xs hidden-sm waves-effect waves-light text-white"
                                                                type="submit"
                                                                style={{ width: "100px" }}
                                                                onClick={() => handleDeleteService(service.id)}
                                                            >
                                                                <i className="fas fa-ban mx-2" aria-hidden="true" />
                                                                Xóa
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan={5} className="border-0">
                                                        Chưa có dịch vụ
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Dialog header="Header" visible={showAddService} style={{ width: '50vw' }} onHide={() => { setShowAddService(false) }}>
                <div className="modal-body">
                    <form onSubmit={handleAddService}>
                        <div className="mb-3 text-center" style={{ display: 'grid', gridTemplateColumns: 'auto auto', gap: '10px' }}>
                            <input type="file" id="image" name="image" onChange={handleImageChange(setNewBrand)} />
                            <img
                                className="img-fluid"
                                width="40%"
                                height="40%"
                                alt="car"
                                id="image"
                                src={newBrand.image || require('../../assets/images/car_default.png')}
                            />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className=" form-label">Tên dịch vụ:</label>
                            <input type="text" className="form-control" id="name" name="name" value={newBrand.name} onChange={handleInputChange(setNewBrand)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className=" form-label">Mô tả:</label>
                            <input type="text" className="form-control" id="description" name="description" value={newBrand.description} onChange={handleInputChange(setNewBrand)} />
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary">Thêm dịch vụ</button>
                        </div>
                    </form>
                </div>
            </Dialog>
            <Dialog header="Header" visible={showEditService} style={{ width: '50vw' }} onHide={() => { setShowEditService(false) }}>
                <div className="modal-body">
                    <form onSubmit={handleEditService}>
                        <div className="mb-3 text-center" style={{ display: 'grid', gridTemplateColumns: 'auto auto', gap: '10px' }}>
                            <input type="file" id="image" name="image" onChange={handleImageChange(setServiceEdit)} />
                            <img
                                className="img-fluid"
                                width="40%"
                                height="40%"
                                alt="car"
                                id="image"
                                src={serviceEdit.image || require('../../assets/images/car_default.png')}
                            />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className=" form-label">Tên dịch vụ:</label>
                            <input type="text" className="form-control" id="name" name="name" value={serviceEdit.name} onChange={handleInputChange(setServiceEdit)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className=" form-label">Mô tả:</label>
                            <input type="text" className="form-control" id="description" name="description" value={serviceEdit.description} onChange={handleInputChange(setServiceEdit)} />
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary">Sửa dịch vụ</button>
                        </div>
                    </form>
                </div>
            </Dialog>
        </div>

    )
}

export default ServiceList