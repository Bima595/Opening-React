import React from "react";
import gambar from "../assets/Images/Mask group.png";
const Home = () => {
  const h1 = {
    marginLeft: "700px",
    marginTop: "-350px",
  };
  const imageStyle = {
    width: "400px",
    height: "400px",
    borderRadius: "200px",
    marginLeft: "150px",
    marginTop: "50px",
    boxShadow: "2px 50px 30px rgba(0, 0, 0, 0.1)",
  };
  return (
    <>
      <div>
        <img src={gambar} alt="" style={imageStyle} />
      </div>
      <div style={h1}>
        <h1>Exploring My Portofolio:</h1>
        <h1> A Journey Through My First Website using React</h1>
      </div>
    </>
  );
};

export default Home;
