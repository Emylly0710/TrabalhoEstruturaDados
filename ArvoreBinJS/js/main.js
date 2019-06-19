let tree = new BinaryTree();                                                       // criando variavel do tipo arvore binaria
$().ready(()=>{                                                                    // carregue
    $('#btnInserir').click(inserir);                                               // quando clicar em inserir execute a função inserir
    $('#btnBuscar').click(buscar);                                                 // quando clicar em buscar execute a função buscar
    $('#btnMenor').click(menor);                                                   // quando clicar em menor execute a função menor
    $('#btnMaior').click(maior);                                                   // quando clicar em maior execute a função mair
    $('#btnRemover').click(remover);                                               // quando clicar em remover execute a função remover
    $('#btnEmOrdem').click(mostrarEmOrdem);                                        // quando clicar em ordem execute a função mostrar em ordem
    $('#btnPreOrdem').click(mostrarPreOrdem);                                      // quando clicar em pre ordem execute a função mostrar em pré ordem
    $('#btnPosOrdem').click(mostrarPosOrdem);                                      // quando clicar em pos ordem execute a função mostrar em pós ordem
    $('#btnAltura').click(mostrarAltura);                                          // quando clicar em altura execute a função mostrar altura
    $('#btnTamanho').click(mostrarTamanho);                                        // quando clicar em tamanho execute a função mostrar tamanho
});
function mostrarItem(item){                                                        // criando função mostrar item
    let el = $('#saida');                                                          // criando variavel e recebe o valor obtido em said
    el.empty();                                                                    // remova elementos filho 
    el.append(`<span class="ui label">${item}</span>`);                            // mostre o elemento
}
function incluir(item){                                                            // criando função para incluir elemento
    $('#saida').append(`<span class="ui label">${item}</span>`);                   // na saida inclua o item e mostre
}

function inserir(){                                                                 // criando a função inserir
    let num = parseInt(prompt("informe o numero a inserir na arvore:"));            // criando variavel. um alerta caso não tenha valor inserido
    if(tree.search(num))                                                            // pesquise na arvore e veja se já existe o elemento
        mostrarItem('O elemento já existe!');                                       // mostre essa mensagem para o usuario
    else{                                                                           // se não
        tree.insert(num);                                                           // insira o elemento
        mostrarItem('Inserido: '+num);                                              // mostra a mensagem para o usuario
    }
       
}
function buscar(){                                                                  // criando função de buscar
    let num = parseInt(prompt("informe o numero a ser buscado na arvore:"));        // criando variavel e passando uma mensagem para ela
    if(tree.search(num)){                                                           // se o elemento buscado for encontrado
        alert('Numero foi encontrado na arvore!');                                  // exiba uma mensagem para o usuario
    }else{                                                                          // se nãoo
        alert('Numero não encontrado na arvore!');                                  // exiba uma mensagem na tela para o usuario
    }
}
function menor(){                                                                   // criando função para saber o menor valor
    alert('menor valor: '+tree.min());                                              // exiba na tela o texto concatenando com o valor
}
function maior(){                                                                   // criando função para saber o maior valor
    alert('maior valor: '+tree.max());                                              // exiba na tela o texto concatenando com o valor
}
function remover(){                                                                // criando função para remover 
    let num = parseInt(prompt("informe o numero a ser removido na arvore:"));      // criando variavel e passando um texto para ela
    if(tree.search(num)){                                                          // buscar na arvore o elemento informado pelo usuario
        tree.remove(num);                                                          // se encontrado, remova
        mostrarItem('O elemento foi removido!');                                   // exiba uma mensagem para o usuario
    }else{                                                                         // se não
        mostrarItem('O elemento não existe');                                      // informe ao usuario que o elemento não existe
    }
}
function mostrarEmOrdem(){                                                         // criando a função para mostrar em ordem
    $('#saida').empty();                                                           // esvaziando a saida
    tree.inOrderTraverse(incluir);                                                 // execute o metodo
}
function mostrarPreOrdem(){                                                        // criando a função para mostrar em pre ordem
    $('#saida').empty();                                                           // esvaziando a saida
    tree.preOrderTraverse(incluir)                                                 // execute o metodo
}
function mostrarPosOrdem(){                                                        // criando a função para mostrar em pós ordem
    $('#saida').empty();                                                           // esvaziando a saida
    tree.postOrderTraverse(incluir)                                                // execute o metodo
}
function mostrarAltura(){                                                          // criando a função para mostrar altura
    alert("Altura: "+tree.heigth());                                               // exiba a menssagem na tela concatenando com o valor encontrado no metodo
}

function mostrarTamanho(){                                                          // criando função para saber tamanho da arvore
    alert("Tamanho: "+tree.size());                                                 // exiba mensagem na tela concatenando com o valor encontrado no metodo
}