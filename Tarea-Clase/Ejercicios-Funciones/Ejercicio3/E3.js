

function saludar(){
    let name = document.getElementById("nombre").value
    let lastname = document.getElementById("apellido").value

    document.getElementById("Result").innerText = "Coordial saludo a " + name + " " + lastname
}

function Sumar(){
    let n1 = parseInt(document.getElementById("numero1").value)
    let n2 = parseInt(document.getElementById("numero2").value)

    let suma = n1 + n2

    document.getElementById("resultado").innerText = "Resultado de la suma = " + suma
}

function Restar(){
    let n1 = parseInt(document.getElementById("numero1").value)
    let n2 = parseInt(document.getElementById("numero2").value)

    let resta = n1 - n2

    document.getElementById("resultado").innerHTML = "Resultado de la resta = " + resta
}
