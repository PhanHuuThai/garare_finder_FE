
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <header className="topbar" data-navbarbg="skin5">
                <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                    <div className="navbar-header" data-logobg="skin6">
                        {/* ============================================================== */}
                        {/* Logo */}
                        {/* ============================================================== */}
                        <a className="navbar-brand" href="dashboard.html">
                            {/* Logo icon */}
                            <b className="logo-icon">
                                {/* Dark Logo icon */}
                                <img src={require('../../assets/images/logo-1-1.png')} alt="homepage" />
                            </b>
                            {/*End Logo icon */}
                            {/* Logo text */}
                            <span className="logo-text">
                                {/* dark Logo text */}
                                <img
                                    style={{ width: "88%" }}
                                    src={require('../../assets/images/gfinder.png')}
                                    alt="homepage"
                                />
                            </span>
                        </a>
                        {/* ============================================================== */}
                        {/* End Logo */}
                        {/* ============================================================== */}
                        {/* ============================================================== */}
                        {/* toggle and nav items */}
                        {/* ============================================================== */}
                        <a
                            className="nav-toggler waves-effect waves-light text-dark d-block d-md-none"
                            href="javascript:void(0)"
                        >
                            <i className="ti-menu ti-close" />
                        </a>
                    </div>
                    {/* ============================================================== */}
                    {/* End Logo */}
                    {/* ============================================================== */}
                    <div
                        className="navbar-collapse collapse"
                        id="navbarSupportedContent"
                        data-navbarbg="skin5"
                    >
                        {/* ============================================================== */}
                        {/* Right side toggle and nav items */}
                        {/* ============================================================== */}
                        <ul className="navbar-nav ms-auto d-flex align-items-center">
                            {/* ============================================================== */}
                            {/* Search */}
                            {/* ============================================================== */}
                            <li className=" in">
                                <form role="search" className="app-search d-none d-md-block me-3">
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="form-control mt-0"
                                    />
                                    <a href="" className="active">
                                        <i className="fa fa-search" />
                                    </a>
                                </form>
                            </li>
                            {/* ============================================================== */}
                            {/* User profile and search */}
                            {/* ============================================================== */}
                            <li>
                                <a className="profile-pic" href="#">
                                    <img
                                        src=""
                                        alt="user-img"
                                        width={36}
                                        className="img-circle"
                                    />
                                    <span className="text-white font-medium">

                                    </span>
                                    <img
                                        src="{{ asset('uploads/garage/employee/' . Auth::guard('employee')->user()->image) }}"
                                        alt="user-img"
                                        width={36}
                                        className="img-circle"
                                    />
                                    <span className="text-white font-medium">
                                        name
                                    </span>
                                </a>
                            </li>
                            {/* ============================================================== */}
                            {/* User profile and search */}
                            {/* ============================================================== */}
                        </ul>
                    </div>
                </nav>
            </header>

        </>
    )
}
export default Header