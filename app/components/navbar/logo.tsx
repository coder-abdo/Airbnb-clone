"use client";

import Image from "next/image";

export const Logo = () => (
  <Image
    className="hidden md:block cursor-pointer"
    src="/images/logo.png"
    alt="airbnb logo"
    width={100}
    height={100}
  />
);
