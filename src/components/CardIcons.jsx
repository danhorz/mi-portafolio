export const CardIcons = ({ titulo, arreglo, direccion }) => {
  
  return (
    <div className="bg-white p-6 border border-gray-900  rounded-xl flex flex-col gap-7">
      <h2
        className={`text-gray-700 font-bold text-3xl ${
          direccion === "left" ? "text-first" : "text-end"
        }`}
      >
        {titulo}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center">
        {arreglo.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};
