import React, { useContext, useEffect } from "react";
import ModelContext from "../context/modelcontext";

function PopupOnTop() {
  const { messageModal, handleModal } = useContext(ModelContext);

  useEffect(() => {
    const popUpsetTimeOut = setTimeout(() => {
      handleModal(false, "", "");
    }, 1500);
    return () => clearTimeout(popUpsetTimeOut);
  }, []);

  return (
    <div className="w-fit h-fit min-h-[20vh] fixed top-0 right-0 p-3">
      <div
        style={{ borderColor: messageModal.color }}
        className="w-[300px] h-fit py-3 px-2 border-[1px] shadow-md rounded bg-[#eaf6ec] font-light text-xs"
      >
        <h1>Thank you for using our services</h1>
        <p>Have a great day</p>
      </div>
    </div>
  );
}

export default PopupOnTop;
