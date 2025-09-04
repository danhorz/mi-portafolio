import { Icon } from "@iconify/react/dist/iconify.js";
import { CardIcons } from "../components/CardIcons";
import { CardSinImagen } from "../components/CardSinImagen";
import imagen from "../assets/imagen.jpg";

export const SobremiPage = () => {
  const arreglo = [
    <Icon
      className="transition-transform duration-300 hover:scale-120 cursor-pointer w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28"
      icon="skill-icons:html"
      width="128"
      height="128"
    />,
    <Icon
      className="transition-transform duration-300 hover:scale-120 cursor-pointer w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28"
      icon="skill-icons:javascript"
      width="128"
      height="128"
    />,
    <Icon
      className="transition-transform duration-300 hover:scale-120 cursor-pointer w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28"
      icon="skill-icons:python-light"
      width="128"
      height="128"
    />,
    <Icon
      className="transition-transform duration-300 hover:scale-120 cursor-pointer w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28"
      icon="skill-icons:java-light"
      width="128"
      height="128"
    />,
    <Icon
      className="transition-transform duration-300 hover:scale-120 cursor-pointer w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28"
      icon="vscode-icons:file-type-css"
      width="128"
      height="128"
    />,
    <Icon
      className="transition-transform duration-300 hover:scale-120 cursor-pointer w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28"
      icon="devicon:csharp"
      width="128"
      height="128"
    />,
    <Icon
      className="transition-transform duration-300 hover:scale-120 cursor-pointer w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28"
      icon="devicon-plain:dart-wordmark"
      width="128"
      height="128"
      style={{ color: "#7692fd" }}
    />,
    <Icon
      className="transition-transform duration-300 hover:scale-120 cursor-pointer w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28"
      icon="hugeicons:sql"
      width="128"
      height="128"
      style={{ color: "#f00" }}
    />,
  ];
  const arreglo2 = [
    <Icon
      className="transition-transform duration-300 hover:scale-120 cursor-pointer w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28"
      icon="fa:git-square"
      width="128"
      height="128"
      style={{ color: "#f00" }}
    />,
    <Icon
      className="transition-transform duration-300 hover:scale-120 cursor-pointer w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28"
      icon="devicon:bootstrap-wordmark"
      width="128"
      height="128"
    />,
    <Icon
      className="transition-transform duration-300 hover:scale-120 cursor-pointer w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28"
      icon="logos:tailwindcss"
      width="256"
      height="128"
    />,
    <Icon
      className="transition-transform duration-300 hover:scale-120 cursor-pointer w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28"
      icon="devicon:react-wordmark"
      width="128"
      height="128"
    />,
    <Icon
      className="transition-transform duration-300 hover:scale-120 cursor-pointer w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28"
      icon="devicon:github-wordmark"
      width="128"
      height="128"
    />,
    <Icon
      className="transition-transform duration-300 hover:scale-120 cursor-pointer w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28"
      icon="skill-icons:flutter-light"
      width="128"
      height="128"
    />,
    <Icon
      className="transition-transform duration-300 hover:scale-120 cursor-pointer w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28"
      icon="skill-icons:figma-dark"
      width="128"
      height="128"
    />,
  ];
  const tituloResumen = "Resumen";
  const tituloLenguajes = "Leguajes";
  const tituloHabilidades = "Habilidades";
  const textoResumen =
    "Desarrollador enfocado en el desarrollo de aplicaciones móviles y web. Apasionado por el uso de la programación para resolver problemas enfocados en el cliente.También tengo conocimientos de desarrollo de aplicaciones para escritorio. Con especialidad de trabajo en front y todo aspecto visual basados en modelos que se encuentran por la web o recreacion de prediseños en figma, backend a nivel intermedio.Nivel de Inglés B1. Buscador de nuevos retos y aprendizajes relacionados a la programación.";

  return (
    <div className="bg-gray-900 gap-6 p-6 text-black  flex flex-col">
      <div className="flex justify-center">
        <div className="flex flex-col items-center rounded-2xl bg-white w-full max-w-sm sm:max-w-md md:max-w-lg">
          <img
            className="rounded-t-2xl w-full h-auto object-cover"
            src={imagen}
            alt="Foto de perfil"
          />
          <p className="font-bold text-xl text-gray-500 p-4 text-center">
            Daniel Enrique Horna Zegarra
          </p>
        </div>
      </div>

      <CardSinImagen
        titulo={tituloResumen}
        texto={textoResumen}
      ></CardSinImagen>
      <CardIcons
        titulo={tituloLenguajes}
        arreglo={arreglo}
        direccion={"right"}
      ></CardIcons>
      <CardIcons
        titulo={tituloHabilidades}
        arreglo={arreglo2}
        direccion={"left"}
      ></CardIcons>
    </div>
  );
};
