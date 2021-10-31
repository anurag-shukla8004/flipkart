import React from "react";

function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-dark navbar-relative-top"
        style={{ backgroundColor: "#2874f0" }}
      >
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <i className="fa fa-bars"></i>
            </button>
            <a className="navbar-brand" href="#">
              <img
                style={{ width: "50px", height: "35px" }}
                src="https://cdn.icon-icons.com/icons2/729/PNG/512/flipkart_icon-icons.com_62718.png"
                alt=""
              />
            </a>
          </div>

          <div className="collapse navbar-collapse" id="myNavbar">
            <form className="navbar-form navbar-left">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>
              <button type="submit" className="btn btn-default">
                <span className="glyphicon glyphicon-search"></span>
              </button>
            </form>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="">
                  <span className="glyphicon glyphicon-shopping-cart"></span>{" "}
                  Cart
                  <span className="badge"></span>
                </a>
              </li>

              <li>
                <a href="">
                  <span className="glyphicon glyphicon-log-out"></span> Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className="menu container-fluid text-center hidden-xs"
        style={{ position: "relative top:4em", paddingBottom: "5px" }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2">
              <button
                className="btn btn-block dropdown-toggle"
                type="button"
                id="dropdownMenu1"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
                style={{ backgroundColor: "#fff" }}
              >
                Men
                <span className="caret"></span>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li>
                  <a href="#">Footwear</a>
                </li>
                <li>
                  <a href="#">Top wear</a>
                </li>
                <li>
                  <a href="#">Sports wear</a>
                </li>
                <li role="separator" className="divider"></li>
                <li>
                  <a href="#">Separated link</a>
                </li>
              </ul>
            </div>

            <div className="col-sm-2">
              <button
                className="btn btn-block dropdown-toggle"
                type="button"
                id="dropdownMenu1"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
                style={{ backgroundColor: "#fff" }}
              >
                Women
                <span className="caret"></span>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li>
                  <a href="#">Action</a>
                </li>
                <li>
                  <a href="#">Another action</a>
                </li>
                <li>
                  <a href="#">Something else here</a>
                </li>
                <li role="separator" className="divider"></li>
                <li>
                  <a href="#">Separated link</a>
                </li>
              </ul>
            </div>

            <div className="col-sm-2">
              <button
                className="btn btn-block dropdown-toggle"
                type="button"
                id="dropdownMenu1"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
                style={{ backgroundColor: "#fff" }}
              >
                Cameras
                <span className="caret"></span>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li>
                  <a href="#">Action</a>
                </li>
                <li>
                  <a href="#">Another action</a>
                </li>
                <li>
                  <a href="#">Something else here</a>
                </li>
                <li role="separator" className="divider"></li>
                <li>
                  <a href="#">Separated link</a>
                </li>
              </ul>
            </div>

            <div className="col-sm-2">
              <button
                className="btn btn-block dropdown-toggle"
                type="button"
                id="dropdownMenu1"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
                style={{ backgroundColor: "#fff" }}
              >
                Electronics
                <span className="caret"></span>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li>
                  <a href="#">Mobiles</a>
                </li>
                <li>
                  <a href="#">Laptops</a>
                </li>
                <li>
                  <a href="#">Accessories</a>
                </li>
                <li role="separator" className="divider"></li>
                <li>
                  <a href="#">Separated link</a>
                </li>
              </ul>
            </div>

            <div className="col-sm-2">
              <button
                className="btn btn-block dropdown-toggle"
                type="button"
                id="dropdownMenu1"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
                style={{ backgroundColor: "#fff" }}
              >
                Books
                <span className="caret"></span>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li>
                  <a href="#">Action</a>
                </li>
                <li>
                  <a href="#">Another action</a>
                </li>
                <li>
                  <a href="#">Something else here</a>
                </li>
                <li role="separator" className="divider"></li>
                <li>
                  <a href="#">Separated link</a>
                </li>
              </ul>
            </div>

            <div className="col-sm-2">
              <button
                className="btn btn-block"
                aria-expanded="true"
                style={{ backgroundColor: "#fff" }}
              >
                Offer Zone
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
