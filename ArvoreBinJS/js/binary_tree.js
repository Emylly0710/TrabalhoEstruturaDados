class BinaryTree{
                                                                                 // inicializa a raiz como nula
    constructor(){                                                               // criando o construtor
        this.root = null;                                                        // atribuindo o valor a variavél
    }

                                                                                // insere o elemento da arvores
    insert(element){
        this.root = this.insertNode(this.root, element);                        // a variavel recebe o valor que a função obter
    }
    insertNode(rootNode, value){                                                // função para inserir valor na árvore
        if (rootNode==null) {                                                   // se não tiver nada na árvore
            return new Node(value);                                             // retorne o valor do node
        }
        if(value>rootNode.content){                                             // se o valor passado for maior que a raiz
            rootNode.right = this.insertNode(rootNode.right, value);            // insira o elemento a direita da rai
        }else{                                                                  // se não 
            rootNode.left = this.insertNode(rootNode.left, value);              // insira o valor a esquerda da raiz
        }
        return rootNode;                                                        // retorne a arvore
    }

    
    search(value) {                                                             // retorna true se o valor já existe na arvore
        return this.searchNode(this.root, value);                               // use a função e retorne o valor na arvoré
    }
    searchNode(rootNode, value){                                                // função para pesquisar na árvore
        if (rootNode == null) return false;                                     // se a raiz estiver vazia retorne falso
        if (rootNode.content == value) return true;                             // se o conteudo da raiz for igual ao valor passado, retorne verdadeiro 
        if (value > rootNode.content)                                           // se o valor for maior que o conteudo da raiz
            return this.searchNode(rootNode.right, value);                      // procure o valor a direita da raiz usando a função 
        else                                                                    // se não
            return this.searchNode(rootNode.left, value);                       // procure o valor a esquerda da raiz usando a função
    }


    
    inOrderTraverse(callback){                                                  // executa a função callback para cada nó, em ordem
        this.inOrder(this.root, callback);                                      // chame a função em ordem passando os parametros arvore e callback
    }
    inOrder(rootNode, callback) {                                               // criando a função e passando como parametro a raiz e callback
        if (rootNode == null) return;                                           // se a raiz for igual a vazio retorne
        this.inOrder(rootNode.left, callback);                                  // passe para a função a esquerda da raiz e callback
        callback(rootNode.content);                                             // callback recebe como parametro o conteudo da arvore
        this.inOrder(rootNode.right, callback);                                 // passe para a funçao a direita da raiz e callback
    }

    
    preOrderTraverse(callback){                                                 // executa a função callback para cada nó, em pré-ordem
        this.preOrder(this.root, callback);                                     // chame a função e passe como parametro a arvore e callback
    }
    preOrder(rootNode, callback) {                                              // criando a função  e passando como parametro a raiz e callback
        if (rootNode == null) return;                                           // se a raiz estiver vazio retorne
        callback(rootNode.content);                                             // callback recebe como parametro o conteudo da arvore
        this.preOrder(rootNode.left, callback);                                 // a função recebe a esquerda da arvore e callback
        this.preOrder(rootNode.right, callback);                                // a função recebe a direita da arvore e callback
    }
    
    
    postOrderTraverse(callback) {                                               // executa a função callback para cada nó, em pós-ordem
            this.posOrder(this.root, callback);                                 // chame a função e passe como parametro a arvore e callback
    }
    posOrder(rootNode, callback) {                                              // criando a função para inserir e pós ordem passando como parametro a raiz e callback
        if (rootNode == null) return;                                           // se a raiz estiver vazia retorne
        this.posOrder(rootNode.left, callback);                                 // a função recebe a esquerda da raiz e callback
        this.posOrder(rootNode.right, callback);                                // a função recebe a direita da raiz e callback
        callback(rootNode.content);                                             // callback recebe o conteudo da raiz
    }
    
    
    remove(value){                                                              // remove um elemento existente na arvore o retorna
        this.root = this.removeNode(this.root, value);                          // a variavel vai receber o valor obtido pela função 
    }
    removeNode(rootNode, value){                                                // criando funçção para remover 
        if(rootNode==null)                                                      // se a raiz estiver vazia 
            return null;                                                        // retorne vazio
        if(value==rootNode.content){                                            // se o valor for igual o conteudo da raiz
            if(rootNode.left===null && rootNode.right===null){                  // é uma folha - Grau 0 // e se a direita e esquerda estivere vaiza
                rootNode = null;                                                // raiz recebe vazio, assim remove o elemento 
            } else if (rootNode.right == null) {                                // tem filho na esqueda - Grau 1 // se só a direita estiver vazia
                rootNode = rootNode.left;                                       // a raiz recebe a esquerda da raiz
            } else if (rootNode.left == null) {                                 // só tem filho na direita - Grau 1  // se só a esquerda estiver vazia 
                rootNode = rootNode.right;                                      // a raiz recebe a direita 
            } else{                                                             // tem filho nos dois lados - Grau 2  // se não, se tiver direita e esquerda
                let i = rootNode.right;                                         // criando variavel e passando a direita como valor
                while(i.left!=null){                                            // se a esquerda da variavel for diferente de vazio
                    i = i.left;                                                 // a variavel recebe a esquerda da variavel
                }
                i.left = rootNode.left;                                         // a esquerda da variavel recebe a esquerda da raiz
                rootNode = rootNode.right;                                      // a raiz recebe a direita da raiz
            }
        }else if(value>rootNode.content){                                       // se o valor for maior que o conteudo da raiz
            rootNode.right = this.removeNode(rootNode.right, value);            // a direita da raiz recebe o valor removido da direita da raiz
        }else{                                                                  // se não
            rootNode.left = this.removeNode(rootNode.left, value);              // a esquerda da raiz recebe o vaor removido da esquerda da raiz
        }
        return rootNode;                                                        // retorne o raiz
    }

    
    heigth(){                                                                    // exibe a altura da arvore
        return this.heigthNode(this.root);                                       // retorne a altura da raiz, recebe a arvore como parametro
    }
    heigthNode(node){                                                            // criando a função e passando o nó como parametro
        if(node==null)                                                           // se o nó estiver vazio
            return -1;                                                           // retorne menos 1
        let leftHeigth = this.heigthNode(node.left),                             // criando variavel e passando o elemento obtido na função (passando a esquerda do nó)
            rightHeigth = this.heigthNode(node.right);                           // criando variavel e passando o elemento obtido na função (passando a direita do nó)
        if(leftHeigth > rightHeigth){                                            // se a altura da esquerda for maior que a altura da direita
            return 1 + leftHeigth;                                               // some a altura da esquerda mais 1 e retorne 
        }else{                                                                   // se não
            return 1 + rightHeigth;                                              // some a altura da direita mais 1 e retorne
        } 
    }

    
    size(){                                                                      // informa quantos nós existem na arvore
        return this.sumNodes(this.root);                                         // retorne o resultado da função
    }
    sumNodes(node){                                                              // criando a função para para saber a quantidade de nós
        if(node==null)                                                           // se o nó estiver vazio
            return 0;                                                            // retorne 0 (quantidade de nós)
        return 1 + this.sumNodes(node.left)+this.sumNodes(node.right);           // se não faça a soma dos nós da direita, esquerda mais 1
    }

    
    min() {                                                                      // exibe o menor valor da arvore
        let node = this.root;                                                    // criando variavel que recebe o valor da arvore
        if (node == null) return null;                                           // se a vairvel estiver vazia retorne vazio
        while (node.left != null)                                                // enquanto a esquerda da arvore nao estiver vaiza percorra
            node = node.left;                                                    // a variavel vai receber a esquerda da variavel
        return node.content;                                                     // retorne o elemento econtrado que será o menor valor
    }

    
    max() {                                                                      // exibe o maior valor da arvore
        let node = this.root;                                                    // criando variavel que recebe o valor da arvore
        if (node == null) return null;                                           // se a variavel estiver vazia retorne vazio 
        while (node.right != null)                                               // enquanto a direita não estiver vaiza percorra
            node = node.right;                                                   // a variavel recebe o direita da variavel
        return node.content;                                                     // retorne o conteudo da variavel que será p valor maximo da arvore
    }
}