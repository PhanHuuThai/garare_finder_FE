import axios from "axios";
import { useEffect, useState } from "react";
import config from "../../config";
import ReactLoading from 'react-loading';
import { Dialog } from 'primereact/dialog';

const GarageOrder = () => {
    const [orders, setOrders] = useState([]);
    const id = localStorage.getItem("garageId");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [filteredOrders, setFilteredOrders] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false);
    const [dateTime, setDateTime] = useState('');
    const [currentTab, setCurrentTab] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const initialRow = { name: "", qty: "", price: "", note: "" };
    const [rows, setRows] = useState([initialRow]);
    const [idOrder, setIdOrder] = useState('')
    const [errorBill, setErrorBill] = useState('')

    const addRow = () => {
        setRows([...rows, { name: "", qty: "", price: "", note: "" }]);
    };

    useEffect(() => {
        if (!showModal) {
            setRows([initialRow]);
        }
    }, [showModal]);


    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const newRows = [...rows];
        newRows[index][name] = value;
        setRows(newRows);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const token = localStorage.getItem("token"); // Lấy token từ localStorage
            const response = await axios.post(`${config.apiBaseUrl}/garage/order/payment/${idOrder}`, 
            { bill: rows },
            {
                headers: {
                    Authorization: `Bearer ${token}`, // Truyền token vào header
                },
            });
            if(response.data.success) {
                alert("Thanh toán thành công")
                setShowModal(false); 
            }
            else {
                setErrorBill(response.data.message)
            }
        } catch (error) {
            console.error("There was an error adding the order details!", error);
            // Xử lý lỗi nếu cần thiết
        }
    };

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                setLoading(true);
                const token = localStorage.getItem('token');
                const response = await axios.get(`${config.apiBaseUrl}/garage/order/get-order/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}` 
                }
            });
                if (response.data.success) {
                    setOrders(response.data.data);
                    setFilteredOrders(response.data.data);
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
    }, [isUpdate]);

    const openModal = (id) => {
        setShowModal(true);
        setIdOrder(id)
    };


    const filterOrders = (status) => {
        let filtered;
        if (status === 'all') {
            filtered = orders;
        } else {
            filtered = orders.filter(order => order.status == status);
        }
        setFilteredOrders(filtered);
    };

    const handleTabClick = (status) => {
        setCurrentTab(status);
        filterOrders(status);
    };


    const updateOrderStatus = async (orderId, status) => {
        try {
            setLoading(true);
            const token = localStorage.getItem('token');
            const response = await axios.put(`${config.apiBaseUrl}/garage/order/update-status/${orderId}`,
                { status },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            if (response.data.success) {
                setIsUpdate(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER));
                setError('')
            } else {
                setError(response.data.message);
            }
            setLoading(false);
        } catch (error) {
            console.error('Error updating order status:', error);
            throw error;
        }
        finally {
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
        <> 
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className="page-wrapper text-start">
            <Dialog header="Đặt lịch bảo dưỡng" visible={showModal} style={{ width: '50vw' }} onHide={() => {if (!showModal) return; setShowModal(false); }}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="white-box">
                            <h3 className="box-title mb-4">Chi tiết hóa đơn</h3>
                            <div className="">
                                <form className="form-horizontal form-material" onSubmit={handleSubmit}>
                                    <div className="table-responsive">
                                        <table className="table text-nowrap">
                                            <thead>
                                                <tr>
                                                    <th className="border-top-0">Tên thiết bị</th>
                                                    <th className="border-top-0">Số lượng</th>
                                                    <th className="border-top-0">Giá tiền/thiết bị</th>
                                                    <th className="border-top-0">Ghi chú</th>
                                                </tr>
                                            </thead>
                                            <tbody id="body_table">
                                                {rows.map((row, index) => (
                                                    <tr key={index}>
                                                        <td>
                                                            <div className="col-md-12 border-bottom p-0">
                                                                <input
                                                                    type="text"
                                                                    placeholder="Tên thiết bị"
                                                                    name="name"
                                                                    value={row.name}
                                                                    className="form-control p-0 border-0"
                                                                    onChange={(e) => handleInputChange(index, e)}
                                                                />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="col-md-12 border-bottom p-0">
                                                                <input
                                                                    type="text"
                                                                    placeholder="Số lượng"
                                                                    name="qty"
                                                                    value={row.qty}
                                                                    className="form-control p-0 border-0"
                                                                    onChange={(e) => handleInputChange(index, e)}
                                                                />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="col-md-12 border-bottom p-0">
                                                                <input
                                                                    type="text"
                                                                    placeholder="Giá tiền/thiết bị"
                                                                    name="price"
                                                                    value={row.price}
                                                                    className="form-control p-0 border-0"
                                                                    onChange={(e) => handleInputChange(index, e)}
                                                                />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="col-md-12 border-bottom p-0">
                                                                <input
                                                                    type="text"
                                                                    placeholder="Ghi chú"
                                                                    name="note"
                                                                    value={row.note}
                                                                    className="form-control p-0 border-0"
                                                                    onChange={(e) => handleInputChange(index, e)}
                                                                />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="col-sm-12 text-primary text-center">
                                        <span style={{ cursor: "pointer" }} id="add_payment" onClick={addRow}>
                                            <i className="fas fa-plus" style={{ fontSize: 12 }} /> Thêm thiết bị
                                        </span>
                                    </div>
                                    <div className="form-group mb-4">
                                        <div className="col-sm-12">
                                            <button className="btn btn-success" type="submit">
                                                Hoàn tất
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Dialog>

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
                            <h4 className="page-title">Danh sách đơn đặt</h4>
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
                                    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12">
                                        <a
                                            onClick={() => handleTabClick('all')}
                                            className="btn btn-primary d-md-block mb-4 hidden-xs hidden-sm waves-effect waves-light text-white"
                                        >
                                            Tất cả
                                        </a>
                                    </div>
                                    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12">
                                        <a
                                            onClick={() => handleTabClick(1)}
                                            className="btn btn-warning d-md-block mb-4 hidden-xs hidden-sm waves-effect waves-light text-white"
                                        >
                                            Chờ xác nhận
                                        </a>
                                    </div>
                                    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12">
                                        <a
                                            onClick={() => handleTabClick(2)}
                                            className="btn btn-success d-md-block mb-4 hidden-xs hidden-sm waves-effect waves-light text-white"
                                        >
                                            Đã xác nhận
                                        </a>
                                    </div>
                                    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12">
                                        <a
                                            onClick={() => handleTabClick(3)}
                                            className="btn btn-danger d-md-block mb-4 hidden-xs hidden-sm waves-effect waves-light text-white"
                                        >
                                            Từ chối
                                        </a>
                                    </div>
                                    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12">
                                        <a
                                            onClick={() => handleTabClick(4)}
                                            className="btn btn-secondary d-md-block mb-4 hidden-xs hidden-sm waves-effect waves-light text-white"
                                        >
                                            Đã hủy
                                        </a>
                                    </div>
                                </div>
                                <h3 className="box-title mb-4">Danh sách đơn đặt lịch</h3>
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
                                        {filteredOrders.map((order) => (
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
                                                    {dateTime}
                                                </td>
                                                <td>
                                                    {order.created_at}
                                                </td>
                                                <td className="text-center">
                                                {order.status == 1 && (
                                                    <span
                                                        className="badge rounded-pill bg-warning text-white font-bold"
                                                        style={{ height: 27, width: 100, fontSize: 13 }}
                                                    >
                                                        Chờ xác nhận
                                                    </span>
                                                )}
                                                {order.status == 2 && (
                                                    <span
                                                        className="badge rounded-pill bg-success text-white font-bold"
                                                        style={{ height: 27, width: 100, fontSize: 13 }}
                                                    >
                                                        Đã Xác nhận
                                                    </span>
                                                )}
                                                {order.status == 3 && (
                                                    <span
                                                        className="badge rounded-pill bg-danger text-white font-bold"
                                                        style={{ height: 27, width: 100, fontSize: 13 }}
                                                    >
                                                        Từ chối
                                                    </span>
                                                )}
                                                {order.status == 4 && (
                                                    <span
                                                        className="badge rounded-pill bg-secondary text-white font-bold"
                                                        style={{ height: 27, width: 100, fontSize: 13 }}
                                                    >
                                                        Đã hủy
                                                    </span>
                                                )}
                                            </td>
                                                <td>
                                                {order.status == 1 && (
                                                    <div>
                                                        <div
                                                        >
                                                        <input type="hidden" name="status" defaultValue={2} />
                                                        <button
                                                            style={{ width: "100%" }}
                                                            className="btn btn-success d-md-block hidden-xs hidden-sm waves-effect waves-light text-white"
                                                            onClick={() => updateOrderStatus(order.id, 2)}
                                                        >
                                                            <i className="fas fa-check" />
                                                        </button>
                                                    </div>
                                                    <div
                                                    >
                                                        <input type="hidden" name="status" defaultValue={3} />
                                                        <button
                                                            style={{ width: "100%" }}
                                                            className="btn btn-danger d-md-block hidden-xs hidden-sm waves-effect waves-light text-white"
                                                            onClick={() => updateOrderStatus(order.id, 3)}
                                                        >
                                                            <i className="fas fa-times" />
                                                        </button>
                                                    </div>
                                                    </div>
                                                   
                                                    )}
                                                    {order.status == 2 && (
                                                    <a
                                                        className="btn btn-outline-primary"
                                                        onClick={() => openModal(order.id)}
                                                    >
                                                        Thanh toán
                                                    </a>
                                                    )}
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

            </div>
        </>

    )
}

export default GarageOrder