function entrar(){


var email= document.getElementById('email').value
var senha= document.getElementById('senha').value
var res= document.getElementById('res')



if(email =='' && senha==''){
   window.alert('Insira os dados')
    

} else if (email == 'pereiraezequiel330@gmail.com' && senha == 1234){
    res.innerHTML='Seja Bem vindo'
}else{
    res.innerHTML='Falha! Tente de novo'
}

}






