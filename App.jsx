import { useState } from "react";
import Encabezado from "./Encabezado";
import TarjetaProducto from "./TarjetaProducto";
import "./App.css";

function App() {
  const [cantidad, setCantidad] = useState(1);

  return (
    <div className="app">
      <Encabezado />

      <p>Cantidad:</p>
      <input
        type="number"
        value={cantidad}
        onChange={(e) => setCantidad(Number(e.target.value) || 0)}
        min="1"
      />

      <TarjetaProducto cantidad={cantidad} />
    </div>
  );
}

export default App;