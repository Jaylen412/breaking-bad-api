import "./App.css";
import Header from "./componets/header/Header";
import Fetch from "./api/Fetch";
import Search from "./componets/search/Search";
import { useState } from "react";

const App = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <Fetch query={query} />
    </div>
  );
};

export default App;
