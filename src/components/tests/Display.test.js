import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./../Display";

test("renders without errors with no props", async () => {
  render(<Display />);
});

test("renders Show component when the button is clicked ", async () => {
  render(<Display />);
  let showDataBtn = screen.getByText(/Press to Get Show Data/i);
  fireEvent.click(showDataBtn);
  await screen.findByText("Stranger Things");
});

test("renders show season options matching your data when the button is clicked", async () => {
  render(<Display />);
  let showDataBtn = screen.getByText(/Press to Get Show Data/i);
  fireEvent.click(showDataBtn);
  await screen.findByText("Stranger Things");

  const seasonSelect = screen.queryAllByTestId("season-option");
  expect(seasonSelect).toHaveLength(4);
});
