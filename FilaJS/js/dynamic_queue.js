class DynamicQueue{
    constructor(){
        this.head = null; // criando variavel cabeça
        this.tail = null; // criando variavel calda
        this.length = 0; // criando variavel tamanho
    }

    enqueue(element) {     //Adicionar elemento na fila
        let node = new Node(element); // criando a variavel do tipo Node;
        if(this.isEmpty()){ // condicão caso esteja vazio
            this.head=node; // adicionar na cabeça
        }else{ // se não
            this.tail.next = node; //adioonar no proximo da calda
        }
        this.tail = node; // a calda recebe o elemento
        this.length++; // tamanho recebe mais 1
    }

    dequeue(){ // remover da fila
        let deadElement = null; // criando variavel
        if(this.length===1){ // se tamanho  for igual a 1
            deadElement = this.tail.content; // variavel recebe o conteudo da calda
            this.clear(); //limpa 
        }else if(this.length>1){ // se tamanho for maior que um
            let deadNode = this.head; // variavel recebe o conteudo da cabeça
            this.head = this.head.next; // cabeça recebe o próximo 
            deadNode.next = null; // zera o proximo da variavel
            deadElement = deadNode.content; // variavel recebe o conteudo
            this.length--; // diminui 1 no tamanho
        }
        return deadElement; // retorne o elemento removido
    }
    front() {
        return this.head.content; // retorne o conteudo do inico
    }
    back() { 
        return this.tail.content; // retorna o conteudo do fim
    }
    isEmpty() {
        return this.tail===null; // reorna verdade se a calda esteja vazio
    }
    size() {
        return this.length; // retornar tamanho 
    }
    clear() {
        this.tail= this.head=null;  // calda e cabeça recebem null
        this.length=0; // zera o tamanho também.
    }
    print(separator=" - ") {
        let output = ""; // criando uma variavel para mostrar a fila
        for (let node = this.head; node!=null; node = node.next) { // controle de repetição
            output+=node.content+separator; // concatenando com os numeros que forem adicionando
        }
        return output.substr(0, output.length-separator.length); // retornar a variavél ja formatada removendo o separador a mais;
    }
}