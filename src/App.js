import logo from './assets/images/logo-1.png'
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/client/Home'
import Layout from './pages/client/Layout'
import Contact from './pages/client/Contact'
import Register from './pages/client/Register'
import Login from './pages/client/Login'
import About from './pages/client/AboutUS'
import Service from './pages/client/Service'
import PrivateRoute from './components/PrivateRoute'
import Profile from './pages/client/Profile'
import GarageList from './pages/client/GarageList'
import GarageDetail from './pages/client/GarageDetail'
import LayoutG from './pages/garagre-owner/LayoutG'
import ServicesGarage from './pages/garagre-owner/ServicesGarage'
import BrandsGarage from './pages/garagre-owner/BrandsGarage'
import GarageInfo from './pages/garagre-owner/GarageInfo'
import DetailImage from './pages/garagre-owner/DetailImage'
import StaffList from './pages/garagre-owner/StaffList'
import GarageOrder from './pages/garagre-owner/GarageOrder'
import GarageOrderHistory from './pages/garagre-owner/GarageOrderHistory'
import StaffInfo from './pages/garagre-owner/StaffInfo'
import ChangeStaffPass from './pages/garagre-owner/ChangeStaffPass'
import LayoutAD from './pages/admin/LayoutAD'
import RegisterGarage from './pages/client/RegisterGarage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="about" element={<About />} />
            <Route path="service" element={<Service />} />
            <Route path="profile" element={<Profile />} />
            <Route path="register-garage" element={<RegisterGarage />} />
            <Route path="garage-list" element={<GarageList />} />
            <Route path="garage-detail/:id" element={<GarageDetail />} />
            <Route
              path="protected"
              element={
                <PrivateRoute>
                  <Service />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path="garage"
            element={<PrivateRoute>
              <LayoutG />
            </PrivateRoute>}>
            <Route index element={<GarageInfo />} />
            <Route path="services" element={<ServicesGarage />} />
            <Route path="brands" element={<BrandsGarage />} />
            <Route path="garage" element={<GarageInfo />} />
            <Route path="image-detail" element={<DetailImage />} />
            <Route path="staffs" element={<StaffList />} />
            <Route path="orders" element={<GarageOrder />} />
            <Route path="order-history" element={<GarageOrderHistory />} />
            <Route path="staff-info" element={<StaffInfo />} />
            <Route path="staff-change-pass" element={<ChangeStaffPass />} />

          </Route>
          <Route path="admin"
            element={<PrivateRoute>
              <LayoutAD />
            </PrivateRoute>}>
            <Route index element={<GarageInfo />} />
            <Route path="services" element={<ServicesGarage />} />
            <Route path="brands" element={<BrandsGarage />} />
            <Route path="garage" element={<GarageInfo />} />
            <Route path="image-detail" element={<DetailImage />} />
            <Route path="staffs" element={<StaffList />} />
            <Route path="orders" element={<GarageOrder />} />
            <Route path="order-history" element={<GarageOrderHistory />} />
            <Route path="staff-info" element={<StaffInfo />} />
            <Route path="staff-change-pass" element={<ChangeStaffPass />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
