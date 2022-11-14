import { useState } from "react";

const Footer = (): JSX.Element => {
  const [currentYear] = useState(() => new Date().getFullYear());

  return (
    <footer className="mt-5 flex justify-center p-4 text-sm bg-icons-hover-color text-[#141414]">
      Made with ❤️ by Dylan Buchi &#169; {currentYear}
    </footer>
  );
};

export default Footer;
