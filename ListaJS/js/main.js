var list = new LinkedList();

$().ready( () => {
    $('#insert').click(insertElement)
    $('#insert_at').click(insertElementAt)
    $('#remove').click(removeElement)
    $('#remove_at').click(removeElementAt)
});

function showData(){
    let text = `<div class="ui label">
                    ${list.show('</div><div class="ui label">')}
                </div>`
    let out = $('#output');
    out.empty()
    out.append(text)
} // função para mostrar o array da lista na tela
function insertElement(){
    let val = parseInt(prompt('digite um valor a ser inserido:'));
    if (list.search(val)){
         alert("valor já inserido")
    }else{
        list.append(val);
        showData();
    } // função para adicionar elementos no array
}
function insertElementAt(){
    let val = parseInt(prompt('digite um valor a ser inserido:'));
    if (list.search(val)){
        alert("valor já inserido")
   }else{
        let pos = parseInt(prompt('digite uma posição a inserir:'));
        list.insert(pos, val);
        showData();
   }
} // função para inserir elemento na posição 
function removeElement(){
    let val = parseInt(prompt('digite um valor a ser removido:'));
    list.remove(val);
    showData();
} // função para remoção de elementos 
function removeElementAt(){
    let pos = parseInt(prompt('digite uma posição a remover:'));
    list.removeAt(pos)
    showData();
} // função para remoção de elementos pela posição passada