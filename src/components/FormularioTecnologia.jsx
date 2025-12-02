// src/components/FormularioTecnologia.jsx
import React, { useState } from "react";

export default function FormularioTecnologia({ agregarTecnologia }) {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("frontend");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nombreTrim = nombre.trim();
    if (!nombreTrim) return;
    agregarTecnologia(nombreTrim, tipo);
    setNombre("");
    setTipo("frontend");
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "12px 0" }}>
      <input
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre de la tecnología"
        aria-label="nombre-tecnologia"
      />
      <select
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
        style={{ marginLeft: 8 }}
      >
        <option value="frontend">frontend</option>
        <option value="backend">backend</option>
        <option value="base de datos">base de datos</option>
        <option value="herramientas">herramientas</option>
        <option value="testing">testing</option>
      </select>
      <button type="submit" style={{ marginLeft: 8 }}>
        Agregar
      </button>
    </form>
  );
}

