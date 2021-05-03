import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import CompUserEvent from "./CompUserEvent";

const MOCT_SUBMIT_BTN = jest.fn();
it("testing onChange event ketika typing", () => {
  render(<App />);
  const inputPlaceholer = screen.getByPlaceholderText("input value");
  userEvent.type(inputPlaceholer, "Rendy Setiadi");
  expect(screen.getByText(/anda mengetik Rendy Setiadi/)).toBeInTheDocument();
});

it("test onClick pada CompUserEvent", () => {
  render(<CompUserEvent onSubmit={MOCT_SUBMIT_BTN} />);
  const textSubmit = screen.getByTestId("text-submit");
  userEvent.click(textSubmit);
  expect(MOCT_SUBMIT_BTN).toHaveBeenCalled();
});
