import React from "react";

//Mensaje con los datos de la persona
const Card = (superHeroe, comidaRapida) => {
  //console.log(superHeroe, comidaRapida);

  return (
    <div>
      <h4>Hola usuario!</h4>
      <p>Sabemos que tu super heroe favorito es: {superHeroe}</p>
      <p>Y que tu comida rápida favorita es: {comidaRapida}</p>
    </div>
  );
};

export default Card;
