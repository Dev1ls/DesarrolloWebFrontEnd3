function TarjetaProducto({ cantidad }) {
  const nombre = "Audífonos";
  const precio = 12000;
  const imagen = "/audifonos.jpg";
  const total = Number(cantidad) * precio;

  const formatoPrecio = (valor) => `$${valor.toLocaleString("es-CL")}`;

  return (
    <div className="tarjeta">
      <img src={imagen} alt={nombre} />
      <h2>{nombre}</h2>
      <p>Precio: {formatoPrecio(precio)}</p>
      <p>Cantidad: {cantidad}</p>
      <p className="total">Total a pagar: {formatoPrecio(total)}</p>
    </div>
  );
}

export default TarjetaProducto;
