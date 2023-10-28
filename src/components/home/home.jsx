import React from "react";
import gambar from "../assets/Images/Mask group.png";
// import { jakarta } from "../../Font";
const Home = () => {
  const h1 = {
    marginLeft: "600px",
    marginTop: "-300px",
  };
  const imageStyle = {
    width: "400px",
    height: "400px",
    borderRadius: "200px",
    marginLeft: "150px",
    marginTop: "-52px",
    boxShadow: "20px 30px 10px rgba(0, 0, 0, 0.1)",
  };

  const box = {
    backgroundColor: "#FF9531",
    width: "1450px",
    height: "450px",
    marginLeft: "30px",
    // marginBottom: "150px",
    marginTop: "100px",
    borderRadius: "50px",
  };

  return (
    <>
      <div style={box}>
        <div>
          <img src={gambar} alt="" style={imageStyle} />
        </div>
        <div style={h1}>
          <h1>Exploring My Portofolio:</h1>
          <h1> A Journey Through My First Website using React</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
