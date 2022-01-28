import React from 'react';
import Product from './Product';

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado
const App = () => {
    let [dados, setDados] = React.useState(null);
    let [carregando, setCarregando] = React.useState(false);


    const handleClickRequest = async (elem) => {
        setCarregando(true);
        const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${(elem.target.innerText).toLowerCase()}`);

        const json = await response.json();
        setDados(json);
        console.log(json);
        setCarregando(false);
    }




    return (
        <div style={{ display: "grid" }}>
            <button onClick={handleClickRequest}>Notebook</button>
            <button onClick={handleClickRequest}>Smartphone</button>
            <button onClick={handleClickRequest}>Tablet</button>

            <p align="center">{carregando === true ? "Carregando..." : null}</p>
            <Product dadosProduct={dados} />
        </div>
    );
};

export default App;

