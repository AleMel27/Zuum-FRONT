import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#FFF3E6] pt-16 pb-8 border-t border-[#F7C6D7]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10 mb-10">

          {/* Marca */}
          <div>
            <h2 className="text-2xl font-bold text-[#E91E63] mb-3">
              SÜÜM
            </h2>
            <p className="text-gray-600">
              Diseño independiente que resalta tu identidad.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="font-semibold mb-4">Explorar</h4>
            <ul className="space-y-2">
              <li><NavLink to="/" className="text-gray-600 no-underline hover:text-[#E91E63]">Inicio</NavLink></li>
              <li><NavLink to="/vestidos" className="text-gray-600 no-underline hover:text-[#E91E63]">Vestidos</NavLink></li>
              <li><NavLink to="/blusas" className="text-gray-600 no-underline hover:text-[#E91E63]">Blusas</NavLink></li>
              <li><NavLink to="/pantalones" className="text-gray-600 no-underline hover:text-[#E91E63]">Pantalones</NavLink></li>
            </ul>
          </div>

          {/* Ayuda */}
          <div>
            <h4 className="font-semibold mb-4">Ayuda</h4>
            <ul className="space-y-2">
              <li><NavLink to="/consultas" className="text-gray-600 no-underline hover:text-[#E91E63]">Consultas</NavLink></li>
              <li><NavLink to="/envios" className="text-gray-600 no-underline hover:text-[#E91E63]">Envíos</NavLink></li>
              <li><NavLink to="/pagos" className="text-gray-600 no-underline hover:text-[#E91E63]">Pagos</NavLink></li>
              <li><NavLink to="/privacidad" className="text-gray-600 no-underline hover:text-[#E91E63]">Privacidad</NavLink></li>
            </ul>
          </div>

          {/* Redes */}
          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-3">
              <a className="text-gray-600 w-10 h-10 flex items-center no-underline justify-center rounded-full bg-[#F7C6D7] hover:bg-[#E91E63] hover:text-white transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="text-gray-600 w-10 h-10 flex items-center no-underline justify-center rounded-full bg-[#F7C6D7] hover:bg-[#E91E63] hover:text-white transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="text-gray-600 w-10 h-10 flex items-center no-underline justify-center rounded-full bg-[#F7C6D7] hover:bg-[#E91E63] hover:text-white transition">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>

        </div>

        <div className="text-center text-gray-500 text-sm">
          © 2026 SÜÜM — Fuerte · Femenino · Independiente
        </div>

      </div>
    </footer>
  );
}

export default Footer;