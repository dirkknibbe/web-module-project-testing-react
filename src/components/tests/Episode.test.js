import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Episode from "./../Episode";

const testEpisode = {
  id: 1,
  name: "",
  image:
    "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
  season: 1,
  number: 1,
  summary: "show about kids",
  runtime: 1,
};
const testEpisodeWithoutImage = {
  id: 1,
  name: "",
  image: null,
  season: 1,
  number: 1,
  summary: "show about kids",
  runtime: 1,
};

test("renders without error", () => {
  render(<Episode episode={testEpisode} />);
});

test("renders the summary test passed as prop", () => {
  render(<Episode episode={testEpisode} />);
  let summary = screen.getByText("show about kids");
  expect(summary).toBeInTheDocument();
  expect(summary).toBeTruthy();
  expect(summary).toHaveTextContent(/show about kids/i);
});

test("renders default image when image is not defined", () => {
  render(<Episode episode={testEpisodeWithoutImage} />);

  const image = screen.getByAltText(
    "https://i.ibb.co/2FsfXqM/stranger-things.png"
  );

  expect(image).toBeInTheDocument();
});
