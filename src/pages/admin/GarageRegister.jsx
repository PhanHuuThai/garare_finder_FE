
import axios from "axios"
import { useEffect, useState } from "react"
import config from "../../config"
import ReactPaginate from "react-paginate"
import ReactLoading from 'react-loading'

const GarageRegister = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [garages, setGarages] = useState([])
    const token = localStorage.getItem('token')

    const fetchGarages = async () => {
        try {
            const response = await axios.get(`${config.apiBaseUrl}/garage/get-garage-register`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.data.success) {
                setGarages(response.data.data);
            }
        } catch (error) {
        }
    };
    useEffect(() => {
        fetchGarages();
    }, []);

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

    const handleUpdateGarageStatus = async (status, id) => {
        try {
            setIsLoading(true)
            let formData = new FormData();
            formData.append('status', status);
            formData.append('_method', 'PUT');
            const response = await axios.post(`${config.apiBaseUrl}/garage/update-status/${id}`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.data.success) {
                await fetchGarages()
            }
        } catch (error) {
            console.error('There was an error updating the user!', error)
        }
        setIsLoading(false)
    }
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
                                                garages.length > 0 ? (
                                                    garages.map(garage => (
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
                                                                    garage.status == '1' ? (
                                                                        <span
                                                                            className="badge rounded-pill bg-warning text-while font-bold"
                                                                            style={{ height: 30, width: "90%", fontSize: 14 }}
                                                                        >
                                                                            Chờ xác nhận
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
                                                                <button
                                                                    className="btn btn-primary font-bold d-md-block hidden-xs hidden-sm waves-effect waves-light text-white"
                                                                    type="submit"
                                                                    style={{ width: "100px" }}
                                                                    onClick={() => handleUpdateGarageStatus(3, garage.id)}
                                                                >
                                                                    Xác nhận
                                                                </button>

                                                                <button
                                                                    className="btn btn-danger font-bold d-md-block hidden-xs hidden-sm waves-effect waves-light text-white mt-3"
                                                                    type="submit"
                                                                    style={{ width: "100px" }}
                                                                    onClick={() => handleUpdateGarageStatus(2, garage.id)}
                                                                >
                                                                    Hủy
                                                                </button>
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
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}
export default GarageRegister