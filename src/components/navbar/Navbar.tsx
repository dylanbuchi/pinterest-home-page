import { FaBell, FaSearch, FaUser, FaCaretDown } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";

import NavbarIcon from "./NavbarIcon";
import pinterestLogo from "../../assets/images/pinterest-logo.webp";
import Search from "../Search";

import CreateBtnWithModal from "../CreateBtnWithModal";

const Navbar = (): JSX.Element => {
  return (
    <div className="fixed w-full z-20 bg-white top-0 right-0">
      <nav className="py-2 px-4 flex justify-evenly items-center min-w-[323px]">
        <div className="font-semibold space-x-3 flex items-center mr-auto">
          <img
            className="w-[2rem] h-[2rem] object-cover"
            src={pinterestLogo}
            alt="pinterest-logo"
          />
          <div className="sm:bg-home-bg-color hover:bg-icons-hover-color sm:hover:bg-home-bg-color px-3.5 py-2.5 rounded-full hover:cursor-pointer flex items-center justify-center space-x-1">
            <p className=" sm:text-white">Home</p>
            <div className="sm:hidden">
              <FaCaretDown />
            </div>
          </div>
          <CreateBtnWithModal />
        </div>
        <Search />

        <div className="flex justify-around items-center flex-1 sm:flex-initial">
          <NavbarIcon icon={<FaSearch />} classes="grid sm:hidden" />
          <NavbarIcon icon={<FaBell />} />
          <NavbarIcon icon={<AiFillMessage />} />
          <NavbarIcon icon={<FaUser />} />
          <div
            className={`text-icons-color grid place-items-center w-[1.8rem] h-[1.8rem] sm:w-[1.8rem] sm:h-[1.rem] hover:rounded-full hover:cursor-pointer hover:bg-icons-hover-color text-[1.5rem]`}
          >
            <FaCaretDown />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
