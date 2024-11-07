import React, { useState } from "react";
import Card from "./Card";
//import { Form } from "../components/Form.css";

/**Para el caso del primer input,
 * la longitud mínima del texto ingresado
 * deberá ser de 3 caracteres y no deberá
 * contener espacios en blanco al comienzo.
 */
/**Para el segundo input, debemos validar
 * que contenga al menos 6 caracteres. */

/**En caso de que alguna de las validaciones
 * sea incorrecta, debemos mostrar
 * el siguiente mensaje de error:
 * “Por favor chequea que la información sea correcta”.
 */

/**En caso de que los valores ingresados superen
 *  las validaciones en forma exitosa, debemos
 * renderizar el componente llamado Card que
 * contenga dicha información. */

export const Form = () => {
  //Variables que recibe de los input
  const [infoUsuario, setInfoUsuario] = useState({
    superHeroe: "",
    comidaRapida: "",
  });

  //const [superHeroe, setSuperHeroe] = useState("");
  //const [comidaRapida, setComidaRapida] = useState("");

  //Variables para el mensaje de error
  const [error, setError] = useState(false);
  const [mostrarComponente, setMostrarComponente] = useState(false);

  //Para que no recargue la página -- Validaciones
  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      infoUsuario.superHeroe.length > 3 && //mayor a 3
      infoUsuario.superHeroe[0] !== " " && //en la posicion 0 diferente a vacío
      infoUsuario.comidaRapida.length >= 6 // mayor o igual a 6
    ) {
      setMostrarComponente(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        backgroundColor: "antiquewhite",
      }}
    >
      {mostrarComponente ? (
        <Card />
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label style={{ color: "black" }}>
            Ingresa tu super heroe favorito
          </label>
          <input
            type="text"
            style={{ margin: "10px" }}
            onChange={(event) =>
              setInfoUsuario({ ...infoUsuario, superHeroe: event.target.value })
            }
          />
          <label style={{ color: "black" }}>
            Ingresa tu comida rápida favorita
          </label>
          <input
            type="text"
            style={{ margin: "10px" }}
            onChange={(event) =>
              setInfoUsuario({
                ...infoUsuario,
                comidaRapida: event.target.value,
              })
            }
          />
          <button type="button" style={{ margin: "10px" }}>
            Enviar datos!
          </button>
        </form>
      )}
      {error && (
        <h3 style={{ color: "red" }}>
          Por favor chequea que la información sea correcta
        </h3>
      )}
    </div>
  );
};

//export default Form;
