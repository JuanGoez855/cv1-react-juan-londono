# CV React - Juan Londoño

Proyecto: Hoja de vida dinámica hecha con React + Vite.

## Captura de pantalla
![Vista previa](./public/Captura.PNG)

### Sección adicional del proyecto
![Segunda captura](./public/Captura2.PNG)

## Cómo ejecutar
1. Clonar:
```bash
git clone https://github.com/JuanGoez855/cv-react-juan-londono.git

## Instrucciones para ejecutar el proyecto

1. Instalar dependencias:
   ```bash
   npm install
   npm run dev

   📌 Uso de Props en el Proyecto

En este proyecto se utilizan props para enviar datos desde App.jsx hacia los componentes del CV, permitiendo que cada sección reciba solo la información que necesita.

✔️ ¿Qué son los props?

Los props (propiedades) son la forma en la que un componente padre envía información a un componente hijo en React.

Ejemplo en App.jsx:

<CabeceraCV
  nombre={datosPersonales.nombre}
  cargo={datosPersonales.cargo}
  ciudad={datosPersonales.ciudad}
  contacto={datosPersonales.contacto}
  email={datosPersonales.email}
/>

✔️ Desestructuración de props en el componente

En vez de recibir un solo objeto props, el componente desestructura cada propiedad para usarla directamente:

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