import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterGrid from "../componets/characters/CharacterGrid";

const Fetch = ({ query }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);
  return <CharacterGrid items={items} isLoading={isLoading} />;
};

export default Fetch;
