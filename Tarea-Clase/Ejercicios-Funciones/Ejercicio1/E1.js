function calcular(){
    let a = parseInt(document.getElementById("n1").value)
    let b = parseInt(document.getElementById("n2").value)

    let suma = a + b

    document.getElementById("resultado").innerText = "Resultado = " + suma
}