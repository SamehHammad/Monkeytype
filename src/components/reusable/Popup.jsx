import React from "react";

const Popup = ({ closePopup, children ,style}) => {
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="z-20 outer-popup fixed top-0 left-0 h-screen w-full flex items-center justify-center"
      onClick={closePopup}
    >
      <div
        className={`inner-popup bg-bgColor ${style} max-h-[75vh] min-h-[70vh] overflow-y-scroll rounded-lg `}
        onClick={stopPropagation}
      >
        {children}
      </div>
    </div>
  );
};

export default Popup;
