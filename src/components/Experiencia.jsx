// src/components/Experiencia.jsx
import React from "react";

const experiencias = [
  { cargo: "Desarrollador Frontend Junior", empresa: "SoftSolutions S.A.S", año: 2024, descripcion: "Desarrollo de interfaces con React, componentes reutilizables y consumo de APIs REST." },
  { cargo: "Desarrollador Full Stack (proyecto personal)", empresa: "Proyecto Personal", año: 2023, descripcion: "App CRUD con Node.js, Express y MongoDB; autenticación JWT y despliegue." },
  { cargo: "Practicante en Desarrollo", empresa: "TechDev Colombia", año: 2024, descripcion: "Apoyo en módulos JS, pruebas unitarias y documentación técnica." },
  { cargo: "Desarrollador de UI", empresa: "DevDesign Studios", año: 2025, descripcion: "Creación de componentes accesibles y maquetación responsiva." },
  { cargo: "Backend Developer (Académico)", empresa: "SENA - Proyecto Académico", año: 2024, descripcion: "APIs REST con Express y manejo de MongoDB." },
  { cargo: "Mantenimiento Web", empresa: "Empresa X", año: 2022, descripcion: "Corrección de bugs, optimización de imágenes y performance." },
  { cargo: "Desarrollador Junior", empresa: "StartApp", año: 2021, descripcion: "Implementación de features y soporte en producción." },
  { cargo: "Automatización de pruebas", empresa: "QA Team", año: 2020, descripcion: "Pruebas automatizadas básicas y creación de scripts." },
  { cargo: "Soporte técnico y despliegue", empresa: "InfraCorp", año: 2019, descripcion: "Despliegue en servidores y configuración básica CI/CD." },
  { cargo: "Proyecto voluntario: Portal comunitario", empresa: "ONG Local", año: 2023, descripcion: "Construcción de portal informativo y formulario de contacto." }
];

export default function Experiencia() {
  return (
    <section>
      <h2>Experiencia</h2>
      <ul>
        {experiencias.map((exp, idx) => (
          <li key={idx}>
            <strong>{exp.cargo}</strong> — <em>{exp.empresa}</em> ({exp.año})
            <p>{exp.descripcion}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
