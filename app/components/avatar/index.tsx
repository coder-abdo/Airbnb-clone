"use client";

import Image from "next/image";

export const Avatar = () => {
  return (
    <Image
      src="/images/placeholder.jpg"
      alt="user avatar"
      width={30}
      height={30}
      priority
      className="rounded-full"
    />
  );
};
