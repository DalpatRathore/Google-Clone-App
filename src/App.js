import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";

import Footer from "./pages/Footer";
import Disclaimer from "./components/Disclaimer";
import Login from "./pages/Login";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage></SearchPage>
          </Route>
          <Route path="/login">
            <Login isLogged></Login>
          </Route>
          <Route path="/">
            <Home></Home>
            <Footer></Footer>
          </Route>
        </Switch>
      </Router>
      <div className="app__disclaimerContainer">
        <Disclaimer cloneAppName="Google"></Disclaimer>
      </div>
    </div>
  );
}

export default App;
