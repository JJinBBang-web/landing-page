import React, { useState, useEffect } from "react";
import "./App.css";
import img1 from "./image/img1.png";
import Chat_Circle_Dots from "./image/Chat_Circle_Dots.svg";
import Heart from "./image/Heart.svg";
import Circle_Check from "./image/Circle_Check.svg";
import img2 from "./image/img2.png";
import Frame1 from "./image/Frame1.png";
import Frame2 from "./image/Frame2.png";
import Frame3 from "./image/Frame3.png";
import img3 from "./image/img3.png";
import Frame4 from "./image/Frame4.png";
import img4 from "./image/img4.png";
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
              window.location.href = "https://forms.gle/7jYh6FGCnfNcqWAU6";
            }}
          >
            <img
              className="chat"
              src={Chat_Circle_Dots}
              alt="Chat_Circle_Dots"
            />
            <p className="text1">이벤트 참여하기</p>
          </div>
          <div
            className="button2"
            onClick={() => {
              window.location.href = "https://www.jjinbbang.kr/";
            }}
          >
            <img className="heart" src={Heart} alt="Heart" />
            <p className="text2">서비스 이용하기</p>
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
              window.location.href = "https://forms.gle/7jYh6FGCnfNcqWAU6";
            }}
          >
            <img
              className="chat"
              src={Chat_Circle_Dots}
              alt="Chat_Circle_Dots"
            />
            <p className="text1">이벤트 참여하기</p>
          </div>
          <div
            className="button2"
            onClick={() => {
              window.location.href = "https://www.jjinbbang.kr/";
            }}
          >
            <img className="heart" src={Heart} alt="Heart" />
            <p className="text2">서비스 이용하기</p>
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
                "https://www.instagram.com/jjinbbang_official?igsh=ZnVxMzUzbXlpdWU%3D&utm_source=qr";
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
        <div className="footer">
          <p className="footerText">
            이 페이지에는 토스팀에서 제공한 토스페이스가 적용되어 있습니다
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
