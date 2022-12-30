import React from "react";
import SectionHead from "./SectionHead";
import { ImQuotesLeft } from "react-icons/im";
import Card from "../UI/Card";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { testimonials } from "../data";
import Fade from "react-reveal/Fade";

function Testiosials() {
  const [index, setIndex] = React.useState(0);
  const { name, quote, job, avatar } = testimonials[index];

  const prevTestimonailHandler = () => {
    setIndex((prev) => prev - 1);
    if (index <= 0) {
      setIndex(testimonials.length - 1);
    }
  };
  const nextTestimonailHandler = () => {
    setIndex((prev) => prev + 1);
    if (index >= testimonials.length - 1) {
      setIndex(0);
    }
  };
  return (
    <section className="testimoials">
      <div className="container testimonials__container">
        <div className="head">
          <SectionHead
            className="head"
            icon={<ImQuotesLeft />}
            title="Testimonials"
          />
        </div>
        <Fade left>
          <Card className="testimonial">
            <div className="testinonial__avatar">
              <img src={avatar} />
            </div>
            <p className="trstimonai__qoute">{`"${quote}"`}</p>
            <h5>{name}</h5>
            <small className="testimonial__title">{job}</small>
          </Card>
        </Fade>
        <div className="testimonials__btn-container">
          <Fade right>
            <button
              className="testimonials__btn"
              onClick={prevTestimonailHandler}
            >
              <IoIosArrowDropleftCircle />
            </button>
          </Fade>

          <Fade left>
            <button
              className="testimonials__btn"
              onClick={nextTestimonailHandler}
            >
              <IoIosArrowDroprightCircle />
            </button>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default Testiosials;
