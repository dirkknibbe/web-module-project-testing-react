import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Show from "./../Show";
import Loading from "./../Loading";

const testShow = {
  name: "test show",
  summary: "test summary",
  seasons: [
    {
      id: 0,
      name: "Season 1",
      episodes: [],
    },
    {
      id: 1,
      name: "Season 2",
      episodes: [],
    },
  ],
};

test("renders without errors", () => {
  render(<Show />);
});

test("renders Loading component when prop show is null", () => {
  render(<Loading show={null} />);
});

test("renders same number of options seasons are passed in", () => {
  render(<Show show={testShow} selectedSeason={"none"} />);

  const numOfSeasons = screen.queryAllByTestId("season-option");

  expect(numOfSeasons).toHaveLength(2);
});

test("handleSelect is called when an season is selected", () => {
  const handleSelect = jest.fn();

  render(
    <Show show={testShow} selectedSeason={"none"} handleSelect={handleSelect} />
  );
  fireEvent.change(screen.getByTestId("select"), { target: { value: 1 } });
  //   let options = screen.getAllByTestId("season-option");
  expect(handleSelect).toBeCalled();
});

test("component renders when no seasons are selected and when rerenders with a season passed in", () => {
  const { rerender } = render(<Show show={testShow} selectedSeason={"none"} />);
  let episodes = screen.queryByTestId("episodes-container");
  expect(episodes).not.toBeInTheDocument();

  rerender(<Show show={testShow} selectedSeason={1} />);
  episodes = screen.queryByTestId("episodes-container");
  expect(episodes).toBeInTheDocument();
});
