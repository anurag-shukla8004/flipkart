// import { Height } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
function Homeproduct(props) {
  return (
    <>
      {console.log(props)}
      <div className="col-sm-3" style={{ marginBottom: "20px" }}>
        <div
          className="thumb-wrapper"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="img-box"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <img
              style={{ width: "165px", height: "235px", objectFit: "contain" }}
              src={props.image}
              className="img-responsive img-fluid"
              alt=""
            />
          </div>
          <div
            className="thumb-content"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h4 style={{ textAlign: "center" }}>{props.name}</h4>
            <p className="item-price">
              <strike>$289.00</strike> <span>${props.price}</span>
            </p>
            <div className="star-rating">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <i className="fa fa-star"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fa fa-star"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fa fa-star"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fa fa-star"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fa fa-star-o"></i>
                </li>
              </ul>
            </div>
            <Link href="#" className="btn btn-primary">
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homeproduct;
