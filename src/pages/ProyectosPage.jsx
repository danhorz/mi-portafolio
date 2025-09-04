import { CardSinImagen } from "../components/CardSinImagen";



export const ProyectosPage = () => {
  const titulo = "Geomek";
  const titulo2 = "MiPeru";
  const titulo3 = "P’huyu Yuraq System";
  const texto="Aplicación móvil con la finalidad de hacer trazos y analizar rocas.  Desarrollado en una empresa enfocado al estudio de rocas utilizando Python y Flutter. "
  const texto2="Videojuego con temática cultural a fin de aumentar el turismo. Desarrollado en Unity(C#) para uso cultural"
  const texto3="Diseñado en Figma basado en modelos reales de mina y en modelos de mina hechos con React y documentado con su funcionalidad. "

  
  return (
    <div className="bg-gray-900 min-h-screen gap-6 p-4 sm:p-6 flex flex-col items-center">
  <CardSinImagen texto={texto} titulo={titulo} />
  <CardSinImagen texto={texto2} titulo={titulo2} />
  <CardSinImagen texto={texto3} titulo={titulo3} />
</div>
    
  );
};