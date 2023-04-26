import React from 'react'
import './styles.css';
import Logo from '../image/compass_logo.png';

const Login: React.FC = () => {
    return (
      <div className="container">
        <div className="boxForm">
        <h1>Olá,</h1>
        <p>Para continuar navegando de forma segura, efetue o login</p>
  
        <form action="#" method="post" className="form" id="form">
          <h3>Login</h3>
          <div className="input_control">
            <input type="text" name="name" id="user" placeholder="Usuário" />
            <small></small>
          </div>
  
          <div className="input_control">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
          />
          <small></small>
         </div>
          <button type="submit">Logar-se</button>
          <p className="log">
          Novo por aqui? <a href="register.html">Registre-se</a>
          </p>
        </form>
      </div>
      <div className="image">
        <img src={Logo} alt="Image Compass"/>
      </div> 
    </div>
    );
}

export default Login;