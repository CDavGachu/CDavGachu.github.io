const preguntas = [
    {
        "pregunta": "¿Cómo te sientes?",
        "respuestas": [
            "Bien",
            "Mal"
        ],
        "instruccion": ""
    },
    {
        "pregunta": "",
        "imagen": "./src/avatar.png",
        "instruccion": "Hola!, has llegado al nivel 1 del test de auto-ayuda. Recuerda contestar con la verdad"
    },
    {
        "pregunta": "",
        "imagen": "./src/avatar.png",
        "instruccion": "Tendremos una serie de sintomas comunes que tenemos durante una crisis de ansiedad. <br> Lee con atencion cada uno de ellos e indica el valor que se ha presentado en la ultima semana incluyendo hoy"
    },

    {
        "pregunta": "Sintoma: torpe o entumecido.",
        "respuestas": [
            "En absoluto",
            "Levemente",
            "Moderadamente",
            "Severamente"
        ],
        "instruccion": "Responde honestamente"

    },
    {
        "pregunta": "Sintoma: Acalorado.",
        "respuestas": [
            "En absoluto",
            "Levemente",
            "Moderadamente",
            "Severamente"
        ],
        "instruccion": "Responde honestamente"

    },
    {
        "pregunta": "Sintoma: Con temblor en las piernas.",
        "respuestas": [
            "En absoluto",
            "Levemente",
            "Moderadamente",
            "Severamente"
        ],
        "instruccion": "Responde honestamente"

    },
    {
        "pregunta": "Sintoma: Incapaz de relajarse.",
        "respuestas": [
            "En absoluto",
            "Levemente",
            "Moderadamente",
            "Severamente"
        ],
        "instruccion": "Responde honestamente"

    },
    {
        "pregunta": "Sintoma: Con temor a que ocurra lo peor.",
        "respuestas": [
            "En absoluto",
            "Levemente",
            "Moderadamente",
            "Severamente"
        ],
        "instruccion": "Responde honestamente"

    },
    {
        "pregunta": "Sintoma: Mareado o que se la va la cabeza.",
        "respuestas": [
            "En absoluto",
            "Levemente",
            "Moderadamente",
            "Severamente"
        ],
        "instruccion": "Responde honestamente"

    },
    {
        "pregunta": "Sintoma: Con latidos de corazón fuertes y acelerados.",
        "respuestas": [
            "En absoluto",
            "Levemente",
            "Moderadamente",
            "Severamente"
        ],
        "instruccion": "Responde honestamente"

    },
    {
        "pregunta": "Sintoma: Inestable.",
        "respuestas": [
            "En absoluto",
            "Levemente",
            "Moderadamente",
            "Severamente"
        ],
        "instruccion": "Responde honestamente"

    },
    {
        "pregunta": "Sintoma: Atemorizado o asustado.",
        "respuestas": [
            "En absoluto",
            "Levemente",
            "Moderadamente",
            "Severamente"
        ],
        "instruccion": "Responde honestamente"

    },
    {
        "pregunta": "Sintoma: Nervioso.",
        "respuestas": [
            "En absoluto",
            "Levemente",
            "Moderadamente",
            "Severamente"
        ],
        "instruccion": "Responde honestamente"

    },
    {
        "pregunta": "Sintoma: Con sensación de bloqueo.",
        "respuestas": [
            "En absoluto",
            "Levemente",
            "Moderadamente",
            "Severamente"
        ],
        "instruccion": "Responde honestamente"

    },
    {
        "pregunta": "Sintoma: Con temblores en las manos.",
        "respuestas": [
            "En absoluto",
            "Levemente",
            "Moderadamente",
            "Severamente"
        ],
        "instruccion": "Responde honestamente"

    },
    {
        "pregunta": "Sintoma: inquieto, inseguro.",
        "respuestas": [
            "En absoluto",
            "Levemente",
            "Moderadamente",
            "Severamente"
        ],
        "instruccion": "Responde honestamente"

    },
    {
        "pregunta": "Sintoma: Con miedo a perder en control.",
        "respuestas": [
            "En absoluto",
            "Levemente",
            "Moderadamente",
            "Severamente"
        ],
        "instruccion": "Responde honestamente"

    },
    {
        "pregunta": "Sintoma: Con sensación de ahogo.",
        "respuestas": [
            "En absoluto",
            "Levemente",
            "Moderadamente",
            "Severamente"
        ],
        "instruccion": "Responde honestamente"

    },
    {
        "pregunta": "Sintoma: Con temor a morir.",
        "respuestas": [
            "En absoluto",
            "Levemente",
            "Moderadamente",
            "Severamente"
        ],
        "instruccion": "Responde honestamente"

    },
    {
        "pregunta": "Sintoma: Con miedo.",
        "respuestas": [
            "En absoluto",
            "Levemente",
            "Moderadamente",
            "Severamente"
        ],
        "instruccion": "Responde honestamente"

    },
    {
        "pregunta": "Sintoma: Con problemas digestivos.",
        "respuestas": [
            "En absoluto",
            "Levemente",
            "Moderadamente",
            "Severamente"
        ],
        "instruccion": "Responde honestamente"

    },
    {
        "pregunta": "Sintoma: Con desvanecimientos.",
        "respuestas": [
            "En absoluto",
            "Levemente",
            "Moderadamente",
            "Severamente"
        ],
        "instruccion": "Responde honestamente"

    },
    {
        "pregunta": "Sintoma: Con rubor facial.",
        "respuestas": [
            "En absoluto",
            "Levemente",
            "Moderadamente",
            "Severamente"
        ],
        "instruccion": "Responde honestamente"

    },
    {
        "pregunta": "Sintoma: Con sudores, frios o calientes.",
        "respuestas": [
            "En absoluto",
            "Levemente",
            "Moderadamente",
            "Severamente"
        ],
        "instruccion": "Responde honestamente"

    },
    {
        "pregunta": "Puntuación",
        "imagen": "./src/avatar.png",
        "instruccion": "Has finalizado con el nivel 1, es necesario que inicies con el nivel 2"
    },
    {
        "pregunta": "Estado: <br> tristeza",
        "respuestas": [
            "No me siento triste",
            "Me siento triste gran parte del tiempo",
            "Me siento trsite todo el tiempo",
            "Me siento tan trsite o soy tan infeliz que no puedo soportarlo"
        ]

    },
    {
        "pregunta": "Estado: <br> Pesimismo",
        "respuestas": [
            "No estoy desalentado respecto a mi futuro",
            "Me siento más desalentado respecto de mi futuro que lo que solía estarlo",
            "No espero que las cosas funcionen para mi",
            "siento que no hay esperanza para mi futuro y que sólo puede empeorar"
        ]

    },
    {
        "pregunta": "Estado: <br> Fracaso",
        "respuestas": [
            "No me siento como un fracasado",
            "He fracasado más de lo que hubiera dabido",
            "Cuando miro hacia atrás, veo muchos fracasos",
            "Siento que como persona soy un fracaso total"
        ]

    },
    {
        "pregunta": "Estado: <br> Pérdida de placer",
        "respuestas": [
            "Obtengo tanto placer como siempre por las cosas de las que disfruto",
            "No disfruto tanto de las cosas como solía hacerlo",
            "Obtengo muy poco placer de las cosas que solia disfrutar",
            "No puedo obtener ningún placer de las cosas de las que solía disfrutar"
        ]

    },
    {
        "pregunta": "Estado: <br> Sentimientos de culpa",
        "respuestas": [
            "No me siento particularmente culpable",
            "Me siento culpable respecto de varias cosas que he hecho o que debería haber hecho",
            "Me siento bastante culpable la mayor parte de tiempo",
            "Me siento culpable todo el tiempo"
        ]

    },
    {
        "pregunta": "Estado: <br> Sentimientos de castigo",
        "respuestas": [
            "No me siento que este siendo castigado",
            "Siento que tal vez pueda ser castigado",
            "Espero ser castigado",
            "Siento que estoy siendo castigado"
        ]

    },
    {
        "pregunta": "Estado: <br> Disconformidad con uno mismo",
        "respuestas": [
            "Siento acerca de mi lo mismo de siempre",
            "He perdido la confianza en mí mismo",
            "Estoy decepcionado conmigo mismo",
            "No me gusto a mí mismo"
        ]

    },
    {
        "pregunta": "Estado: <br> Autocritica",
        "respuestas": [
            "No me critico ni me culpo más de lo habitual",
            "Estoy más critico conmigo mismo de lo que solía estarlo",
            "Me critico a mí mismo por todos mis errores",
            "Me culpo a mí mismo por todo lo malo que sucede"
        ]

    },
    {
        "pregunta": "Estado: <br> pensamientos o deseos suicidas",
        "respuestas": [
            "No tengo ningún pensamiento de matarme",
            "He tenido pensamientos de matarme, pero no lo haría",
            "Querría matarme",
            "Me mataría si tuviera la oportinidad de hacerlo"
        ]

    },
    {
        "pregunta": "Estado: <br> Llanto",
        "respuestas": [
            "No lloro más de lo que solía hacerlo",
            "Lloro más de lo que solía hacerlo",
            "Lloro por cualquier pequeñez",
            "Siento ganas de llorar pero no puedo"
        ]

    },
    {
        "pregunta": "Estado: <br> Agitación",
        "respuestas": [
            "No estoy más inquieto o tenso que lo habitual",
            "Me siento más inquieto o tenso que lo habitual",
            "Estoy tan inquieto o agitado que me es difícil quedarme quieto",
            "Estoy tan inquieto o agitado que tengo que estar siempre en movimiento o haciendo algo"
        ]

    },
    {
        "pregunta": "Estado: <br> Pérdida de interés",
        "respuestas": [
            "No he perdido el interés en otras actividades o personas",
            "Estoy menos interesado que antes en otras personas o cosas",
            "He perdido casi todo el interés en otras personas o cosas",
            "Me es difícil interesarme por algo"
        ]

    },
    {
        "pregunta": "Estado: <br> Indecisión",
        "respuestas": [
            "Tomo mis propias decisiones tan bien como siempre",
            "Me resulta más dificil que de costumbre tomar decisiones",
            "Encuentro mucha más dificultad que antes para tomar decisiones",
            "Tengo problemas para tomar cualquier decisión"
        ]

    },
    {
        "pregunta": "Estado: <br> Desvalorización",
        "respuestas": [
            "No siento que yo sea valioso",
            "No me considero a mi mismo tan valioso y útil como solía considerarme ",
            "Me siento menos valioso cuando me comparo con otros",
            "Siento que no valgo nada"
        ]

    },
    {
        "pregunta": "Estado: <br> Pérdida de energía",
        "respuestas": [
            "Tengo tanta energía como siempre",
            "Tengo menos energía que la que solía tener",
            "No tengo sufienciente energía para hacer demasiado",
            "No tengo energía suficiente par hacer nada"
        ]

    },
    {
        "pregunta": "Estado: <br> Cambios en los hábitos de sueño",
        "respuestas": [
            "No he experimentado ningún cambio en mis hábitos de sueño",
            "Duermo un poco más que lo habitual",
            "Duermo un poco menos que lo habitual",
            "Duermo mucho más que lo habitual",
            "Duermo mucho menos que lo habitual",
            "Duermo la mayor parte del día",
            "Me despierto 1-2 horas más temprano y no puedo volver a dormirme"
        ]

    },
    {
        "pregunta": "Estado: <br> Irritabilidad",
        "respuestas": [
            "No estoy tan irritable que lo habitual",
            "Estoy más irritable que lo habitual",
            "Estoy mucho más irritable que lo habitual",
            "Estoy irritable todo el tiempo"
        ]

    },
    {
        "pregunta": "Estado: <br> Cambios en el apetito",
        "respuestas": [
            "No he experimentado ningún cambio en mi apetito",
            "Mi apetito es un poco menor que lo habitual",
            "Mi apetito es un poco mayor que lo habitual ",
            "Mi apetito es mucho menor que antes",
            "Mi apetito es mucho mayor que lo habitual",
            "No tengo apetito en absoluto",
            "Quiero comer todo el día"
        ]

    },
    {
        "pregunta": "Estado: <br> Dificultad de concentración",
        "respuestas": [
            "Puedo concentrarme tan bien como siempre",
            "No puedo concentrarme tan bien como habitualmente",
            "Me es difícil mantener la mente en algo por mucho tiempo",
            "Encuentro que no puedo concentrame en nada"
        ]

    },
    {
        "pregunta": "Estado: <br> Cansancio o fatiga",
        "respuestas": [
            "No estoy más cansado o fatigado que lo habitual ",
            "Me fatigo o me canso más fácilmente que lo habitual",
            "Estoy demasiado fatigado o cansado para hacer muchas de las cosas que solía hacer",
            "Estoy demasiado fatigado o cansado para hacer la mayoría de las cosas que solía hacer"
        ]

    },
    {
        "pregunta": "Estado: <br> Pérdida de interés en el sexo",
        "respuestas": [
            "No he notado ningún cambio reciente en mi interés por el sexo",
            "Estoy menos interesado en el sexo de lo que solía estarlo",
            "Estoy mucho menos interesado en el sexo",
            "He perdido completamnete el interés en el sexo"
        ]

    },
    {
        "pregunta": "Puntuación:",
        "imagen": "./src/avatar.png",
        "instruccion": "Has finalizado con el nivel 2"
    }

]

let preguntaActual = 0;
let puntaje = 0;
const siguientePregunta = () => {
    const textopregunta = document.getElementById("preguntaActual");
    if(preguntaActual==preguntas.length-1)return;
    if(verificar()){
        preguntaActual++
        if(preguntaActual == 25)
            puntaje == 0;
        generar();
        console.log("Pregunta:",preguntaActual);
        if(preguntaActual < 24)
            textopregunta.innerHTML = preguntaActual >= 3 ? (preguntaActual -2) +"/21": "-";
        else
            textopregunta.innerHTML = preguntaActual >= 25 ? (preguntaActual -24) +"/21": "-";

        if(preguntaActual == 24) {
            if(puntaje < 22){
                const pregunta = document.getElementById("pregunta");
                const respuesta = document.getElementById("respuestas");
                const buttonContainer = document.getElementById("buttonContainer");
                buttonContainer.style.display = "none";

                pregunta.innerHTML = "Puntuación: " + puntaje;
                respuesta.innerHTML = `
                <div id="levelResult">
                    <div id="resultPhrase">
                        <p>No Renuncies, no te rindas, no dejes de creer</p>
                    </div>
                    <img class="imagenp" src="./src/avatar.png">
                    <div id="resultButtons">
                        <button onclick="router(3)">Consejos</button>
                        <button onclick="router(0)">Diario</button>
                    </div>
                </div>
                `;
            }
            else {
                const pregunta = document.getElementById("pregunta");
                const respuesta = document.getElementById("respuestas");
        
                pregunta.innerHTML = "Puntuación: " + puntaje;
                respuesta.innerHTML = `
                <div id="levelResult">
                    <div id="resultPhrase">
                        <p>Has completado el nivel 1, es necesario que continúes con el nivel 2</p>
                    </div>
                    <img class="imagenp" src="./src/avatar.png">
                </div>
                `;
    
            }
        }
        
        if(preguntaActual == preguntas.length - 1) {
        
            const pregunta = document.getElementById("pregunta");
            const respuesta = document.getElementById("respuestas");
            const buttonContainer = document.getElementById("buttonContainer");
            buttonContainer.style.display = "none";

            pregunta.innerHTML = "Puntuación: " + puntaje;
            respuesta.innerHTML = `
            <div id="levelResult">
                <div id="resultPhrase">
                    <p>${puntaje < 14 ? "Depresión mínima" : puntaje < 20 ? "Depresión leve" : puntaje < 29 ? "Depresión moderada" : "Depresión grave"}</p>
                </div>
                <img class="imagenp" src="./src/avatar.png">
                <div id="resultButtons">
                    <button onclick="router(2)">Agendar cita</button>
                </div>
            </div>
            `;
        }
    }
        
}
    
const anteriorPregunta = () => {
    const textopregunta = document.getElementById("preguntaActual");
    if(preguntaActual==0)return;
    preguntaActual--;
    if(preguntaActual == 25)
        puntaje == 0;
    generar();
    if(preguntaActual < 24)
        textopregunta.innerHTML = preguntaActual >= 3 ? (preguntaActual -2) +"/21": "-";
    else
        textopregunta.innerHTML = preguntaActual >= 25 ? (preguntaActual -24) +"/21": "-";
    console.log(preguntaActual);
    if(!preguntas[preguntaActual].imagen){
        const respuesta=document.getElementById("res"+preguntas[preguntaActual].seleccionada);
        respuesta.checked=true;
        puntaje-=preguntas[preguntaActual].seleccionada;
    }
    if(preguntaActual == 24) {
        if(puntaje < 22){
            const pregunta = document.getElementById("pregunta");
            const respuesta = document.getElementById("respuestas");
    
            pregunta.innerHTML = "Puntuación: " + puntaje;
            respuesta.innerHTML = `
            <div id="levelResult">
                <div id="resultPhrase">
                    <p>No Renuncies, no te rindas, no dejes de creer</p>
                </div>
                <img class="imagenp" src="./src/avatar.png">
                <div id="resultButtons">
                    <button onclick="router(3)">Consejos</button>
                    <button onclick="router(0)">Diario</button>
                </div>
            </div>
            `;
        }
        else {
            const pregunta = document.getElementById("pregunta");
            const respuesta = document.getElementById("respuestas");
    
            pregunta.innerHTML = "Puntuación: " + puntaje;
            respuesta.innerHTML = `
            <div id="levelResult">
                <div id="resultPhrase">
                    <p>Has completado el nivel 1, es necesario que continúes con el nivel 2</p>
                </div>
                <img class="imagenp" src="./src/avatar.png">
            </div>
            `;

        }
    }
    if(preguntaActual == preguntas.length - 1) {
    
        const pregunta = document.getElementById("pregunta");
        const respuesta = document.getElementById("respuestas");
        const buttonContainer = document.getElementById("buttonContainer");
        buttonContainer.style.display = "none";

        pregunta.innerHTML = "Puntuación: " + puntaje;
        respuesta.innerHTML = `
        <div id="levelResult">
            <div id="resultPhrase">
                <p>${puntaje < 14 ? "Depresión mínima" : puntaje < 20 ? "Depresión leve" : puntaje < 29 ? "Depresión moderada" : "Depresión grave"}</p>
            </div>
            <img class="imagenp" src="./src/avatar.png">
            <div id="resultButtons">
                <button onclick="router(2)">Agendar cita</button>
            </div>
        </div>
        `;
    }
}
const generar = () => {
    const label = document.getElementById("pregunta");
    const respuestas = document.getElementById("respuestas");
    const instrucciones = document.getElementById("Instrucciones");

    let respuestasgeneradas = "";
    label.innerHTML = preguntas[preguntaActual].pregunta;
    if (preguntas[preguntaActual].imagen)
        respuestasgeneradas = `<img class="imagenp" src="${preguntas[preguntaActual].imagen}">`;
    else {
        preguntas[preguntaActual].respuestas.forEach((respuesta, i) => {
            respuestasgeneradas += `
            <div>
                <input id="res${i}" type="radio" name="respuestas" value="${i}" class="respuesta">
                <p>${respuesta}</p>
            </div>
            `;
        })

    }

    instrucciones.innerHTML = preguntas[preguntaActual].instruccion;
    respuestas.innerHTML = respuestasgeneradas;
}
const verificar = () => {
    const incisoshtml = document.getElementsByName("respuestas");
    const incisos = [...incisoshtml]
    if (!preguntas[preguntaActual].imagen && incisos.length > 0) {
        try {
            if (preguntaActual == 0) {
                if (incisos.find(inciso => inciso.checked).value == 0) {
                    return router(0)
                }
            }
            else {
                preguntas[preguntaActual].seleccionada= parseInt(incisos.find(inciso => inciso.checked).value);
                puntaje += parseInt(incisos.find(inciso => inciso.checked).value);
                console.log(puntaje);
            }
        }
        catch (e) {
            return false;
        }
    }
    return true;
}
const loadForm = () => {

}
