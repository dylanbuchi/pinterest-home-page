import { useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { CgSoftwareUpload } from "react-icons/cg";

import PinIcon from "./PinIcon";

interface PinProps {
  url: string;
}

const Pin = ({ url }: PinProps): JSX.Element => {
  const [hideImageButtons, setHideImageButtons] = useState(true);

  return (
    <li
      className="relative hover:cursor-pointer"
      onMouseEnter={(event) => {
        event.preventDefault();
        setHideImageButtons(false);
      }}
      onMouseLeave={(event) => {
        event.preventDefault();
        setHideImageButtons(true);
      }}
    >
      <button
        hidden={hideImageButtons}
        className="bg-logo-color text-white right-0 absolute m-2 px-4 py-2 rounded-full hover:filter hover:brightness-90 font-medium"
      >
        Save
      </button>
      <div className="m-2 flex absolute bottom-0 right-0 space-x-1">
        <PinIcon icon={<CgSoftwareUpload />} hide={hideImageButtons} />
        <PinIcon icon={<BiDotsHorizontalRounded />} hide={hideImageButtons} />
      </div>
      <img
        src={url}
        alt={url}
        className="rounded-xl object-cover max-h-full max-w-full"
      />
    </li>
  );
};

export default Pin;
