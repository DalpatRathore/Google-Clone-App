import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import Footer from "./components/Footer";
import Disclaimer from "./components/Disclaimer";
import Draggable from "react-draggable";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="app">
      <Router>
        <ScrollToTop></ScrollToTop>
        <Switch>
          <Route path="/search">
            <SearchPage></SearchPage>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      <Draggable>
        <div className="app__disclaimerContainer">
          <Disclaimer cloneAppName="Google"></Disclaimer>
        </div>
      </Draggable>
    </div>
  );
}

export default App;
