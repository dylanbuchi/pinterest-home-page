import Navbar from "./components/Navbar/Navbar";
import pins from "./assets/images/pins/pins";
import PinList from "./components/Pin/PinList";

const App = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <PinList pins={pins} />
    </>
  );
};

export default App;
