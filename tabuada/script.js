function vezes() {
    var num = document.getElementById('numero')
    var tab = document.getElementById('lista')



    if (num.value.length == 0) {
        window.alert('Por favor, digite um numero!')
    }else {
        var n =Number(num.value)
        var c = 0
        tab.innerHTML =''

        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value =`tab${c}`
            tab.appendChild(item)
            c++
        }

        num.focus()


}
}

function mais(){

    var num = document.getElementById('numero')
    var tab = document.getElementById('lista')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um numero!')
    }else {
        var n =Number(num.value)
        var c = 0
        tab.innerHTML =''

        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} + ${c} = ${n+c}`
            item.value =`tab${c}`
            tab.appendChild(item)
            c++
        }

        num.focus()
}
}

function menos(){

    var num = document.getElementById('numero')
    var tab = document.getElementById('lista')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um numero!')
    }else {
        var n =Number(num.value)
        var c = 0
        tab.innerHTML =''

        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} - ${c} = ${n-c}`
            item.value =`tab${c}`
            tab.appendChild(item)
            c++
        }

        num.focus()
}
}

function dividir() {
    
    var num = document.getElementById('numero')
    var tab = document.getElementById('lista')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um numero!')
    }else {
        var n =Number(num.value)
        var c = 0
        tab.innerHTML =''

        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} / ${c} = ${n/c}`
            item.value =`tab${c}`
            tab.appendChild(item)
            c++
        }

        num.focus()
}
}








