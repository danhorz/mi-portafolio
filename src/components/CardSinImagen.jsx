export const CardSinImagen = ({ titulo, texto }) => {
  return (
    <div className="bg-white p-6 border border-gray-900 rounded-xl flex flex-col gap-7 w-full">
      <h2 className="text-gray-700 font-bold text-2xl sm:text-3xl">{titulo}</h2>
      <p className="text-base sm:text-lg text-gray-800">{texto}</p>
    </div>
  )
}