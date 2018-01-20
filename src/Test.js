import React from "react";

const Test = props => {
  console.log("props", props);
  const dinos = props.dinosaurs.map(dino => {
    return <p>{dino.name}</p>;
  });
  return dinos;
};

export default Test;
