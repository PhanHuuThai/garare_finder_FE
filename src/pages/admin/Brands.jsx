import axios from "axios";
import { useEffect, useState } from "react"
import ReactLoading from 'react-loading';
import config from "../../config";
import ReactPaginate from "react-paginate";
import { Dialog } from "primereact/dialog";


const BrandList = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [brands, setBrands] = useState([])
    const [showAddBrand, setShowAddBrand] = useState(false)
    const [showEditBrand, setShowEditBrand] = useState(false)
    const [brandEdit, setBrandEdit] = useState([])
    const [newBrand, setNewBrand] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)

    const perPage = 10;
    const token = localStorage.getItem('token')

    const fetchBrands = async (page) => {
        try {
            setIsLoading(true)
            const response = await axios.get(`${config.apiBaseUrl}/admin/brand?page=${page}&per_page=${perPage}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            let result = response.data
            if (result.success) {
                setBrands(result.data.data)
                setPageCount(result.data.last_page)
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
        fetchBrands(currentPage + 1)
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

    const handleAddBrand = async (e) => {
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
            const response = await axios.post(`${config.apiBaseUrl}/admin/brand`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.data.success) {
                await fetchBrands()
            }
            setShowAddBrand(false)
            console.log(response.data);
            // Handle success (e.g., show a success message or update the UI)
        } catch (error) {
            console.error('There was an error updating the user!', error)
            setShowAddBrand(false)
            // Handle error (e.g., show an error message)
        } finally {
            setIsLoading(false)
            setShowAddBrand(false)
        }
    }

    const getBrandEdit = async (id) => {
        setIsLoading(true)
        let brand = brands.find(item => item.id === id);

        if (brand) {
            setBrandEdit({
                id: brand.id,
                name: brand.name,
                description: brand.description,
                imgage: brand.image
            })
            setShowEditBrand(true)
        }
        setIsLoading(false)
    }

    const handleEditBrand = async (e) => {
        e.preventDefault()
        let formData = new FormData();
        formData.append('name', brandEdit.name);
        formData.append('description', brandEdit.description);
        if (imageFile) {
            formData.append('image', imageFile);
        }
        const token = localStorage.getItem('token');
        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
        try {
            setIsLoading(true)
            const response = await axios.put(`${config.apiBaseUrl}/admin/brand/${brandEdit.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.data.success) {
                setImageFile(null)
                await fetchBrands()
            }
            setShowEditBrand(false)
            console.log(response.data);
        } catch (error) {
            console.error('There was an error updating the user!', error)
            setShowEditBrand(false)
        } finally {
            setIsLoading(false)
            setShowEditBrand(false)
        }
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
                                    onClick={() => setShowAddBrand(true)}
                                    className="btn btn-danger d-md-block mb-4 hidden-xs hidden-sm waves-effect waves-light text-white"
                                >
                                    <i className="fas fa-plus-circle mx-2" aria-hidden="true" />
                                    Thêm Hãng Xe
                                </button>
                            </div>
                            <h3 className="box-title mb-4">Danh sách hãng xe</h3>
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
                                            brands.length > 0 ? (
                                                brands.map(brand => (
                                                    <tr>
                                                        <td className="text-center" style={{}}>
                                                            {brand.id}
                                                        </td>
                                                        <td>
                                                            <img
                                                                src={brand.image}
                                                                alt=""
                                                                width="100px"
                                                                height="100px"
                                                            />
                                                        </td>
                                                        <td className="text-center">
                                                            {brand.name}
                                                        </td>
                                                        <td className="text-center">
                                                            {brand.description}
                                                        </td>
                                                        <td >
                                                            <button style={{ width: "100px" }}
                                                                onClick={() => { getBrandEdit(brand.id) }}
                                                                className="btn btn-primary d-md-block mb-3 hidden-xs hidden-sm waves-effect waves-light text-white"
                                                            >
                                                                <i className="fas fa-edit mx-2" aria-hidden="true" />
                                                                Sửa
                                                            </button>
                                                            <form
                                                                action=""
                                                                method="POST"
                                                            >
                                                                <button
                                                                    className="btn btn-danger d-md-block hidden-xs hidden-sm waves-effect waves-light text-white"
                                                                    type="submit"
                                                                    style={{ width: "100px" }}
                                                                >
                                                                    <i className="fas fa-ban mx-2" aria-hidden="true" />
                                                                    Xóa
                                                                </button>
                                                            </form>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan={5} className="border-0">
                                                        Chưa có hãng xe
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                                <ReactPaginate
                                    previousLabel={'Trước'}
                                    nextLabel={'Tiếp'}
                                    breakLabel={'...'}
                                    pageCount={pageCount}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    onPageChange={handlePageClick}
                                    containerClassName={'pagination'}
                                    pageClassName={'page-item'}
                                    pageLinkClassName={'page-link'}
                                    previousClassName={'page-item'}
                                    previousLinkClassName={'page-link'}
                                    nextClassName={'page-item'}
                                    nextLinkClassName={'page-link'}
                                    breakClassName={'page-item'}
                                    breakLinkClassName={'page-link'}
                                    activeClassName={'active'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Dialog header="Header" visible={showAddBrand} style={{ width: '50vw' }} onHide={() => { setShowAddBrand(false) }}>
                <div className="modal-body">
                    <form onSubmit={handleAddBrand}>
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
                            <label htmlFor="name" className=" form-label">Tên hãng xe:</label>
                            <input type="text" className="form-control" id="name" name="name" value={newBrand.name} onChange={handleInputChange(setNewBrand)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className=" form-label">Tên hãng xe:</label>
                            <input type="text" className="form-control" id="description" name="description" value={newBrand.description} onChange={handleInputChange(setNewBrand)} />
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary">Thêm hãng xe</button>
                        </div>
                    </form>
                </div>
            </Dialog>
            <Dialog header="Header" visible={showEditBrand} style={{ width: '50vw' }} onHide={() => { setShowEditBrand(false) }}>
                <div className="modal-body">
                    <form onSubmit={handleEditBrand}>
                        <div className="mb-3 text-center" style={{ display: 'grid', gridTemplateColumns: 'auto auto', gap: '10px' }}>
                            <input type="file" id="image" name="image" onChange={handleImageChange(setBrandEdit)} />
                            <img
                                className="img-fluid"
                                width="40%"
                                height="40%"
                                alt="car"
                                id="image"
                                src={brandEdit.image || require('../../assets/images/car_default.png')}
                            />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className=" form-label">Tên hãng xe:</label>
                            <input type="text" className="form-control" id="name" name="name" value={brandEdit.name} onChange={handleInputChange(setBrandEdit)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className=" form-label">Mô tả:</label>
                            <input type="text" className="form-control" id="description" name="description" value={brandEdit.description} onChange={handleInputChange(setBrandEdit)} />
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary">Sửa hãng xe</button>
                        </div>
                    </form>
                </div>
            </Dialog>
        </div>

    )
}

export default BrandList