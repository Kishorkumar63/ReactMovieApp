import React from "react";
import { Link } from "react-router-dom";

export const Card = () => {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img src="" alt="" className="card-img-top" />

        <div className="card-body">
          <h5 className="card-title text-primary">Movie Title</h5>
          <p className="card-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
            blanditiis nisi, deserunt qui reiciendis veritatis cupiditate
            voluptate praesentium sint doloribus molestiae alias cumque omnis
            perspiciatis ratione, tempore deleniti, facere quasi mollitia
            dolorem enim saepe autem excepturi. Impedit totam incidunt, veniam
            vitae perspiciatis corporis doloremque. Ipsam velit voluptatum non
            atque itaque.
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <Link to={""} className="btn btn-sm btn-outline-primary">
              Read More
            </Link>
            <small>
            <i className="bi bi-star-fill text-warning">7.25 | 250 review</i>
          </small>
          </div>
          
        </div>
      </div>
    </div>
  );
};
