import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Navbar(event) {
  const [searchQuery, updateSearchQuery] = useState("");
  const [searcharray, updateSearcharray] = useState([]);
  const [toggleClass, setToggleClass] = useState(false);
  const [suggestionBox, setSuggestionBox] = useState(false);
  const [time, updatetime] = useState();
  let data;
  const history = useHistory();
  const fetchData = (searchString) => {};

  const uparray = () => {
    console.log(searcharray, "history");
  };

  useEffect(() => {
    console.log(searchQuery);

    clearTimeout(time);
    const Timeout = setTimeout(() => {
      axios
        .get(`https://fakestoreapi.com/products/category/${searchQuery}`)
        .then((req) => {
          if (req) {
            req.data.length ? searchProduct() : setSuggestionBox(false);
          }

          updateSearcharray(req.data);
          console.log(searcharray);
          console.log(req.data.length);
          setToggleClass(true);
          history.push({
            pathname: "/searchproducts",
            state: {
              update: req.data,
            },
          });
        }, 500);
      updatetime(Timeout);
    });
  }, [searchQuery]);

  const searchProduct = () => {
    // // console.log(event.target.value);

    setSuggestionBox(true);
    const Timeout = setTimeout(() => {
      setSuggestionBox(false);
    }, 2000);
    updatetime(Timeout);
  };

  return (
    <>
      <nav
        className="navbar navbar-dark navbar-relative-top"
        style={{
          backgroundColor: "#2874f0",
          margin: "0px",
          paddingBottom: "10px",
        }}
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
            <Link className="navbar-brand" to="/">
              <img
                style={{ width: "150px", height: "35px" }}
                src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/fk-logo_9fddff.png"
                alt=""
              />
            </Link>
          </div>

          <div className="collapse navbar-collapse" id="myNavbar">
            <form
              onSubmit={(event) => event.preventDefault()}
              className="navbar-form navbar-left"
              style={{ top: "8px" }}
            >
              <div className="form-group">
                <input
                  style={{ width: "275px" }}
                  type="text"
                  value={searchQuery}
                  className="form-control"
                  placeholder="Search"
                  onChange={(e) => updateSearchQuery(e.target.value)}
                />
                <button type="submit" className="btn btn-default">
                  <span className="glyphicon glyphicon-search"></span>
                </button>
              </div>
              <div
                className={!suggestionBox ? "suggestion-box" : ""}
                style={{
                  position: "absolute",
                  width: "275px",
                  height: "150px",
                  zIndex: "11",
                  top: "35px",
                  background: "#fafafa",
                  overflow: "scroll",
                }}
              >
                <ul className="suggestion-ul">
                  {searcharray.map((value, index) => (
                    <li key={value.id} id={index}>
                      {value.title}
                    </li>
                  ))}
                </ul>
              </div>
            </form>
            <ul
              className="nav navbar-nav navbar-right"
              style={{ marginTop: "10px" }}
            >
              <li>
                <Link href="">
                  <span className="glyphicon glyphicon-shopping-cart"></span>{" "}
                  Cart
                  <span className="badge"></span>
                </Link>
              </li>

              <li>
                <Link href="">
                  <span className="glyphicon glyphicon-log-out"></span> Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className="menu container-fluid text-center hidden-xs"
        style={{
          position: "relative top:4em",
          paddingBottom: "9px",
          paddingTop: "9px",
        }}
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
                  <Link href="#">Footwear</Link>
                </li>
                <li>
                  <Link href="#">Top wear</Link>
                </li>
                <li>
                  <Link href="#">Sports wear</Link>
                </li>
                <li role="separator" className="divider"></li>
                <li>
                  <Link href="#">Separated link</Link>
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
                  <Link href="#">Action</Link>
                </li>
                <li>
                  <Link href="#">Another action</Link>
                </li>
                <li>
                  <Link href="#">Something else here</Link>
                </li>
                <li role="separator" className="divider"></li>
                <li>
                  <Link href="#">Separated link</Link>
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
                  <Link href="#">Action</Link>
                </li>
                <li>
                  <Link href="#">Another action</Link>
                </li>
                <li>
                  <Link href="#">Something else here</Link>
                </li>
                <li role="separator" className="divider"></li>
                <li>
                  <Link href="#">Separated link</Link>
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
                  <Link href="#">Mobiles</Link>
                </li>
                <li>
                  <Link href="#">Laptops</Link>
                </li>
                <li>
                  <Link href="#">Accessories</Link>
                </li>
                <li role="separator" className="divider"></li>
                <li>
                  <Link href="#">Separated link</Link>
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
                  <Link href="#">Action</Link>
                </li>
                <li>
                  <Link href="#">Another action</Link>
                </li>
                <li>
                  <Link href="#">Something else here</Link>
                </li>
                <li role="separator" className="divider"></li>
                <li>
                  <Link href="#">Separated link</Link>
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
