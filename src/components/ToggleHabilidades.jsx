// src/components/ToggleHabilidades.jsx
import React from "react";

export default function ToggleHabilidades({ mostrar, onToggle }) {
  return (
    <div style={{ margin: "12px 0" }}>
      <button onClick={onToggle}>
        {mostrar ? "Ocultar Habilidades" : "Mostrar Habilidades"}
      </button>
    </div>
  );
}
