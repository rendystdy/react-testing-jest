import { render, screen } from "@testing-library/react";
import App from "../App";

test("Menyapa Rendy itu ada di dalam aplikasi saya", () => {
  render(<App />);
  const text = screen.getByText("Hello Rendy");
  expect(text).toBeInTheDocument();
});
