import CollectionCard from "./CollectionCard";

function Collections() {

  const colecciones = [
    {
      titulo: "Vestidos",
      imagen: "/src/assets/gal1.jpg",
      link: "/vestidos"
    },
    {
      titulo: "Blusas",
      imagen: "/src/assets/gal4.jpg",
      link: "/blusas"
    },
    {
      titulo: "Pantalones",
      imagen: "/src/assets/gal5.jpg",
      link: "/pantalones"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto py-20 px-4">

      {/* Título */}
      <div className="text-center mb-14">
        <h2 className="text-3xl font-semibold mb-2">
          Colecciones
        </h2>
        <p className="text-gray-500">
          Encuentra tu estilo, define tu identidad
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8">

        {colecciones.map((c, i) => (
          <CollectionCard
            key={i}
            titulo={c.titulo}
            imagen={c.imagen}
            link={c.link}
          />
        ))}

      </div>

    </section>
  );
}

export default Collections;