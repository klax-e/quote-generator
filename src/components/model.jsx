import React, { useContext } from "react";
import ModelContext from "../context/modelcontext";

function Model() {
  const { messageModal, handleModal } = useContext(ModelContext);

  return (
    <>
      {messageModal.message && (
        <div className="lg:w-[40vw] md:w-[60vw] w-[90vw] h-[50vh] bg-white z-[100] flex items-center justify-center fixed top-1/2 left-1/2 shadow-2xl rounded-xl p-3 -translate-x-1/2 -translate-y-1/2 border-[1px]">
          <button
            className="w-[50px] aspect-square flex items-center justify-center hover:bg-red-600 hover:text-white bg-zinc-200 rounded absolute top-3 right-5 text-xl"
            onClick={() => handleModal(false, "", "#28a745")}
          >
            x
          </button>
          <h1 className="font-semibold text-center px-10">
            {messageModal.message}
          </h1>
        </div>
      )}
    </>
  );
}

export default Model;
