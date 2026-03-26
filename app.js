
// VARIABLES

let num1 = asignNumbers()
let num2 = asignNumbers()
let operator = ""


// ELEMENTOS DEL DOM

const display = document.querySelector("#display")
const botones = document.querySelectorAll("button")
const btn_clear = document.querySelector("#btn-clear")
const number_btns = document.querySelectorAll(".number-btn")
const operators = document.querySelectorAll(".operation-btn")

// Evento para que al pulsar un boton aparezca el valor en pantalla
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        if (display.value === "0") {
            display.value = boton.textContent
        } else {
            display.value += boton.textContent
        }

        let num1 = asignNumbers()
        let num2 = asignNumbers()


    })
})


function asignNumber(value) {

    let number = ""

    let arrayNumbers = Array.from(number_btns)

    arrayNumbers.forEach(numero => {
        
    })


    if (arrayNumbers.includes(value)) {

    }

}










// Evento para borrar el display
btn_clear.addEventListener("click", cleanDisplay)


// OPERACIONES

function sum(num1, num2) {
    return num1 + num2
}

function rest(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function operate(num1, num2, operator) {

    switch (operator) {
        case "+":
            sum(num1, num2)
            break

        case "-":
            rest(num1, num2)
            break

        case "*":
            multiply(num1, num2)
            break

        case "/":
            divide(num1, num2)
            break

        default:
            return 0
    }
}

function cleanDisplay() {
    display.value = "0"
}

function asignNumbers() {

    let num = ""

    number_btns.forEach(boton => {
        boton.addEventListener("click", () => {
            num += boton.textContent
        })
    })

    return parseInt(num)
}

