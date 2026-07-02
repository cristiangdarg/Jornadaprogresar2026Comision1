const alumnos = [
  {
    "id": 1,
    "apellido": "Acuña",
    "nombre": "Andrea Yanina",
    "file": "pdfc1/AcuñaAndreaYanina.pdf"
  },
  {
    "id": 2,
    "apellido": "Argañaraz Villalba",
    "nombre": "Lautaro Anibal",
    "file": "pdfc1/ArgañarazVillalbaLautaroAnibal.pdf"
  },
  {
    "id": 3,
    "apellido": "Argañaraz",
    "nombre": "Wanda Silvia Aylén",
    "file": "pdfc1/ArgañarazWandaSilviaAylén.pdf"
  },
  {
    "id": 4,
    "apellido": "Artayer",
    "nombre": "Bryana Tais",
    "file": "pdfc1/ArtayerBryanaTais.pdf"
  },
  {
    "id": 5,
    "apellido": "Castillo",
    "nombre": "Analia Veronica",
    "file": "pdfc1/CastilloAnaliaVeronica.pdf"
  },
  {
    "id": 6,
    "apellido": "Diaz",
    "nombre": "Facundo Luciano",
    "file": "pdfc1/DiazFacundoLuciano.pdf"
  },
  {
    "id": 7,
    "apellido": "Diaz",
    "nombre": "Sofia Luciana",
    "file": "pdfc1/DiazSofiaLuciana.pdf"
  },
  {
    "id": 8,
    "apellido": "Escobar",
    "nombre": "Xiomara Gisela",
    "file": "pdfc1/EscobarXiomaraGisela.pdf"
  },
  {
    "id": 9,
    "apellido": "Ferreyra",
    "nombre": "Celeste Jasmin",
    "file": "pdfc1/FerreyraCelesteJasmin.pdf"
  },
  {
    "id": 10,
    "apellido": "Garcia Jimenez",
    "nombre": "Maria Milagros",
    "file": "pdfc1/GarciaJimenezMariaMilagros.pdf"
  },
  {
    "id": 11,
    "apellido": "Gomez",
    "nombre": "Oscar Dylan Benjamin",
    "file": "pdfc1/GomezOscarDylanBenjamin.pdf"
  },
  {
    "id": 12,
    "apellido": "Guzman Núñez",
    "nombre": "Ian Alejandro",
    "file": "pdfc1/GuzmanNúñezIanAlejandro.pdf"
  },
  {
    "id": 13,
    "apellido": "Lopez Gomez",
    "nombre": "Angel Juan David",
    "file": "pdfc1/LopezGomezAngelJuanDavid.pdf"
  },
  {
    "id": 14,
    "apellido": "Rodriguez",
    "nombre": "Daniela Rita Valentina",
    "file": "pdfc1/RodriguezDanielaRitaValentina.pdf"
  },
  {
    "id": 15,
    "apellido": "Rodriguez",
    "nombre": "Tiago Samuel",
    "file": "pdfc1/RodriguezTiagoSamuel.pdf"
  },
  {
    "id": 16,
    "apellido": "Sotelo",
    "nombre": "Mauro Exequiel",
    "file": "pdfc1/SoteloMauroExequiel.pdf"
  }
];

const tabla = document.getElementById("tablaAlumnos");

alumnos.forEach(alumno => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${alumno.id}</td>
        <td>${alumno.dni}</td>
        <td>${alumno.apellido}</td>
        <td>${alumno.nombre}</td>
        <td>
            <a href="pdfc1/${alumno.dni}.pdf" download>
                <button>Descargar</button>
            </a>
        </td>
    `;

    tabla.appendChild(fila);
});
