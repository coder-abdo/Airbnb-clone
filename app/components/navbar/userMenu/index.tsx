"use client";
import { AiOutlineMenu } from "react-icons/ai";
import { Avatar } from "../../avatar";
import { useCallback, useState } from "react";
import { UserList } from "./userList";
export const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleMenu = useCallback(() => {
    setIsOpen((val) => !val);
  }, []);
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <h4 className="capitalize hidden sm:block text-sm font-semibold py-3 rounded-full hover:bg-neutral-100 px-4 transition cursor-pointer">
          Airbnb your home
        </h4>
        <button
          type="button"
          role="button"
          onClick={handleToggleMenu}
          className="flex p-4 rounded-full items-center md:py-1 md:px-2 border-[1px] gap-3 cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
        </button>
        <div className="hidden sm:block">
          <Avatar />
        </div>
      </div>
      {isOpen && <UserList />}
    </div>
  );
};
