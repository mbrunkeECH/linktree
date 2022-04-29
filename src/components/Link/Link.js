import React, { useState } from "react";
import "./Link.css";

// using children as props allows us to add any new components (Link types) in without reconfiguring. 
// Styles also controlled by user object allowing colors to be decided by the user
const Link = ({ children, title, link_url, isClassic }) => {
  const [isClassicLink, setIsClassicLink] = useState(isClassic)



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
        <div className="primaryLink">
          <p className="primaryTitle">{title}</p>
        </div>
      }

      {children}
    </div >
  )
};

export default Link;
