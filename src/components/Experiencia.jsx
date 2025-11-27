// src/components/Experiencia.jsx
import React from "react";

export default function Experiencia({ lista = [] }) {
  return (
    <section>
      <h2>Experiencia</h2>
      <ul>
        {lista.map((exp, i) => (
          <li key={i}>
            <strong>{exp.cargo}</strong> — {exp.empresa} ({exp.año})
            <p>{exp.descripcion}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
