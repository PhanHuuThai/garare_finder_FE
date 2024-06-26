import axios from "axios";
import { useEffect, useState } from "react";
import config from "../../config";
import ReactLoading from 'react-loading';

const GarageOrderHistory = () => {

    const [orders, setOrders] = useState([]);
    const id = localStorage.getItem("garageId");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [orderDetail, steOrderDetail] = useState([])

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                setLoading(true);
                const token = localStorage.getItem('token');
                const response = await axios.get(`${config.apiBaseUrl}/garage/order/get-complete-order/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}` 
                }
            });
                if (response.data.success) {
                    setOrders(response.data.data);
                } else {
                    setError(response.data.message);
                }
            } catch (error) {
                setError('Có lỗi xảy ra khi lấy thông tin đơn hàng của garage');
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    const fetchOrderDetail = async (id) => {
        try {
            setLoading(true);
            const token = localStorage.getItem('token');
            const response = await axios.get(`${config.apiBaseUrl}/garage/order/order-detail/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        });
            if (response.data.success) {
                steOrderDetail(response.data.data);
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            setError('Có lỗi xảy ra khi lấy thông tin đơn hàng của garage');
        } finally {
            setLoading(false);
        }
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

    return (
        
        <div className="page-wrapper text-start">
            {error && <p style={{ color: 'red' }}>{error}</p>}
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
            <div className="page-breadcrumb bg-white">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                        <h4 className="page-title">Danh sách lịch sử đặt lịch</h4>
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
                            <h3 className="box-title mb-4">Danh sách lịch sử đặt lịch</h3>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th className="border-top-0 text-center" style={{}}>
                                                ID
                                            </th>
                                            <th className="border-top-0 text-center" style={{}}>
                                                Tên chủ xe
                                            </th>
                                            <th className="border-top-0 text-center" style={{}}>
                                                Số điện thoại
                                            </th>
                                            <th className="border-top-0 text-center" style={{}}>
                                                Tên xe
                                            </th>
                                            <th className="border-top-0 text-center" style={{}}>
                                                Hãng xe
                                            </th>
                                            <th className="border-top-0 text-center" style={{}}>
                                                Biển số
                                            </th>
                                            <th className="border-top-0 text-center" style={{}}>
                                                Dịch vụ
                                            </th>
                                            <th className="border-top-0 text-center" style={{}}>
                                                Thời gian
                                            </th>
                                            <th className="border-top-0 text-center" style={{}}>
                                                Đặt lúc
                                            </th>
                                            <th className="border-top-0 text-center" style={{}}>
                                                Trạng thái
                                            </th>
                                            <th
                                                className="border-top-0"
                                                id="action"
                                                style={{ width: "10%" }}
                                            />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.map((order) => (
                                            <tr>
                                                <td className="text-center">
                                                    {order.id}
                                                </td>
                                                <td>
                                                {order.name}
                                                </td>
                                                <td>
                                                {order.phone}
                                                </td>
                                                <td>
                                                {order.car_name}
                                                </td>
                                                <td>
                                                {order.brand_name}
                                                </td>
                                                <td>
                                                {order.license}
                                                </td>
                                                <td>
                                                {order.service_name}
                                                </td>
                                                <td>
                                                   {order.time}
                                                </td>
                                                <td>
                                                {order.created_at} created_at
                                                </td>
                                                <td className="text-center">
                                                    <span
                                                        className="badge rounded-pill bg-success text-while font-bold"
                                                        style={{ height: 27, width: 100, fontSize: 13 }}
                                                    >
                                                        Hoàn thành
                                                    </span>
                                                </td>
                                                <td>
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-danger mt-1 me-2"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#staticBackdrop"
                                                        onClick={() => fetchOrderDetail(order.id)}
                                                    >
                                                        <i className="bi bi-calendar-plus-fill" />
                                                        Chi tiết
                                                    </button>
                                                    <div
                                                        className="modal fade mt-2"
                                                        id="staticBackdrop"
                                                        data-bs-keyboard="false"
                                                        tabIndex={-1}
                                                        aria-labelledby="staticBackdropLabel"
                                                        aria-hidden="true"
                                                    >
                                                        <div className="modal-dialog modal-lg modal-dialog-centered">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h5
                                                                        className="modal-title text-center"
                                                                        id="staticBackdropLabel"
                                                                    >
                                                                        Chi tiết đơn đặt lịch
                                                                    </h5>
                                                                    <button
                                                                        type="button"
                                                                        className="btn-close"
                                                                        data-bs-dismiss="modal"
                                                                        aria-label="Close"
                                                                    />
                                                                </div>
                                                                <div className="modal-body ">
                                                                    <div className="row mb-3 text-start">
                                                                        <div className="col-sm-6">
                                                                            <div className="row">
                                                                                <div className="col-sm-5">
                                                                                    <span className="fw-bold">Họ và tên:</span>
                                                                                </div>
                                                                                <div className="col-sm-7">
                                                                                    <span>
                                                                                        {order.name}
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="row">
                                                                                <div className="col-sm-5">
                                                                                    <span className="fw-bold">
                                                                                        Số điện thoại:
                                                                                    </span>
                                                                                </div>
                                                                                <div className="col-sm-7">
                                                                                    <span>
                                                                                        {order.phone}
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row mb-3 text-start">
                                                                        <div className="col-sm-6">
                                                                            <div className="row">
                                                                                <div className="col-sm-5">
                                                                                    <span className="fw-bold">Tên xe:</span>
                                                                                </div>
                                                                                <div className="col-sm-7">
                                                                                    <span>
                                                                                    {order.car_name}
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="row">
                                                                                <div className="col-sm-5">
                                                                                    <span className="fw-bold">Hãng xe:</span>
                                                                                </div>
                                                                                <div className="col-sm-7">
                                                                                    <span>
                                                                                        {order.brand_name}
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row mb-3 text-start">
                                                                        <div className="col-sm-6">
                                                                            <div className="row">
                                                                                <div className="col-sm-5">
                                                                                    <span className="fw-bold">Dịch vụ:</span>
                                                                                </div>
                                                                                <div className="col-sm-7">
                                                                                    <span>
                                                                                        {order.service_name}
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="row">
                                                                                <div className="col-sm-5">
                                                                                    <span className="fw-bold">Biển số:</span>
                                                                                </div>
                                                                                <div className="col-sm-7">
                                                                                    <span>
                                                                                        {order.license}
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row mb-3 text-start">
                                                                        <div className="col-sm-6">
                                                                            <div className="row">
                                                                                <div className="col-sm-5">
                                                                                    <span className="fw-bold">Thời gian:</span>
                                                                                </div>
                                                                                <div className="col-sm-7">
                                                                                    <span>
                                                                                        {order.time}
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="row">
                                                                                <div className="col-sm-5">
                                                                                    <span className="fw-bold">Đặt lúc:</span>
                                                                                </div>
                                                                                <div className="col-sm-7">
                                                                                    <span>
                                                                                        {order.create_at}
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/* <div className="row mb-3 text-start">
                                                                        <div className="col-sm-6">
                                                                            <div className="row">
                                                                                <div className="col-sm-5">
                                                                                    <span className="fw-bold">
                                                                                        Tổng số lượng:
                                                                                    </span>
                                                                                </div>
                                                                                <div className="col-sm-7">

                                                                                    <span>
                                                                                        total
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="row">
                                                                                <div className="col-sm-5">
                                                                                    <span className="fw-bold">Tổng tiền:</span>
                                                                                </div>
                                                                                <div className="col-sm-7">

                                                                                    <span>
                                                                                        qty * number
                                                                                        VNĐ
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div> */}
                                                                    <h5>Chi tiết dịch vụ</h5>
                                                                    <div className="table-responsive">

                                                                        <table className="table text-nowrap">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th className="border-top-0">
                                                                                        Tên thiết bị
                                                                                    </th>
                                                                                    <th className="border-top-0">Số lượng</th>
                                                                                    <th className="border-top-0">
                                                                                        Giá tiền/thiết bị
                                                                                    </th>
                                                                                    <th className="border-top-0">Ghí chú</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody id="body_table">
                                                                                {orderDetail.map((order) => (
                                                                                <tr>
                                                                                <td>
                                                                                    <div className="col-md-12 p-0">
                                                                                        <p>
                                                                                            {order.name}
                                                                                        </p>
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div className="col-md-12 p-0">
                                                                                        <p>
                                                                                        {order.qty}
                                                                                        </p>
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div className="col-md-12 p-0">
                                                                                        <p>
                                                                                        {order.price}
                                                                                        </p>
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div className="col-md-12 p-0">
                                                                                        <p>
                                                                                        {order.note}
                                                                                        </p>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                                ))}
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                         ))}
                                    </tbody>
                                </table>
                                <div className="d-flex justify-content-center my-4">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Container fluid  */}
        </div>

    )
}

export default GarageOrderHistory