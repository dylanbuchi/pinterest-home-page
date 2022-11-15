import { ReactNode, useState } from "react";
import IconModal from "../IconModal";

interface NavbarIconProps {
  icon: ReactNode;
  classes?: string;
  name?: string;
}
const NavbarIcon = ({
  name = "",
  icon,
  classes = "",
}: NavbarIconProps): JSX.Element | null => {
  const [hideModal, setHideModal] = useState(true);
  return (
    <>
      <div
        onMouseOver={() => setHideModal(false)}
        onMouseLeave={() => setHideModal(true)}
        className={`text-icons-color grid place-items-center w-[2.6rem] h-[2.6rem] sm:w-[3.5rem] sm:h-[3.5rem] hover:rounded-full hover:cursor-pointer hover:bg-icons-hover-color text-[1.5rem] relative ${classes}`}
      >
        {icon}
        {name.length > 0 && <IconModal name={name} hide={hideModal} />}
      </div>
    </>
  );
};

export default NavbarIcon;
