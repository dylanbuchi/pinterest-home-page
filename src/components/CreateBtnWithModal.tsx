import { useEffect, useState } from "react";
import { FaCaretDown } from "react-icons/fa";

const CreateBtnWithModal = (): JSX.Element => {
  const [hideModal, setHideModal] = useState(true);

  useEffect(() => {
    document.body.addEventListener("click", () => {
      setHideModal(true);
    });
  }, [hideModal]);

  return (
    <div
      onClick={(event) => {
        event.stopPropagation();
        setHideModal((prev) => !prev);
      }}
      className="hidden hover:cursor-pointer sm:flex items-center justify-center space-x-1"
    >
      <button className="relative font-semibold text-black">Create</button>
      <div
        hidden={hideModal}
        className="bg-white p-2 absolute top-[4rem] space-y-1 rounded-xl"
      >
        <p className="rounded-md p-2 hover:bg-icons-hover-color">
          Create Idea Pin
        </p>
        <p className="hover:bg-icons-hover-color rounded-md p-2">Create Pin</p>
      </div>
      <FaCaretDown />
    </div>
  );
};

export default CreateBtnWithModal;
