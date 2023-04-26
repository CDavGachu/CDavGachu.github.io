const loadHome = async () => {
    loadNotas();
    var myHeaders = new Headers();
    if(!localStorage.getItem("access")){
        console.log("Verifying session");
        await verifySession();

    }

    myHeaders.append("Authorization", "Bearer " + localStorage.getItem("access"));

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://fz853w9zuj.execute-api.us-east-2.amazonaws.com/dev/user?accessToken=" + localStorage.getItem("access"), requestOptions)
        .then(response => response.json())
        .then(async (result) => {
            console.log(result)
            const { message, userData } = result;
            if(message.includes("Error") || message.includes("token has expired")){
                console.log("errorrrrrrr");
                if(await refreshToken())
                    loadHome();
                else
                    toSignin();
            }
            else {
                const welcome = document.getElementById("welcome");
                welcome.classList.remove("loadingText");
                welcome.innerHTML = `
                <svg class="titleIcon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px"><path d="M 15 3 C 8.3844276 3 3 8.3844276 3 15 C 3 21.615572 8.3844276 27 15 27 C 21.615572 27 27 21.615572 27 15 C 27 8.3844276 21.615572 3 15 3 z M 15 5 C 20.534692 5 25 9.4653079 25 15 C 25 20.534692 20.534692 25 15 25 C 9.4653079 25 5 20.534692 5 15 C 5 9.4653079 9.4653079 5 15 5 z M 10.5 13 A 1.5 1.5 0 0 0 9 14.5 A 1.5 1.5 0 0 0 10.5 16 A 1.5 1.5 0 0 0 12 14.5 A 1.5 1.5 0 0 0 10.5 13 z M 19.5 13 A 1.5 1.5 0 0 0 18 14.5 A 1.5 1.5 0 0 0 19.5 16 A 1.5 1.5 0 0 0 21 14.5 A 1.5 1.5 0 0 0 19.5 13 z M 11.994141 18.992188 A 1.0001 1.0001 0 0 0 11.474609 20.808594 C 12.278916 21.393119 13.483333 22 15 22 C 16.516667 22 17.721548 21.393632 18.525391 20.808594 A 1.0002946 1.0002946 0 1 0 17.347656 19.191406 C 16.777499 19.606368 15.983333 20 15 20 C 14.016667 20 13.222084 19.606881 12.650391 19.191406 A 1.0001 1.0001 0 0 0 12.09375 18.992188 A 1.0001 1.0001 0 0 0 11.994141 18.992188 z"/></svg>
                ¡Bienvenido, ${userData.UserAttributes.find(attribute => attribute.Name == "given_name").Value+"!"}`;
                document.getElementById("homeContent").classList.add("cabecera","cVisible");
                document.getElementById("loadingHTML").style.display = "none";
                sessionStorage.setItem("user", userData.Username);
                sessionStorage.setItem("given_name", userData.UserAttributes.find(attribute => attribute.Name == "given_name").Value);
                sessionStorage.setItem("family_name", userData.UserAttributes.find(attribute => attribute.Name == "family_name").Value);
            }
        })
        .catch(error => console.log('error', error));
}