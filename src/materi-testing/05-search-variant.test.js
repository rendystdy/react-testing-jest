import { render, screen } from "@testing-library/react";
import App from "../App";
import {data} from './CompVariant';

test("melakukan testing untuk queryBy dan findBy", async () => {
  render(<App />);
  const text = screen.queryByText(/Selamat datang/);
  expect(text).toBeNull();
  const text2 = await screen.findByText(/Selamat datang/);
  expect(text2).toBeInTheDocument();
});

it("melakukan render p sebanyak total hari", () => {
  render(<App />);
  expect(screen.getAllByTestId("hari")).toHaveLength(data.length);
});
