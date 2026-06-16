function TarjetaProducto({ cantidad }) {
  const nombre = "Zapatillas deportivas";
  const precio = 45990;
  const imagen =
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=260&h=260&fit=crop";
  const total = Number(cantidad) * precio;

  return (
    <div className="tarjeta">
      <img src={imagen} alt={nombre} />
      <h2>{nombre}</h2>
      <p>Precio unitario: ${precio.toLocaleString("es-CL")}</p>
      <p>Cantidad: {cantidad}</p>
      <p>
        <strong>Total: ${total.toLocaleString("es-CL")}</strong>
      </p>
    </div>
  );
}

export default TarjetaProducto;
