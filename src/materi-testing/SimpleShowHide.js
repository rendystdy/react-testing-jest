import React from "react";

const SimpleShowHide = () => {
  const [show, setShow] = React.useState(false);

  const toggleShow = () => {
    setShow(!show);
  };
  return (
    <div>
      <p>Saya sedang {show ? "Muncul" : "Sembunyi"} </p>
      <button onClick={toggleShow}>{show ? "Sembuyikan" : "Munculkan"}</button>
    </div>
  );
};

export default SimpleShowHide;
