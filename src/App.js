import Navbar from "./Components/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/home";
import Footer from "./Components/footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
