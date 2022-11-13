import { ReactNode } from "react";

interface NavbarIconProps {
  icon: ReactNode;
  classes?: string;
}
const NavbarIcon = ({ icon, classes = "" }: NavbarIconProps): JSX.Element => {
  return (
    <div
      className={`text-icons-color grid place-items-center w-[2.6rem] h-[2.6rem] sm:w-[4rem] sm:h-[4rem] hover:rounded-full hover:cursor-pointer hover:bg-icons-hover-color text-[1.5rem] ${classes}`}
    >
      {icon}
    </div>
  );
};

export default NavbarIcon;
