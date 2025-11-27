import CabeceraCV from "./components/CabeceraCV";
import Perfil from "./components/Perfil";
import Educacion from "./components/Educacion";
import Experiencia from "./components/Experiencia";
import StackTecnologias from "./components/StackTecnologias";

// Importar todos los datos
import {
  datosPersonales,
  perfil,
  experiencias,
  estudios,
  tecnologias
} from "./data";

function App() {
  return (
    <div>
      <CabeceraCV 
        nombre={datosPersonales.nombre}
        cargo={datosPersonales.cargo}
        ciudad={datosPersonales.ciudad}
        contacto={datosPersonales.contacto}
        email={datosPersonales.email}
      />

      <Perfil resumen={perfil.resumen} />

      <Experiencia lista={experiencias} />

      <Educacion lista={estudios} />

      <StackTecnologias tecnologias={tecnologias} />
    </div>
  );
}

export default App;
