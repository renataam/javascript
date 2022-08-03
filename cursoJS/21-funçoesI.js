function parimp(n){
    if(n % 2 == 0){
        return 'par'
    } else {
        return 'ímpar'
    }
}
let res = parimp(11) //parimp é a chmada e 11 é o parâmetro
console.log(res)
//ou somente console.log(parimp(11)) 