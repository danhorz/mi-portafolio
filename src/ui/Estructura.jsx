import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { Link, Outlet } from "react-router";


export const Estructura = () => {
  const links = [
    {
      name: "Sobre mi",
      path: "/sobremi",
      icon: "material-symbols:frame-person",
    },
    {
      name: "Estudios",
      path: "/estudios",
      icon: "game-icons:diploma",
    },
    {
      name: "Proyectos",
      path: "/proyectos",
      icon: "eos-icons:project",
    },
   
  ];
  const [open, setOpen] = useState(false);

  return (
    <>
      <header>
        <h1 className="bg-gray-950 text-white p-4 text-center font-bold text-4xl">
          Mi Portafolio
        </h1>
      </header>
      <nav className="bg-gray-800 text-white shadow-md px-6 py-3 sticky top-0 z-50">
        <div className="flex items-center justify-center">
          {/* Botón hamburguesa (visible solo en móviles) */}
          <button
            className="md:hidden block text-white focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

          {/* Menú en pantallas grandes */}
          <ul className="hidden md:flex justify-evenly w-full">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="cursor-pointer hover:text-gray-400 transition-colors font-medium flex items-center gap-2"
                >
                  <Icon icon={link.icon} width="24" height="24" />
                  <p>{link.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Menú desplegable en móviles */}
        {open && (
          <ul className="md:hidden mt-3 space-y-2">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className=" cursor-pointer hover:text-gray-400 transition-colors font-medium flex items-center gap-2"
                >
                  <Icon icon={link.icon} width="24" height="24" />
                  <p>{link.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
      <main>
        
          <Outlet />
       
      </main>
    </>
  );
};
