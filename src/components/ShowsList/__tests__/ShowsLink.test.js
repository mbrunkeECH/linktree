import { fireEvent, render, screen } from '@testing-library/react';
import { useState } from 'react';

import { Shows } from '../../../Data';
import Link from '../../Link/Link';
import ShowsList from '../ShowsList';

const MockLink = ({ isShowsVisibleTest, Shows }) => {
  const [isShowsVisible, setisShowsVisible] = useState(isShowsVisibleTest)
  return (
    <Link title="Shows"
      dropDownVisible={isShowsVisible}
      onClick={() => setisShowsVisible(!isShowsVisible)}
    >
      {isShowsVisible &&
        <ShowsList Shows={Shows} />
      }
    </Link>
  )
}

describe("When a user clicks on the Shows List Link, a list of shows are visible", () => {

  test("when a user clicks on Shows link, list of shows appear", () => {
    render(
      <MockLink isShowsVisibleTest={false} Shows={Shows} />
    );
    const titleElement = screen.getByText("Shows");
    fireEvent.click(titleElement)
    const listElement = screen.queryByTestId("showsContainer");
    expect(listElement).not.toBeNull();
  });
});

