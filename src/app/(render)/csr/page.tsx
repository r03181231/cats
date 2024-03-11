"use client";
import React, { useEffect, useState } from "react";

const CSR = () => {
  const [catsFact, setCatsFact] = useState<catFact>("");

  useEffect(() => {
    const fetchCatsInfo = async () => {
      try {
        const response = await fetch("https://catfact.ninja/fact");
        const { fact } = await response.json();
        setCatsFact(fact);
      } catch (error) {
        console.error("정보를 가져오지 못 했습니다.", error);
      }
    };
    fetchCatsInfo();
  }, []);

  if (!catsFact) {
    return <div> 정보를 가져오고 있습니다..</div>;
  }

  return <div>{catsFact}</div>;
};

export default CSR;
