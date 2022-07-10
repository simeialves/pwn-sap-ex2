// Importa o módulo do Express Framework
const express = require('express')

// Inicializa um objeto de aplicação Express
const app = express()

// Cria um manipulador da rota padrão 
app.get('/', function (req, res) {
    res.send('Programação Web com NodeJs - Aluno: Simei Alves Parreiras - Professor: Rommel Carneiro')
})

//realiza log da requisição
app.get('*', function(req, res, next){
    console.log(new Date().toLocaleString(), req.method, req.url, req.path, req.body);
    next();
})

//Processa 
app.use(express.json())

const lista_produtos = [
        { id: 1, descricao: "Arroz parboilizado 5Kg", valor: 25.00, marca: "Tio João"  },
        { id: 2, descricao: "Maionese 250gr", valor: 7.20, marca: "Helmans"  },
        { id: 3, descricao: "Iogurte Natural 200ml", valor: 2.50, marca: "Itambé"  },
        { id: 4, descricao: "Batata Maior Palha 300gr", valor: 15.20, marca: "Chipps"  },
        { id: 5, descricao: "Nescau 400gr", valor: 8.00, marca: "Nestlé"  },
    ]

app.get('/api/produtos', function (req, res) {
    res.json(lista_produtos)
})

app.get('/api/produtos/:id', function (req, res) {
    let id = Number.parseInt(req.params.id)    
    let idx = lista_produtos.findIndex(elem => elem.id == id)
    if (idx > -1){
        res.json(lista_produtos[idx])
    }
    else{
        res.status(404).json({
            message: "Produto não encontrado"
        })
    }
    })

// Inicializa o servidor HTTP na porta 3000
app.listen(3000, function () {
    console.log('Servidor rodando na porta 3000')
})