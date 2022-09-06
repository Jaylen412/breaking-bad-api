import React from "react";
import spinner from "../../img/spinner.gif";

const CharacterGrid = ({ items, isLoading }) => {
  console.log("Here 1");
  if (isLoading) {
    console.log("Here 2");
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "4rem" }}
      >
        <img src={spinner} alt="loading icon" />
      </div>
    );
  }
};

export default CharacterGrid;
