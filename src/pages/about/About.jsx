import React from "react";
import Header from "../../components/Header";
import img from "../../images/header_bg_1.jpg";
import StoryImg from "../../images/about1.jpg";
import VisionImg from "../../images/about2.jpg";
import MissionImg from '../../images/about3.jpg'
import "./about.css";

function About() {
  return (
    <>
      <Header
        title="About Us"
        img={img}
        children="lorem lorem lorem lorem lorem lorem lorem lorem lorem lroem lorem lorem lorem lorem lorem loerm lorem lorem lorem lorem"
      />
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-img">
            <img src={StoryImg} />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lroem lorem
              lorem lorem lorem lorem loerm lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem lroem lorem lorem lorem
              lorem lorem loerm lorem lorem lorem lorem
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
              doloribus aut porro a aspernatur sed iure, perferendis?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              dolorem ea beatae, minima corporis, similique eligendi velit enim
              voluptatum suscipit alias delectus iusto, explicabo voluptatem?
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lroem lorem
              lorem lorem lorem lorem loerm lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem lroem lorem lorem lorem
              lorem lorem loerm lorem lorem lorem lorem
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
              doloribus aut porro a aspernatur sed iure, perferendis?
            </p>
          </div>
          <div className="about__section-img">
            <img src={VisionImg} />
          </div>
        </div>
      </section>




      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-img">
            <img src={VisionImg} />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lroem lorem
              lorem lorem lorem lorem loerm lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem lroem lorem lorem lorem
              lorem lorem loerm lorem lorem lorem lorem
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
              doloribus aut porro a aspernatur sed iure, perferendis?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              dolorem ea beatae, minima corporis, similique eligendi velit enim
              voluptatum suscipit alias delectus iusto, explicabo voluptatem?
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
