import React from "react";
/**ESTILIZACAO*/
const title = {
    fontSize: "1.5em",
    color: "blue"
}


// Exercicio 1
// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
        { nome: 'Notebook', preco: 'R$ 2500' },
        { nome: 'Geladeira', preco: 'R$ 3000' },
        { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
};

const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
        { nome: 'Notebook', preco: 'R$ 2500' },
        { nome: 'Geladeira', preco: 'R$ 3000' },
        { nome: 'Smartphone', preco: 'R$ 1500' },
        { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
};

const calculaTotalGasto = (dados) => {
    let soma = 0;
    dados.compras.forEach((obj, index) => {
        soma += Number(obj.preco.split("R$")[1].trim());
    });
    return soma;
}
//Fim Exercicio 1

//Exercicio 2 (JSX Array Aula 2)
// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
    {
        id: 1,
        nome: 'Smartphone',
        preco: 'R$ 2000',
        cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
        id: 2,
        nome: 'Notebook',
        preco: 'R$ 3000',
        cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
        id: 3,
        nome: 'Tablet',
        preco: 'R$ 1500',
        cores: ['#365069', '#47c1c8', '#f95786'],
    },
];

const App = () => {
    const dados = mario;

    const filmes = ["Before Sunrise", "Before Sunset", "Before Midnight"];

    const livros = [
        {
            nome: "Game of Thrones", ano: 1986
        },
        {
            nome: "The Walking Dead", ano: 1998
        },
        {
            nome: "A Storm of Kings", ano: 2000
        },
    ]
    return (
        <div>
            <p style={title}>Exercicio 1: </p>
            <p>Nome: {dados.cliente}</p>
            <p>Idade: {dados.idade}</p>
            <p>Situação: <span style={{ color: dados.ativa ? "green" : "red" }}>{dados.ativa ? "Ativa" : "Inativa"}</span></p>
            <p>Total Gasto: R${calculaTotalGasto(dados)}</p>
            <p style={{ display: calculaTotalGasto(dados) > 10000 ? "block" : "none" }}>Você atingiu o limite de gasto.</p>

            <p style={title}>Array com JSX: </p>
            <ul>
                {livros.filter(({ ano }) => ano >= 1998).map(({ nome, ano }) => (
                    <li key={nome}>{nome}, {ano}</li>
                ))}
            </ul>
            <p style={title}>Exercicio 2 (JSX Array 2): </p>
            <section>{produtos.filter(({ preco }) => Number(preco.split("R$")[1]) > 1500).map(({ nome, preco, cores }) =>
            (
                <div>
                    <h2>{nome}</h2>
                    <p>Preço: {preco}</p>
                    <ul>
                        {cores.map((cor) => (
                            <li key={cor} style={{ backgroundColor: cor, color: "white" }}>{cor}</li>
                        ))}
                    </ul>
                </div>
            ))
            }
            </section >
        </div >
    );
};
export default App;