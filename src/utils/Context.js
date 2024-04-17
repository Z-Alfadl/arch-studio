import React, { useContext, useState } from "react";

export const ASContext = React.createContext();
export const useViewPort = () => useContext(ASContext);
export const useSource = () => useContext(ASContext);
const ASProvider = ({ children }) => {
  const [viewport, setViewport] = useState(window.innerWidth);
  const [source, setSource] = useState("mobile");
  return (
    <ASContext.Provider value={{viewport, setViewport, source, setSource}}>
        {children}
    </ASContext.Provider>
  )
};

export default ASProvider