import "./App.css";
import React from "react";
import { User, Platforms, Shows } from "./Data";

//components
import Header from "./components/Header/Header";


//assets
import logo from "../src/assets/logo.svg";

function App() {

  return (
    <div className="main" style={{ "--link": User.primaryLinkColor, "--text": User.primaryTextColor }}>
      {/* TODO: change Data.js to a json file and replicate api call (does the same thing but is a little more realistic)  */}
      <Header userName={User.userName} userImage={User.profilePic} />

      <div className="links">
        <h1>Hello linktree</h1>
      </div>

      <div className="logo">
        {/* accessibility TODO: alt tags and general accessability*/}
        <img src={logo} alt="linktee logo" />
      </div>
    </div >
  );
}

export default App;
