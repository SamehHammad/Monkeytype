import React from "react";

const Popup = ({ closePopup, children ,style,pStyle}) => {
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`z-20 outer-popup fixed top-0 left-0 h-screen w-full flex ${pStyle}`}
      onClick={closePopup}
    >
      <div
        className={`inner-popup bg-bgColor ${style} rounded-lg `}
        onClick={stopPropagation}
      >
        {children}
      </div>
    </div>
  );
};

export default React.memo(Popup);
