import React from 'react';
import './CarrinhoLateral.css';

function CarrinhoLateral({ itens, onAdd, onRemove, total, onFinalizar }) {
  return (
    <div className="carrinho-lateral">
      <h2>Carrinho</h2>
      {itens.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <>
          {itens.map((item, index) => (
            <div key={index} className="item-carrinho">
              <img src={item.imagem} alt={item.nome} />
              <div>
                <p className="nome">{item.nome}</p>
                <p>Quantidade: {item.quantidade}</p>
                <p>Preço: R$ {(item.valor * item.quantidade).toFixed(2)}</p>
                <div className="botoes">
                  <button onClick={() => onAdd(item)}>+</button>
                  <button onClick={() => onRemove(item)}>-</button>
                </div>
              </div>
            </div>
          ))}
          <h3 className="total">Total: R$ {total.toFixed(2)}</h3>
          <button className="finalizar" onClick={onFinalizar}>Finalizar Compra</button>
        </>
      )}
    </div>
  );
}

export default CarrinhoLateral;
