// src/components/Perfil.jsx
import React from "react";

export default function Perfil({ resumen }) {
  return (
    <section>
      <h2>Perfil</h2>
      <p>{resumen}</p>
    </section>
  );
}
