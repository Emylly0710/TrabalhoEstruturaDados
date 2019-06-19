class ArrayList{

    constructor(){
        this.data = [];
    }

    show (separator=', '){                                                  // metodo para mostrar na tela
        return this.data.join(separator);                                   // informa o array com o separador
    }
    
    append(element){                                                        // insere o elemento especificado como o ultimo filho de cada elemento
        this.data.push(element);                                            // adicionando o elemento no final do array
    }

    insert(position, element){                                              // metodo para inserir elemento
        if(position>-1 && position<=this.size())                            // controle para inserir elementos
            this.data.splice(position,0,element);                           // O método splice altera o conteúdo de uma lista.
    }
    
    removeAt(position){                                                     // metodo para remocao de elementos na posição fornecida 
        if (position > -1 && position < this.size())                        // controle para percorrer dentro do array
            this.data.splice(position,1);                                   // remove o elemento da posição fornecida
    }
    
    remove(element){                                                        // remover elemento fornecido
        let index = this.indexOf(element);                                  // criando variavel para receber o indice
        this.removeAt(index);                                               // removendo o elemento na posição do indice
    }
    
    indexOf(element){                                                       // metodo para saber o indice
        for (let index = 0; index < this.data.length; index++)              // controle para andar no array
            if(element===this.data[index])                                  // se o elemento for identico ao indice do array
                return index;                                               // retorne o indice
        return -1;
    }
    
    isEmpty(){                                                              // saber se está vazio
        return this.size()===0;                                             // retorne sim caso esteja vazio
    }
    
    size(){                                                                 // saber tamanho
        return this.data.length;                                            //retorne o tamanho do array
    }
    
    getElement(position){                                                   // capturar o elemento pela posição
        if (position >= 0 && position < this.size()) 
            return this.data[position];                                     // depois que viajar entre o array ele reotrna a posiçao do elemento no array
        return null;                                                        // retorne vazio
    }

    search(value){                                                          // procurar o elemento no array
        return this.data.some((n)=> n===value)                              // retorne o elemento fornecido
    }
}