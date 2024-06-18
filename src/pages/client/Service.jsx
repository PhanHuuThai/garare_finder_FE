import { useCommon } from '../../context/CommonContext'

const { Link } = require('react-router-dom')
const { default: Search } = require('../../components/client/Search')

const Service = () => {
    const {services} = useCommon()
    return (
        <div className="container-xxl bg-white p-0">
            {/* Header Start */}
            <div className="container-fluid header bg-white p-0">
                <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                    <div className="col-md-6 p-5 mt-lg-5 mt-3">
                        <h1 className="display-5 animated fadeIn mb-4 text-start">Dịch vụ</h1>
                        <nav aria-label="breadcrumb animated fadeIn">
                            <ol className="breadcrumb text-uppercase">
                                <li className="breadcrumb-item">
                                    <Link href="{{ url('/') }}">Trang chủ</Link>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="#">Pages</a>
                                </li>
                                <li
                                    className="breadcrumb-item text-body active"
                                    aria-current="page"
                                >
                                    Dịch vụ
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <div className="col-md-6 animated fadeIn" style={{ height: "390px" }}>
                        <img
                            className="imgHeaderPage"
                            style={{ height: "100% !important", width: "100% !important" }}
                            src={require('../../assets/images/about_us_2.webp')}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            {/* Header End */}
            {/* Search Start */}
            <Search />
            {/* Search End */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div
                        className="text-center mx-auto mb-5 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 660 }}
                    >
                        <h1 className="mb-3">Dịch vụ</h1>
                        <p>
                            Chúng tôi hiện có các dịch mà mọi chiếc xe đều cần đến mỗi khi cần tìm
                            garage.
                        </p>
                    </div>
                    <div className="row g-2">
                            {services.map((service) => (
                            <div
                                key={service.id}
                                className="col-lg-6 col-sm-6 col-12 wow fadeInUp"
                                data-wow-delay="0.1s"
                            >
                                <a
                                    className="cat-item d-block bg-light text-center rounded p-3"
                                    href=""
                                >
                                    <div
                                        className="rounded p-3"
                                        style={{ border: "1px dashed rgba(185, 46, 0, 0.3)" }}
                                    >
                                        <div className="icon mb-3">
                                            <img
                                                className="img-fluid img-card1"
                                                src={service.image}
                                                alt="Icon"
                                            />
                                        </div>
                                        <h5>{service.name}</h5>
                                        <span>{service.description}</span>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service