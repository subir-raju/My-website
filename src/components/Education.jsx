import React from "react";
import education from "./data/education.json";

const Education = () => {
  return (
    <>
      <div className="container edu">
        <h1>EDUCATION</h1>
        {education.map((data) => {
          return (
            <>
              <div key={data.id} className="edu-items text-center my-5">
                <div className="edu-left">
                  <img src={`/assets/${data.imageSrc}`} alt="" />
                </div>

                <div className="edu-right">
                  <h2>{data.organisation}</h2>
                  <h3>{data.degree}</h3>
                  <h4>
                    {data.startDate}
                    {"--"}
                    {data.endDate}{" "}
                    <span style={{ color: "black" }}>{data.location}</span>
                  </h4>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Education;
