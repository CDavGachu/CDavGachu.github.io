let notasJSON;
notasJSON = JSON.parse(localStorage.getItem('notas'));
if(!notasJSON){
    notasJSON = [];
}


const resize = () => {
    const textarea = document.getElementById("note");
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
}

const loadNotas = () => {
    const notas = document.getElementById("notas");
    notas.innerHTML = `
    <div class="titleWithIcon">
        <svg class="titleIcon purple" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 72 72" width="64px" height="64px"><path d="M 22 14 C 17.59 14 14 17.59 14 22 L 14 50 C 14 54.41 17.59 58 22 58 L 42 58 L 42 50 C 42 45.59 45.59 42 50 42 L 58 42 L 58 22 C 58 17.59 54.41 14 50 14 L 22 14 z M 28 26 L 44 26 C 45.104 26 46 26.896 46 28 C 46 29.104 45.104 30 44 30 L 28 30 C 26.896 30 26 29.104 26 28 C 26 26.896 26.896 26 28 26 z M 28 33.5 L 44 33.5 C 45.104 33.5 46 34.396 46 35.5 C 46 36.604 45.104 37.5 44 37.5 L 28 37.5 C 26.896 37.5 26 36.604 26 35.5 C 26 34.396 26.896 33.5 28 33.5 z M 28 41 L 36 41 C 37.104 41 38 41.896 38 43 C 38 44.104 37.104 45 36 45 L 28 45 C 26.896 45 26 44.104 26 43 C 26 41.896 26.896 41 28 41 z M 50 46 C 47.79 46 46 47.79 46 50 L 46 57.869141 C 46.69 57.689141 47.320078 57.340078 47.830078 56.830078 L 56.830078 47.830078 C 57.340078 47.320078 57.689141 46.69 57.869141 46 L 50 46 z"/></svg>
        <h3>Notas</h3>
    </div>
    
    `;
    console.log(notasJSON);
    notasJSON.forEach((nota,i) => {
        let html = 
        `
        <article id="${"nota"+i}" class="notes">
            <div>
                <b>${nota.fecha}</b>
                <textarea id="${"txa"+i}" rows="1" onblur="actualizarNota(id)">${nota.contenido}</textarea>
                </div>
                </article>
                `;
                // <button id="${i}" onclick="deleteNote(id)">
                //     <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 72 72" width="64px" height="64px"><path d="M 32.5 9 C 28.364 9 25 12.364 25 16.5 L 25 18 L 17 18 C 14.791 18 13 19.791 13 22 C 13 24.209 14.791 26 17 26 L 17.232422 26 L 18.671875 51.916016 C 18.923875 56.449016 22.67875 60 27.21875 60 L 44.78125 60 C 49.32125 60 53.076125 56.449016 53.328125 51.916016 L 54.767578 26 L 55 26 C 57.209 26 59 24.209 59 22 C 59 19.791 57.209 18 55 18 L 47 18 L 47 16.5 C 47 12.364 43.636 9 39.5 9 L 32.5 9 z M 32.5 16 L 39.5 16 C 39.775 16 40 16.224 40 16.5 L 40 18 L 32 18 L 32 16.5 C 32 16.224 32.225 16 32.5 16 z M 36 28 C 37.104 28 38 28.896 38 30 L 38 47.923828 C 38 49.028828 37.104 49.923828 36 49.923828 C 34.896 49.923828 34 49.027828 34 47.923828 L 34 30 C 34 28.896 34.896 28 36 28 z M 27.392578 28.001953 C 28.459578 27.979953 29.421937 28.827641 29.460938 29.931641 L 30.085938 47.931641 C 30.123938 49.035641 29.258297 49.959047 28.154297 49.998047 C 28.131297 49.999047 28.108937 50 28.085938 50 C 27.012938 50 26.125891 49.148359 26.087891 48.068359 L 25.462891 30.068359 C 25.424891 28.964359 26.288578 28.040953 27.392578 28.001953 z M 44.607422 28.001953 C 45.711422 28.039953 46.575109 28.964359 46.537109 30.068359 L 45.912109 48.068359 C 45.874109 49.148359 44.986063 50 43.914062 50 C 43.891062 50 43.868703 49.999047 43.845703 49.998047 C 42.741703 49.960047 41.876063 49.035641 41.914062 47.931641 L 42.539062 29.931641 C 42.577062 28.827641 43.518422 27.979953 44.607422 28.001953 z"/></svg>
                // </button>
        notas.innerHTML += html;
    });
}

const deleteNote = (id) => {
    notasJSON.splice(id, 1);
    localStorage.setItem('notas', JSON.stringify(notasJSON));
    loadNotas();
}

const guardarNota = () => {
    
    const textarea = document.getElementById("note");
    const fecha = document.getElementById("date");
    if(textarea.value.trim() == "")
        return;
    const nota = {
        "fecha" : getDate(),
        "contenido" : textarea.value
    };

    notasJSON.unshift(nota);
    localStorage.setItem('notas', JSON.stringify(notasJSON));
    textarea.value = "";
    fecha.innerHTML = getDate();
    loadNotas();
}

const actualizarNota = (id) => {
    const textarea = document.getElementById(id);
    const i = id.substring(3);
    console.log(i)
    //const fecha = document.getElementById("date"+i);

    notasJSON[i].contenido = textarea.value;
    localStorage.setItem('notas', JSON.stringify(notasJSON));
}