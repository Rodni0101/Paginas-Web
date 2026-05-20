function cambiarColor(){
    let color = "#" + Math.floor(Math.random() * 1677773).toString(16)

    document.body.style.backgroundColor = color;
}