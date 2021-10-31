import React, { useEffect, useState } from "react";
import Homeproduct from "./homeproduct";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;
function Home() {
  const [homeProductData, updatehomeProductData] = useState([]);

  useEffect(() => {
    console.log("in effect");
    axios.get("https://fakestoreapi.com/products").then((req) => {
      updatehomeProductData(req.data);
      console.log(1);
    });
  }, []);
  return (
    <>
      <header>
        <div className="col-sm-12 jumbotron text-center">
          <h2>Welcome to our Lifestyle Store!</h2>
          <h6>
            We have the best cameras,watches and shirts for you. No need to hunt
            around, we have all in one place
          </h6>
        </div>
      </header>
      <Grid>
        {homeProductData.map((data, index) => (
          <Homeproduct
            id={data.id}
            name={data.title}
            image={data.image}
            price={data.price}
          />
        ))}
        <div className="container col-sm-10 col-sm-offset-1 page">
          <div className="col-sm-12">
            <nav aria-label="Page navigation">
              <ul className="pagination">
                <li className="disabled">
                  <Link href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </Link>
                </li>
                <li className="active">
                  <Link href="#">1</Link>
                </li>
                <li>
                  <Link href="#">2</Link>
                </li>
                <li>
                  <Link href="#">3</Link>
                </li>
                <li>
                  <Link href="#">4</Link>
                </li>
                <li>
                  <Link href="#">5</Link>
                </li>
                <li>
                  <Link href="#">6</Link>
                </li>
                <li>
                  <Link href="#">7</Link>
                </li>
                <li>
                  <Link href="#">8</Link>
                </li>
                <li>
                  <Link href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Grid>
    </>
  );
}

export default Home;
