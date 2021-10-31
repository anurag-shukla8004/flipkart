import React from "react";

function Footer() {
  return (
    <>
      <footer className="page-footer container-fluid col-sm-12">
        <hr />
        <div className="container">
          <div className="col-sm-4">
            <h4>Help</h4>
            <ul className="list-unstyled quick-links">
              <li>
                <a href="">Payments</a>
              </li>

              <li>
                <a href="">Shipping</a>
              </li>

              <li>
                <a href="">Cancellations Return</a>
              </li>

              <li>
                <a href="">FAQ</a>
              </li>
            </ul>
          </div>

          <div className="col-sm-4">
            <h4>Lifestyle Store</h4>
            <ul className="list-unstyled quick-links">
              <li>
                <a href="">Contact Us</a>
              </li>

              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Stories</a>
              </li>
              <li>
                <a href="">Sell With Us</a>
              </li>
            </ul>
          </div>

          <div className="col-sm-4">
            <h4>MISC</h4>
            <ul className="list-unstyled quick-links">
              <li>
                <a href="">Online Shopping</a>
              </li>
              <li>
                <a href="">Gift Card</a>
              </li>
              <li>
                <a href=""></a>
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
