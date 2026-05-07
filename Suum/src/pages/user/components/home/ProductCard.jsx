import { NavLink } from "react-router-dom";

function ProductCard({ id, nombre, precio, imagen }) {
  return (
    <NavLink
      to={`/producto/${id}`}
      className="no-underline group"
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300">

        {/* Imagen */}
        <div className="relative overflow-hidden">

          <img
            src={
              imagen?.startsWith("http") || imagen?.startsWith("/src")
                ? imagen
                : `https://localhost:7159${imagen}`
            }
            alt={nombre}
            className="w-full h-[340px] object-cover transform group-hover:scale-110 transition duration-500"
          />

          {/* Badge */}
          <span className="absolute top-3 left-3 bg-[#E91E63] text-white text-xs px-3 py-1 rounded-full">
            Nuevo
          </span>

        </div>

        {/* Info */}
        <div className="p-4">

          <h3 className="text-sm font-medium text-gray-800 mb-1 group-hover:text-[#E91E63] transition">
            {nombre}
          </h3>

          <p className="text-lg font-bold text-[#E91E63] mb-4">
            S/ {Number(precio).toFixed(2)}
          </p>

        </div>

      </div>
    </NavLink>
  );
}

export default ProductCard;