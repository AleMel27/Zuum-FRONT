import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Producto() {

  const { id } = useParams();

  const [producto, setProducto] = useState(null);

  const [tallaSeleccionada, setTallaSeleccionada] = useState(null);

  useEffect(() => {

    fetch(`https://localhost:7159/api/Productos/${id}`)
      .then(res => res.json())
      .then(data => {
        setProducto(data);
      })
      .catch(err => console.error(err));

  }, [id]);

  if (!producto) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-20">
        Cargando producto...
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">

      <div className="grid md:grid-cols-2 gap-10">

        {/* IMAGEN */}
        <div>

          <img
            src={`https://localhost:7159${producto.imagen}`}
            alt={producto.nombre}
            className="w-full h-[500px] object-cover rounded-xl"
          />

        </div>

        {/* INFO */}
        <div className="flex flex-col justify-center">

          <h1 className="text-3xl font-bold mb-4">
            {producto.nombre}
          </h1>

          <p className="text-xl text-[#E91E63] font-semibold mb-8">
            S/ {producto.precio}
          </p>

          {/* TALLAS */}
          <div className="mb-8">

            <h3 className="font-semibold mb-4">
              Tallas
            </h3>

            <div className="flex gap-3 flex-wrap">

              {producto.producto_tallas?.map((pt) => (

                <button
                  key={pt.id_talla}
                  onClick={() => setTallaSeleccionada(pt.id_talla)}
                  className={`px-4 py-2 border rounded-lg transition ${
                    tallaSeleccionada === pt.id_talla
                      ? "bg-black text-white"
                      : "bg-white"
                  }`}
                >
                  {pt.talla?.talla}
                </button>

              ))}

            </div>

          </div>

          {/* BOTON */}
          <button
            className="w-full bg-[#E91E63] text-white py-3 rounded-xl hover:bg-black transition"
          >
            Agregar al carrito
          </button>

        </div>

      </div>

    </section>
  );
}

export default Producto;