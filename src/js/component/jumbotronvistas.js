import React from "react";
import "../../styles/jumbotrom.css";

export const JumbotronVistas = (props) => {
    return (
      <div className="container">
      <div className="col-md-12 g-0">
        <div className="position-relative w-100">
          <div className="position-absolute top-50 start-50 translate-middle mb-5 w-100 p-5 d-flex justify-content-end text-end">
            <h1 className="display-5 col-md-5 fw-normal opacity-80 bg-transparent text-white" style={{fontSize:"50px"}}>{props.titulo1}</h1>
          </div>
          <img
            src={props.imagen1}
            className="card-img-top w-100"
            style={{ objectFit: "cover", height: "400px", borderRadius:"15px",boxShadow: "2px 4px 10px 2px rgba(0, 0, 0, 0.2)",}}
            alt="..."
          />
        </div>
      </div>
      </div>
    );
  }