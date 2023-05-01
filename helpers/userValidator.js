let isp = false;
let validated = false;
const isPsico = async () => {
    return await validateP();
}

const validateP = async () => {
    if(validated)
        return isp;
    
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+localStorage.getItem("access"));
    
    let requestOptions = {
        method: 'GET',
        headers: myHeaders
    };
    
    isp = await fetch("https://fz853w9zuj.execute-api.us-east-2.amazonaws.com/dev/user/permission", requestOptions)
        .then(response => response.json())
        .then(result => {
            validated = true;
            console.log(result);
            console.log(result.message == "Unauthorized");
            return !(result.message == "Unauthorized")
        })
        .catch(error => false);
    return isp;
}