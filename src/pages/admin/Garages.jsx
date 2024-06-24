import axios from "axios"
import { useEffect, useState } from "react"
import config from "../../config"
import ReactPaginate from "react-paginate"
import ReactLoading from 'react-loading'

const GarageListAD = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [garages, setGarages] = useState([])
    const token = localStorage.getItem('token')
    const [currentPage, setCurrentPage] = useState(0)
    const garagesPerPage = 9
    const [offset, setOffset] = useState(0)
    const [currentGarages, setCurrentGarages] = useState([])
    const [pageCount, setPageCount] = useState(0)

    const fetchGarages = async () => {
        try {
            setIsLoading(true)
            const response = await axios.get(`${config.apiBaseUrl}/admin/garage`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            let result = response.data
            console.log(result)
            if (result.success) {
                setGarages(result.data)
            }
        } catch (error) {
        } finally {
            setIsLoading(false)
        }
    }
    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    }

    useEffect(() => {
        const offset = currentPage * garagesPerPage
        setCurrentGarages(garages.slice(offset, offset + garagesPerPage))
        setPageCount(Math.ceil(garages.length / garagesPerPage))
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

    };

    useEffect(() => {
        fetchGarages()
    }, [])

    return (
        <div className="page-wrapper">
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
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12 text-start">
                        <h4 className="page-title">Danh sách Garage</h4>
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
                <div className="row">
                    <div className="col-sm-12">
                        <div className="white-box">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                    <a
                                        href="{{ url('/admin/garage') }}"
                                        className="btn btn-primary d-md-block mb-4 hidden-xs hidden-sm waves-effect waves-light text-white"
                                    >
                                        Tất cả
                                    </a>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                    <a
                                        href="{{ url('/admin/garage/2') }}"
                                        className="btn btn-danger d-md-block mb-4 hidden-xs hidden-sm waves-effect waves-light text-white"
                                    >
                                        Bị khóa
                                    </a>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                    <a
                                        href="{{ url('/admin/garage/1') }}"
                                        className="btn btn-success d-md-block mb-4 hidden-xs hidden-sm waves-effect waves-light text-white"
                                    >
                                        Đang hoạt động
                                    </a>
                                </div>
                            </div>
                            <h3 className="box-title mb-4">Danh sách garage</h3>
                            <div className="row">
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th className="border-top-0 text-center">ID</th>
                                                <th className="border-top-0 text-center">Tên</th>
                                                <th className="border-top-0 text-center">Email</th>
                                                <th className="border-top-0 text-center">SĐT</th>
                                                <th className="border-top-0 text-center">Địa chỉ</th>
                                                <th
                                                    className="border-top-0 text-center"
                                                    style={{ width: "14%" }}
                                                >
                                                    Trạng thái
                                                </th>
                                                <th
                                                    className="border-top-0 text-center"
                                                    id="action"
                                                    style={{ width: "10%" }}
                                                />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                currentGarages.length > 0 ? (
                                                    currentGarages.map(garage => (
                                                        <tr key={garage.id}>
                                                            <td className="">
                                                                {garage.id}
                                                            </td>
                                                            <td>
                                                                {garage.name}
                                                            </td>
                                                            <td>
                                                                {garage.email}
                                                            </td>
                                                            <td>
                                                                {garage.phone}
                                                            </td>
                                                            <td>
                                                                {garage.address_detail}
                                                            </td>
                                                            <td className="text-center">
                                                                {
                                                                    garage.action == '2' ? (
                                                                        <span
                                                                            className="badge rounded-pill bg-danger text-while font-bold"
                                                                            style={{ height: 30, width: "90%", fontSize: 14 }}
                                                                        >
                                                                            Đang khóa
                                                                        </span>
                                                                    ) : (
                                                                        <span
                                                                            className="badge rounded-pill bg-success text-while font-bold"
                                                                            style={{ height: 30, width: "90%", fontSize: 14 }}
                                                                        >
                                                                            Đang hoạt động
                                                                        </span>
                                                                    )
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    garage.action == '2' ? (
                                                                        <form
                                                                            action="{{ url('/admin/garage/' . $item->id) }}"
                                                                            method="POST"
                                                                        >
                                                                            <input type="hidden" name="action" defaultValue={1} />
                                                                            <button
                                                                                className="btn btn-primary rounded-pill font-bold d-md-block hidden-xs hidden-sm waves-effect waves-light text-white"
                                                                                type="submit"
                                                                            >
                                                                                Hủy khóa
                                                                            </button>
                                                                        </form>
                                                                    ) : (
                                                                        <form
                                                                            action="{{ url('/admin/garage/' . $item->id) }}"
                                                                            method="POST"
                                                                        >
                                                                            <input type="hidden" name="action" defaultValue={2} />
                                                                            <button
                                                                                className="btn btn-danger rounded-pill font-bold d-md-block hidden-xs hidden-sm waves-effect waves-light text-white"
                                                                                type="submit"
                                                                            >
                                                                                Khóa
                                                                            </button>
                                                                        </form>
                                                                    )
                                                                }
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan={5} className="border-0">
                                                            Chưa có garage
                                                        </td>
                                                    </tr>
                                                )
                                            }

                                        </tbody>
                                    </table>
                                    <div
                                        className="col-12 text-center wow fadeInUp"
                                        data-wow-delay="0.1s"
                                    >
                                        <div className="d-flex justify-content-center my-4">
                                            <div className="Page navigation example">
                                                <div >
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
                                                        breakClassName={'break-me'}
                                                        activeClassName={'selected'}
                                                        disabledClassName={'disabled'}
                                                    />

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default GarageListAD