import { render, screen } from "@testing-library/react";
import { title } from "process";
import UserList from "./UserList";

describe("UserList test", () => {
  const users = ["Tom", "Jane", "Mike"];

  test("잠시 후 제목이 나타납니다.", async () => {
    render(<UserList {...{ users }} />);
    const titleEl = await screen.findByRole(
      "heading",
      {
        name: "사용자 목록",
      },
      {
        timeout: 2000,
      }
    );
    console.log(titleEl);
    expect(titleEl).toBeInTheDocument();
  });

  test("ul이 있다.", () => {
    render(<UserList {...{ users }} />);
    const ulElement = screen.getByRole("list");
    expect(ulElement).toBeInTheDocument();
  });

  // test("li는 3개가 나옵니까?", () => {
  //   render(<UserList {...{ users }} />);
  //   const liElement = screen.getAllByRole("listitem");
  //   expect(liElement).toHaveLength(users.length);
  // });
  test("user가 빈배열 경우 확인", () => {
    render(<UserList user={[]} />);
    const liElement = screen.queryAllByRole("listitem");
    expect(liElement).toHaveLength(0);
    // expect(liElement).not.toBeInTheDocument();
  });
});
