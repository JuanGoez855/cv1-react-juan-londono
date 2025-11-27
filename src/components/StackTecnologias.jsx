// src/components/StackTecnologias.jsx
export default function StackTecnologias() {
  const tecnologias = [
    { id: 1, nombre: "HTML", tipo: "frontend" },
    { id: 2, nombre: "CSS", tipo: "frontend" },
    { id: 3, nombre: "JavaScript", tipo: "frontend" },
    { id: 4, nombre: "React", tipo: "frontend" },
    { id: 5, nombre: "Node.js", tipo: "backend" },
    { id: 6, nombre: "Express", tipo: "backend" },
    { id: 7, nombre: "MongoDB", tipo: "base de datos" },
    { id: 8, nombre: "Git", tipo: "herramientas" },
    { id: 9, nombre: "Vite", tipo: "herramientas" },
    { id: 10, nombre: "Jest", tipo: "testing" }
  ];

  // Función para asignar colores según el tipo de tecnología
  const obtenerColor = (tipo) => {
    switch (tipo) {
      case "frontend":
        return "blue";
      case "backend":
        return "green";
      case "base de datos":
        return "orange";
      case "herramientas":
        return "purple";
      case "testing":
        return "red";
      default:
        return "gray";
    }
  };

  return (
    <section>
      <h3>Stack de Tecnologías</h3>
      <ul>
        {tecnologias.map((tech) => (
          <li
            key={tech.id}
            style={{
              color: obtenerColor(tech.tipo),
              fontWeight: "bold",
              marginBottom: "6px"
            }}
          >
            {tech.nombre} — <em>{tech.tipo}</em>
          </li>
        ))}
      </ul>
    </section>
  );
}
