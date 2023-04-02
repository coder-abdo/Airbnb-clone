"use client";

import React, { type FC } from "react";

type Props = {
  children?: React.ReactElement;
};

export const Container: FC<Props> = ({ children }) => {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 px-4">
      {children}
    </div>
  );
};
