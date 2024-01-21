function toggleMode() {
    const html = document.documentElement //pegando html

    //botao light mode
    if (html.classList.contains("light")) {
        html.classList.remove("light")
    } else {
        html.classList.add("light")
    }

    //html.classList.toggle('light');

    //imagem light mode
    const img = document.querySelector("#profile img") // busca a imagem
    if (html.classList.contains("light")) {
        img.setAttribute("src", "./assets/avatarlight.png")
    } else {
        img.setAttribute("src", "./assets/avatar.png")
    }
}
