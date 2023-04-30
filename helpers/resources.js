console.log("HOLA PUTOS")

let loaded = false;
let videoHTML = "", breathHTML = "";

const loadMiniComponents = async () => {
    const videoHtmlUrl = new URL("../components/resources/video.html", import.meta.url);
    const breathHtmlUrl = new URL("../components/resources/breathing.html", import.meta.url);
    // const formHtmlUrl = new URL("../components/resources/form.html", import.meta.url);
    // const calendarHtmlUrl = new URL("../components/resources/calendar.html", import.meta.url);
    // const resHtmlUrl = new URL("../components/resources/resources.html", import.meta.url);
    // const callHtmlUrl = new URL("../components/resources/call.html", import.meta.url);
    // const landingHtmlUrl = new URL("../components/resources/landing.html", import.meta.url);
    // const loggedHtmlUrl = new URL("../components/resources/loggedIndex.html", import.meta.url);

    videoHTML = await fetch(videoHtmlUrl).then(response => response.text());
    breathHTML = await fetch(breathHtmlUrl).then(response => response.text());
    // formHTML = await fetch(formHtmlUrl).then(response => response.text());
    // calendarHTML = await fetch(calendarHtmlUrl).then(response => response.text());
    // resHTML = await fetch(resHtmlUrl).then(response => response.text());
    // callHTML = await fetch(callHtmlUrl).then(response => response.text());
    // landingHTML = await fetch(landingHtmlUrl).then(response => response.text());
    // loggedHTML = await fetch(loggedHtmlUrl).then(response => response.text());

    loaded = true;
}

window.openResource = async (page) => {
    await loadMiniComponents();
    const firstC = document.getElementById("resources");
    if(page == 0)
        firstC.innerHTML = videoHTML
    if(page == 1)
        firstC.innerHTML = breathHTML
    if(page == 2)
        firstC.innerHTML = videoHTML
    if(page == 3)
        firstC.innerHTML = videoHTML
    if(page == 4)
        firstC.innerHTML = videoHTML
    if(page == 5)
        firstC.innerHTML = videoHTML
}