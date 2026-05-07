import ProductCard from "../home/ProductCard.jsx";

function CategoryPage({ titulo, productos }) {
  return (
    <section className="bg-[#FFF3E6] min-h-screen">

      {/* HERO DE CATEGORÍA */}
      <div className="text-center py-16 px-4">
        <h1 className="text-4xl font-bold text-[#E91E63] mb-3">
          {titulo}
        </h1>
        <p className="text-gray-600">
          Descubre lo último en {titulo.toLowerCase()}
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-4 pb-16">

        {productos.length === 0 ? (
          <div className="text-center text-gray-500 py-20">
            No hay productos disponibles por ahora 😢
          </div>
        ) : (
          <div className="grid gap-8
                          grid-cols-1
                          sm:grid-cols-2
                          md:grid-cols-3
                          lg:grid-cols-4">

            {productos.map((p) => (
              <ProductCard
                key={p.id_producto}
                id={p.id_producto}
                nombre={p.nombre}
                precio={p.precio}
                imagen={p.imagen}
              />
            ))}

          </div>
        )}

      </div>

    </section>
  );
}

export default CategoryPage;