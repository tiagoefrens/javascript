let amigo = {nome:'jose', 
sexo:'M',
 peso: '85', 
 engordar(p=0){
    console.log('engordou')
    this peso += p
}}

console.log(amigo.nome)