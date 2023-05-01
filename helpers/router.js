let firstLoad = true;

let homeHTML, calendarHTML, callHTML, formHTML, resHTML, landingHTML, loggedHTML;
let loaded = false;
const loadCalendar = async () => {
    console.log("Si es o no es:", await isPsico());
    const calendarHtmlUrl = new URL(`../components/calendar${await isPsico() ? "Psico" : ""}.html`, import.meta.url);
    console.log(calendarHtmlUrl.toString());
    calendarHTML = await fetch(calendarHtmlUrl).then(response => response.text());
}
const loadComponents = async () => {
    
    const homeHtmlUrl = new URL("../components/home.html", import.meta.url);
    const formHtmlUrl = new URL("../components/form.html", import.meta.url);
    const resHtmlUrl = new URL("../components/resources.html", import.meta.url);
    const callHtmlUrl = new URL("../components/call.html", import.meta.url);
    const landingHtmlUrl = new URL("../components/landing.html", import.meta.url);
    const loggedHtmlUrl = new URL("../components/loggedIndex.html", import.meta.url);
    const calendarHtmlUrl = new URL(`../components/loading.html`, import.meta.url);
    
    calendarHTML = await fetch(calendarHtmlUrl).then(response => response.text());
    homeHTML = await fetch(homeHtmlUrl).then(response => response.text());
    formHTML = await fetch(formHtmlUrl).then(response => response.text());
    resHTML = await fetch(resHtmlUrl).then(response => response.text());
    callHTML = await fetch(callHtmlUrl).then(response => response.text());
    landingHTML = await fetch(landingHtmlUrl).then(response => response.text());
    loggedHTML = await fetch(loggedHtmlUrl).then(response => response.text());
    
    loaded = true;
}
window.loadFirst = ( landing ) => {
    console.log("Loading landing?", landing)
    const [ index ] = document.getElementsByTagName("body");
    if(landing)
        index.innerHTML = landingHTML;
    else 
        index.innerHTML = loggedHTML;
}
loadComponents();
window.router = async (page)=>{
    if(sessionStorage.getItem("page") && firstLoad)
        page = sessionStorage.getItem("page");
    else{
        sessionStorage.setItem("page", page);
    }
    firstLoad = false;
    
    const urlParams = new URLSearchParams(window.location.search);
    const grantCode = urlParams.get('code');

    if(!loaded){
        await loadComponents();
        if(!localStorage.getItem("refresh") && !grantCode)
            return loadFirst(true);
        else {
            await verifySession();
            loadFirst( false );
        }
    }


        
    const home = document.getElementById("btnHome");
    const form = document.getElementById("btnForm");
    const calendar = document.getElementById("btnCalendar");
    const resources = document.getElementById("btnRes");
    const call = document.getElementById("btnCall");
    
    form.classList.remove("navActive");
    home.classList.remove("navActive");
    calendar.classList.remove("navActive");
    resources.classList.remove("navActive");
    call.classList.remove("navActive");
    if(page == 0){
        app.innerHTML = homeHTML;
        home.classList.add("navActive");
        loadHome();  
    }
    if(page == 1) {
        app.innerHTML = formHTML;
        form.classList.add("navActive");
    }   
    if(page == 2){
        calendar.classList.add("navActive");
        console.log("es psico: ", await isPsico());
        await loadCalendar();
        app.innerHTML = calendarHTML;

        if(await isPsico()) {
            const script = document.createElement('script');
            script.src = './helpers/psicocal.js'
            document.body.appendChild(script);
        }
        else
            generarCalendario();

    }
    if(page == 3){
        app.innerHTML = resHTML;
        resources.classList.add("navActive");
    }
    if(page == 4){
        app.innerHTML = callHTML;
        call.classList.add("navActive");
        loadPhone();
    }

}