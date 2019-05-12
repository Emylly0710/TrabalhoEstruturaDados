var stack = new DinamicStack();

$().ready(function() {

    $('#push').on('click', pushElement);
    $('#item').keydown(function(e) {
        if (e.which == 13) pushElement(); 
    }); // se o usuario clilar em enter ou clicar em adicionar, será adicionado o elemento na pilha
    $('#pop').on('click', popElement); // quando clicado irá remover o elemento
    $('#clear').on('click', clearStack); // quando clicado irá limpar a lista
});

function pushElement() {
    var item = $('#item').val();
    if (item) {
        stack.push(item);
        $('#item').val('');
        showStack();
    }

    // funçao para adicionar elementos, usuario informa o valor a ser adicionado, assim que adicionado deverá mostrar o valor.
}

function popElement() {
    if (stack.isEmpty() == false) {
        alert('Foi removido o elemento ' + stack.pop());
        showStack();
    } else {
        alert('Pilha Vazia');
    }

    // função para remoção do elemento, caso remova, dispare um alerte informando o elemento removido, caso não remova (estiver vazio) dispare um alerte informando que esta vazio
}

function clearStack() {
    stack.clear();
    showStack();

    // função para limpar o array ou pilha encadeada.
}

function showStack() {
    $('#output').empty();
    $('#stackSize').empty();
    $('#stackPeek').empty();
    $('#output').append(stack.print('<br />'));
    $('#stackSize').append(stack.size());
    $('#stackPeek').append("indice "+ stack.peek());
} 

// função para mostrar os elementos.