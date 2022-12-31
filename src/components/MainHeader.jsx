import React from "react";
import { Link } from "react-router-dom";
import Image from "../images/main_header.png";
import Zoom from "react-reveal/Zoom";

function MianHeader() {
  return (
    <header className="main__header">
      <div className="conatainer main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOFWorkUt</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, in sint
            consequatur itaque voluptas aliquid cupiditate minima necessitatibus
            .
          </p>
          <Link className="btn lg" to="/plans">
            Get Started
          </Link>
        </div>
        <div className="main__header-right">
          <Zoom bottom>
            <div className="main__header-circle">
              <div className="main__header-img">
                <img src={Image} />
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </header>
  );
}

export default MianHeader;
