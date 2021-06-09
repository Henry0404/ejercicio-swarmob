import React, { useState } from "react";
import { ClassRocket, FunctionalRocket } from "./Rocket";
import "../styles/_launchpad.scss";

export default function LaunchPad() {
  const [rerenderCount, triggerRerender] = useState(0);

  // Tambien se podría directamente eliminar este setTimeout y por consiguiente eliminar la variable de estado
  setTimeout(() => {
    // Al resultado de "rerenderCount + 0" ser 0 y ser el mismo valor inicial del estado no se rerenderiza
    // Tambien podrias directamente colocar 0 en vez de la suma de "rerenderCount + 0"
    triggerRerender(rerenderCount + 0);
  }, 500);

  // Como opciones alternativas podriamos modificar el RocketCore.js para cambiar la logica de despegue
  // renderizando los dos cohetes para comprobar que ninguno de los dos despega
  return (
    <div className="launchpad">
      <ClassRocket />
      <FunctionalRocket />
    </div>
  );
}
