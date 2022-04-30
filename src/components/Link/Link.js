import React, { useState } from "react";
import "./Link.css";

// using children as props allows us to add any new components (Link types) in without reconfiguring. 
// Styles also controlled by user object allowing colors to be decided by the user
const Link = ({ title, link_url, isClassic, children, dropDownVisible }) => {
  const [showDropdown, setShowDropdown] = useState(dropDownVisible)

  return (
    <div className="link" >
      {isClassic &&
        <a href={link_url} target="_blank" rel="noreferrer">
          <div className="primaryLink">
            <p className="primaryTitle">{title}</p>
          </div>
        </a>
      }
      {!isClassic &&
        <div className="primaryLink" onClick={() => setShowDropdown(!showDropdown)}>
          <p className="primaryTitle">{title}</p>
        </div>
      }
      {/* if dropdown is set to true (visible), show the children components if they exist */}
      {showDropdown && ([children])}

    </div >
  )
};

export default Link;
