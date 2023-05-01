console.log("Fui cargado");

let currentDate = new Date();

const onMonthChange = () => {
	const monthDate = new Date(monthInput.value);
	currentDate = new Date();
	currentDate.setDate(1);
	currentDate.setMonth(monthDate.getMonth() + 1);
	currentDate.setFullYear(monthDate.getFullYear());
	const firstDayOfMonth = new Date(currentDate);
	firstDayOfMonth.setDate(1);
	const dayOfWeek = firstDayOfMonth.getDay();
	const daysUntilSunday = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;
	currentDate.setDate(1 + daysUntilSunday);

	console.log(currentDate.toLocaleString());

	updateWeekTable();
}

const fetchDatesByWeek = async () => {
	let myHeaders = new Headers();
	myHeaders.append("Authorization", "Bearer "+localStorage.getItem("access"));

	let requestOptions = {
		method: 'GET',
		headers: myHeaders
	};

	return await fetch(`https://fz853w9zuj.execute-api.us-east-2.amazonaws.com/dev/citas/psico-dias?limit=${getSQLDate(currentDate)}`, requestOptions)
		.then(response => response.json())
		.then(result => {
			if(result.message.includes("Unauthorized"))
				loadNormal();
			console.log(result);
			return result.result;
		})
		.catch(error => console.log('error', error));
}

const generateWeekDates = async () => {
	const dates = await fetchDatesByWeek();
	const weekDates = document.getElementById("datesOfWeek");
	weekDates.innerHTML = "";
	let lastDate = "";
	dates.forEach(cita => {
		let start = getDateByISO(cita.fecha)
		if(lastDate != start){
			lastDate = start;
			weekDates.innerHTML+= `<h4>${start}</h4>`
		}
		weekDates.innerHTML += `
		<div class="dateCard">
			<div class="dateHeader">
				<p>${cita.hora} - ${cita.hora_fin}</p>
			</div>
			<div class="dateMain">
				<img src="./src/avatars/avatar${cita.avatar}.png" alt="">
				<div class="dateUser">
					<p class="userFirstName">${cita.firstName}</p>
					<p class="userLastName">${cita.lastName}</p>
				</div>
			</div>
			<div class="dateBottom">
				<div onclick="window.location.href = 'mailto:${cita.email}'">
					<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 72 72" width="64px" height="64px"><path d="M42.16 38.64l16.01 16.02C56.72 55.55 54.93 56 52.78 56H19.22c-2.15 0-3.94-.45-5.39-1.34l16.01-16.02c3.39 3.11 4.32 3.35 6.16 3.35S38.77 41.75 42.16 38.64zM61.99 25.24v21.55c0 1.7-.28 3.19-.85 4.45L45.42 35.52l15.43-15.31C61.61 21.59 61.99 23.27 61.99 25.24zM26.58 35.52L10.86 51.24c-.57-1.26-.85-2.75-.85-4.45V25.24c0-1.97.38-3.65 1.14-5.03L26.58 35.52zM32.69 35.42C27.72 30.66 14.33 17.1 14.33 17.1c1.35-.72 2.98-1.07 4.89-1.07h33.56c1.91 0 3.54.35 4.89 1.07 0 0-13.39 13.56-18.36 18.32-1.25 1.21-2.12 1.91-3.31 1.73C34.81 37.33 33.94 36.63 32.69 35.42z"/></ svg>
				</div>
				<div>
					<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 72 72" width="64px" height="64px"><path d="M12 28h48v12L43 57H20c-4.41 0-8-3.59-8-8V28zM26.5 50.5c1.381 0 2.5-1.119 2.5-2.5 0-1.381-1.119-2.5-2.5-2.5S24 46.619 24 48C24 49.381 25.119 50.5 26.5 50.5zM26.5 44c1.381 0 2.5-1.119 2.5-2.5 0-1.381-1.119-2.5-2.5-2.5S24 40.119 24 41.5C24 42.881 25.119 44 26.5 44zM26.5 37.5c1.381 0 2.5-1.119 2.5-2.5 0-1.381-1.119-2.5-2.5-2.5S24 33.619 24 35C24 36.381 25.119 37.5 26.5 37.5zM45 50c1.104 0 2-.896 2-2s-.896-2-2-2H34c-1.104 0-2 .896-2 2s.896 2 2 2H45zM44 43.5c1.104 0 2-.896 2-2s-.896-2-2-2H34c-1.104 0-2 .896-2 2s.896 2 2 2H44zM44 37c1.104 0 2-.896 2-2s-.896-2-2-2H34c-1.104 0-2 .896-2 2s.896 2 2 2H44zM60 24H12v-1c0-4.411 3.589-8 8-8h32c4.411 0 8 3.589 8 8V24zM61.707 43.529l3.633 3.647 1.107-1.135c.553-.582.597-1.383.044-1.936l-1.793-1.807c-.495-.495-1.325-.422-1.863.116L61.707 43.529zM46.215 63.171c-.335.131-.713-.247-.568-.582L46.251 59l14.387-14.401 3.656 3.641L49.906 62.626 46.215 63.171z"/></ svg>
				</div>
				<div>
					<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 72 72" width="64px" height="64px"><path d="M 32.5 9 C 28.364 9 25 12.364 25 16.5 L 25 18 L 17 18 C 14.791 18 13 19.791 13 22 C 13 24.209 14.791 26 17 26 L 17.232422 26 L 18.671875 51.916016 C 18.923875 56.449016 22.67875 60 27.21875 60 L 44.78125 60 C 49.32125 60 53.076125 56.449016 53.328125 51.916016 L 54.767578 26 L 55 26 C 57.209 26 59 24.209 59 22 C 59 19.791 57.209 18 55 18 L 47 18 L 47 16.5 C 47 12.364 43.636 9 39.5 9 L 32.5 9 z M 32.5 16 L 39.5 16 C 39.775 16 40 16.224 40 16.5 L 40 18 L 32 18 L 32 16.5 C 32 16.224 32.225 16 32.5 16 z M 36 28 C 37.104 28 38 28.896 38 30 L 38 47.923828 C 38 49.028828 37.104 49.923828 36 49.923828 C 34.896 49.923828 34 49.027828 34 47.923828 L 34 30 C 34 28.896 34.896 28 36 28 z M 27.392578 28.001953 C 28.459578 27.979953 29.421937 28.827641 29.460938 29.931641 L 30.085938 47.931641 C 30.123938 49.035641 29.258297 49.959047 28.154297 49.998047 C 28.131297 49.999047 28.108937 50 28.085938 50 C 27.012938 50 26.125891 49.148359 26.087891 48.068359 L 25.462891 30.068359 C 25.424891 28.964359 26.288578 28.040953 27.392578 28.001953 z M 44.607422 28.001953 C 45.711422 28.039953 46.575109 28.964359 46.537109 30.068359 L 45.912109 48.068359 C 45.874109 49.148359 44.986063 50 43.914062 50 C 43.891062 50 43.868703 49.999047 43.845703 49.998047 C 42.741703 49.960047 41.876063 49.035641 41.914062 47.931641 L 42.539062 29.931641 C 42.577062 28.827641 43.518422 27.979953 44.607422 28.001953 z"/></ svg>
				</div>
			</div>
		</div>
		`;
	})
	
}
function updateWeekTable() {
	const weekTable = document.getElementById("datesByWeek");
	weekTable.innerHTML = `
  <tr>
    <th>L</th>
    <th>M</th>
    <th>X</th>
    <th>J</th>
    <th>V</th>
    <th>S</th>
    <th>D</th>
  </tr>
`;


	const startDate = new Date(currentDate);
	startDate.setDate(startDate.getDate() - startDate.getDay() - 6);
	const endDate = new Date(startDate);
	endDate.setDate(endDate.getDate() + 6);

	let currentDay = startDate;

	while (currentDay <= endDate) {
		const weekRow = document.createElement("tr");

		for (let i = 0; i < 7; i++) {
			const dayCell = document.createElement("td");
			const day = currentDay.getDate();

			if (currentDay.getMonth() === currentDate.getMonth()) {
				dayCell.textContent = day;
			} else {
				dayCell.classList.add("other-month");
				dayCell.textContent = day;
			}
			dayCell.id = getSQLDate(currentDay);
			weekRow.appendChild(dayCell);
			currentDay.setDate(currentDay.getDate() + 1);
		}
		weekRow.id = "weekRow"
		weekTable.appendChild(weekRow);
	}
	generateWeekDates();
}

const nextWeek = () => {
	currentDate.setDate(currentDate.getDate() + 7);
	console.log(currentDate.toLocaleDateString());
	const weekDates = document.getElementById("datesOfWeek");
	weekDates.innerHTML = "";

	const month = currentDate.getMonth() + 1;
	const formattedDate = `${currentDate.getFullYear()}-${month.toString().padStart(2, "0")}`;
	monthInput.value = formattedDate;

	updateWeekTable();
}

const prevWeek = () => {
	currentDate.setDate(currentDate.getDate() - 7);
	console.log(currentDate.toLocaleDateString());
	const weekDates = document.getElementById("datesOfWeek");
	weekDates.innerHTML = "";
	
	const month = currentDate.getMonth() + 1;
	const formattedDate = `${currentDate.getFullYear()}-${month.toString().padStart(2, "0")}`;
	monthInput.value = formattedDate;

	updateWeekTable();
}

const today = new Date();
const todayMonth = today.getMonth() + 1;
const todayFormattedDate = `${today.getFullYear()}-${todayMonth.toString().padStart(2, "0")}`;

const initializeMonth = () => {
	const monthInput = document.getElementById("monthInput");
	monthInput.value = todayFormattedDate;
}
initializeMonth();
updateWeekTable();

let searched = false;
let users = [];
const searchPath = `<path d="M 31 11 C 19.973 11 11 19.973 11 31 C 11 42.027 19.973 51 31 51 C 34.974166 51 38.672385 49.821569 41.789062 47.814453 L 54.726562 60.751953 C 56.390563 62.415953 59.088953 62.415953 60.751953 60.751953 C 62.415953 59.087953 62.415953 56.390563 60.751953 54.726562 L 47.814453 41.789062 C 49.821569 38.672385 51 34.974166 51 31 C 51 19.973 42.027 11 31 11 z M 31 19 C 37.616 19 43 24.384 43 31 C 43 37.616 37.616 43 31 43 C 24.384 43 19 37.616 19 31 C 19 24.384 24.384 19 31 19 z"/>`;
const cancelPath = `<path d="M 20 16 C 18.976125 16 17.952375 16.390875 17.171875 17.171875 C 15.609875 18.732875 15.609875 21.266125 17.171875 22.828125 L 30.34375 36 L 17.171875 49.171875 C 15.609875 50.732875 15.609875 53.266125 17.171875 54.828125 C 17.951875 55.609125 18.977 56 20 56 C 21.023 56 22.048125 55.609125 22.828125 54.828125 L 36 41.65625 L 49.171875 54.828125 C 49.951875 55.609125 50.977 56 52 56 C 53.023 56 54.048125 55.609125 54.828125 54.828125 C 56.390125 53.267125 56.390125 50.733875 54.828125 49.171875 L 41.65625 36 L 54.828125 22.828125 C 56.390125 21.267125 56.390125 18.733875 54.828125 17.171875 C 53.268125 15.609875 50.732875 15.609875 49.171875 17.171875 L 36 30.34375 L 22.828125 17.171875 C 22.048125 16.390875 21.023875 16 20 16 z"/>`;
const search = async ()=> {
	const q = document.getElementById("q");
	const btn = document.getElementById("searchBtn");
	const results = document.getElementById("results");
	const searchUser = document.getElementById("searchUser");
	const resultsContainer = document.getElementById("resultsContainer");

	if(searched) {
		results.innerHTML = "";
		btn.innerHTML = searchPath;
		resultsContainer.style.display = "none";
		searchUser.classList.remove("searched")
		q.value = "";
		return searched = false;
	}
	searched = true;
	btn.innerHTML = cancelPath;
	let myHeaders = new Headers();
	myHeaders.append("Authorization", "Bearer "+localStorage.getItem("access"));

	let requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'manual'
	};

	users = await fetch("https://fz853w9zuj.execute-api.us-east-2.amazonaws.com/dev/search/user?q="+q.value, requestOptions)
		.then(response => response.json())
		.then(async result => {
			console.log(result);
			if(result.message.includes("token has expired"))
				if(await verifySession())
					return location.reload();
			
			return result.result;
		})
		.catch(error => console.log('error', error));
	if(users.length > 0){
		resultsContainer.style.display = "block";
		searchUser.classList.add("searched")

		users.forEach((user,i) => {
			results.innerHTML += `
			<div id="result${i}" class="result">
				<div>
					<img src="./src/avatars/avatar${user.avatar}.png" alt="">
					<p>${user.firstName + " "+user.lastName}</p>
				</div>
				<svg id="${i}" onclick="selectUser(id)" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 72 72" width="64px" height="64px"><path d="M57.658,12.643c1.854,1.201,2.384,3.678,1.183,5.532l-25.915,40c-0.682,1.051-1.815,1.723-3.064,1.814	C29.764,59.997,29.665,60,29.568,60c-1.146,0-2.241-0.491-3.003-1.358L13.514,43.807c-1.459-1.659-1.298-4.186,0.36-5.646	c1.662-1.46,4.188-1.296,5.646,0.361l9.563,10.87l23.043-35.567C53.329,11.971,55.806,11.442,57.658,12.643z"/></ svg>
			</div>
			`;
		})
	}
}
let searchUserHTML;
let userSelected = "";
const selectUser = (id) => {
	userSelected = id;
	const su = document.getElementById("searchUser");
	searchUserHTML = su.innerHTML;
	su.innerHTML = document.getElementById("result"+id).outerHTML;
	
	const results = document.getElementById("results");
	const resultsContainer = document.getElementById("resultsContainer");
	
	su.classList.remove("searched")
	results.innerHTML = "";
	resultsContainer.style.display = "none";
	
	const result = document.getElementById("result"+id);

	const btn = document.getElementById(id);
	btn.innerHTML = cancelPath;
	btn.setAttribute("onclick", "unselect(id)");
	su.classList.add("searchSelected")
	result.classList.add("resultSelected")
}
const unselect = () => {
	userSelected = "";
	const su = document.getElementById("searchUser");
	su.innerHTML = searchUserHTML;
	su.classList.remove("searchSelected");
	
	const btn = document.getElementById("searchBtn");
	btn.innerHTML = searchPath;
}
let dateHour = "";
const selectPHour = (id) => {
    const selected = document.getElementById(id);
    if (selected.classList.contains("ocupada"))
        return;

    if (lastSelected)
        lastSelected.classList.remove("hSelected");

    selected.classList.add("hSelected");
    lastSelected = selected;
    if (id.includes("SH")){
        const hora = id.substring(0, id.indexOf("S"));
        dateHour = (hora < 10 ? "0"+hora : hora) + ":30:00.000";
    }
    if (id.includes("FH")){
        const hora = id.substring(0, id.indexOf("F"));
        dateHour = (hora < 10 ? "0"+hora : hora) + ":00:00.000";
    }

    console.log(dateToDate, dateHour)
}
let pduration = "";
const selectPDuration = (id) => {
    const sd1 = document.getElementById("sd1");
    const sd2 = document.getElementById("sd2");
    const sd3 = document.getElementById("sd3");
    if (id == "sd1") {
        sd1.classList.add("selected");
        sd2.classList.remove("selected");
        sd3.classList.remove("selected");
        pduration = 30;
    }
    if (id == "sd2") {
        sd1.classList.remove("selected");
        sd2.classList.add("selected");
        sd3.classList.remove("selected");
        pduration = 60;
    }
    if (id == "sd3") {
        sd1.classList.remove("selected");
        sd2.classList.remove("selected");
        sd3.classList.add("selected");
        pduration = 120;
    }
}
const loadDayDates = async () => {
	const inputDay = document.getElementById("schDate");
	if(!inputDay.value){
		inputDay.value = getCurrentDate();
	}
	const hours = document.getElementById("hours");
	hours.innerHTML = "";

	for (let index = 17; index < 19; index++) {
        let hour =
            `
        <div class="hourInfo">
            <div class="time">
                ${index < 12 ? index + ":00 am" : index > 12 ? (index - 12) + ":00 pm" : index + ":00 pm"}
            </div>
            <div id="hour${index}" class="hour">
                <div id="${index}FH" class="half firstHalf" onclick="selectPHour(id)">

                </div>
                <div id="${index}SH" class="half secondHalf" onclick="selectPHour(id)">

                </div>
            </div>
        </div>
        `;
        hours.innerHTML += hour;
    }

	let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + localStorage.getItem("access"));

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    appointments = await fetch(`https://fz853w9zuj.execute-api.us-east-2.amazonaws.com/dev/citas/horas?fecha=${inputDay.value}`, requestOptions)
        .then(response => response.json())
        .then(result => result)
        .catch(error => {
            console.error(error);
            verifySession();
        });

    appointments.hours.forEach((cita) => {
        const hora = parseInt(cita.hora.substring(0, cita.hora.indexOf(":")));
        const minuto = parseInt(cita.hora.substring(3, 5));
        console.log(hora, minuto);
        //if cita duracion 30 entonces div fh coloreado
        if (cita.duracion >= 30)
            document.getElementById((minuto == 30 ? hora + "SH" : hora + "FH")).classList.add("ocupada");
        if (cita.duracion >= 60)
            document.getElementById((minuto == 30 ? (hora + 1) + "FH" : hora + "SH")).classList.add("ocupada");
        if (cita.duracion >= 90)
            document.getElementById((minuto == 30 ? (hora + 1) + "SH" : (hora + 1) + "FH")).classList.add("ocupada");
        if (cita.duracion == 120)
            document.getElementById((minuto == 30 ? (hora + 2) + "FH" : (hora + 1) + "SH")).classList.add("ocupada");

        //if cita duracion 60 entonces div fh y sh coloreado
        //if cita duracion 120 entonces div fh y sh, de dos, coloreado

    })
}

const submitPAppointment = async () => {
    if(pduration == "" || dateHour == "")
		return;
	const inputDay = document.getElementById("schDate");

    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + localStorage.getItem("access"));

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
    };

    console.log(`idUser=${users[userSelected].idUser}&paciente=${users[userSelected].firstName}&fecha_hora=${getISODate(dateHour, inputDay.value, '-06:00')}&duracion=${pduration}`);
    await fetch(`https://fz853w9zuj.execute-api.us-east-2.amazonaws.com/dev/citas?idUser=${users[userSelected].idUser}&paciente=${users[userSelected].firstName}&fecha_hora=${getISODate(dateHour, inputDay.value, '-06:00')}&duracion=${pduration}`, requestOptions)
        .then(response => response.json())
        .then(async result => {
            console.log(result)
            if (result.message)
                if (result.message.includes("token has expired"))
                    if (await verifySession())
                        return submitAppointment();
            if (result.message.includes("exitosamente")){
                loadDayDates();
                updateWeekTable();
				unselect();
            }
        })
        .catch(error => console.log('error', error));
}
loadDayDates();