import { useEffect, useState } from "react";
import config from "../../config";
import axios from "axios";
import { useCommon } from "../../context/CommonContext";

const Search = ({ onSearchResults }) => {
    const {services, vehicles, cities} = useCommon()
    // const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchData, setSearchData] = useState({
      province: "",
      brand: "",
      service: "",
      name: "",
    });
    
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setSearchData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };  

    const handleSearch = async () => {
      try {
        const response = await axios.post(
          `${config.apiBaseUrl}/client/home/search-garage`,
          searchData, {
            withCredentials: true,
        }
        );
    
        console.log(response)
        if(!response.data.success) {  
            setError(response.data.message)
        }
        onSearchResults(response.data.data);
        console.log(response.data.data)
    } catch (error) {
        setError(error.message);
    } finally {
        setLoading(false);
    }
    };

    return (
        <div
            className="container-fluid mb-4 wow fadeIn"
            data-wow-delay="0.1s"
            style={{ padding: 35, background: "#ffecec" }}
        >
            <div className="container">
                <div id="garage_search">
                    <input type="hidden" defaultValue={2} name="action" />
                    <div className="row g-2">
                        <div className="col-md-10">
                            <div className="row g-2">
                                <div className="col-md-3">
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control border-0 py-3"
                                        placeholder="Tên garage"
                                        value={searchData.name}
                                        onChange={handleInputChange}

                                    />
                                </div>
                                <div className="col-md-3">
                                    <select 
                                      className="form-select border-0 py-3" 
                                      name="province"
                                      value={searchData.province}
                                      onChange={handleInputChange}
                                      >
                                        <option selected="" disabled="">
                                            Thành phố
                                        </option>
                                        {cities.map((city) => (
                                        <option key={city.id} value={city.id}>
                                            {city.name}
                                        </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <select 
                                      className="form-select border-0 py-3" 
                                      name="service"
                                      value={searchData.service}
                                      onChange={handleInputChange}
                                      >
                                        <option selected="" disabled="">
                                            Dịch vụ
                                        </option>
                                        {services.map((service) => (
                                        <option key={service.id} value={service.id}>
                                            {service.name}
                                        </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <select className="form-select border-0 py-3"
                                      name="brand"
                                      value={searchData.brand}
                                      onChange={handleInputChange}
                                      >
                                        <option selected="" disabled="">
                                            Hãng xe
                                        </option>
                                        {vehicles.map((vehicle) => (
                                        <option key={vehicle.id} value={vehicle.id}>
                                            {vehicle.name}
                                        </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <button onClick={handleSearch} className="btn btn-dark border-0 w-100 py-3">
                                Tìm kiếm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Search