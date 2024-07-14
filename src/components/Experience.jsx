import React from "react";
import experience from "./data/experience.json";

const Experience = () => {
  return (
    <>
      <div className="container exp" id="experience">
        <h1>EXPERIENCE</h1>
        {experience.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="exp-items text-center"
                data-aos="fade-down-right"
                data-aos-duration="1000"
              >
                <div className="exp-left">
                  <img src={`/assets/${data.imageSrc}`} alt="" />
                </div>

                <div className="exp-right">
                  <h2>{data.role}</h2>
                  <h4>
                    {data.startDate}
                    {"--"}
                    {data.endDate}{" "}
                    <span style={{ color: "black" }}>{data.location}</span>
                  </h4>
                  <h5>{data.experience[0]}</h5>
                  <h5>{data.experience[1]}</h5>
                  <h5>{data.experience[2]}</h5>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Experience;
