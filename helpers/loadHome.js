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
                <svg class="titleIcon blue" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 72 72" width="64px" height="64px"><path d="M60.451,32.423C64.437,34.728,67,39.007,67,43.815c0,7.112-5.634,13.012-12.559,13.152c-2.19,0.044-33.615,0.044-35.803,0	C11.118,56.816,5,50.431,5,42.735c0-5.475,3.151-10.396,7.927-12.767c1.391-5.79,6.645-10.133,12.813-10.133	c0.404,0,0.808,0.019,1.209,0.057c3.461-4.763,8.965-7.617,14.991-7.617c10.244,0,18.579,8.335,18.579,18.58	C60.52,31.377,60.497,31.9,60.451,32.423z M28,33.552c0,1.105,0.896,2,2,2s2-0.895,2-2c0-1.105-0.896-2-2-2S28,32.448,28,33.552z M44.874,41.25c0.386-1.035-0.142-2.187-1.177-2.572c-1.035-0.386-2.187,0.142-2.571,1.177c-0.589,1.582-2.243,2.645-4.116,2.645	c-1.892,0-3.551-1.076-4.128-2.678c-0.375-1.04-1.521-1.58-2.561-1.203c-1.039,0.375-1.577,1.521-1.203,2.56	c1.147,3.183,4.319,5.322,7.892,5.322C40.546,46.5,43.706,44.39,44.874,41.25z M44,35.552c1.104,0,2-0.895,2-2c0-1.105-0.896-2-2-2	s-2,0.895-2,2C42,34.657,42.896,35.552,44,35.552z"/></svg>
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