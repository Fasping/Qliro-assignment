import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

describe("App component", () => {
  it("should render the components correctly", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("title")).toHaveTextContent(
      "Monty Hall Problem Simulator"
    );
    expect(getByTestId("input")).toBeInTheDocument();
    expect(getByTestId("strategy-toggle")).toBeInTheDocument();
    expect(getByTestId("run-simulation")).toBeInTheDocument();
    expect(getByTestId("frame-controls")).toBeInTheDocument();
    expect(getByTestId("frame-results")).toBeInTheDocument();
    expect(getByTestId("backdrop")).toBeInTheDocument();
    expect(getByTestId("loading-backdrop")).toBeInTheDocument();
  });
});
