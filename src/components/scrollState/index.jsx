import { useState, useEffect } from 'react';

const useScrollStates = () => {
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [forth, setForth] = useState(false);
  const [fith, setFith] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setSecond(scrollY > 50);
      setThird(scrollY > 1200);
      setForth(scrollY > 1400);
      setFith(scrollY > 2100);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { second, third, forth, fith };
};

export default useScrollStates;

