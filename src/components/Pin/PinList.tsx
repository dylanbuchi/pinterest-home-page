import { TPin } from "../../assets/images/pins/pins";
import Pin from "./Pin";

interface PinListProps {
  pins: TPin[];
}

const PinList = ({ pins }: PinListProps): JSX.Element => {
  return (
    <ul className="pt-1 pb-4 px-4 sm:px-20 columns-1 phone:columns-2 sm:columns-3 md:columns-4 xl:columns-5 gap-4 space-y-4 ">
      {pins.map((item) => (
        <Pin key={["pin-", item].join("")} url={item} />
      ))}
    </ul>
  );
};

export default PinList;
