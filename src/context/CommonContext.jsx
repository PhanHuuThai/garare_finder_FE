import { createContext, useContext, useState } from "react";

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
    const [service, setService] = useState(null)
    const [brand, setBrand] = useState(null)
  
    const fetchServices = (newService) => {
      setService(newService);
    };
  
    const updateService = () => {
      setService(null)
    };
    
    return {
        service,
        fetchServices: fetchServices,
        updateService,
        brand,
        setBrand,
    }
}

export const useCommon = () => useContext(CommonContext);
export default CommonProvider