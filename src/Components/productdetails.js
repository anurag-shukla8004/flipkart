import React from "react";
import { Link } from "react-router-dom";

function Productdetails(props) {
  // localStorage.setItem("Name", JSON.stringify(props));
  return (
    <>
      <div className="col-sm-5">
        <div className="thumbnail">
          <img
            style={{
              width: "220px",
              height: "460px",
              objectFit: "contain",
            }}
            src={props.image}
            className="img-responsive"
            alt=""
          />

          <div className="caption">
            <div className="row buttons">
              <button
                className="btn  col-sm-4 col-sm-offset-2 btn-lg"
                style={{
                  backgroundColor: "#ff9f00",
                  color: "#fff",
                  fontSize: "1em",
                }}
              >
                <span className="glyphicon glyphicon-shopping-cart"></span>
                &nbsp;ADD TO CART
              </button>

              <button
                className="btn col-sm-4 col-sm-offset-1 btn-lg"
                style={{
                  backgroundColor: "#fb641b",
                  color: "#fff",
                  fontSize: "1em",
                }}
              >
                <i className="fa fa-bolt" style={{ fontSize: "1.2em" }}></i> BUY
                NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="col-sm-7 desc">
        <div>
          <ol
            className="breadcrumb col-sm-12"
            style={{ backgroundColor: "transparent" }}
          >
            <li>
              <Link to="#">Home</Link>
            </li>
            <li className="active">{props.name}</li>
          </ol>

          <h4>{props.name}</h4>

          <div className="row">
            <div className="col-sm-2">
              <span className="label label-success">
                {props.rating}{" "}
                <span className="glyphicon glyphicon-star"></span>
              </span>
            </div>

            <div className="col-sm-5">
              <strong>{props.count} Ratings &amp; Reviews</strong>
            </div>
          </div>

          <div>
            <h3>$ {props.price}</h3>
          </div>

          <div>
            <h5>
              <span className="glyphicon glyphicon-calendar"></span> EMIs from{" "}
              <strong>Rs 3,070/month </strong>
              <Link>
                View Plans <i className="fa fa-chevron-right"></i>
              </Link>
            </h5>

            <h5>
              <span className="glyphicon glyphicon-tag"></span>
              <strong> Bank Offer</strong> 5% Instant Discount on Visa Cards for
              First 3 Online Payments. <Link>T&amp;C</Link>
            </h5>

            <h5>
              <span className="glyphicon glyphicon-tag"></span>
              <strong> Bank Offer</strong> Extra 5% off* with Axis Bank Buzz
              Credit Card. <Link>T&amp;C</Link>
            </h5>
          </div>

          <br />
          <div className="row">
            <div className="col-sm-9">
              <h5>
                Brand Warranty of 1 Year <Link>Know More</Link>
              </h5>
            </div>
          </div>
          <br />

          <br />
          <br />

          <div className="col-xs-1">
            <strong>Delivery</strong>
          </div>

          <div
            className=" row col-xs-4"
            style={{
              border: "0px",
              borderBottom: "1px solid #2874f0",
              position: "relative",
              left: "10%",
            }}
          >
            <span
              className="glyphicon glyphicon-map-marker col-xs-1"
              style={{ color: "#2874f0", paddingLeft: "0", marginLeft: "0" }}
            ></span>
            <input
              type="text"
              placeholder="110091"
              style={{ border: "0", paddingRight: "0" }}
              className="col-xs-7"
            />
            <Link
              className="col-xs-1"
              style={{ paddingLeft: "0", textDecoration: "none" }}
            >
              Change
            </Link>
          </div>
        </div>
        <div id="delivery-time" style={{ position: "relative", left: "15%" }}>
          <h5>
            Delivery in 3-4 days |{" "}
            <Link style={{ color: "green", textDecoration: "none" }}>Free</Link>
          </h5>

          <br />
          <br />

          <div id="highlights">
            <strong className="col-xs-3">Highlights</strong>
            <ul className="col-xs-6">
              <li> Best Seller of this year</li>
              <li> 1 Year Warranty</li>
              <li> Best Quality</li>
              <li> Make is your jusrney awsome</li>
            </ul>
          </div>
        </div>
        <br />
        <br />

        <div className="container col-xs-12" style={{ marginTop: "50px" }}>
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="col-sm-12">
                <h3>PRODUCT DESCRIPTION</h3>
                <p>{props.details}</p>
              </div>
            </div>
            <hr />
            <div className="panel-body">
              <div className="col-sm-12">
                <div className="col-sm-8">
                  <h3>{props.category}</h3>
                  <p>{props.details}</p>
                </div>

                <div className="col-sm-4">
                  <img
                    src="https://rukminim1.flixcart.com/image/200/200/j9338nk0/mobile/g/u/h/apple-iphone-8-plus-mq8f2hn-Link-original-imaeyym9hdbqaxhp.jpeg?q=90"
                    className="img-responsive"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="panel-body">
              <div className="col-sm-12">
                <div className="col-sm-4">
                  <img
                    src="https://rukminim1.flixcart.com/image/200/200/j9338nk0/mobile/g/u/h/apple-iphone-8-plus-mq8f2hn-Link-original-imaeyynjb4vxrdgd.jpeg?q=90"
                    className="img-responsive"
                    alt=""
                  />
                </div>

                <div className="col-sm-8">
                  <h3>1 year Warranty</h3>
                  <p>
                    A 1-year warranty is a warranty in which the seller or
                    manufacturer guarantees
                  </p>
                </div>
              </div>
            </div>

            <div className="panel-footer">
              <h4>
                <Link style={{ textDecoration: "none" }}>
                  View all features
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Productdetails;
