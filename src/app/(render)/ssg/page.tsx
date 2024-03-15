const SSG = async () => {
  const response = await fetch("https://catfact.ninja/fact", {
    cache: "force-cache",
  });
  const { fact } = await response.json();
  const catsFacts = fact;

  return <div>{catsFacts}</div>;
};

export default SSG;
