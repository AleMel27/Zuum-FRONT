import { NavLink } from "react-router-dom";

function CollectionCard({ titulo, imagen, link }) {
  return (
    <NavLink to={link} className="no-underline group block">
      
      <div className="relative w-full h-[400px] overflow-hidden rounded-2xl cursor-pointer">

        {/* Imagen */}
        <img
          src={imagen}
          alt={titulo}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay dinámico */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-500"></div>

        {/* Contenido */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">

          <h3 className="text-2xl font-semibold tracking-wide mb-2 transform translate-y-4 group-hover:translate-y-0 transition duration-500">
            {titulo}
          </h3>

          <span className="text-sm opacity-0 group-hover:opacity-100 transition duration-500">
            Explorar colección
          </span>

        </div>

      </div>

    </NavLink>
  );
}

export default CollectionCard;