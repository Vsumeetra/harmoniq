import React from "react";
import { useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./MusicWorkshopSection.css";

const MusicWorkshopSection = () => {
      const navigate = useNavigate();

  return (
    <section className="music-section text-white d-flex align-items-center">
      <div className="overlay"></div>
      <div className="container position-relative text-center text-md-start">
        <div className="row align-items-center">
          <div className="col-md-6"></div>
          <div className="col-md-6 px-4 px-md-5">
            <h1 className="fw-bold display-5 mb-3">Music Workshop</h1>
            <h4 className="text-danger mb-3">Free Workshops and Classes</h4>
            <p className="mb-4">
              The Workshop Series was created to help people of all levels learn about the
              instruments and gear they can use to make the music they love.
            </p>
            <div className="d-flex flex-wrap align-items-center gap-3">
              <button className="btn btn-danger px-4 py-2 fw-semibold"onClick={() => navigate("/auth")}>
                REGISTER NOW
              </button>
              <button className="btn btn-outline-light d-flex align-items-center gap-2 px-3 py-2">
                <span className="play-icon">&#9658;</span> PLAY VIDEO
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicWorkshopSection;
