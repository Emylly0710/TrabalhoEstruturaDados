class DinamicStack {                                                    // classe

    constructor() {                                                     // construtor
        this.top = null;                                                // criando variaveis + atribuindo valor
        this.length = 0;                                                // criando variaveis + atribuindo valor
    }

    push(element) {                                                     // metodo para adicionar
        let node  = new Node(element);                                   // criando variavel do tipo Node
        if (!this.isEmpty()) {                                          // se não estiver vazio
            node.next = this.top;                                       // o proximo recebe o topo
        }
        this.top = node;                                                // se tiver vazio o topo recebe o node
        this.length++;                                                  // tamanho recebe +1
    }

    pop() {                                                             // metodo para remover 
        if(this.isEmpty()) 
            return null;                                                 // se tiver vazio retorne null
        let diedNode = this.top;                                        // variavel que será removido
        this.top = this.top.next;                                       // topo recebe o próximo do topo
        diedNode.next = null;                                           // o proximo dele será null (tirar o no da pilha)
        this.length--;                                                   // após ser removido o tamanho deverá ser diminuido
        return diedNode.content;                                         // retorna o conteudo deles
    }

    peek() {
        return this.length-1;                                           // retorna o valor
    }

    isEmpty() {                                                         // verificar se está vazio
        return this.top===null;                                          // se o topo estiver vazio
    }

    size() {                                                            // metodo para saber tamanho
        return this.length;                                             // retornar o tamano.
    }

    clear() {                                                           // metodo para limpar
        this.top=null;                                                  // zera o topo para deixar vazio
        this.length = 0;                                                // zerar o tamanho
    }

    print(separator = ' - ') {                                           //metodo para exibir
        let text = "", current = this.top;                               //variavei que recebe texto e variavel recebendo o topo
        while (current!==null) {                                         //ate que current não esteja vazio
            text += current.content + separator;                        //concatenando as variaveis (conteudo + separador)
            current = current.next                                       //ccurrent recebera o proximo dele
        }
        return text.substr(0, text.length - separator.length);              // retorna a substring removendo os espaços no final da pilha (o tamanho da pilha menos o tamanho do separador)
    }
}