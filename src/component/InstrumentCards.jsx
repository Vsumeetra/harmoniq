import React from "react";
import "./InstrumentCards.css";
import "bootstrap/dist/css/bootstrap.min.css";

const InstrumentCards = () => {
  const instruments = [
    {
      title: "Piano",
      subtitle: "CLASSIC TONES",
      description: "Explore the soulful sound of piano with deep melodies and soft keys.",
      image: "https://images.unsplash.com/photo-1511376777868-611b54f68947", // piano image
    },
    {
      title: "Harmony",
      subtitle: "MELODIC BLEND",
      description: "Experience the rhythmic fusion of sounds that bring life to music.",
      image: "https://images.unsplash.com/photo-1485579149621-3123dd979885", // harmony image
    },
    {
      title: "Tuner",
      subtitle: "PERFECT PITCH",
      description: "Fine-tune your instrument to achieve the purest and most accurate sound.",
      image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2", // tuner image
    },
  ];

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        {instruments.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div
              className="instrument-card text-white d-flex flex-column justify-content-end"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="overlay p-4">
                <h6 className="subtitle">{item.subtitle}</h6>
                <h3 className="title mb-3">{item.title}</h3>
                <p>{item.description}</p>
                <button className="btn btn-light mt-3">Explore</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstrumentCards;
