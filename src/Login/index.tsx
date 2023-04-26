import React from 'react'
import './styles.css';
import Logo from '../image/compass_logo.png';

const Login: React.FC = () => {
  const form = document.getElementById("form") as HTMLFormElement;

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const isValid = check();
  
      if (isValid) {
        form.submit();
      }
    });
  }
  
  function check(): boolean {
    const inputs = form.querySelectorAll("input");
  
    let isValid = true;
  
    const correctPassword = "Admin123!";
    const correctUser = "admin";

    inputs.forEach(function (input: HTMLInputElement) {
      console.log(input.value.trim());
      if (!input.value.trim().length) {
        const inputControl = input.parentElement as HTMLElement;
  
        const small = inputControl.querySelector(`#${input.id}~small`) as HTMLElement;
        small.innerText = "EMPTY FIELD";
        inputControl.className = "input_control error";
  
        isValid = false;
      } else {
        if (input.id === "user") {
          const userInput = document.querySelector("#user") as HTMLInputElement;
          const userRegex = /^[a-zA-Z]+$/;
          const userControl = userInput.parentElement as HTMLElement;
          const userSmall = userControl.querySelector("#user~small") as HTMLElement;
  
          if (
            userRegex.test(userInput.value.trim()) &&
            userInput.value === correctUser
          ) {
            userSmall.innerText = "SUCCESS";
            userControl.className = "input_control success";
          } else {
            userSmall.innerText = "INVALID USER";
            userControl.className = "input_control error";
            isValid = false;
          }
        } else if (input.id === "password") {
          const passwordInput = document.querySelector("#password") as HTMLInputElement;
          const passwordControl = passwordInput.parentElement as HTMLElement;
          const passwordSmall = passwordControl.querySelector("#password~small") as HTMLElement;
          const passwordRegex =
            /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  
          if (
            passwordRegex.test(passwordInput.value.trim()) &&
            passwordInput.value === correctPassword
          ) {
            passwordSmall.innerText = "SUCCESS";
            passwordControl.className = "input-control success";
          } else {
            passwordSmall.innerText = "INVALID PASSWORD";
            passwordControl.className = "input_control error";
            isValid = false;
          }
        } else {
          const inputControl = input.parentElement as HTMLElement;
          const small = inputControl.querySelector(`#${input.id}~small`) as HTMLElement;
          small.innerText = "SUCCESS";
          inputControl.className = "input_control success";
        }
      }
    });
  
    return isValid;
  }
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