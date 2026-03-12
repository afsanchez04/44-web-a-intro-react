
import { useEffect, useState } from "react";

export const CambiarApariencia = () => {

  const [tamano, setTamano] = useState("32px");

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    setTamano("60px");

    return () => {
      document.body.style.backgroundColor = "white";
    };
    
  }, []);


  return (
    <h1 style={{ fontSize: tamano }}>
      React
    </h1>
  );
};