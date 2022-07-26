var idade = 67
console.log(`você tem ${idade} anos`)
if (idade < 16) {
    console.log('não vota')
} else if(idade >= 16 && idade < 18 || idade > 65) {
    console.log('voto opcional')
    } else if (idade >= 18) {
        console.log('voto obrigatório')
    }

    /*
    ou 

var idade = 16
if (idade < 16) {
    console.log('não vota')
} else if(idade < 18 || idade > 65) {
    console.log('voto opcional')
    } else {
        console.log('voto obrigatório')
    } 
    
    */
