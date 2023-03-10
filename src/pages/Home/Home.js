import React from "react";
import { ReactDOM} from "react";
import './src/css/home.css';
import NavBar from "./components/Navbar";
import BigText from "./components/BigText";


class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="home-page">
        </div>
        <NavBar />
        <BigText />
      </div>
    );
  }
}

export default Home;