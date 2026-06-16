import { useState } from "react";
import Encabezado from "./Encabezado";
import TarjetaProducto from "./TarjetaProducto";
import "./App.css";

function App() {
  const [cantidad, setCantidad] = useState(3);

  return (
    <div className="app">
      <Encabezado />

      <p className="cantidad-input">
        Cantidad:{" "}
        <input
          type="number"
          value={cantidad}
          onChange={(e) => setCantidad(Number(e.target.value) || 0)}
          min="1"
        />
      </p>

      <TarjetaProducto cantidad={cantidad} />
    </div>
  );
}

export default App;
