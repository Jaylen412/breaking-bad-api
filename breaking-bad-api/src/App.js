import "./App.css";
import Header from "./componets/header/Header";
import Fetch from "./api/Fetch";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Fetch />
    </div>
  );
};

export default App;
