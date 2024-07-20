import Home from "./components/pages/Home";
import Footer from "./Templates/Snippets/Footer";
import Navigation from "./Templates/Snippets/Navigation";

const App = () => {
  return (
    <div className="  h-screen  bg-slate-800">
      <Navigation />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
