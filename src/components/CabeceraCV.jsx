// src/components/CabeceraCV.jsx

import React from "react";

export default function CabeceraCV({ nombre, cargo, ciudad, contacto, email }) {
  return (
    <header>
      <h1>{nombre}</h1>
      <h2>{cargo}</h2>
      <p>{ciudad}</p>
      <p>{contacto} • {email}</p>
    </header>
  );
}
