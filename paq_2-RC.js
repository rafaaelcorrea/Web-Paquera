
btn.addEventListener('mouseenter', entrar_bot)
btn.addEventListener('mouseout', sair_bot)

function  buscar() { // função para opção homem procurando mulher



    let  sou = window.document.getElementsByName('sex_obj')
    /*var imagem = document.createElement('img') tag img criada dinamicamente , diretA no JS. */ 
    let res = window.document.getElementById ('perfil01')
    let res2 = window.document.getElementById('perfil02')
    let res3 = window.document.getElementById('perfil03')
    let res4= window.document.getElementById ('perfil04')
    let res5 = window.document.getElementById('perfil05')
    let res6 = window.document.getElementById('perfil06')




        if  ( sou [0].checked ) {

    

     /*imagem.setAttribute('src' , 'Untitled.jpg') configuração dos parâmateros da tag img que foi criada dentro HTML de forma dinâmica. (NÃO OBTIVE SUCESSO. PRECISO TENTAR DE NOVO !) */ 
 
        res.innerHTML  = `<img src="g1.png"> <br>` // tag img inserida dentro do InnerHTML. 
        res.innerHTML  += `Camila / Acre <img src="loc_map.png">  `

        res2.innerHTML += ` <img src="g22.png" > <br>  `
        res2.innerHTML +=  `Roberta /  Santa Catarina <img src="loc_map.png"> `

        res3.innerHTML += ` <img src="g3.png" > <br>`
        res3.innerHTML += `Luciane / Rio de Janeiro <img src="loc_map.png"> `

        res4.innerHTML += `<img src="g4.png" > <br> `
        res4.innerHTML += `Larissa / São Paulo <img src="loc_map.png">`

        res5.innerHTML += `<img = src="g5.png"> <br>`
        res5.innerHTML += `Carla / Paraná <img src="loc_map.png">`
    
        res6.innerHTML += `<img src="g6.png"> <br>`
        res6.innerHTML += `Paula / Mato Grosso <img src="loc_map.png">`


    
        console.log(desativa())


    } else if (sou[1].checked) {

    

        res.innerHTML   = `<img src="h1.png"> <br>`  
        res.innerHTML  += `Carlos / Manaus <img src="loc_map.png">  `

        res2.innerHTML += ` <img src="h22.png" > <br>  `
        res2.innerHTML +=  `Roberto /  Santa Catarina <img src="loc_map.png"> `

        res3.innerHTML += ` <img src="h3.png" > <br>`
        res3.innerHTML += `Rogério / Rio de Janeiro <img src="loc_map.png"> `

        res4.innerHTML += `<img src="h4.png" > <br> `
        res4.innerHTML += `Luís / São Paulo <img src="loc_map.png">`

        res5.innerHTML += `<img = src="h55.png"> <br>`
        res5.innerHTML += `Lucas / Paraná <img src="loc_map.png">`
    
        res6.innerHTML += `<img src="h66.png"> <br>`
        res6.innerHTML += `Pedro / Mato Grosso <img src="loc_map.png">`
      

        console.log(desativa())


} else {

    window.alert('Oops! Para realizar a busca é necessário escolhar uma opção.')

    
}



}


function desativa() { // função que irá desativar o botão de busca, para não replicar os perfis já encontrados.



    let btn = window.document.getElementById('btn').disabled = true


     
}   

function ativa() { // função que irá reatvar o botão de busca

    let btn = window.document.getElementById('btn').disabled = false


}

function entrar_bot() {

    btn.style.background = 'rgb(172, 243, 219)'
    btn.style.color = 'purple'

}

function sair_bot() {

    btn.style.background = 'rgb(84, 84, 150)'
    btn.style.color = 'white'

}

