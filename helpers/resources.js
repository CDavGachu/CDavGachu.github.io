let loaded = false;
let phrases = [];
let videoHTML = "", breathHTML = "", podcastHTML = "", phrasesHTML = "";

const loadMiniComponents = async () => {
    const videoHtmlUrl = new URL("../components/resources/video.html", import.meta.url);
    const breathHtmlUrl = new URL("../components/resources/breathing.html", import.meta.url);
    const podcastHtmlUrl = new URL("../components/resources/podcast.html", import.meta.url);
    const phrasesHtmlUrl = new URL("../components/resources/phrases.html", import.meta.url);

    videoHTML = await fetch(videoHtmlUrl).then(response => response.text());
    breathHTML = await fetch(breathHtmlUrl).then(response => response.text());
    podcastHTML = await fetch(podcastHtmlUrl).then(response => response.text());
    phrasesHTML = await fetch(phrasesHtmlUrl).then(response => response.text());

    loaded = true;
}

window.fetchPhrases = async (limit = 0) => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+localStorage.getItem("access"));

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'manual'
    };

    return await fetch("https://fz853w9zuj.execute-api.us-east-2.amazonaws.com/dev/resources/phrases?limit="+limit, requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result.message.includes("token") || result.message.includes("Unauthorized"))
                return verifySession();
            return result.result;
        })
        .catch(error => console.log('error', error));
}
window.savePhrase = (id) => {
    let saved = localStorage.getItem("saved");
    saved = JSON.parse(saved);
    if(saved.find( element => element.id == id))
    return;
    saved.push({
        id,
        "tipo" : "frase"
    });
    localStorage.setItem("saved", JSON.stringify(saved));
    fetchSaved();
}
window.unsavePhrase = (id) => {
    let saved = localStorage.getItem("saved");
    saved = JSON.parse(saved);
    saved.splice(id, 1);
    localStorage.setItem("saved", JSON.stringify(saved));
    fetchSaved();
    
}
window.fetchSaved = async () => {
    const phrasesContainer = document.getElementById("resSaved");
    if(phrases.length == 0)
        phrases = await fetchPhrases();

    const savedPhrases = JSON.parse(localStorage.getItem("saved"));
    
    phrasesContainer.innerHTML = "";
    if(savedPhrases.length == 0)
        return phrasesContainer.innerHTML = "<i>No hay frases guardadas</i>"
    savedPhrases.forEach((element, i) => {
        phrasesContainer.innerHTML += `
        <article class="phrase">
            <div>
                <p>${phrases[element.id].frase}</p>
                <i>${phrases[element.id].autor}</i>
            </div>
            <svg id="${i}" onclick="unsavePhrase(id)" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 72 72" width="64px" height="64px"><path d="M 20 16 C 18.976125 16 17.952375 16.390875 17.171875 17.171875 C 15.609875 18.732875 15.609875 21.266125 17.171875 22.828125 L 30.34375 36 L 17.171875 49.171875 C 15.609875 50.732875 15.609875 53.266125 17.171875 54.828125 C 17.951875 55.609125 18.977 56 20 56 C 21.023 56 22.048125 55.609125 22.828125 54.828125 L 36 41.65625 L 49.171875 54.828125 C 49.951875 55.609125 50.977 56 52 56 C 53.023 56 54.048125 55.609125 54.828125 54.828125 C 56.390125 53.267125 56.390125 50.733875 54.828125 49.171875 L 41.65625 36 L 54.828125 22.828125 C 56.390125 21.267125 56.390125 18.733875 54.828125 17.171875 C 53.268125 15.609875 50.732875 15.609875 49.171875 17.171875 L 36 30.34375 L 22.828125 17.171875 C 22.048125 16.390875 21.023875 16 20 16 z"/></ svg>
        </article>
        `;
    })
}
const loadPhrases = async () => {
    const phrasesContainer = document.getElementById("resPhrases");
    phrases = await fetchPhrases(5);
    
    if(!localStorage.getItem("saved"))
        localStorage.setItem("saved", "[]")

    phrasesContainer.innerHTML = '';

    phrases.forEach((element, i) => {
        phrasesContainer.innerHTML += `
        <article class="phrase">
            <div>
                <p>${element.frase}</p>
                <i>${element.autor}</i>
            </div>
            <svg id="${i}" onclick="savePhrase(id)" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 72 72" width="64px" height="64px"><path d="M46.454,11C49.517,11,52,13.483,52,16.546v40.646c0,3.009-3.617,4.54-5.777,2.444L36,49.717l-10.223,9.919	C23.617,61.731,20,60.201,20,57.191V16.546C20,13.483,22.483,11,25.546,11H46.454z"/></ svg>
        </article>
        `;
    })

    fetchSaved();
}
window.openResource = async (page) => {
    await loadMiniComponents();
    const firstC = document.getElementById("resources");
    if(page == 0)
        firstC.innerHTML = videoHTML
    if(page == 1)
        firstC.innerHTML = breathHTML
    if(page == 2)
        firstC.innerHTML = podcastHTML
    if(page == 3) {
        firstC.innerHTML = phrasesHTML
        loadPhrases();
    }
}