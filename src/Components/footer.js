import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Footer() {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <footer className="page-footer container-fluid col-sm-12">
        <hr />
        <div className="container">
          <div
            className="col-sm-4"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <h4>Help</h4>
            <ul className="list-unstyled quick-links">
              <li>
                <Link href="">Payments</Link>
              </li>

              <li>
                <Link href="">Shipping</Link>
              </li>

              <li>
                <Link href="">Cancellations Return</Link>
              </li>

              <li>
                <Link href="">FAQ</Link>
              </li>
            </ul>
          </div>

          <div className="col-sm-4">
            <h4>Lifestyle Store</h4>
            <ul className="list-unstyled quick-links">
              <li>
                <Link href="">Contact Us</Link>
              </li>

              <li>
                <Link href="">About Us</Link>
              </li>
              <li>
                <Link href="">Careers</Link>
              </li>
              <li>
                <Link href="">Stories</Link>
              </li>
              <li>
                <Link href="">Sell With Us</Link>
              </li>
            </ul>
          </div>

          <div className="col-sm-4">
            <h4>MISC</h4>
            <ul className="list-unstyled quick-links">
              <li>
                <Link href="">Online Shopping</Link>
              </li>
              <li>
                <Link href="">Gift Card</Link>
              </li>
              <li>
                <Link href=""></Link>
              </li>
              Sitemap
            </ul>
          </div>
        </div>
        <div className="container-fluid col-lg-10 col-lg-offset-1">
          <div className="row">
            <hr />
            <div className="col-sm-4">
              <span className="glyphicon glyphicon-map-marker"></span>
              <h3 className="text-center">&nbsp;TRACK YOUR ORDER</h3>
            </div>

            <div className="col-sm-4">
              <span className="glyphicon glyphicon-refresh"></span>
              <h3 className="text-center">&nbsp;&nbsp;FREE EASY RETURNS</h3>
            </div>

            <div className="col-sm-4">
              <span className="glyphicon glyphicon-remove-circle"></span>
              <h3 className="text-center">ONLINE CANCELLATIONS</h3>
            </div>
          </div>
        </div>
        <hr />
      </footer>
    </>
  );
}

export default Footer;
