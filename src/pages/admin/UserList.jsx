import { useEffect, useState } from 'react'
import ReactLoading from 'react-loading'
import config from '../../config'
import axios from 'axios'

const UserList = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [users, setUsers] = useState([])
    const token = localStorage.getItem('token')

    const fetchUsers = async () => {
        try {
            setIsLoading(true)
            const response = await axios.get(`${config.apiBaseUrl}/admin`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            let result = response.data
            if (result.success) {
                setUsers(result.data)
            }
        } catch (error) {
        } finally {
            setIsLoading(false)
        }
    }
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

    useEffect(() => {
        fetchUsers()
    }, [])

    useEffect(() => {
        console.log('user', users)
    }, [users])
    return (
        <div className="page-wrapper text-start">
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
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                        <h4 className="page-title">Danh sách người dùng</h4>
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
                            <h3 className="box-title mb-4">Danh sách người dùng</h3>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th className="border-top-0 text-center">ID</th>
                                            <th className="border-top-0 text-center">Ảnh</th>
                                            <th className="border-top-0 text-center">Tên đầy đủ</th>
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
                                            users.length > 0 ? (
                                                users.map(user => (
                                                    <tr key={user.id}>
                                                        <td className="text-center">
                                                            {user.id}
                                                        </td>
                                                        <td>
                                                            <img
                                                                src={user.image}
                                                                alt=""
                                                                style={{ height: 72, width: 72 }}
                                                            />
                                                        </td>
                                                        <td>
                                                            {user.name}
                                                        </td>
                                                        <td>
                                                            {user.email}
                                                        </td>
                                                        <td>
                                                            {user.phone}
                                                        </td>
                                                        <td>
                                                            {user.address}
                                                        </td>
                                                        <td className="text-center">
                                                            {
                                                                user.status == '1' ? (
                                                                    <span
                                                                        className="badge rounded-pill bg-success text-while font-bold"
                                                                        style={{ height: 30, width: "90%", fontSize: 14 }}
                                                                    >
                                                                        Đang hoạt động
                                                                    </span>
                                                                ) : (
                                                                    <span
                                                                        className="badge rounded-pill bg-danger text-while font-bold"
                                                                        style={{ height: 30, width: "90%", fontSize: 14 }}
                                                                    >
                                                                        Đang khóa
                                                                    </span>
                                                                )
                                                            }
                                                        </td>
                                                        <td>
                                                            <form
                                                                action=""
                                                                method="POST"
                                                            >
                                                                <input type="hidden" name="status" defaultValue={1} />
                                                                {
                                                                    user.status == '1' ? (
                                                                        <button
                                                                            className="btn btn-danger rounded-pill font-bold d-md-block hidden-xs hidden-sm waves-effect waves-light text-white"
                                                                            type="submit"
                                                                        >
                                                                            Khóa
                                                                        </button>
                                                                    ) : (
                                                                        <button
                                                                            className="btn btn-primary rounded-pill font-bold d-md-block hidden-xs hidden-sm waves-effect waves-light text-white"
                                                                            type="submit"
                                                                        >
                                                                            Hủy khóa
                                                                        </button>
                                                                    )
                                                                }

                                                            </form>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan={5} className="border-0">
                                                        Chưa có yêu cầu
                                                    </td>
                                                </tr>
                                            )
                                        }
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

    )
}

export default UserList