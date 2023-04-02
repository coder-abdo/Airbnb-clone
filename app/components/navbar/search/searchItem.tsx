"use client";

import { type ReactNode, type FC } from "react";

type Props = {
  searchBy: string;
  hidden?: boolean;
  children?: ReactNode;
};
export const SearchItem: FC<Props> = ({ searchBy, hidden, children }) => {
  return (
    <li
      className={`text-sm even:border-x-[1px] ${
        hidden && "hidden sm:flex"
      } font-semibold py-4 px-6 cursor-pointer`}
    >
      <span>{searchBy}</span>
      {children}
    </li>
  );
};
