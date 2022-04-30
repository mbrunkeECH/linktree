import { fireEvent, render, screen } from '@testing-library/react';
import { useState } from 'react';

import { Shows, Platforms } from '../../Data';
import Link from '../Link/Link';
import MusicPlayer from '../MusicPlayer/MusicPlayer';
import ShowsList from '../ShowsList/ShowsList';

const MockLinkGroup = ({ ShowsState, PlayerState, Shows, Platforms }) => {
  const [isShowsVisible, setisShowsVisible] = useState(ShowsState);
  const [isPlayerVisible, setIsPlayerVisible] = useState(PlayerState);

  return (
    <>
      <Link title="Shows"
        dropDownVisible={isShowsVisible}
        onClick={() => { setisShowsVisible(!isShowsVisible); setIsPlayerVisible(false) }}
      >
        {isShowsVisible &&
          <ShowsList Shows={Shows} />
        }
      </Link>

      <Link title="Music"
        dropDownVisible={isPlayerVisible}
        onClick={() => { setIsPlayerVisible(!isPlayerVisible); setisShowsVisible(false) }}
      >
        {isPlayerVisible &&
          <MusicPlayer Platforms={Platforms.platforms} />
        }
      </Link>
    </>
  )
};

describe("When a user clicks on the Music Player Link and then on a Shows List Link, the Music Player Link closes", () => {

  test("Music List should not be visable after the user clicks on the shows list link", () => {
    render(
      <MockLinkGroup ShowsState={false} Shows={Shows} PlayerState={false} Platforms={Platforms} />
    );
    const musicTitleElement = screen.getByText("Music");
    const showsTitleElement = screen.getByText("Shows");
    fireEvent.click(musicTitleElement)
    fireEvent.click(showsTitleElement)
    // This is quick way just to make sure an element is not displayed when it should not be
    // I could have used a testId here but I chose to test with something a user would actually see
    const playerElementCount = screen.queryByRole('link', { name: "Spotify logo" });
    expect(playerElementCount).toBeNull();
  });
});

