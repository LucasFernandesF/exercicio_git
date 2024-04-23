$(document).ready(function () {

    $('form').on('submit', function (e) {
        e.preventDefault();

        const novaTarefa = $('#tarefa').val();

        $('<li>').text(novaTarefa).appendTo('ul');

        $('#tarefa').val('');
    });

    $("ul").on('click', 'li', function () {
        $(this).appendTo('.tarefa-concluida');
    });

});
