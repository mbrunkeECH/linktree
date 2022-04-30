import React from "react";
import "./Link.css";

// using children as props allows us to add any new components (Link types) in without reconfiguring. 
// Styles also controlled by user object allowing colors to be decided by the user
const Link = ({ title, link_url, isClassic, children, onClick }) => {

  return (
    <div className="link">
      {isClassic &&
        <a href={link_url} target="_blank" rel="noreferrer" onClick={onClick}>
          <div className="primaryLink">
            <p className="primaryTitle">{title}</p>
          </div>
        </a>
      }
      {!isClassic &&
        <div className="primaryLink" onClick={onClick}>
          <p className="primaryTitle">{title}</p>
        </div>
      }
      {/* if dropdown is set to true (visible), show the children components if they exist */}
      {children}

    </div >
  )
};

export default Link;
