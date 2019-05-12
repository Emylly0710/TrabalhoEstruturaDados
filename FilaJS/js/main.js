//github.com/samuelclerod/FilaJS
var queue = new DynamicQueue();
$().ready(function() { // criando função

    $('#enqueue').on('click', enqueueElement);
    $('#item').keydown(function(e) {
        //verify if enter was pressed
        if (e.which == 13) enqueueElement();
    });

    // se a tecla enter ou clilcar enfileirar adicione o elemento a fila
    $('#dequeue').on('click', dequeueElement); // se clicar em desinfileirar, remova o elemento
    $('#clear').on('click', clearQueue); // se clicar em limpar, limpe a fila
}); 


function enqueueElement() {
    var item = $('#item').val();
    if (item) {
        queue.enqueue(item);
        $('#item').val('');
        showQueue();
    }
} // funçao para enfileirar o elemento a fila

function dequeueElement() {
    if (queue.isEmpty() == false) {
        alert('Foi removido o elemento ' + queue.dequeue());
        showQueue();
    } else {
        alert('Fila Vazia');
    } 
} // funçao para desinfileirar os elementos, e se caso estiver vazio alertar o usuario.

function clearQueue() {
    queue.clear();
    showQueue();
    $('#item').val('');
} // função parar limpar a fila;

function showQueue() {
    $('#output').empty();
    $('#output').append('<div class="ui label">' +
        queue.print('</div><div class="ui label">') + '</div></div>');
} // função para mostrar a fila