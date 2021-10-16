const items =[
    {
        id: 0,
        nome:'camiseta',
        img:'imagens/foto.jpg',
        quantidade: 0
    },
    {
        id: 1,
        nome:'short',
        img:'imagens/short.jpg',
        quantidade: 0
    },
    {
        id: 2,
        nome:'sapato',
        img:'imagens/sapato.jpg',
        quantidade: 0
    },
]


inicializarloja = () => {

    var containerprodutos = document.getElementById('produtos')
    items.map((vaL)=>{
        containerprodutos.innerHTML+=`
        
        <div class="produto-single">
            <img src="`+vaL.img+`" />
            <p>`+vaL.nome+` </p>
            <a key="`+vaL.id+`" href="#">Adicionar ao carrinha!</a>
            </div>

        
        `;


    })

}

inicializarloja();

atualizarcarrinho =() => {
    var containercarrinho = document.getElementById('carrinho')
    containercarrinho.innerHTML =""
    items.map((vaL)=>{
        if(vaL.quantidade >0){
        containercarrinho.innerHTML+=`
        <div class="info-single-sheckout">

            <p style="float:left;">Produto: `+vaL.nome+`</p>
            <p style="float:right;">Quantidade: `+vaL.quantidade+`</p>
            <div style="clear:both"></div>
        </div>
        `;

        }
    })

}

var links = document.getElementsByTagName('a');

for(var i =0; i <links.length; i++){
    links[i].addEventListener("click",function(){
        let key =this.getAttribute('key');
        items[key].quantidade++;
        atualizarcarrinho();
        return false;


    })



}
    




