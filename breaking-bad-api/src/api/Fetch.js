import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterGrid from "../componets/characters/CharacterGrid";

const Fetch = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters`
      );
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  return <CharacterGrid isLoading={isLoading} items={items} />;
};

export default Fetch;
