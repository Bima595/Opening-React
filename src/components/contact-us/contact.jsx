import React from "react";

const Contact = () => {
  const containerStyle = {
    display: "flex", // Membuat kontainer berada di tengah
    marginTop: "60px",
    padding: "20px",
    paddingTop: "70px",
    marginLeft: "65px",
  };

  const boxBg = {
    marginTop: "150px",
    marginLeft: "350px",
    borderRadius: "10px",
    width: "1000px",
    height: "500px",
    backgroundColor: "#FF9531",
  };

  const boxStyle = {
    boxShadow: "5px 10px 5px rgba(0, 0, 0, 0.1)",
    width: "300px",
    height: "180px",
    marginRight: "65px",
    borderRadius: "10px",
    marginTop: "150px",
    background: "#FDE9B1",
  };

  return (
    <>
      <div style={boxBg}>
        <div style={containerStyle}>
          <div style={boxStyle}></div>
          <div style={boxStyle}></div>
          <div style={boxStyle}></div>
        </div>
      </div>
    </>
  );
};

export default Contact;
