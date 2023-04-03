"use client";

import Link from "next/link";
import type { FC } from "react";

type Props = {
  text: string;
  path: string;
};
export const UserListItem: FC<Props> = ({ text, path }) => {
  return (
    <Link href={`/${path}`}>
      <li className="px-4 py-3 hover:bg-neutral-100 transition font-semibold">
        {text}
      </li>
    </Link>
  );
};
