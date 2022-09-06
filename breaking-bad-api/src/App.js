import "./App.css";
import Header from "./componets/header/Header";
import CharacterGrid from "./componets/characters/CharacterGrid";

const App = () => {
  return (
    <div className="App">
      <Header />
      <CharacterGrid />
    </div>
  );
};

export default App;
