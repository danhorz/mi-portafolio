export const CardLinea = ({ titulo, eventos }) => {
  return (
    <div className="bg-white rounded-2xl flex flex-col gap-4 p-5">
      <h2 className="text-gray-700 font-bold text-3xl ">{titulo}</h2>
      <div className="relative">
        {/* Línea vertical */}
        <div className="absolute left-3 top-0 h-full border-l-2 border-blue-500"></div>

        <div className="pl-10">
          {eventos.map((item, index) => (
            <div key={index} className="mb-10 relative">
              {/* Punto */}
              <div className="absolute w-4 h-4 bg-gray-700 rounded-full -left-[35px] top-1"></div>

              {/* Contenido */}
              <time className="block text-sm  text-gray-800">{item.fecha}</time>
              <h3 className="text-lg font-semibold text-gray-800">
                {item.titulo}
              </h3>
              <p className="text-gray-600">{item.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
