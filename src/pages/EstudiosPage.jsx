import { CardLinea } from "../components/CardLinea";
import { CardSinImagen } from "../components/CardSinImagen";

export const EstudiosPage = () => {
  const tituloResumen = "Estudios";
   const eventos = [
    { fecha: "2019", titulo: "Inicio en Universidad Privada del Norte", descripcion: "Aprendí C#, Kotlin, Sql, Java, HTML,Python y CSS." },
    { fecha: "2023", titulo: "Curso de flutter", descripcion: "Aspectos base de Flutter a intermedio." },
    { fecha: "2024", titulo: "Egresado en Ing.Sistemas Computacionales", descripcion: "Un portafolio personal." },
    { fecha: "2024", titulo: "Bootcamp full-stack Enter School", descripcion: "Profundice uso javascript, html, css y mejore mi backend." },
    { fecha: "2025", titulo: "Bachiller de Ing.Sistemas Computacionales", descripcion: "Titulo de bachiller." },
    { fecha: "2025", titulo: "Curso React", descripcion: "Conceptos básicos hasta avanzados." },
  ];

  
  return (
    <div className="bg-gray-900 h-screen gap-6 p-6 text-black flex flex-col">
      
      <CardLinea titulo={tituloResumen} eventos={eventos}></CardLinea>
    </div>
    
  );
};
