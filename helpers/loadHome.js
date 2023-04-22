const loadHome = async () => {
    loadNotas();
    var myHeaders = new Headers();
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
                welcome.innerHTML = `¡Bienvenido, ${userData.UserAttributes.find(attribute => attribute.Name == "given_name").Value+"!"}`;
                document.getElementById("homeContent").classList.add("cabecera","cVisible");
                document.getElementById("loadingHTML").style.display = "none";
                sessionStorage.setItem("user", userData.Username);
                sessionStorage.setItem("given_name", userData.UserAttributes.find(attribute => attribute.Name == "given_name").Value);
                sessionStorage.setItem("family_name", userData.UserAttributes.find(attribute => attribute.Name == "family_name").Value);
            }
        })
        .catch(error => console.log('error', error));
}