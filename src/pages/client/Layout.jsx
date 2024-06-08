import { useEffect } from 'react';
import Footer from "../../components/client/Footer"
import Header from "../../components/client/Header"
import '../../assets/css/client/bootstrap.min.css'
import '../../assets/css/client/style.css'
import 'google-fonts'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

import { Outlet, Link, useLocation } from "react-router-dom"

const Layout = (props) => {
    const location = useLocation()

    useEffect(() => {
        document.getElementById("home_page").classList.remove("active")
        document.getElementById("contact_us_page").classList.remove("active")
        document.getElementById("garage_all_page").classList.remove("active")
        document.getElementById("service_page").classList.remove("active")
        document.getElementById("about_us_page").classList.remove("active")

        document.title = getTitleFromPath(location.pathname)
    }, [location.pathname])

    const getTitleFromPath = (path) => {
        switch (path) {
            case '/':
                document.getElementById("home_page").classList.add("active")
                return 'Trang chủ'
            case '/contact':
                document.getElementById("contact_us_page").classList.add("active")
                return 'Liên hệ'
            case '/about':
                document.getElementById("about_us_page").classList.add("active")
                return 'Về chúng tôi'
            case '/service':
                document.getElementById("service_page").classList.add("active")
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
            <Header />
            <Outlet />
            <Footer />

        </>
    )
}

export default Layout