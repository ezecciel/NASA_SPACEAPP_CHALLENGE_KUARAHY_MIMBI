
const niveles = [ 
    /* OPCION CORRECTA: 2 OPCION PARCIALMENTE CORRECTA: 1 OPCION INCORRECTA: 0 */
    {
        pregunta: "What is the first action you should take when you notice the fire approaching?",
        opciones: ["Call the firefighters.", "Close all windows and doors and stay inside the house", "Quickly assess the situation and prepare for an immediate evacuation", "Gather your most important belongings and then think of an exit"],
        puntuaciones: [10, -10, 20, -50],
        siguienteNivel: 1,
        opcionesColor: [1, 0, 2, 0],
        opcionUsuario: 0,
        opcionCorrecta: 2
    },
    {
        pregunta: "What items should you take with you when evacuating?",
        opciones: ["Only your mobile phone and wallet", "Important documents, a backpack with water, food, flashlight, etc.", "Your most valuable belongings like jewelry and electronic devices", "Everything you can load into your car"],
        puntuaciones: [-20, 20, -10, 10],
        siguienteNivel: 2,
        opcionesColor: [0, 2, 0, 1],
        opcionUsuario: 0,
        opcionCorrecta: 1
    },
    {
        pregunta: "The fire is spreading fast, and the smoke is thick. What should you do to protect your airways?",
        opciones: ["Find a nearby river or lake to get into the water", "Avoid breathing deeply and run in the opposite direction of the smoke", "Use a wet shirt or cloth over your mouth and nose", "Stay calm and walk slowly towards a safe place without covering yourself"],
        puntuaciones: [10, 10, 20, -10],
        imagen: "images/rio.jpg",
        siguienteNivel: 3,
        opcionesColor: [1, 1, 2, 0],
        opcionUsuario: 0,
        opcionCorrecta: 2
    },
    {
        pregunta: "If you're surrounded by fire and can't escape, what's your best option?",
        opciones: ["Take shelter in a clear area, like a field without vegetation, or inside a ditch", "Run as fast as possible towards the area with the least smoke", "Look for large trees to hide behind them", "Try to put out the fire with whatever you have on hand"],
        puntuaciones: [20, 10, -20, -10],
        imagen: "images/cueva.jpg",
        siguienteNivel: 4,
        opcionesColor: [2, 1, 0, 0],
        opcionUsuario: 0,
        opcionCorrecta: 0
    },
    {
        pregunta: "Your family is with you, and everyone is scared. What advice do you give them to stay safe?",
        opciones: ["Look for water and get wet before running towards an exit", "Each person should run in different directions to find the quickest way out", "Wait at home for the firefighters to arrive", "Stay together and evacuate calmly towards the safest area"],
        puntuaciones: [-10, -20, -10, 20],
        imagen: "images/rocas.jpg",
        siguienteNivel: 5,
        opcionesColor: [0, 0, 0, 2],
        opcionUsuario: 0,
        opcionCorrecta: 3
    }
];   


let nivelActual = 0;
let puntosTotaless = 0;
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
                puntosTotaless += nivel.puntuaciones[index];
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
                localStorage.setItem('puntosTotaless', puntosTotaless);
                location.href="historia2.html";
            }
        });
        opcionesContainer.appendChild(button);
    });
}
function mostrarResultado(){
    const puntosTotaless = localStorage.getItem('puntosTotaless');
    resultado.textContent = `Game over! Your total score is: ${puntosTotaless}% chance of survival`;
}
const imagenes=[
    'tigre2.png',
    'tigre3.png',
    'tigre4.png',
    'tigre5.png'
]
function cambiarTigre(){
    var imagen = document.getElementById('mimbi')
    const indiceAleatorio = Math.floor(Math.random() * imagenes.length)
    imagen.setAttribute('src', imagenes[indiceAleatorio])
}


const cuadroFinalPregunta = document.getElementById('finalPregunta')
function mostrarResultados(){
    const tabla = document.createElement('table');
    tabla.className="tablaPrincipal"
    const contenedor = document.getElementById('contenedorTabla'); // Asume que tienes un div con este ID

    niveles.forEach(nivel => {
        const fila = document.createElement('tr');
        fila.className="fila"

        // Celda para la pregunta
        const celdaPregunta = document.createElement('td');
        celdaPregunta.className="celdaPregunta"
        celdaPregunta.textContent = nivel.pregunta;
        fila.appendChild(celdaPregunta);

        // Celda para las opciones
        const celdaOpciones = document.createElement('td');
        celdaOpciones.className="celdaOpciones"
        const listaOpciones = document.createElement('ul');
        listaOpciones.className="celdaListaOpciones"
        for (let i = 0; i < 4; i++){
            const itemLista = document.createElement('li');
            itemLista.className="opcionesLista"
            itemLista.textContent = nivel.opciones[i];
            switch(nivel.opcionesColor[i]){
                case 0:
                    itemLista.style.backgroundColor = "rgba(255, 0, 0, 0.397)";
                break;
                case 1:
                    itemLista.style.backgroundColor = "rgba(251, 255, 0, 0.397)";
                break;
                case 2:
                    itemLista.style.backgroundColor = "rgba(0, 255, 34, 0.397)";
                break;
                default:
                    itemLista.style.backgroundColor = "rgba(0, 0, 0, 0)";
            }
            listaOpciones.appendChild(itemLista);
        }

        celdaOpciones.appendChild(listaOpciones);
        fila.appendChild(celdaOpciones);
        tabla.appendChild(fila);
        });

    contenedor.appendChild(tabla);
    };


const frases = [
    'A',
    'A',
    'Nice to meet you, I am Mimbi, and this is a brief story of my life...',
    '',
    'My life in Bahía Negra was peaceful and beautiful. Every morning, the sun caressed the tops of the trees...',
    'A',
    '...while children ran through the fields and adults worked the land. Nature and the community lived in perfect harmony. We thought those peaceful days would last forever.',
    'A',
    'One day... everything changed. We felt the wind shift, and the smell of smoke became present. A wildfire was advancing quickly, devouring everything in its path...',
    'A',
    '...The flames were unstoppable, and fear took over. As we tried to evacuate, I felt the desperation of not knowing if we would make it to safety.',
];

const fraseElement = document.getElementById('comentario'); // Reemplaza 'frase' por el ID de tu elemento
let indiceFrase = 0;
let maxFrases = frases.length - 1; // Índice del último elemento del array
var boton = document.getElementById('botonnn')
function cambiarFrase() {
    cambiarTigre();
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

const frases2 = [
    'A',
    'A',
    'When the fire was extinguished, everything we knew had changed. The fields were ashes, and the animals had fled.',
];


const fraseElemente = document.getElementById('comentario');
let indiceeFrase = 0;
let maxxFrases = frases2.length - 1; // Índice del último elemento del array
boton = document.getElementById('botonnn')
function cambiarFrase2() {
    cambiarTigre();
    // Incrementa el índice
    indiceeFrase++;
    if (indiceeFrase <= maxxFrases) {
        fraseElemente.textContent = frases2[indiceeFrase];
        indiceeFrase++;
    } else {
        // Si se llega al final, se detiene el cambio
        console.log("Se han mostrado todas las frases.");
        boton.setAttribute('onclick','location.href=\'index2.html\'')
        return 0;
    }

    // Actualiza el contenido del elemento
    fraseElemente.textContent = frases2[indiceeFrase];
}
cargarNivel();
