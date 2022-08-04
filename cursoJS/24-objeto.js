let amigo = {nome: 'renata', 
sexo: 'M', 
peso: 51, 
engordar(p=0){
    console.log('engordou')
    this.peso += p
}} 

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)