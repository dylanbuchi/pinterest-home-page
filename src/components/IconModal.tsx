interface IconModalProps {
  name: string;
  hide?: boolean;
  whiteSpaceWrap?: boolean;
}

const IconModal = ({
  name,
  hide = true,
  whiteSpaceWrap = false,
}: IconModalProps): JSX.Element => {
  return (
    <div
      hidden={hide}
      className={`text-white text-center text-xs bg-home-bg-color rounded-md p-[0.6em] absolute ${
        whiteSpaceWrap ? "bottom-[-4rem]" : "bottom-[-2.2rem]"
      }`}
    >
      <p
        className={`${
          whiteSpaceWrap ? "whitespace-pre-wrap" : "whitespace-nowrap"
        }`}
      >
        {name}
      </p>
    </div>
  );
};

export default IconModal;
