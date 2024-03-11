import React from "react";

const ISR = async () => {
  const response = await fetch("https://catfact.ninja/fact", {
    next: { revalidate: 5 },
  });

  const { fact } = await response.json();
  const catsFacts = fact;

  return <div>{catsFacts}</div>;
};

export default ISR;
