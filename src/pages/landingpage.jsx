import React from "react";
import heroImage from '../components/assets/Images/hero.jpg';  // Import the image
import "./css/crown.css";
import "./css/main.css";

const LandingPage = () => {
  const imgStyle = {
    backgroundImage: `url(${heroImage})`,  // Use the imported image
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "flex-start",
  };


  return (
    <div>
      <div style={imgStyle} className="content"> {/* Apply the styles to the div */}
        <div className="container">
          <h1>Selamat Datang</h1>
          <p>di website praktikum Pemrograman Website</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
