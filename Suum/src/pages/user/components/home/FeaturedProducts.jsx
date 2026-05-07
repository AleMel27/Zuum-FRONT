import ProductCard from "./ProductCard";

function FeaturedProducts({ productos }) {

  // 🔥 Solo mostramos 8 productos máximo (mejor UX)
  const destacados = productos.slice(0, 8);

  return (
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

      {destacados.map((p) => (
        <div
          key={p.id_producto}
          className="transform hover:-translate-y-2 transition duration-300"
        >
          <ProductCard
            nombre={p.nombre}
            precio={p.precio}
            imagen={p.imagen ? p.imagen : "/src/assets/no-image.jpg"}
          />
        </div>
      ))}

    </div>
  );
}

export default FeaturedProducts;