import { ReactNode } from "react";

interface PinIconProps {
  icon: ReactNode;
  hide?: boolean;
}

const PinIcon = ({ icon, hide = false }: PinIconProps): JSX.Element => {
  return (
    <div
      className={`${
        hide ? "hidden" : "grid"
      } place-items-center rounded-full bg-icons-hover-color h-8 w-8 hover:bg-white`}
    >
      {icon}
    </div>
  );
};

export default PinIcon;
