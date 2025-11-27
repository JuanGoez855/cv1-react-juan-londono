// src/components/Educacion.jsx
import React from "react";

const estudios = [
  { institucion: "SENA", nombre: "Tecnólogo en Análisis y Desarrollo de Software", año: 2025 },
  { institucion: "Universidad de antioquia", nombre: "Curso de JavaScript Avanzado", año: 2024 },
  { institucion: "Platzi", nombre: "React.js desde cero", año: 2023 },
  { institucion: "Coursera", nombre: "Introducción a MongoDB", año: 2023 },
  { institucion: "CampusCode", nombre: "Node.js y Express", año: 2022 },
  { institucion: "Udemy", nombre: "Fundamentos de Git y GitHub", año: 2022 },
  { institucion: "SENA", nombre: "Taller de Pruebas Unitarias", año: 2024 },
  { institucion: "Instituto de TIC", nombre: "Taller de Maquetación HTML/CSS", año: 2021 }
];

export default function Educacion() {
  return (
    <section>
      <h2>Educación y Cursos</h2>
      <ul>
        {estudios.map((s, i) => (
          <li key={i}>
            <strong>{s.nombre}</strong> — {s.institucion} ({s.año})
          </li>
        ))}
      </ul>
    </section>
  );
}
