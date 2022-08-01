function tabuada() {
    let num = window.document.getElementById('txtn')
    let tab = window.document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('por favor, digite um número')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' //para limpar antes da próxima tabuada
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`//essa linha faz mais sentido em outras linguagens, para saber qual item foi selecionado
            tab.appendChild(item)
            c++
        }
    }
    
}