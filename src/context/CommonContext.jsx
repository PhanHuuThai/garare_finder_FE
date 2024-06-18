import { createContext, useContext, useEffect, useState } from "react";
import config from "../config";
import axios from "axios";

export const CommonContext = createContext()

const CommonProvider = ({ children }) => {
    const commonState = useCommonState()
  
    return (
      <CommonContext.Provider value={commonState}>
        {children}
      </CommonContext.Provider>
    )
}

const useCommonState = () => {
    const [services, setService] = useState([])
    const [vehicles, setVehicles] = useState([]);
    const [cities, setCities] = useState([]);
    const [error, setError] = useState(null);

    
    const fetchServices = async () => {
      try {
        const apiUrl = `${config.apiBaseUrl}/client/about/get-all-service`;
        const response = await axios.get(apiUrl);
        let data = response.data;
        if (!data.success) {
            setError(data.message)
        }
        setService(data.data);
      } catch (error) {
        setError(error.message);
      }
    };

  useEffect(() => {
      fetchServices()
  }, [])
    

  const fetchVehicles = async () => {
    try {
      const apiUrl = `${config.apiBaseUrl}/client/about/get-all-brand`;
      const response = await axios.get(apiUrl);
      let data = response.data;
      if (!data.success) {
          setError(data.message)
      }
      setVehicles(data.data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchVehicles()
  }, [])   

  const fetchCities = async () => {
    const apiUrl = `${config.apiBaseUrl}/client/get-all-provinces`;
    try {
      const response = await axios.get(apiUrl);
      let data = response.data;
      if (!data.success) {
          setError(data.message)
      }
      setCities(data.data);
    } catch (error) {
      setError(error.message);
    }
  };
    
  useEffect(() => {
    fetchCities()
  }, [])
    
    return {
        services,
        fetchServices: fetchServices,
        vehicles,
        fetchVehicles: fetchVehicles,
        cities,
        fetchCities: fetchCities
    }
}

export const useCommon = () => useContext(CommonContext);
export default CommonProvider