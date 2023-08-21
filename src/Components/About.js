
import React from "react";
import "./About.css";
import img from "./image/Image-modified (1).png";

export default function About() {
  return (
    <>
    <div className="about-container">
        <div className="center">
            <h1>About</h1>
            <img src={img} alt="img"></img>
        </div>
        <p className="info-about">     Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis porro quis facilis, aut dolorem ducimus fuga perferendis praesentium nihil enim explicabo similique voluptates reprehenderit libero mollitia illum corporis quaerat maxime inventore alias exercitationem! Dicta, atque.
        orem ipsum dolor sit amet consectetur adipisicing elit. Debitis porro quis facilis, aut dolorem ducimus fuga perferendis praesentium nihil enim explicabo similique voluptates reprehenderit libero mollitia illum corporis quaerat maxime inventore alias exercitationem! Dicta, atque.
        </p>
        <hr></hr>
    </div>
    </>
  )
}
