import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("untuk testing select element dan dijadikan expect value", () => {
  test("mematiskan text yang dirender pertama betul", () => {
    render(<App />);
    const text = screen.getByText("Saya sedang Sembunyi");
    expect(text).toBeInTheDocument();
  });

  test("memastikan content text button sesuai saat pertama di render", () => {
    render(<App />);
    const text = screen.getByText("Munculkan");
    expect(text).toBeInTheDocument();
  });
});

describe("melakukan selecting element untuk diberikan trigger fireEvent", () => {
  test("memastikan text yang di render setelah di click", () => {
    render(<App />);
    const btn = screen.getByText("Munculkan");
    fireEvent.click(btn);
    const text = screen.getByText("Saya sedang Muncul");
    expect(text).toBeInTheDocument();
  });

  test("Memastikan text di dalam button sesuai setelah button di click", () => {
    render(<App />);
    const btn = screen.getAllByRole("button")[0];
    fireEvent.click(btn);

    const btnResult = screen.getByText("Sembuyikan");
    expect(btnResult ).toBeInTheDocument();
  });
});
