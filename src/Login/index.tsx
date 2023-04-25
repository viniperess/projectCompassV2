import React from 'react'
import './styles.css';

const Login: React.FC = () => {
    return (
        <>
        <section className="boxForm">
        <h1>Olá,</h1>
        <p>Para continuar navegando de forma segura, efetue o login</p>
  
        <form action="#" method="post" className="form" id="form">
          <h3>Login</h3>
          <div className="input-control">
            <input type="text" name="name" id="user" placeholder="Usuário" />
            <small></small>
          </div>
  
          <div className="input-control">
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
      </section>
      <section className="image">
        <img src="../image/compass_logo.png" alt="Image Compass" />
      </section>
    </>
    );
}

export default Login;