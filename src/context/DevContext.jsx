import { useContext, createContext, useState } from "react";

export const DevContext = createContext();

export const useDevContext = () => useContext(DevContext);

export const DevContextProvider = ({ children }) => {
  const [currentDev, setDev] = useState('Adriel Camacho');

  const changeDev = (dev) => {
    setDev(dev)
  }

  return (
    <DevContext.Provider value={{ currentDev, changeDev }}>
      {children}
    </DevContext.Provider>
  );
};
