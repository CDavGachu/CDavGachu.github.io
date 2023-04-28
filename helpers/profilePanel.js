const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    
    location.reload(true);
}

const openPanel = () => {
    const panel = document.getElementById("profilePanel");
    panel.style.display = "flex";
    panel.classList.add('growthPanel');
}
const closePanel = () => {
    const panel = document.getElementById("profilePanel");
    panel.classList.remove('growthPanel');
    panel.style.display = "none";
}
const openSettings = () => {
    const panel = document.getElementById("profilePanel");
    const firstPanel = document.getElementById("firstPanel");
    const settingsPanel = document.getElementById("settingsPanel");
    firstPanel.style.display = "none";
    settingsPanel.style.display = "block";

    panel.classList.add("openedSettings");

}
const closeSettings = () => {
    const panel = document.getElementById("profilePanel");
    const firstPanel = document.getElementById("firstPanel");
    const settingsPanel = document.getElementById("settingsPanel");
    firstPanel.style.display = "flex";
    settingsPanel.style.display = "none";

    panel.classList.remove("openedSettings");

}
const loadAvatar = ()=> {
    const avatarBtn = document.getElementById("avatarBtn");
    const avatarPanel = document.getElementById("avatarPanel");
    const avatarEdit = document.getElementById("editAvatar");

    avatarBtn.setAttribute("src", "./src/avatars/avatar"+localStorage.getItem("avatar") + ".png");
    avatarPanel.setAttribute("src", "./src/avatars/avatar"+localStorage.getItem("avatar") + ".png");
    avatarEdit.setAttribute("src", "./src/avatars/avatar"+localStorage.getItem("avatar") + ".png");
}
const updateProfilePic = (id) => {
    const avatar = id.substring(2);
    localStorage.setItem("avatar", avatar);
    loadAvatar();
}
document.addEventListener('mousedown', (event) => {
    let pp = document.getElementById('profilePanel');
    if (!pp.contains(event.target) && pp.style.display == "flex") {
        // Se hizo clic fuera de miDiv
        pp.style.display = "none";
  }
});