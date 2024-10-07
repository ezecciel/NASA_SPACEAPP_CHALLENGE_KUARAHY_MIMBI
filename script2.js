

const niveles = [
    /* CORRECT OPTION: 2 PARTIALLY CORRECT OPTION: 1 INCORRECT OPTION: 0 */
    {
        pregunta: "What preventive measure is essential to avoid future fires in affected areas?",
        opciones: ["Not allowing campfires on nearby land.", "Not getting involved in community activities.", "Creating firebreaks and clearing dry vegetation."],
        puntuaciones: [5, -10 , 10],
        siguienteNivel: 1,
        opcionesColor: [1,0,2],
        opcionUsuario: 0,
        opcionCorrecta: 2
    },
    {
        pregunta: "What should you do with food exposed to smoke or heat from a fire?",
        opciones: ["Cook it well before eating.", "Discard it", "Store it in the refrigerator for later consumption."],
        puntuaciones: [-5, 10, -5],
        siguienteNivel: 2,
        opcionesColor: [0,2,0],
        opcionUsuario: 0,
        opcionCorrecta: 1
    },
    {
        pregunta: "How can you help your community recover after a fire?",
        opciones: ["Reforest the affected area", "Clean your property and not get involved in further activities.", "Do nothing, as fires are inevitable."],
        puntuaciones: [10, -5, -10],
        imagen: "images/rio.jpg",
        siguienteNivel: 3,
        opcionesColor: [2,0,0],
        opcionUsuario: 0,
        opcionCorrecta: 2
    },
    {
        pregunta: "What should you do if you find injured animals after a fire?",
        opciones: ["Take them to a specialized shelter or call animal emergency services", "Try to care for them at home", "Ignore them, as they will recover on their own."],
        puntuaciones: [10, 5, -10],
        imagen: "images/cueva.jpg",
        siguienteNivel: 4,
        opcionesColor: [2,1,0],
        opcionUsuario: 0,
        opcionCorrecta: 0
    },
    {
        pregunta: "What is a key way to prepare for future fires?",
        opciones: ["Do nothing and rely on luck", "Develop an evacuation plan and have an emergency kit ready", "Call the authorities only in case of an emergency"],
        puntuaciones: [-10, 10, 5],
        imagen: "images/rocas.jpg",
        siguienteNivel: 5,
        opcionesColor: [0, 2, 1],
        opcionUsuario: 0,
        opcionCorrecta: 1
    }
];

let nivelActual = 0;
let puntosTotales = 0;
let juegoTerminado = false;
const pregunta = document.getElementById('pregunta');
const opcionesContainer = document.getElementById('opciones');
const resultado = document.getElementById('resultado');
const resultado2 = document.getElementById('resultado2')
const imagen = document.getElementById('imagen');
const listaDatos = document.getElementById('listaDatos');
const datoSeleccionado = document.getElementById('datoSeleccionado');
const datos = [
    { texto: 'The district of Bahía Negra has around 1,500,000 hectares of national reserves such as the Defensores del Chaco Park, the largest natural reserve in Paraguay with an area of 780,000 hectares.' },
    { texto: 'By 2023, 11,088 active fires were recorded, with August being the month with the highest count at 1,950 records.' },
    { texto: 'In 2023, we faced a heartbreaking reality: over 11,000 active fires advanced across our territory, and August became a record-breaking month for fire detection in forest lands.' },
    { texto: 'In 2019, 7,950 active fires were recorded, with August being the month with the highest count at 1,421 records. In 2020, 10,620 active fires were recorded, with September being the month with the highest count at 1,421 records.' },
    { texto: 'In 2021, 7,427 active fires were recorded, with August being the month with the highest count at 1,082 records, and in 2022, 6,390 active fires were recorded, with January being the month with the highest count at 931 records.' },
    { texto: 'On July 6 and 7, the 6th National Mobilization of Forest Brigades of the Paraguayan Volunteer Firefighters Corps (CBVP) took place at the Salesian Agricultural Institute "Carlos Pfannl".' },
    { texto: 'On September 2 and 3, the 5th Edition of the National Mobilization of Forest Brigades of the CBVP took place at the Agricultural School of San Juan Bautista, in San Juan Bautista, Misiones. The mobilization was attended by 19 forest brigades, with over 300 forest firefighters and forest instructors.' },
    { texto: 'The National Forestry Institute (INFONA) decided to extend the total ban on the use of fire as an alternative practice in forest, agricultural, and urban areas to avoid the risk of forest fires.' },
    { texto: 'INFONA takes a big step in detecting illegal deforestation by implementing technology with the early warning system.' },
    { texto: 'September 16, 2024... The National Forestry Institute (Infona) confirmed that more than 180,000 hectares have burned in the last 15 days, just in the Chovoreca area. Of that total, 3,000 ha were part of the Cerro Chovoreca National Monument.' },
    { texto: 'Asunción, September 16, 2019.- Since yesterday, the fire outbreaks in the northern zone of Paraguay have reactivated, affecting more than 112,600 hectares of the Cerro Chovoreca Natural Monument and its area of influence in the Alto Paraguay department.' },
    { texto: 'According to the monitoring report received this morning, Tuesday, August 6, 25 active fires were recorded throughout the country, of which 13 affect native forests, 10 affect palm groves, and 3 affect protected wild areas.' },
    { texto: '“Our monitoring system shows us the origin of the fire. In the Fuerte Olimpo area, four identified areas exist. We are required to report and always communicate with the Public Ministry and municipalities,” explained the president of INFONA.' },
    { texto: 'For safety, it is not recommended to try to fight the fire; you should urgently contact trained personnel to handle emergency situations.' },
    { texto: 'The National Forestry Institute (INFONA) announces the implementation of electronic invoicing, a significant step toward modernization and efficiency in our services.' },
    { texto: 'The president of the National Forestry Institute (INFONA), Cristina Goralewski, participated in the Green Tourism and Investment Seminar, organized by SENATUR, along with important sector representatives, to address experiences for sustainable tourism development.' },
    { texto: 'On Monday, September 18, students from the Forestry Engineering program, specifically from the seventh semester of the Forestry Policy and Forestry Economics courses, visited the central headquarters of the National Forestry Institute.' },
    { texto: 'As part of the Government Plan "Forested Paraguay for the World," whose goal is to create opportunities for economic and social growth in the forestry sector, INFONA and KOFPI Paraguay S.A. (Korea Forestry Promotion Institute)' },
    { texto: 'The National Government, through the National Forestry Institute, plans to promote the "Forested Paraguay for the World" plan to strengthen the sector by attracting the interest of both national and foreign capital.' },
    { texto: 'The National Forestry Institute (INFONA) decided to extend the total ban on the use of fire as an alternative practice in forest, agricultural, and urban areas to avoid the risk of forest fires.' },
  ];

function mostrarDato(indice) {
  const dato = datos[indice];
  datoSeleccionado.textContent = dato.texto;
}
function cargarNivel() {
    if (juegoTerminado) {
        return;
    }
    mostrarDato(Math.floor(Math.random() * 20)); // Muestra dato random
    const nivel = niveles[nivelActual];
    pregunta.textContent = nivel.pregunta;

    opcionesContainer.innerHTML = '';
    nivel.opciones.forEach((opcion, index) => {
        const button = document.createElement('button');
        button.textContent = opcion;
        button.addEventListener('click', () => {
            if (!juegoTerminado) {
                puntosTotales += nivel.puntuaciones[index];
                nivelActual = nivel.siguienteNivel;
                if (nivelActual < niveles.length) {
                    cargarNivel();
                } else {
                    juegoTerminado = true;
                    opcionesContainer.querySelectorAll('button').forEach(button => {
                        button.removeEventListener('click', button.onclick);
                    });
                }
            }else{
                localStorage.setItem('puntosTotales', puntosTotales);
                location.href="historia3.html";
            }
        });
        opcionesContainer.appendChild(button);
    });
}

const cuadroFinalPregunta = document.getElementById('finalPregunta')
const frases=[
    'A',
    'A',
    'Encantado, soy Mimbi y este es un breve relato de mi historia...',
    '',
    'Mi vida en Bahía Negra era tranquila y hermosa. Cada mañana, el sol acariciaba las cimas de los árboles... ',
    'A',
    '...mientras los niños corrían por los campos y los adultos trabajaban la tierra. La naturaleza y la comunidad vivían en perfecta armonía. Pensábamos que esos días de paz durarían para siempre.',
    'A',
    'Un dia...todo cambió. Sentimos el viento cambiar y el olor a humo se hizo presente. Un incendio forestal avanzaba rápidamente, devorando todo a su paso...',
    'A',
    '...Las llamas eran imparables y el miedo se apoderó de nosotros. Mientras intentábamos evacuar, sentí la desesperación de no saber si lograríamos salvarnos.',
    ]
const fraseElement = document.getElementById('comentario'); // Reemplaza 'frase' por el ID de tu elemento
let indiceFrase = 0;
let maxFrases = frases.length - 1; // Índice del último elemento del array
var boton = document.getElementById('botonnn')
function cambiarFrase() {
    // Incrementa el índice
    indiceFrase++;
    if (indiceFrase <= maxFrases) {
        fraseElement.textContent = frases[indiceFrase];
        indiceFrase++;
    } else {
        // Si se llega al final, se detiene el cambio
        console.log("Se han mostrado todas las frases.");
        boton.setAttribute('onclick','location.href=\'introduccion.html\'')
        return 0;
    }

    // Actualiza el contenido del elemento
    fraseElement.textContent = frases[indiceFrase];
}
cargarNivel();
