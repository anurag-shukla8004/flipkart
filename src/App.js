import Navbar from "./Components/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/home";
import Footer from "./Components/footer";
import Productdetails from "./Components/productdetails";
import React, { useState } from "react";
import SearchProducts from "./Components/searchProducts";

function App() {
  const [productData, updateProductData] = useState("");
  const [count, updateCount] = useState(1);

  const productdata = (data) => {
    updateProductData(data);
    updateCount(count + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // console.log(data.rateing);
  };
  // console.log(productData);
  React.useEffect(() => {}, []);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home datadetails={productdata} />
          </Route>
          <Route exact path="/productsdetails">
            <Productdetails
              id={productData.id}
              name={productData.name}
              image={productData.image}
              price={productData.price}
              details={productData.details}
              category={productData.category}
              rating={productData.rating}
              count={productData.count}
            />
          </Route>
          <Route exact path="/searchproducts">
            <SearchProducts />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
