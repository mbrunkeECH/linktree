import "./App.css";
import React from "react";
import { User, Platforms, Shows } from "./Data";

//components
import Header from "./components/Header/Header";


//assets
import logo from "../src/assets/logo.svg";
import Link from "./components/Link/Link";

function App() {

  return (
    <div className="main">
      {/* TODO: change Data.js to a json file and replicate api call (does the same thing but is a little more realistic)  */}
      <Header userName={User.userName} userImage={User.profilePic} />

      {/* Pass the styles through here so we do not have to add the colours to each component */}
      <div className="links" style={{ "--link": User.primaryLinkColor, "--text": User.primaryTextColor }}>
        {/* TODO: could map through these so no manual config needed on this page */}
        <Link isClassic={true} title="Classic Link" User={User} link_url="https://github.com/mbrunkeECH/linktree" />
      </div>


      <div className="logo">
        {/* accessibility TODO: alt tags and general accessability*/}
        <img src={logo} alt="linktee logo" />
      </div>
    </div >
  );
}

export default App;
