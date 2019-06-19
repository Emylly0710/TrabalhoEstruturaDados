class StaticQueue{
    constructor(){
        this.data = [];                             // criando array para ser usado
    }
    enqueue(element) {                              // adicionar na fila
        this.data.push(element);                    // adicione o elemento
    }
    dequeue(){                                      // removendo elementp
        return this.data.shift();                   // remova o elemento
    }
    front() {                                       // primeira posição
        return this.data[0];                        // retorne o elemento do indice 0 (primeiro)
    }
    back(){                                         // Ultimo elemento
        return this.data[this.data.length-1];       // retorna o indice tamanho menos 1;
    }
    isEmpty() {                                     // saber se está vazio
        return (this.data.length===0);              // retorna sim se tamanho for igual a 0
    }
    size() {                                        // Tamanho  do array
        return this.data.length;                    // retorne o tamanho do array
    }
    clear() {                                       // limpar array
        this.data = [];                             // Limpa o array atribuindo vazio ao array
    }
    print(separator=" - ") {                        // imprimir na tela
        return this.data.join(separator);           // imprimir na tela com o separador - informado
    }
}