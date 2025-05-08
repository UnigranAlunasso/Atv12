import React, { useState } from 'react';
import { produtos } from './produt'; 
import CarrinhoLateral from './assets/CarrinhoLateral'; 

function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false);

  const adicionarAoCarrinho = (produto) => {
    const existe = carrinho.find((item) => item.nome === produto.nome);
    if (existe) {
      setCarrinho(carrinho.map(item =>
        item.nome === produto.nome ? { ...item, quantidade: item.quantidade + 1 } : item
      ));
    } else {
      setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
    }
    setMostrarCarrinho(true);
  };

  const removerDoCarrinho = (produto) => {
    const existe = carrinho.find((item) => item.nome === produto.nome);
    if (existe.quantidade === 1) {
      setCarrinho(carrinho.filter((item) => item.nome !== produto.nome));
    } else {
      setCarrinho(carrinho.map(item =>
        item.nome === produto.nome ? { ...item, quantidade: item.quantidade - 1 } : item
      ));
    }
  };

  const total = carrinho.reduce((soma, item) => soma + item.valor * item.quantidade, 0);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Loja de Hardware</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {produtos.map((produto, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
            <img src={produto.imagem} alt={produto.nome} width="100%" />
            <h3 style={{ fontSize: '16px' }}>{produto.nome}</h3>
            <p><strong>R$ {produto.valor.toFixed(2)}</strong></p>
            <button onClick={() => adicionarAoCarrinho(produto)}>Comprar</button>
          </div>
        ))}
      </div>

      {mostrarCarrinho && (
        <CarrinhoLateral
          itens={carrinho}
          onAdd={adicionarAoCarrinho}
          onRemove={removerDoCarrinho}
          total={total}
          onFinalizar={() => {
            alert('Compra finalizada!');
            setCarrinho([]);
          }}
        />
      )}
    </div>
  );
}

export default App;
