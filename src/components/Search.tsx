import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RiCloseCircleFill } from "react-icons/ri";

const Search = (): JSX.Element => {
  const [search, setSearch] = useState("");

  const clearSearch = (): void => {
    setSearch("");
  };

  return (
    <div className="flex-1 hidden sm:flex sm:items-center bg-icons-hover-color rounded-full p-2 mx-2  hover:filter hover:brightness-95">
      <FaSearch className="ml-1 text-icons-color text-[1rem]" />
      <input
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        placeholder="Search"
        value={search}
        type="text"
        className="bg-inherit focus:text-red w-full m-1 rounded-full pl-1 outline-none"
      />
      <div
        className={`flex rounded-full p-1 items-center ${
          search.length > 0 ? "hover:bg-[#cbcaca]" : ""
        }`}
      >
        <button hidden={search.length === 0} onClick={clearSearch}>
          <RiCloseCircleFill className="text-[1.5rem]" />
        </button>
      </div>
    </div>
  );
};

export default Search;
