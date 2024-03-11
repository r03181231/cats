import React from "react";

const fetchCatsInfo = async () => {
  const response = await fetch("https://catfact.ninja/fact", {
    cache: "no-cache",
  });
  return response.json();
};

const SSR = async () => {
  const { fact } = await fetchCatsInfo();
  return <div>{fact}</div>;
};

export default SSR;
