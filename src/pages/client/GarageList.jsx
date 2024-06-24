import { useEffect, useState } from "react";
import Search from "../../components/client/Search"
import axios from "axios";
import config from "../../config";
import ReactPaginate from "react-paginate";
import '../../assets/css/client/pagination.css'
import ReactLoading from 'react-loading';
import { Link, useNavigate } from "react-router-dom"


const GarageList = () => {
    const [garages, setGarages] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const garagesPerPage = 9;
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    const handleLinkClick = (id) => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login')
        } else {
            navigate(`/garage-detail/${id}`)
        }
    };
    

    useEffect(() => {
        const fetchGarages = async () => {
        try {
            const response = await axios.get(`${config.apiBaseUrl}/client/home/get-all-garage`);
            if(!response.data.success) {
                setError(response.data.message)
            }
            setGarages(response.data.data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
        };
        fetchGarages();
    }, []);

    const handleSearchResults = (data) => {
        setGarages(data);
        setCurrentPage(0);
    };

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
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

    const offset = currentPage * garagesPerPage;
    const currentGarages = garages.slice(offset, offset + garagesPerPage);
    const pageCount = Math.ceil(garages.length / garagesPerPage);

    return (
        
        <div className="client  container-xxl bg-white p-0">
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
            {/* Header Start */}
            <div className="client  container-fluid header bg-white p-0">
                <div className="client  row g-0 align-items-center flex-column-reverse flex-md-row">
                    <div className="client  col-md-6 p-5 mt-lg-5 mt-3">
                        <h1 className="client  display-5 animated fadeIn mb-4">Danh sách Garage</h1>
                        <nav aria-label="breadcrumb animated fadeIn">
                            <ol className="client  breadcrumb text-uppercase">
                                <li className="client  breadcrumb-item">
                                    <a href="">Trang chủ</a>
                                </li>
                                <li className="client  breadcrumb-item">
                                    <a href="#">Pages</a>
                                </li>
                                <li
                                    className="client  breadcrumb-item text-body active"
                                    aria-current="page"
                                >
                                    Danh sách garage
                                </li>
                            </ol>
                        </nav>
                    </div>
                    
                    <div className="client  col-md-6 animated fadeIn" style={{ height: 390 }}>
                        <img
                            className="client  imgHeaderPage"
                            style={{ height: "100% !important", width: "100% !important" }}
                            src="https://danangaz.com/wp-content/uploads/2019/02/sua-chua-o-to-da-nang-04-min.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            {/* Header End */}
            {/* Search Start */}
            <Search onSearchResults={handleSearchResults}/>

            {/* Search End */}
            {/* Property List Start */}
            <div
                className="client  container-xxl py-4"
                id="garage_list"
                style={{ minHeight: 720 }}
            >
                <div className="client  container">
                    <div className="client  row g-0 gx-5 align-items-end">
                        <div className="client  col-lg-12">
                            <div
                                className="client  text-center mx-auto mb-5 wow slideInLeft"
                                data-wow-delay="0.1s"
                            >
                                <h1 className="client  mb-3">Danh sách garage</h1>
                                <p>
                                    Danh sách Garage đề xuất sau đây có thể bạn sẽ cần, hãy tiếp tục
                                    tìm kiếm nếu chưa phù hợp!.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="client  text-center d-none" id="spin">
                        <div
                            className="client  spinner-grow text-danger me-2"
                            style={{ height: 20, width: 20 }}
                            role="status"
                        >
                            <span className="client  sr-only">Loading...</span>
                        </div>
                        <div
                            className="client  spinner-grow text-danger me-2"
                            style={{ height: 20, width: 20 }}
                            role="status"
                        >
                            <span className="client  sr-only">Loading...</span>
                        </div>
                        <div
                            className="client  spinner-grow text-danger me-2"
                            style={{ height: 20, width: 20 }}
                            role="status"
                        >
                            <span className="client  sr-only">Loading...</span>
                        </div>
                        <div
                            className="client  spinner-grow text-danger me-2"
                            style={{ height: 20, width: 20 }}
                            role="status"
                        >
                            <span className="client  sr-only">Loading...</span>
                        </div>
                        <div
                            className="client  spinner-grow text-danger me-2"
                            style={{ height: 20, width: 20 }}
                            role="status"
                        >
                            <span className="client  sr-only">Loading...</span>
                        </div>
                        <div
                            className="client  spinner-grow text-danger"
                            style={{ height: 20, width: 20 }}
                            role="status"
                        >
                            <span className="client  sr-only">Loading...</span>
                        </div>
                    </div>
                    <div className="client  tab-content" id="tab-content">
                        <div id="tab-1" className="client  tab-pane fade show p-0 active">
                            <div className="client  row g-4">
                                {currentGarages.map((garage) => (
                                    <div key={garage.id} className="client  col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="client  property-item rounded overflow-hidden">
                                        <div className="client  position-relative overflow-hidden">
                                        <a onClick={() => handleLinkClick(garage.id)}>
                                            <img
                                            className="client  img-fluid"
                                            src={garage.img_thumnail}
                                            alt={garage.name}
                                            />
                                        </a>
                                        <div className="client  bg-white rounded-top text_red position-absolute start-0 bottom-0 mx-4 pt-1 px-2">
                                            <form id="add_favourite" action="" method="POST">
                                            <button
                                                className="client  text_red"
                                                type="submit"
                                                style={{
                                                backgroundColor: "transparent",
                                                border: "none",
                                                width: 39
                                                }}
                                            >
                                                <i className="client  bi bi-heart font-weight-bold" />
                                            </button>
                                            </form>
                                        </div>
                                        </div>
                                        <div className="client  p-4 pb-0 text-start">
                                        <a className="client  d-block h5 mb-2" href="" style={{ height: 48 }}>
                                            {garage.name}
                                        </a>
                                        <p
                                            className="client  mt-2"
                                            style={{
                                            height: 48,
                                            overflow: "hidden",
                                            display: "-webkit-box",
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: "vertical"
                                            }}
                                        >
                                            <i className="client  fa fa-map-marker-alt text_red me-2" />
                                            {garage.address_detail}
                                        </p>
                                        </div>
                                        <div className="client  d-flex">
                                        <small className="client  flex-fill text-start mx-4 me-5">Đánh giá</small>
                                        <small className="client  flex-fill text-start pb-2 ms-5">
                                            <i className="client  bi bi-star-fill text_red " />
                                            <i className="client  bi bi-star-fill text_red" />
                                            <i className="client  bi bi-star-fill text_red" />
                                            <i className="client  bi bi-star-fill text_red" />
                                            <i className="client  bi bi-star-fill text_red me-1" /> 5
                                        </small>
                                        </div>
                                        <div className="client  d-flex border-top mt-2">
                                        <small className="client  flex-fill text-start border-end py-2 mx-4">
                                            <i className="client  far fa-calendar-plus text_red me-3" />
                                            <a onClick={() => handleLinkClick(garage.id)} className="client  text_red">
                                            Đặt lịch ngay
                                            </a>
                                        </small>
                                        <small className="client  flex-fill text-start py-2">
                                            <i className="client  bi bi-chat-dots-fill text_red me-2 d-inline-block" />
                                            <form action="" className="client  d-inline-block" method="POST">
                                            <input
                                                type="hidden"
                                                name="id_garage"
                                                value={garage.id}
                                            />
                                            <button
                                                className="client  text_red"
                                                type="submit"
                                                style={{ backgroundColor: "transparent", border: "none" }}
                                            >
                                                Nhắn tin
                                            </button>
                                            </form>
                                        </small>
                                        </div>
                                    </div>
                                    </div>
                                ))}
                                <div
                                    className="client  col-12 text-center wow fadeInUp"
                                    data-wow-delay="0.1s"
                                >
                                    <div className="client  d-flex justify-content-center my-4">
                                        <div className="client  Page navigation example">
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

    )
}

export default GarageList