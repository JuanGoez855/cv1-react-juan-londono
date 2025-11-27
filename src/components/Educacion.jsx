// src/components/Educacion.jsx
import React from "react";

export default function Educacion({ lista = [] }) {
  return (
    <section>
      <h2>Educación</h2>
      <ul>
        {lista.map((item, i) => (
          <li key={i}>
            <strong>{item.nombre}</strong> — {item.institucion} ({item.año})
          </li>
        ))}
      </ul>
    </section>
  );
}

