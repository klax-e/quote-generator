import React, { useState } from "react";
import ModelContext from "./context/modelcontext";

function ModelProvider({ children }) {
  const [messageModal, setMessageModal] = useState({
    isModelOpen: false,
    message: "",
    color: "",
  });
  const handleModal = (res, quote, color) => {
    setMessageModal((prevVal) => ({
      ...prevVal,
      isModelOpen: res,
      message: quote,
      color: color,
    }));
  };

  return (
    <ModelContext.Provider value={{ messageModal, handleModal }}>
      {children}
    </ModelContext.Provider>
  );
}

export default ModelProvider;
