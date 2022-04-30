import { render, screen, fireEvent } from '@testing-library/react';
import { useState } from 'react';

import { Platforms } from '../../../Data';
import Link from '../../Link/Link';
import MusicPlayer from '../MusicPlayer';

const MockLink = ({ PlayerState, Platforms }) => {
  const [isPlayerVisible, setIsPlayerVisible] = useState(PlayerState)
  return (
    <Link title="Music"
      dropDownVisible={isPlayerVisible}
      onClick={() => setIsPlayerVisible(!isPlayerVisible)}
    >
      {isPlayerVisible &&
        <MusicPlayer Platforms={Platforms.platforms} />
      }
    </Link>
  )
}

describe('When a user clicks on a Music Player Link, the Spotify streaming platform is visible', () => {
  // TODO: test the expected number of links appear (i.e if a song is only available on 3 platforms, 3 links should appear)
  test('when a user clicks on button, streaming links appear', async () => {
    render(
      <MockLink PlayerState={false} Platforms={Platforms} />
    );
    const titleElement = screen.getByText("Music");
    fireEvent.click(titleElement)
    const playerElement = screen.getByRole('link', { name: "Spotify logo" });
    expect(playerElement).toBeInTheDocument();
  });

})
