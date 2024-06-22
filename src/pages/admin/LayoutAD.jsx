import { useEffect } from 'react';
import 'google-fonts'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/admin/css/style.min.css'
import { Outlet, Link, useLocation } from "react-router-dom"
import Header from '../../components/garage-owner/Header.jsx';
import Footer from '../../components/garage-owner/Footer.jsx';
import LeftSlide from '../../components/garage-owner/LeftSilde.jsx';

const LayoutAD = (props) => {
    const location = useLocation()

    useEffect(() => {
        // document.getElementById("home_page").classList.remove("active")
        // document.getElementById("contact_us_page").classList.remove("active")
        // document.getElementById("garage_all_page").classList.remove("active")
        // document.getElementById("service_page").classList.remove("active")
        // document.getElementById("about_us_page").classList.remove("active")

        document.title = getTitleFromPath(location.pathname)
    }, [location.pathname])

    const getTitleFromPath = (path) => {
        switch (path) {
            case '/':
                return 'Garage'
            case '/services':
                return 'Service'
            case '/brands':
                return 'Brand'
            case '/service':
                return ' Dịch vụ'
            case '/login':
                return 'Đăng nhập'
            case '/register':
                return 'Đăng ký'
            case '/profile':
                return 'Trang cá nhân'
            default:
                return 'Garage Finder'
        }
    }
    return (
        <>
            {/* <div className="preloader">
                <div className="lds-ripple">
                    <div className="lds-pos" />
                    <div className="lds-pos" />
                </div>
            </div> */}
            <div
                className='admin'
                id="main-wrapper"
                data-layout="vertical"
                data-navbarbg="skin5"
                data-sidebartype="full"
                data-sidebar-position="absolute"
                data-header-position="absolute"
                data-boxed-layout="full"
            >
                {/* Topbar header */}
                <Header />
                {/* End Topbar header */}
                <div
                    aria-live="polite"
                    aria-atomic="true"
                    className="position-relative"
                    style={{ zIndex: 999 }}
                >
                    <div className="toast-container position-absolute top-3 end-0 p-3 position-fixed">
                        <div
                            className="toast bg-success"
                            role="alert"
                            aria-live="assertive"
                            aria-atomic="true"
                            data-bs-autohide="false"
                        >
                            {/* <div className="toast-header">
                                <img
                                    src="{{ asset('assets/img/logo-1-1.png') }}"
                                    className="rounded me-2"
                                    alt="..."
                                />
                                <strong className="me-auto">Thông báo</strong>
                                <small className="text-muted">Mới đây</small>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="toast"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="toast-body bg-light"></div> */}
                        </div>
                    </div>
                </div>
                {/* Left Sidebar */}
                <LeftSlide />
                {/* End Left Sidebar */}
                {/* Page main  */}
                <Outlet />
                {/* End Page main  */}
                {/* <input
                    type="hidden"
                    id="id_garage_notifi"
                    defaultValue="{{ request()->id }}"
                /> */}
            </div>

            <Footer />

        </>
    )
}

export default LayoutAD