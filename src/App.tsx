import Navbar from "./components/Navbar/Navbar";
import pins from "./assets/images/pins/pins";
import PinList from "./components/Pin/PinList";
import Footer from "./components/Footer";

const App = (): JSX.Element => {
  return (
    <main className="relative">
      <div className="p-10">
        <Navbar />
      </div>
      <PinList pins={pins} />
      <Footer />
    </main>
  );
};

export default App;
