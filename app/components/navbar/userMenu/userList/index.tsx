"use client";

import { UserListItem } from "./userListItem";

type Props = {};
export const UserList = (props: Props) => {
  return (
    <ul className="list-none flex flex-col cursor-pointer absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
      <UserListItem path="login" text="login" />
      <UserListItem path="signup" text="sign up" />
    </ul>
  );
};
