import { Navigate } from 'react-router-dom';

const RotaPrivada = ({ children }) => {
  const usuarioLogado = localStorage.getItem("usuario");

  return usuarioLogado ? children : <Navigate to="/" />;
};

export default RotaPrivada;
