class LinkedList{
    
    constructor(){
        this.head=null;
        this.length=0;
    }

    isEmpty() { 
        return this.head === null;
    } // verifica se o array estará vazio, se a cabeça estiver, o corpo também estará
    
    append(element){
        let node = new Node(element),
            current = this.head;
        if(this.isEmpty()){
            this.head = node;
        }else{
            while(current.next)
                current= current.next;
            current.next = node;
        }
        this.length++;
    } // cria variaveis, verifica se o array está vazio, se estiver, adiciona o elemento na cabeça, se não adiciona o elelemnto na posição próximo, sairá da cabeça

    show(separator = ', ') {
        let current = this.head,
            output = '';
        if(current != null){
            output += current.content;
            while (current.next) {
                current = current.next;
                output += separator+current.content;
            }
        }
        return output;
    } // cria variaveis, verifica se a cabeça não está vazia, e vai concatenando os elementos, depois vai concatenando os elementos até não ter masi elementos 

    insert(position, element){
        if(position>-1 && position<=this.size()){ // se a posição for maior que menos 1 e menor ou igual ao tamanho
            let node = new Node(element), 
                current = this.head,
                previous = null,
                index = 0; 
                // criando variaveis 
            if (position == 0) { // se a posição for igual a 0
                node.next = this.head; // proximo recebe a cabeça
                this.head = node; // e a cabeça recebe o nó
                
            } else { 
                while (index<position) { // se não, se o indice for menor que a posição
                    index++; // indice recebe +1
                    previous = current; // anterior recebe atual
                    current = current.next; // atual recebe proximo do atual
                }
                node.next = current; // o nó proximo recebe o atual
                previous.next = node; // proximo anterior recebe o nó 
            }  
             this.length++; // tamanho recebe +1
      }

    }
    
    removeAt(position){
        if(position>-1 && position<this.size()){ // se estiver dentro do array (pecorrendo pelo tamanho)
            let current = this.head, 
                previous = null,
                index = 0; // criando variaveis
            if(position===0){ // se a posição for 0
                this.head = current.next; // a cabeça recebe o próximo do atual
                
            }else{
                while (index<position) { // enquanto o indice for menor que posição
                    index++; // indice recebe +1
                    previous = current; // anterior recebe atual
                    current = current.next; // atual recebe o proximo do atual
                    
                }
                previous.next = current.next; //proximo do anterio recebe o proximo do anterior
            }
            current.next = null; // proximo do atual recebe null
            this.length--; // o tamanho diminuir 1
            return current.content; // retorne o elemento removido
        }
        return null; // retorne null
    }

    
    remove(element){
        let index = this.indexOf(element); // criando variavei para receber o indice 
        this.removeAt(index); // remova o elemento desse indice
    }
    
    indexOf(element){
        let current = this.head,
            index = 0; // criando variaveis 
        while (current !== null) { // enquanto o atual for diferente de null
            if (current.content === element) { // se conteudo do atual for igual elemento 
                return index; //retorne o indice 
            }
            index++; // indice +1
            current = current.next; //atual recebe proximo do atual
        }
        return -1;
    }
    
    
    size(){
        return this.length; // retorne o tamanho do array
    }
    
    getElement(position){
        if (position<0 && position >=this.length) { // posicao estiver dentro de 0 ate o tamanho maximo do array
            return null; // retorne null
        }
        
        let current = this.head, 
            index = 0; //criando variaveis, onde atual recebe a cabeça e indice recebe 0
        while (current !== null) {
            if (index === position) { // se o indice for igual o tamanho
                return current.content; // retorne o conteudo do atual
            }
            index++; // indice recebe +1
            current = current.next; // atual recebe o proximo de atual
        }    
    }

    search(value){ 
        return this.indexOf(value) >= 0 // retorne o indice do valor desde que seja maior igual a 0 
    }

}