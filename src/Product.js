import React from 'react';

const Product = ({ dadosProduct }) => {

    if (dadosProduct !== null) {


        return (
            <div>
                <h2>{dadosProduct.nome}</h2>
                <p>{dadosProduct.descricao}</p>
                <img style={{ width: "200px", height: "200px" }} src={dadosProduct.fotos[0].src} alt={dadosProduct.fotos[0].titulo} />
                <p style={{ color: dadosProduct.vendido === "false" ? "green" : "red" }}>{dadosProduct.vendido === "false" ? "Em estoque" : "Produto vendido"}</p>
                <p style={{ color: dadosProduct.vendido === "false" ? "green" : "red" }}>Valor do produto: R$ {dadosProduct.preco},00</p>
            </div>
        );
    } else {
        return null;
    }
};

export default Product;
