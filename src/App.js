import React, { useState, useEffect } from "react";
import "./App.css";
import img1 from "./image/img1.svg";
import Chat_Circle_Dots from "./image/Chat_Circle_Dots.svg";
import Heart from "./image/Heart.svg";
import Circle_Check from "./image/Circle_Check.svg";
import img2 from "./image/img2.svg";
import Frame1 from "./image/Frame1.svg";
import Frame2 from "./image/Frame2.svg";
import Frame3 from "./image/Frame3.svg";
import img3 from "./image/img3.svg";
import Frame4 from "./image/Frame4.svg";
import img4 from "./image/img4.svg";
import Circle_Check1 from "./image/Circle_Check1.svg";

function App() {
  useEffect(() => {
    const setVw = (len) => {
      let viewportWidth = window.innerWidth;
      if (viewportWidth >= 500) {
        viewportWidth = 500;
      } else if (viewportWidth <= 300) {
        viewportWidth = 300;
      } else {
        viewportWidth = viewportWidth;
      }
      viewportWidth = viewportWidth / 900;

      console.log(window.innerWidth);
      document.documentElement.style.setProperty("--r", `${viewportWidth}px`);
    };

    setVw(); // 최초 실행
    window.addEventListener("resize", setVw); // 창 크기 바뀔 때마다 실행

    return () => window.removeEventListener("resize", setVw);
  }, []);

  return (
    <div className="page">
      <div className="container">
        <img className="img1" src={img1} alt="img1" />
        <div className="buttonContainer">
          <div
            className="button1"
            onClick={() => {
              window.location.href =
                "https://docs.google.com/forms/d/e/1FAIpQLSda4yYFz7Wcss-NbSFri-gbzNj0oAKTYoVUrzrhtIBYyJWtlQ/viewform";
            }}
          >
            <img
              className="chat"
              src={Chat_Circle_Dots}
              alt="Chat_Circle_Dots"
            />
            <p className="text1">문의하기</p>
          </div>
          <div
            className="button2"
            onClick={() => {
              window.location.href =
                "https://docs.google.com/forms/d/e/1FAIpQLScfIoZnJhLgKm1O2xV-0w9_WlC3BCB3AOFu2-Wrlvx6z5Wa3w/viewform";
            }}
          >
            <img className="heart" src={Heart} alt="Heart" />
            <p className="text2">후기 무료로 보기</p>
          </div>
        </div>
        <div className="checkContainer">
          <img className="check" src={Circle_Check} alt="Circle_Check" />
          <p className="checkText">
            사전 예약 하고 업데이트될 프리미엄 법률상담 AI봇을 무료로 이용해
            보세요
          </p>
        </div>
        <img className="img2" src={img2} alt="img2" />
        <img className="frame" src={Frame1} alt="Frame1" />
        <img className="frame" src={Frame2} alt="Frame2" />
        <img className="frame" src={Frame3} alt="Frame3" />
        <img className="img3" src={img3} alt="img3" />
        <img className="frame" src={Frame4} alt="Frame4" />
        <div className="buttonContainer">
          <div
            className="button1"
            onClick={() => {
              window.location.href =
                "https://docs.google.com/forms/d/e/1FAIpQLSda4yYFz7Wcss-NbSFri-gbzNj0oAKTYoVUrzrhtIBYyJWtlQ/viewform";
            }}
          >
            <img
              className="chat"
              src={Chat_Circle_Dots}
              alt="Chat_Circle_Dots"
            />
            <p className="text1">문의하기</p>
          </div>
          <div
            className="button2"
            onClick={() => {
              window.location.href =
                "https://docs.google.com/forms/d/e/1FAIpQLScfIoZnJhLgKm1O2xV-0w9_WlC3BCB3AOFu2-Wrlvx6z5Wa3w/viewform";
            }}
          >
            <img className="heart" src={Heart} alt="Heart" />
            <p className="text2">후기 무료로 보기</p>
          </div>
        </div>
        <div className="checkContainer">
          <img className="check" src={Circle_Check} alt="Circle_Check" />
          <p className="checkText">
            사전 예약 하고 업데이트될 프리미엄 법률상담 AI봇을 무료로 이용해
            보세요
          </p>
        </div>
        <img className="img4" src={img4} alt="img4" />
        <div className="buttonContainer1">
          <div
            className="button3"
            onClick={() => {
              window.location.href =
                "https://www.instagram.com/jjinbbang_gnu?igsh=MXU3aHdmNzd5cWRmMA==";
            }}
          >
            <p className="text3">찐빵 인스타그램 공식 계정</p>
          </div>
          <div className="checkContainer" style={{ margin: "0px" }}>
            <img className="check" src={Circle_Check1} alt="Circle_Check" />
            <p className="checkText" style={{ color: "#fff" }}>
              인스타그램 팔로우 하고 가장 먼저 출시 소식을 받아보세요!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
