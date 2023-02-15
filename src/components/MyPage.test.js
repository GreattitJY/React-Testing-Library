import { render, screen } from "@testing-library/react";
import MyPage from "./MyPage";

test("input 요소가 있다.", () => {
  render(<MyPage />);
  // const inputEl = screen.getByRole("textbox", {
  //   name: "자기소개",
  // });
  // const inputEl = screen.getByLabelText("자기소개", {
  //   selector: "textarea"
  // })
  const inputEl = screen.getByDisplayValue("Tom");
  expect(inputEl).toBeInTheDocument();
});

test("my div가 있다", () => {
  render(<MyPage />);
  const inputEl = screen.getByTestId("my-div");
  expect(inputEl).toBeInTheDocument();
});
