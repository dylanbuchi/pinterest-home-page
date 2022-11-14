import { TPin } from "../../assets/images/pins/pins";
import Pin from "./Pin";

interface PinListProps {
  pins: TPin[];
}

const PinList = ({ pins }: PinListProps): JSX.Element => {
  return (
    <ul className="pt-1 pb-4 px-4 sm:px-20 columns-1 phone:columns-2 sm:columns-2 md:columns-4 lg:columns-5 xl:columns-6 space-x-1 space-y-4">
      {pins.map((item) => (
        <Pin key={["pin-", item].join("")} url={item} />
      ))}
    </ul>
  );
};

export default PinList;
