import './Produto.css';

const ProdutoCard = ({ nome, valor, imagem }) => {
  return (
    <div className="produto-card">
      <img src={imagem} alt={nome} />
      <h3>{nome}</h3>
      <p>R$ {valor.toFixed(2)}</p>
      <button>Comprar</button>
    </div>
  );
};

export default ProdutoCard;
