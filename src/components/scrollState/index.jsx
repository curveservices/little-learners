import { useState, useEffect } from "react";

const useScrollStates = () => {
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [forth, setForth] = useState(false);
  const [fith, setFith] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setSecond(scrollY > 75);
      setThird(scrollY > 1000);
      setForth(scrollY > 1400);
      setFith(scrollY > 1800);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { second, third, forth, fith };
};

export default useScrollStates;
