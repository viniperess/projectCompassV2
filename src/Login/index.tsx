import React, { useState } from 'react';
import './styles.css';
import Logo from '../image/compass_logo.png';
import Input from '../components/Input';


const Login: React.FC = () => {
const [user, setUser] = useState('');
const [password, setPassword] = useState('');
const [isFormValid, setIsValid] = useState(false);

const correctUser = 'meu';
const correctPassword = 'Comando688!';

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsValid(checkInputs());
  if (isFormValid && user === correctUser && password === correctPassword) {
    e.currentTarget.submit();
  }
};

const checkInputs = (): boolean => {
  let isFormValid = true;
  const userRegex = /^[a-zA-Z]+$/;
  const passwordRegex =
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (!user.trim().length) {
    isFormValid = false;
    const userControl = document.getElementById('userLogin')!.parentElement!;
    const userSmall = userControl.querySelector('small')!;
    userSmall.innerText = 'EMPTY FIELD';
    userControl.className = 'input_control error';
  } else if (!userRegex.test(user.trim())) {
    isFormValid = false;
    const userControl = document.getElementById('userLogin')!.parentElement!;
    const userSmall = userControl.querySelector('small')!;
    userSmall.innerText = 'INVALID USER';
    userControl.className = 'input_control error';
  } else {
      if (user === correctUser) {
        const userControl = document.getElementById('userLogin')!.parentElement!;
        const userSmall = userControl.querySelector('small')!;
        userSmall.innerText = 'SUCCESS';
        userControl.className = 'input_control success';
    } else {
        isFormValid = false;
        const userControl = document.getElementById(
          'userLogin'
        )!.parentElement!;
        const userSmall = userControl.querySelector('small')!;
        userSmall.innerText = 'INVALID CREDENTIALS';
        userControl.className = 'input_control error';
      }
    }

  if (!password.trim().length) {
    isFormValid = false;
    const passwordControl = document.getElementById(
      'passwordLogin'
    )!.parentElement!;
    const passwordSmall = passwordControl.querySelector('small')!;
    passwordSmall.innerText = 'EMPTY FIELD';
    passwordControl.className = 'input_control error';
  } else if (!passwordRegex.test(password.trim())) {
    isFormValid = false;
    const passwordControl = document.getElementById(
      'passwordLogin'
    )!.parentElement!;
    const passwordSmall = passwordControl.querySelector('small')!;
    passwordSmall.innerText = 'INVALID PASSWORD';
    passwordControl.className = 'input_control error';
  } else {
    if (password === correctPassword) {
      const passwordControl = document.getElementById(
        'passwordLogin'
      )!.parentElement!;
      const passwordSmall = passwordControl.querySelector('small')!;
      passwordSmall.innerText = 'SUCCESS';
      passwordControl.className = 'input_control success';
      
    } 

    else {
      isFormValid = false;
      const passwordControl = document.getElementById(
        'passwordLogin'
      )!.parentElement!;
      const passwordSmall = passwordControl.querySelector('small')!;
      passwordSmall.innerText = 'INVALID CREDENTIALS';
      passwordControl.className = 'input_control error';
    }
  }

  return isFormValid;
};

  return (
    <div className='container'>

    <div className='boxFormLogin'>
     <h1>Olá,</h1>
      <p>Para continuar navegando de forma segura, efetue o login</p>

      <form id='formLogin' className='formLogin' onSubmit={handleSubmit}>
        <h3>Login</h3>

        <Input
          type='text'
          name='userLogin'
          id='userLogin'
          value={user}
          className='input_control'
          placeholder='Username'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUser(e.target.value)
          }
        />
        <small></small>

        <Input
          type='password'
          name='passwordLogin'
          id='passwordLogin'
          value={password}
          className='input_control'
          placeholder='Password'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <small></small>
        <button type='submit' className='btnLogin'>Logar-se</button>
        <p className="log">
        Novo por aqui? <a href="/Register">Registre-se</a>
        </p>
          </form>
          </div>
        <div className='image'>
        <img src={Logo} alt='Compass logo' />
      </div>
    </div>
       );
};
            
export default Login;
