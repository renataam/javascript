let num = [8, 5, 4, 6, 3]
num.push(1) //acrescentou um elemento
num.sort() //colocou em ordem crescente
console.log(`o vetor tem ${num.length} posições`)
console.log(`a primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8) //se colocar 7, por exemplo, vai dar que o valor nao foi encontrado
if (pos == -1) {
    console.log('o valor não foi encontrado')
} else {
    console.log(`o valor está na posição ${pos}`)
}