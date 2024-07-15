import React from "react";
import pdf from "./pdf/resume.pdf";
import mainpic from "./data/img.json";

const Land = () => {
  return (
    <>
      <div className="container home" id ="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1>Moi, olen Subir. Opiskelen datatieteitä maisteriksi Tampereen yliopistossa.</h1>
          <a
            href={pdf}
            download={"resume.pdf"}
            className="btn btn-outline-warning"
          >
            Download My Resume
          </a>
        </div>
        <div className="right" data-aos="fade-up-left" data-aos-duration="1000">
          <div className="img">
            <img src={`/assets/${mainpic.imgSrc}`} alt="mainpic" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Land;
