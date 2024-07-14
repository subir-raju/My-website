import React from "react";
import projects from "./data/projects.json";

const Projects = () => {
  return (
    <>
      <div className="container project" id="projects">
        <h1>PROJECTS</h1>
        <div className="row d-flex justify-content-center align-content-center">
          {projects.map((data) => (
            <>
              <div
                key={data.id}
                className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4"
              >
                <div
                  className="card bg-dark text-light"
                  style={{
                    width: "18rem",
                    border: "2px solid rosybrown",
                    borderRadius: "10px",
                    boxShadow: "5px 5px 10px 10px #4A4042",
                  }}
                >
                  <div className="img d-flex justify-content-center align-content-center p-3">
                    <img
                      src={`/assets/${data.imageSrc}`}
                      className="card-img-top"
                      alt=""
                      style={{
                        width: "250px",
                        height: "200px",
                        border: "2px solid rosybrown",
                        borderRadius: "10px",
                      }}
                      sty
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.description}</p>
                    <a href={data.demo} className="btn btn-primary mx-3">
                      Go to the project
                    </a>
                    <a href={data.source} className="btn btn-primary">
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
