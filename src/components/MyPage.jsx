import React from "react";

export default function MyPage({ user }) {
  return (
    <div>
      <div>
        <label htmlFor="username">이름</label>
        <input type="text" id="username" value="Tom" readOnly />
      </div>
      <div data-testid="my-div"></div>
      <div>
        <label htmlFor="profile">자기소개</label>
        <textarea id="profile"></textarea>
      </div>
    </div>
  );
}
