import { useEffect, useState } from "react";
import FeaturedProducts from "./components/home/FeaturedProducts";
import Collections from "./components/home/Collections";

function Home() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7159/api/Productos")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="bg-[#FFF3E6] w-full">

      {/* HERO / BANNER CON IDENTIDAD */}
      <div className="w-full h-[80vh] relative flex items-center justify-center">
        <img
          src="/src/assets/banner.jpg"
          alt="banner"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute bg-black/30 w-full h-full"></div>

        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide mb-4">
            SÜÜM
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Fuerte · Femenino · Independiente
          </p>
          <button className="bg-[#E91E63] hover:bg-[#FF6B57] px-6 py-3 rounded-xl transition">
            Explorar colección
          </button>
        </div>
      </div>

      {/* DESTACADOS */}
      <div className="max-w-7xl mx-auto py-16 px-4">

        <h2 className="text-center text-3xl font-semibold mb-2">
          Destacados
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Diseños que hablan por ti
        </p>

        <FeaturedProducts productos={productos} />
      </div>

      {/* COLECCIONES */}
      <div className="bg-[#F7C6D7] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Collections />
        </div>
      </div>

      {/* BLOQUE IDENTIDAD (esto es lo que faltaba 🔥) */}
      <div className="py-20 bg-white text-center px-6">
        <h2 className="text-3xl font-semibold mb-4">
          Diseñamos más que prendas
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Creamos identidad. Cada pieza refleja autenticidad, fuerza y estilo propio.
        </p>
      </div>

    </section>
  );
}

export default Home;