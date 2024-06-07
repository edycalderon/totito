let celdas = document.querySelectorAll('.col-4')
let rojo = document.querySelectorAll('.rojo')
let rojodos = document.querySelectorAll('.rojodos')
let rojoTres = document.querySelectorAll('.rojoTres')
let rojoD = document.querySelectorAll('.rojoD')
let rojoD2 = document.querySelectorAll('.rojoD2')
let rojoD3 = document.querySelectorAll('.rojo3')
let diagonal = document.querySelectorAll('.diagonal')
let diagonalD = document.querySelectorAll('.diagonalD')
let partidaNueva = document.querySelector('#partida')
let colorR = document.querySelector('.colorR')
let input1 = document.querySelector('.input1')
let input2 = document.querySelector('.input2')
let reiniciar = document.querySelector('.reiniciar')
let arreglo = [null, null, null, null, null, null, null, null, null]
let flag = true
let contador1 = 0
let contador2 = 0
let isBlock = ''



const validarGanador = () => {
    if ((arreglo[0] != null && arreglo[1] != null)
        && (arreglo[0] == arreglo[1])
        && (arreglo[1] == arreglo[2])) {
        if (flag == true) {
            alert('jugador O ganastes')
            contador2 = contador2 + 1
            input2.value = contador2
        } else {
            alert('jugador X ganastes')
            contador1 = contador1 + 1
            input1.value = contador1
        }
        color()

    } else if ((arreglo[3] != null && arreglo[4] != null)
        && (arreglo[3] == arreglo[4])
        && (arreglo[4] == arreglo[5])) {

        if (flag == true) {
            alert('jugador O ganastes')
            contador2 = contador2 + 1
            input2.value = contador2
        } else {
            alert('jugador X ganastes')
            contador1 = contador1 + 1
            input1.value = contador1
        }
        red()

    } else if ((arreglo[6] != null && arreglo[7] != null)
        && (arreglo[6] == arreglo[7])
        && (arreglo[7] == arreglo[8])) {

        if (flag == true) {
            alert('jugador O ganastes')
            contador2 = contador2 + 1
            input2.value = contador2
        } else {
            alert('jugador X ganastes')
            contador1 = contador1 + 1
            input1.value = contador1
        }
        redn()

    } else if ((arreglo[0] != null && arreglo[3] != null)
        && (arreglo[0] == arreglo[3])
        && (arreglo[3] == arreglo[6])) {

        if (flag == true) {
            alert('jugador O ganastes')
            contador2 = contador2 + 1
            input2.value = contador2
        } else {
            alert('jugador X ganastes')
            contador1 = contador1 + 1
            input1.value = contador1
        }
        redD()


    } else if ((arreglo[1] != null && arreglo[4] != null)
        && (arreglo[1] == arreglo[4])
        && (arreglo[4] == arreglo[7])) {

        if (flag == true) {
            alert('jugador O ganastes')
            contador2 = contador2 + 1
            input2.value = contador2
        } else {
            alert('jugador X ganastes')
            contador1 = contador1 + 1
            input1.value = contador1
        }
        redD2()

    } else if ((arreglo[2] != null && arreglo[5] != null)
        && (arreglo[2] == arreglo[5])
        && (arreglo[5] == arreglo[8])) {

        if (flag == true) {
            alert('jugador O ganastes')
            contador2 = contador2 + 1
            input2.value = contador2
        } else {
            alert('jugador X ganastes')
            contador1 = contador1 + 1
            input1.value = contador1
        }
        redD3()

    } else if ((arreglo[1] != null && arreglo[5] != null)
        && (arreglo[0] == arreglo[4])
        && (arreglo[4] == arreglo[8])) {

        if (flag == true) {
            alert('jugador O ganastes')
            contador2 = contador2 + 1
            input2.value = contador2
        } else {
            alert('jugador X ganastes')
            contador1 = contador1 + 1
            input1.value = contador1
        }


    } else if ((arreglo[2] != null && arreglo[4] != null)
        && (arreglo[2] == arreglo[4])
        && (arreglo[4] == arreglo[6])) {

        if (flag == true) {
            alert('jugador O ganastes')
            contador2 = contador2 + 1
            input2.value = contador2
        } else {
            alert('jugador X ganastes')
            contador1 = contador1 + 1
            input1.value = contador1
        }
        diagonalDe()

    } else if ((arreglo[0] != null && arreglo[4] != null)
        && (arreglo[0] == arreglo[4])
        && (arreglo[4] == arreglo[8])) {


        if (flag == true) {
            alert('jugador O ganastes')
            contador2 = contador2 + 1
            input2.value = contador2
        } else {
            alert('jugador X ganastes')
            contador1 = contador1 + 1
            input1.value = contador1
        }
        diagonal1()

    } else {
        filter = arreglo.filter((item) => item == null)
        if (filter.length == 0) {
            alert('empate')
        }
    }
}



const bloquearCasilla = (coordenada) => {
    if (arreglo[coordenada] != null) {
        return true
    }
    return false
}

const marcar = (celda) => {
    isBlock = bloquearCasilla(celda.target.id)
    if (isBlock) {
        alert('no puedes cambiar  ')
    } else {
        if (flag) {
            celda.target.innerText = 'x'
            arreglo[celda.target.id] = 'x'
            flag = !flag
        } else {
            celda.target.innerText = '0'
            arreglo[celda.target.id] = '0'
            flag = !flag
        }
    }
    validarGanador()

}




celdas.forEach((celda) => {
    celda.addEventListener('click', marcar)

})


celdas.forEach((celdas) => {
    partidaNueva.addEventListener('click', () => {
        celdas.textContent = '';
        arreglo = [null, null, null, null, null, null, null, null, null]
        flag = true
        celdas.classList.remove('bg-danger')
        // celdas.classList.replace('bg-danger',"bg-primary")
    })

})


const color = () => {
    rojo.forEach((color) => {
        color.classList.toggle('bg-danger')
    })

}

const red = () => {
    rojodos.forEach((red) => {
        red.classList.toggle('bg-danger')
    })

}

const redn = () => {
    rojoTres.forEach((redn) => {
        redn.classList.toggle('bg-danger')
    })

}


const redD = () => {
    rojoD.forEach((redD) => {
        redD.classList.toggle('bg-danger')
    })

}

const redD2 = () => {
    rojoD2.forEach((redD2) => {
        redD2.classList.toggle('bg-danger')
    })

}

const redD3 = () => {
    rojoD3.forEach((redD3) => {
        redD3.classList.toggle('bg-danger')
    })

}


const diagonal1 = () => {
    diagonal.forEach((diagonal1) => {
        diagonal1.classList.toggle('bg-danger')
    })

}
const diagonalDe = () => {
    diagonalD.forEach((diagonalDe) => {
        diagonalDe.classList.toggle('bg-danger')
    })

}


reiniciar.addEventListener('click', () => {

    contador1 = 0
    contador2 = 0
    input1.value = ''
    input2.value = ''

})



