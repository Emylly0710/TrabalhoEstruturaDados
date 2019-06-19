class StaticStack {                                                             // classe

    constructor(){                                                              // construtor
        this.data = [];                                                          // atribuindo um array ao construtor
    }
    
    push (element) {                                                             //metodo para adicionar elemento
        this.data.push(element);                                                // adiciona o elemento
    }

    pop() {                                                                      //metodo para remover elemento  
        return this.data.pop();                                                  // remove o elemento
    }

    peek() {  
        return this.data.length -1 ;                                            // retornar o tamanho do array menos uma posição
    }

    isEmpty() { 
        return (this.size()===0);                                                // retorne se o tamanho for igual a 0
    }

    size() {                                                                        // metodo para saber tamanho
        return this.data.length;                                                     // rerorna o tamanho do array
    }

    clear() {                                                                       // metodo para limpar 
        this.data = [];                                                             // Limpando o array
    }
    
    print(separator=' - ') {                                                         // metodo para mostrar na tela
        /*  Another implementation
        if(this.isEmpty()) return "";
        let text = this.data[this.peek()];
        for (let index = (this.peek()-1); index >= 0; index--) {
            text+=separator+this.data[index];
        }
        return text; 
        */
        let text = "";                                                                  // criando uma variavei do tipo texto
        for (let index = (this.data.length - 1); index >= 0; index--) {                // repetição até que
            text += this.data[index] + separator;                                      // concatenando o texto para receber os numeros
        }
        return text.substr(0, text.length - separator.length);                       // formatar o texto, removendo a tag br.
    }
}