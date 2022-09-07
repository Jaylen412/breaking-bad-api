import React from "react";
import spinner from "../../img/spinner.gif";

const CharacterGrid = ({ items, isLoading }) => {
  if (isLoading) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "4rem" }}
      >
        <img src={spinner} alt="loading icon" />
      </div>
    );
  }
  const characters = items.map((character) => (
    <section key={character.char_id}>
      <h4>{character.name}</h4>
    </section>
  ));
  return <div className="cards">{characters}</div>;
};

export default CharacterGrid;
