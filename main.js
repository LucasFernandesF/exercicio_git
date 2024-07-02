$(document).ready(function () {
    $('#tel').mask('(00) 00000-0000');
    
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                minlength: 14
            }
        },
        messages: {
            nome: {
                required: "Por favor, insira seu nome"
            },
            email: {
                required: "Por favor, insira seu email",
                email: "Por favor, insira um email válido"
            },
            telefone: {
                required: "Por favor, insira seu telefone",
                minlength: "Seu telefone deve ter pelo menos 14 caracteres"
            }
        }
    });
});
