import React from "react";
import Header from "../../components/Header";
import HeaderImg from "../../images/header_bg_5.jpg";
import { trainers } from "../../data";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import Trainer from "../../components/Trainer";
import Fade from 'react-reveal/Fade';
import "./trainers.css";
function Trainers() {
  return (
    <>
      <Header
        img={HeaderImg}
        title="Our Trainers"
        children="Facilis, iusto numquam nude laborriosam expedita qui exercitation? Dictavero accusantium est aaut meletiae fugit dolormque suscipit quod."
      />
      <section className="trainers">
        <div className="container trainers__container">
          {trainers.map(({ id, image, name, job, socials }) => {
            return (
              <Fade bottom>

              
              <Trainer
                image={image}
                name={name}
                job={job}
                key={id}
                socials={[
                  { icon: <AiFillInstagram />, link: socials[0] },
                  { icon: <AiOutlineTwitter />, link: socials[1] },
                  { icon: <FaFacebook />, link: socials[2] },
                  { icon: <FaLinkedin />, link: socials[3] },
                ]}
              />
            </Fade>  
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Trainers;
