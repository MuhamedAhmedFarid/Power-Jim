import React from "react";
import "./gellery.css";
import HeaderImg from "../../images/header_bg_3.jpg";
import Header from "../../components/Header";
import Fade from 'react-reveal/Fade';

function Gallery() {
  const galleryLenght = 15;
  const images = [];

  for (let i = 1; i <= galleryLenght; i++) {
    images.push(require(`../../images/gallery${i}.jpg`));
  }

  return (
    <>
      <Header
        img={HeaderImg}
        title="Our Gallery"
        children="
      Fruga itaque ducimus, ad anet praesentium suscit sit, assummenda nihil officea totam, animi cupa nobis nemo natus dolremque?"
      />
    
      <div className="gellary ">
        <div className="container gellary__container">
          {images.map((image, index) => {
            return (
            <Fade bottom> 
              <article key={index}>
                <img src={image} />
              </article>
            </Fade>
            );
          })}
        </div>
      </div>
      
    </>
  );
}

export default Gallery;
