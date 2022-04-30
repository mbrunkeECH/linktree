import React, { useState } from "react";
import './MusicPlayer.css'

//assets
import arrow from '../../assets/icons/arrow.svg'

const MusicPlayer = ({ Platforms }) => {
  const [player, setPlayer] = useState(false);

  return (
    <>
      {/* TODO: create player component and pass the song info to it */}
      {player &&
        <p>This will be the player</p>
      }
      <div className="platformsList">
        {Platforms.map(platform => (
          <div className="platform" key={platform.name}>
            <a href={platform.url} target="_blank" rel="noreferrer" className="PlatformLogo">
              <img src={platform.logo} alt="logo" />
            </a>
            <div className="nameArrow" onClick={() => setPlayer(!player)}>
              <p id="platName">{platform.name}</p>
              <img src={arrow} alt="link to platform" className="arrow" />
            </div>
          </div>
        ))}
      </div>

    </>
  );
};

export default MusicPlayer;
