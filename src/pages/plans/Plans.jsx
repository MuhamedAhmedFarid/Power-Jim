import React from "react";
import "./plans.css";
import Header from "../../components/Header";
import HeaderImg from "../../images/header_bg_4.jpg";
import Card from "../../UI/Card";
import { plans } from "../../data";
import pic from "../../images/try.gif";
function Plans() {
  return (
    <>
      <Header
        img={HeaderImg}
        title="Membership"
        children="Assumenda perspiciatis asperiores deserunt quisquam, sit iusto consctetu vero similique aliquam."
      />
      <section className="plans">
        <div className="container plans__container">
          {plans.map(({ id, name, desc, price, features }) => {
            return (
              <Card key={id}>
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$ ${price}`}</h1>
                <h4>Features</h4>
                {features.map(({ feature, available }, index) => {
                  return (
                    <p key={index} className={!available ? "disabled" : ""}>
                      {feature}
                    </p>
                  );
                })}
                <button className="btn lg"> Choose Plan</button>
              </Card>
            );
          })}

        </div>
        <div className="work">
        <div className="warrap">
            <img className="zeiad" src={pic} />
          </div>
          <div className="content">
          <h1>Zeiad</h1>
          <a href="#">Linkdin</a>
          </div>

        </div>

      </section>
    </>
  );
}

export default Plans;
