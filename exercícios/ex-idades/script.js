function verificar () {
    var data = new Date()
    var ano = data.getFullYear() //getFullYear() é para pegar os 4 dígitos
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img') //colocando imagem pelo javascript
        img.setAttribute('id', 'foto') //colocndo id na img pelo javascript
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 15){
                //criança
                img.setAttribute('src', 'menino.png')
            } else if (idade <21){ //está implícito idade >=15 && idade <21
                //adolescente
                img.setAttribute('src', 'adolescente-homem.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'velho.png')
            }

        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade < 15){
                //criança
                img.setAttribute('src', 'menina.png')
            } else if (idade <21){ //está implícito idade >=15 && idade <21
                //adolescente
                img.setAttribute('src', 'adolescente-mulher.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'velha.png')
            }
        }
        res.style.textAlign ='center' //centralizando com javascript
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)//para adicionar a imagem
    }

}