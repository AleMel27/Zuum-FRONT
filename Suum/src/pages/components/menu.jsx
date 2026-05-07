import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav className="w-full bg-white border-b border-[#F7C6D7]">
      <div className="max-w-6xl mx-auto">

        <ul className="flex justify-center gap-10 py-4 font-medium tracking-wide">

          {[
            { to: "/", label: "Inicio" },
            { to: "/vestidos", label: "Vestidos" },
            { to: "/blusas", label: "Blusas" },
            { to: "/pantalones", label: "Pantalones" },
          ].map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `no-underline transition relative ${
                    isActive
                      ? "text-[#E91E63]"
                      : "text-gray-700 hover:text-[#E91E63]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}

        </ul>

      </div>
    </nav>
  );
}

export default Menu;