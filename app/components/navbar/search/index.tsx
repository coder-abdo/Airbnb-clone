"use client";

import { SearchItem } from "./searchItem";
import { BiSearch } from "react-icons/bi";
export const SearchBar = () => {
  
  return (
    <ul className="list-none flex flex-row items-center shadow-sm rounded-full">
      <SearchItem searchBy="anywhere" />
      <SearchItem searchBy="any week" hidden />
      <SearchItem searchBy="add guest" hidden>
        <BiSearch
          className="bg-rose-500 ml-1 p-1 rounded-full text-white"
          fontSize={20}
        />
      </SearchItem>
    </ul>
  );
};
