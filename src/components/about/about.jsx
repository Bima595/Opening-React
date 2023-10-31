import React from "react";
import font from "../assets/Fonts/PlusJakartaSans-Italic-VariableFont_wght.ttf";

const About = () => {
  const box = {
    backgroundColor: "#FF9531",
    width: "1150px",
    height: "250px",
    margin: "100px auto",
    borderRadius: "50px",
    display: "flex",
    flexDirection: "row", // Mengatur elemen sejajar secara horizontal
    justifyContent: "space-around",
    alignItems: "center",
    position: "relative",
  };

  const containors = {
    paddingTop: "80px",
  };

  const secbox = {
    position: "absolute",
    boxShadow: "5px 10px 10px rgba(0.1, 0.1, 0.1, 0.1)",
    backgroundColor: "#fff",
    width: "1150px",
    height: "280px",
    margin: "-50px auto 100px",
    borderRadius: "50px",
    left: "50%", // Menyusun elemen secara horizontal ke tengah
    transform: "translateX(-50%)", // Menyesuaikan posisi horizontal
  };

  const textContainer = {
    marginBottom: "130px",
    textAlign: "center",
    color: "#fff",
    marginLeft: "90px",
  };

  const about = {
    fontFamily: "Plus Jakarta Sans", // Use the font-family name defined below
    position: "absolute",
    marginLeft: "350px",
    paddingTop: "-100px",
    marginTop: "-110px", // Adjust this value to move the about section up
  };

  const tittle = {
    fontWeight:"",
    color:"red",
    fontFamily:"Plus Jakarta Sans",
    marginLeft: "30px",
    marginTop: "20px",
  };

  return (
    <>
      <style>
        {`
          @font-face {
            font-family: 'Plus Jakarta Sans';
            src: url(${font}) format('truetype');
            font-weight: normal;
            font-style: normal;
          }
        `}
      </style>
      <div style={box}>
        <div style={textContainer}>
          <div>
            <h3>SMESTER</h3>
            <h4>5</h4>
          </div>
        </div>
        <div style={textContainer}>
          <div>
            <h3>MAJOR</h3>
            <h4>Informatic Engineering</h4>
          </div>
        </div>
        <div style={textContainer}>
          <div>
            <h3>University</h3>
            <h4>University Muhammadiyah Malang</h4>
          </div>
        </div>
        <div style={containors}>
          <div style={secbox}>
            <div  style={tittle}>
              <h1>
                <p>Get To</p>
                <p>Know me</p>
                <p>More</p>
              </h1>
            </div>
            <div style={about}>
              <p>I am a semester 5 student at Muhammadiyah University of Malang with multiple internship</p>
              <p>experiences within campus organizations, including holding the position of Head
                Staff in</p>
              <p>Social Media division. I possess excellent skills in data manipulation using SQL
                and have</p>
                <p>a keen interest in UI/UX Design. My career aspirations are focused on the
                Back-End feld</p>
                <p> and the industrial sector, particularly in data processing, while also remaining
                open to other</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default About;
