import Search from "./components/Search";
import Footer from "./Templates/Snippets/Footer";
import Navigation from "./Templates/Snippets/Navigation";

const App = () => {
  return (
    <div className="  h-screen  bg-slate-800">
      <Navigation />
      <Search />
      <Footer />
    </div>
  );
};

export default App;
