const items =[
    {
        id: 0,
        nome:'camiseta',
        img:'imagens/foto.png',
        quantidade: 0
    },
    {
        id: 1,
        nome:'short',
        img:'imagens/foto.png',
        quantidade: 0
    },
    {
        id: 2,
        nome:'sapato',
        img:'imagens/foto.png',
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
            <a key="`+vaL.id+`" href="">Adicionar ao carrinha!</a>
            </div>

        
        `;


    })

}

inicializarloja();









