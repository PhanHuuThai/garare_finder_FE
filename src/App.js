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
            <Route
              path="protected"
              element={
                <PrivateRoute>
                  <Service />
                </PrivateRoute>
              }
            />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
