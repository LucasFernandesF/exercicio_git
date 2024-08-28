const form = document.getElementById('formulario');

form.addEventListener('submit', function(event){
    event.preventDefault();

    var nome = document.getElementById('nome');
    var email = document.getElementById('email');
    const like = document.getElementById('like');
    const enviado = document.getElementById('formulario-enviado')
    like.innerHTML = `<img class='imagem-form' src='https://png.pngtree.com/png-vector/20220929/ourmid/pngtree-finger-cartoon-hand-showing-thumbs-up-png-image_6231376.png' alt='Thumbs Up'>`;
    enviado.innerHTML = `Enviado`
    

    setTimeout(function() {
        like.innerHTML = ``; 
        enviado.innerHTML = ``;
        nome.value = '';
        email.value = '';
    }, 2000);
});
