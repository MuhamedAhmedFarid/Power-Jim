import React from "react";
import Header from "../../components/Header";
import img from "../../images/header_bg_1.jpg";
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
            <img src='https://images.pexels.com/photos/4164771/pexels-photo-4164771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
             Minima magni voluptatum perspiciatis cupiditate amet iste facere inventore ut? Est consequuntur eos rerum eum eaque
              distinctio voluptatibus nemo repudiandae vel ipsa.
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
              Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Perferendis, vel doloribus corrupti nemo obcaecati expedita architecto voluptates ad debitis 
              unde temporibus nostrum tempore fugit? Consectetur doloribus rem fugit nostrum nam?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
              doloribus aut porro a aspernatur sed iure, perferendis?
            </p>
          </div>
          <div className="about__section-img">
            <img src='https://images.pexels.com/photos/6550861/pexels-photo-6550861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
          </div>
        </div>
      </section>




      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-img">
            <img src='https://images.pexels.com/photos/4608130/pexels-photo-4608130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Ut sunt ad suscipit provident tempore aspernatur architecto nihil fuga libero 
              hic quasi quos sapiente perspiciatis nesciunt porro tenetur minus, neque animi.
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
