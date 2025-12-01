// src/App.jsx
import React, { useState } from "react";
import CabeceraCV from "./components/CabeceraCV";
import Perfil from "./components/Perfil";
import Educacion from "./components/Educacion";
import Experiencia from "./components/Experiencia";
import StackTecnologias from "./components/StackTecnologias";
import ToggleHabilidades from "./components/ToggleHabilidades";
import FormularioTecnologia from "./components/FormularioTecnologia";

import {
  datosPersonales,
  perfil,
  experiencias,
  estudios,
  tecnologiasIniciales
} from "./data.js";

export default function App() {
  const [tecnologias, setTecnologias] = useState(tecnologiasIniciales);


  const [mostrarHabilidades, setMostrarHabilidades] = useState(true);

 
  const agregarTecnologia = (nuevoNombre, nuevoTipo) => {
    if (!nuevoNombre || !nuevoNombre.trim()) return;
    const nuevo = {
      id: Date.now(), 
      nombre: nuevoNombre.trim(),
      tipo: nuevoTipo || "herramientas"
    };
    setTecnologias(prev => [nuevo, ...prev]);
  };

  return (
    <div className="App">
      <CabeceraCV {...datosPersonales} />
      <Perfil resumen={perfil.resumen} />

      <Experiencia lista={experiencias} />
      <Educacion lista={estudios} />

      {/* Toggle para mostrar/ocultar Habilidades */}
      <ToggleHabilidades
        mostrar={mostrarHabilidades}
        onToggle={() => setMostrarHabilidades(v => !v)}
      />

      {/* Formulario para agregar tecnologías */}
      <FormularioTecnologia agregarTecnologia={agregarTecnologia} />

      {/* Stack renderizado dinámicamente desde estado */}
      <StackTecnologias tecnologias={tecnologias} />
    </div>
  );
}

