import axios from "axios";
import { useEffect, useState } from "react"
import ReactLoading from 'react-loading';
import config from "../../config";
import ReactPaginate from "react-paginate";


const BrandList = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [brands, setBrands] = useState([])
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
                        <h4 className="page-title">Dịch vụ</h4>
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
                                <a
                                    href=""
                                    className="btn btn-danger d-md-block mb-4 hidden-xs hidden-sm waves-effect waves-light text-white"
                                >
                                    <i className="fas fa-plus-circle mx-2" aria-hidden="true" />
                                    Thêm dịch vụ
                                </a>
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
                                            <th style={{}} className="border-top-0 action" />
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
                                                                src={brand.img}
                                                                alt=""
                                                                width="100%"
                                                                height="60%"
                                                            />
                                                        </td>
                                                        <td className="text-center">
                                                            {brand.name}
                                                        </td>
                                                        <td className="text-center">
                                                            {brand.description}
                                                        </td>
                                                        <td>
                                                            <a
                                                                href=""
                                                                className="btn btn-primary d-md-block mb-3 hidden-xs hidden-sm waves-effect waves-light text-white"
                                                            >
                                                                <i className="fas fa-edit mx-2" aria-hidden="true" />
                                                                Sửa
                                                            </a>
                                                            <form
                                                                action=""
                                                                method="POST"
                                                            >
                                                                <button
                                                                    className="btn btn-danger d-md-block hidden-xs hidden-sm waves-effect waves-light text-white"
                                                                    type="submit"
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
        </div>

    )
}

export default BrandList