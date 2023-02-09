import { fireEvent, render, screen } from "@testing-library/react";
import Reservation from "./screens/Reservation";
import "@testing-library/jest-dom";
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Confirmation from "./screens/Confirmation";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("Render text", () => {
  render(
    <BrowserRouter>
      <Reservation />
    </BrowserRouter>
  );
  const text = screen.getByText("Book Now");
  expect(text).toBeInTheDocument();
});

test("Dyanmic times", () => {
  render(<Reservation />);
  const date = screen.getByLabelText("Date:");
  const time = screen.getByLabelText("Time:");
  fireEvent.change(date, { target: { value: "2023-2-9" } });
  expect(time).not.toBe([]);
});

// test("navigate to confirmation page", async () => {
//   render(
//     <BrowserRouter>
//       <Confirmation />
//     </BrowserRouter>
//   );
//   const fName = screen.getByLabelText("First Name:");
//   const lName = screen.getByLabelText("Last Name:");
//   const phone = screen.getByLabelText("Phone Number:");
//   const date = screen.getByLabelText("Date:");
//   const time = screen.getByLabelText("Time:");
//   const guests = screen.getByLabelText("Number of Guests:");
//   const book = screen.getByRole("button");
//   fireEvent.change(fName, { target: { value: "Jhon" } });
//   fireEvent.change(lName, { target: { value: "Holly" } });
//   fireEvent.change(phone, { target: { value: "12345" } });
//   fireEvent.change(date, { target: { value: "2023-02-09" } });
//   fireEvent.change(time, { target: { value: "18:00" } });
//   fireEvent.change(guests, { target: { value: "2" } });
//   fireEvent.click(book);
//   // userEvent.type(fName, "John");
//   // userEvent.type(lName, "John");
//   // userEvent.type(phone, "12345");
//   // userEvent.type(date, "2023-02-09");
//   // userEvent.type(time, "18:00");
//   // userEvent.type(guests, 2);
//   // userEvent.click(book);
//   // expect(window.location.pathname).toBe("/reservation/confirmation");
//   expect(screen.getByText("Confirm Your Order")).toBeInTheDocument();
// });

test("booking button disable if required fields are nulls", () => {
  render(<Reservation />);
  const book = screen.getByRole("button");
  expect(book).toHaveAttribute("disabled");
});

test("booking button not disable if required fields are filled", () => {
  render(<Reservation />);
  const fName = screen.getByLabelText("First Name:");
  const lName = screen.getByLabelText("Last Name:");
  const phone = screen.getByLabelText("Phone Number:");
  const date = screen.getByLabelText("Date:");
  const time = screen.getByLabelText("Time:");
  const guests = screen.getByLabelText("Number of Guests:");
  const book = screen.getByRole("button");
  fireEvent.change(fName, { target: { value: "Jhon" } });
  fireEvent.change(lName, { target: { value: "Holly" } });
  fireEvent.change(phone, { target: { value: "12345" } });
  fireEvent.change(date, { target: { value: "2023-02-09" } });
  fireEvent.change(time, { target: { value: "18:00" } });
  fireEvent.change(guests, { target: { value: "2" } });
  expect(book).not.toHaveAttribute("disabled");
});
