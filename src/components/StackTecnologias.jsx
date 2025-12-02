// src/components/StackTecnologias.jsx
import React from "react";

export default function StackTecnologias({ tecnologias = [] }) {
  const obtenerColor = (tipo) => {
    switch (tipo) {
      case "frontend": return "blue";
      case "backend": return "green";
      case "base de datos": return "orange";
      case "herramientas": return "purple";
      case "testing": return "red";
      default: return "gray";
    }
  };

  return (
    <section>
      <h2>Stack de Tecnologías</h2>
      <ul>
        {tecnologias.map((t) => (
          <li key={t.id} style={{ color: obtenerColor(t.tipo), marginBottom: 6 }}>
            <strong>{t.nombre}</strong> — <em>{t.tipo}</em>
          </li>
        ))}
      </ul>
    </section>
  );
}

