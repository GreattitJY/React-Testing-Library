import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

describe("Login test", () => {
  test("처음에는 Login 버튼이 있다.", () => {
    render(<Login />);
    const btnEl = screen.getByRole("button");
    expect(btnEl).toHaveTextContent("Login");
  });
});

const user = userEvent.setup();
test("한 번 클릭하면 Logout 버튼이 된다.", async () => {
  render(<Login />);
  const btnEl = screen.getByRole("button");
  await user.click(btnEl);
  expect(btnEl).toHaveTextContent("Logout");
});

test("tab, space, enter 동작", async () => {
  render(<Login />);
  const btnEl = screen.getByRole("button");
  await user.tab(btnEl);
  await user.keyboard(" ");
  await user.keyboard(" ");
  await user.keyboard("{Enter}");
  expect(btnEl).toHaveTextContent("Logout");
});
