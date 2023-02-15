import React from "react";

export default function MyPage({ user }) {
  return (
    <>
      {user?.name ? (
        <h1>{user.name}님 환영합니다.</h1>
      ) : (
        <h1>
          로그인을 해주세요.
          <button>로그인</button>
        </h1>
      )}
    </>
  );
}
