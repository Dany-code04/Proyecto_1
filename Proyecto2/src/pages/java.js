function calcular(operacion) {
    
    const valor1 = parseFloat(document.getElementById("valor1").value);
    const valor2 = parseFloat(document.getElementById("valor2").value);
    let resultado = 0;

    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Por favor, ingresa ambos valores.");
        return;
    }

    switch (operacion) {
        case 'suma':
            resultado = valor1 + valor2;
            break;
        case 'resta':
            resultado = valor1 - valor2;
            break;
        case 'multiplicacion':
            resultado = valor1 * valor2;
            break;
        case 'division':
            if (valor2 !== 0) {
                resultado = valor1 / valor2;
            } else {
                alert("No se puede dividir entre cero.");
                return;
            }
            break;
        default:
            alert("Operación no válida.");
            return;
    }

    document.getElementById("resultado").textContent = resultado;
}
