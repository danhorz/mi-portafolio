import { BrowserRouter, Route, Routes } from "react-router";


import { SobremiPage } from "./pages/SobremiPage";
import { EstudiosPage } from "./pages/EstudiosPage";
import { ProyectosPage } from "./pages/ProyectosPage";
import { Estructura } from "./ui/Estructura";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Estructura />}>
            <Route index element={<SobremiPage />} />
            <Route path="sobremi" element={<SobremiPage />} />
            <Route path="estudios" element={<EstudiosPage/>} />
            <Route path="proyectos" element={<ProyectosPage/>} />
        
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
