import { useEffect, useState } from "react"
import { Carousel } from "react-bootstrap";
import Search from "../../components/client/Search";
import config from "../../config";
import axios from "axios";
import { useCommon } from "../../context/CommonContext";
import { Link, useNavigate } from "react-router-dom"


const Home = () => {
    const {fetchServices} = useCommon()
    const [garages, setGarages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const handleLinkClick = (id) => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login')
        } else {
            navigate(`/garage-detail/${id}`)
        }
    };

    
    const handleSearchResults = (data) => {
        setGarages(data);
      };

    useEffect(() => {
        const fetchGarages = async () => {
        try {
            const response = await axios.get(`${config.apiBaseUrl}/client/home/get-home-garage`);
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

    return (
        <div class="container-xxl bg-white p-0">
            {/* Slider */}
            <div className="client container-fluid header bg-white p-0">
                <div className="client row g-0 align-items-center flex-column-reverse flex-md-row">
                    <div className="client col-md-6 p-5 mt-lg-5 text-start">
                        <h1 className="client display-5 animated fadeIn mb-4">
                            Tìm một <span className="client text_red">Garage hoàn hảo</span> chăm sóc chiếc
                            xe của bạn
                        </h1>
                        <p
                            style={{ fontSize: "18px !important" }}
                            className="client animated fadeIn mb-4 pb-2"
                        >
                            Hãy để chúng tôi giới thiệu cho bạn các garage tốt nhất xung quanh bạn.
                        </p>
                        <a href={`/garage-list`} className="client btn btn-primary py-3 px-5 me-3 animated fadeIn">
                            Đặt ngay
                        </a>
                    </div>
                    <div className="client col-md-6 animated fadeIn">
                        <Carousel interval={2000}>
                            <Carousel.Item>
                                <img
                                    className="client d-block w-100"
                                    src="https://file.hstatic.net/200000637599/file/uu_diem_san_nhua_thoat_nuoc_dea72038c3b44d01860b9b0d635ed70c_grande.png"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="client d-block w-100"
                                    src="https://banghieuminhkhang.com/upload/sanpham/bang-hieu/bang-hieu-gara-oto-6.jpg"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
            {/* Search Start */}
            <Search onSearchResults={handleSearchResults} />
            {/* List garage */}
            <div class="container-xxl py-5 px-3">
                <div className="client container">
                    <div className="client row g-0 gx-5 align-items-end">
                        <div className="client col-lg-12">
                            <div
                                className="client text-center mx-auto mb-4 wow fadeInUp"
                                data-wow-delay="0.1s"
                                style={{ maxWidth: 660 }}
                            >
                                <h1 className="client mb-3">Đề xuất cho bạn</h1>
                                <p className="client client">
                                    Danh sách Garage đề xuất sau đây có thể bạn sẽ cần, hãy tiếp tục tìm
                                    kiếm nếu chưa phù hợp!.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="client tab-content">
                        <div id="tab-1" className="client tab-pane fade show p-0 active">
                            <div className="client row g-4">
                            {garages.map((garage) => (
                                    <div key={garage.id} className="client col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="client property-item rounded overflow-hidden">
                                        <div className="client position-relative overflow-hidden">
                                        <a onClick={() => handleLinkClick(garage.id)}>
                                            <img
                                            className="client img-fluid"
                                            src={garage.img_thumnail}
                                            alt={garage.name}
                                            />
                                        </a>
                                        <div className="client bg-white rounded-top text_red position-absolute start-0 bottom-0 mx-4 pt-1 px-2">
                                            <form id="add_favourite" action="" method="POST">
                                            <button
                                                className="client text_red"
                                                type="submit"
                                                style={{
                                                backgroundColor: "transparent",
                                                border: "none",
                                                width: 39
                                                }}
                                            >
                                                <i className="client bi bi-heart font-weight-bold" />
                                            </button>
                                            </form>
                                        </div>
                                        </div>
                                        <div className="client p-4 pb-0 text-start">
                                        <a className="client d-block h5 mb-2" href="" style={{ height: 48 }}>
                                            {garage.name}
                                        </a>
                                        <p
                                            className="client mt-2"
                                            style={{
                                            height: 48,
                                            overflow: "hidden",
                                            display: "-webkit-box",
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: "vertical"
                                            }}
                                        >
                                            <i className="client fa fa-map-marker-alt text_red me-2" />
                                            {garage.address_detail}
                                        </p>
                                        </div>
                                        <div className="client d-flex">
                                        <small className="client flex-fill text-start mx-4 me-5">Đánh giá</small>
                                        <small className="client flex-fill text-start pb-2 ms-5">
                                            <i className="client bi bi-star-fill text_red " />
                                            <i className="client bi bi-star-fill text_red" />
                                            <i className="client bi bi-star-fill text_red" />
                                            <i className="client bi bi-star-fill text_red" />
                                            <i className="client bi bi-star-fill text_red me-1" /> 5
                                        </small>
                                        </div>
                                        <div className="client d-flex border-top mt-2">
                                        <small className="client flex-fill text-start border-end py-2 mx-4">
                                            <i className="client far fa-calendar-plus text_red me-3" />
                                            <a onClick={() => handleLinkClick(garage.id)} className="client text_red">
                                            Đặt lịch ngay
                                            </a>
                                        </small>
                                        <small className="client flex-fill text-start py-2">
                                            <i className="client bi bi-chat-dots-fill text_red me-2 d-inline-block" />
                                            <form action="" className="client d-inline-block" method="POST">
                                            <input
                                                type="hidden"
                                                name="id_garage"
                                                value={garage.id}
                                            />
                                            <button
                                                className="client text_red"
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
                              
                                <div className="client col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                                    <a className="client btn btn-primary py-3 px-5" href="">
                                        Xem thêm
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* service */}
            <div className="client container-xxl py-5">
                <div className="client container">
                    <div
                        className="client text-center mx-auto mb-5 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 660 }}
                    >
                        <h1 className="client mb-3">Dịch vụ</h1>
                        <p>
                            Chúng tôi hiện có các dịch mà mọi chiếc xe đều cần đến mỗi khi cần tìm
                            garage.
                        </p>
                    </div>
                    <div className="client row g-2">
                        <div
                            className="client col-lg-6 col-sm-6 col-12 wow fadeInUp"
                            data-wow-delay="0.1s"
                        >
                            <a
                                className="client cat-item d-block bg-light text-center rounded p-3"
                                href=""
                            >
                                <div
                                    className="client rounded p-3"
                                    style={{ border: "1px dashed rgba(185, 46, 0, 0.3)" }}
                                >
                                    <div className="client icon mb-3">
                                        <img
                                            className="client img-fluid img-card1"
                                            src={require('../../assets/images/repair.webp')}
                                            alt="Icon"
                                        />
                                    </div>
                                    <h5>Sửa chữa</h5>
                                    <span>Dịch vụ sửa chữa ô tô là các thủ tục được thực hiện để sửa hoặc phục hồi xe đang gặp sự cố, hư hỏng về máy móc.</span>
                                </div>
                            </a>
                        </div>
                        <div
                            className="client col-lg-6 col-sm-6 col-12 wow fadeInUp"
                            data-wow-delay="0.1s"
                        >
                            <a
                                className="client cat-item d-block bg-light text-center rounded p-3"
                                href=""
                            >
                                <div
                                    className="client rounded p-3"
                                    style={{ border: "1px dashed rgba(185, 46, 0, 0.3)" }}
                                >
                                    <div className="client icon mb-3">
                                        <img
                                            className="client img-fluid img-card1"
                                            src={require('../../assets/images/re-paint-fotor.png')}
                                            alt="Icon"
                                        />
                                    </div>
                                    <h5>Tân trang</h5>
                                    <span>Dịch vụ tân trang ô tô là một quy trình toàn diện nhằm phục hồi một chiếc xe cũ hoặc bị hư hỏng về tình trạng gần như nguyên bản.</span>
                                </div>
                            </a>
                        </div>
                        <div
                            className="client col-lg-6 col-sm-6 col-12 wow fadeInUp"
                            data-wow-delay="0.1s"
                        >
                            <a
                                className="client cat-item d-block bg-light text-center rounded p-3"
                                href=""
                            >
                                <div
                                    className="client rounded p-3"
                                    style={{ border: "1px dashed rgba(185, 46, 0, 0.3)" }}
                                >
                                    <div className="client icon mb-3">
                                        <img
                                            className="client img-fluid img-card1"
                                            src={require('../../assets/images/maintenance.webp')}
                                            alt="Icon"
                                        />
                                    </div>
                                    <h5>Bảo dưỡng</h5>
                                    <span>Dịch vụ bảo dưỡng ô tô là các quy trình định kỳ giúp giữ cho xe hoạt động trơn tru và ngăn ngừa các vấn đề tiềm ẩn.</span>
                                </div>
                            </a>
                        </div>
                        <div
                            className="client col-lg-6 col-sm-6 col-12 wow fadeInUp"
                            data-wow-delay="0.1s"
                        >
                            <a
                                className="client cat-item d-block bg-light text-center rounded p-3"
                                href=""
                            >
                                <div
                                    className="client rounded p-3"
                                    style={{ border: "1px dashed rgba(185, 46, 0, 0.3)" }}
                                >
                                    <div className="client icon mb-3">
                                        <img
                                            className="client img-fluid img-card1"
                                            src={require('../../assets/images/rescue.webp')}
                                            alt="Icon"
                                        />
                                    </div>
                                    <h5>Cứu hộ</h5>
                                    <span>Họ sẽ giúp khắc phục nhanh chóng các trường hợp xe gặp sự cố bất ngờ như hư xăm, hư khóa, bị ngập nước, hư ắc quy, bị tai nạn…</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* about us */}
            <div className="client container-xxl py-5">
                <div className="client container">
                    <div className="client row g-5 align-items-start">
                        <div className="client col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="client about-img position-relative overflow-hidden p-5 pe-0">
                                <img
                                    className="client img-fluid w-100"
                                    src={require('../../assets/images/about-us.jpg')}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="client col-lg-6 wow fadeIn text-start" data-wow-delay="0.5s">
                            <h1 className="client mb-4">Về chúng tôi</h1>
                            <p className="client mb-4">
                                Chúng tôi cung cấp ứng dụng đặt lịch bão dưỡng cho phương tiện của
                                bạn. Chúng tôi giúp kết nối garage với người dùng có nhu cầu tìm
                                hiểu và đặt lịch đối với garage.
                            </p>
                            <p>
                                <i className="client fa fa-check text_red me-3" />
                                Đặt lịch 24/7
                            </p>
                            <p>
                                <i className="client fa fa-check text_red me-3" />
                                Không cần thanh toán trước
                            </p>
                            <p>
                                <i className="client fa fa-check text_red me-3" />
                                Đánh giá trung thực
                            </p>
                            <a className="client btn btn-primary py-3 px-5 mt-3" href="">
                                Thêm
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* contact */}
            <div className="client container-xxl py-4">
                <div className="client container">
                    <div className="client bg-light rounded p-3">
                        <div
                            className="client bg-white rounded p-4"
                            style={{ border: "1px dashed rgba(185, 46, 0, 0.3)" }}
                        >
                            <div className="client row g-5 align-items-center">
                                <div className="client col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                    <img
                                        className="client img-fluid rounded w-100"
                                        src={require('../../assets/images/contact.webp')}
                                        alt=""
                                    />
                                </div>
                                <div className="client col-lg-6 wow fadeIn text-start" data-wow-delay="0.5s">
                                    <div className="client mb-4">
                                        <h1 className="client mb-3">Liên hệ chúng tôi</h1>
                                        <p>
                                            Bạn là chủ garage cần hỗ trợ trong quá trình đăng ký hay bạn
                                            là người dùng cần hỗ trợ, hãy liên hệ với chúng tôi theo các
                                            cách bên dưới!
                                        </p>
                                    </div>
                                    <a href="#" className="client btn btn-primary py-3 px-4 me-2">
                                        <i className="client fa fa-phone-alt me-2" />
                                        0914243600
                                    </a>
                                    <a
                                        href=""
                                        className="client btn btn-dark py-3 px-4"
                                    >
                                        <i className="client bi bi-r-square-fill me-2" />
                                        Đăng ký Garage
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home