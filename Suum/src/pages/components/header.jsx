import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { useState } from "react";

function Header() {
  const { usuario, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="w-full bg-[#FFF3E6] border-b border-[#F7C6D7]">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Soporte */}
        <div className="hidden md:block text-sm text-gray-600">
          Atención al cliente · 123-456-789
        </div>

        {/* Logo */}
        <NavLink to="/" className="no-underline text-center">
          <h1 className="text-3xl font-bold tracking-[0.3em] text-[#E91E63]">
            SÜÜM
          </h1>
        </NavLink>

        {/* Acciones */}
        <div className="flex items-center gap-4 relative">

          <NavLink to="/cart" className="text-xl text-gray-700 hover:text-[#E91E63] transition">
            <i className="fa-solid fa-bag-shopping"></i>
          </NavLink>

          {!usuario && (
            <NavLink
              to="/login"
              className="bg-[#E91E63] text-white px-4 py-2 rounded-full hover:bg-[#FF6B57] transition no-underline"
            >
              Iniciar sesión
            </NavLink>
          )}

          {usuario && usuario.rol !== "admin" && (
            <div className="relative">

              <button
                onClick={() => setOpen(!open)}
                className="bg-[#F7C6D7] px-4 py-2 rounded-full hover:bg-[#E91E63] hover:text-white transition"
              >
                Hola, {usuario.correo.split("@")[0]}
              </button>

              {open && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-xl overflow-hidden z-50">

                  <button
                    onClick={() => navigate("/perfil")}
                    className="block w-full text-left px-4 py-2 hover:bg-[#FFF3E6]"
                  >
                    Mi cuenta
                  </button>

                  <button
                    onClick={() => navigate("/mis-pedidos")}
                    className="block w-full text-left px-4 py-2 hover:bg-[#FFF3E6]"
                  >
                    Mis pedidos
                  </button>

                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-red-500 hover:bg-[#FFF3E6]"
                  >
                    Cerrar sesión
                  </button>

                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </header>
  );
}

export default Header;