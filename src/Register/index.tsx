import React, { useState } from 'react';
import './styles.css';
import Logo from '../image/compass_logo.png';
import Input from '../components/Input';

const Register: React.FC = () => {

  const [name, setName] = useState('');
  const [user, setUser] = useState('');
  const [birth, setBirth] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordTwo, setPasswordTwo] = useState('');
  const [isFormValid, setIsValid] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsValid(checkInputs());
    if (isFormValid) {
      e.currentTarget.submit();
    }
  };

  const checkInputs = (): boolean => {
    let isFormValid = true;
    const userRegex = /^[a-zA-Z]+$/;
    const passwordRegex =
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const nameRegex = /^[a-zA-ZÀ-ÿ ]*$/;
    const emailRegex = /^\S+@\S+\.\S+$/;


    if (!user.trim().length) {
      isFormValid = false;
      const userControl = document.getElementById('user')!.parentElement!;
      const userSmall = userControl.querySelector('small')!;
      userSmall.innerText = 'EMPTY FIELD';
      userControl.className = 'input_control error';
    } else if (!userRegex.test(user.trim())) {
      isFormValid = false;
      const userControl = document.getElementById('user')!.parentElement!;
      const userSmall = userControl.querySelector('small')!;
      userSmall.innerText = 'INVALID USER (LETTER ONLY)';
      userControl.className = 'input_control error';
    } else {
          const userControl = document.getElementById('user')!.parentElement!;
          const userSmall = userControl.querySelector('small')!;
          userSmall.innerText = 'SUCCESS';
          userControl.className = 'input_control success';
      } 

    if (!name.trim().length) {
      isFormValid = false;
      const nameControl = document.getElementById('name')!.parentElement!;
      const nameSmall = nameControl.querySelector('small')!;
      nameSmall.innerText = 'EMPTY FIELD';
      nameControl.className = 'input_control error';
    } else if (!nameRegex.test(name.trim())) {
      isFormValid = false;
      const nameControl = document.getElementById('name')!.parentElement!;
      const nameSmall = nameControl.querySelector('small')!;
      nameSmall.innerText = 'INVALID NAME (EX: FULANO DA SILVA)';
      nameControl.className = 'input_control error';
    } else {
          const nameControl = document.getElementById('name')!.parentElement!;
          const nameSmall = nameControl.querySelector('small')!;
          nameSmall.innerText = 'SUCCESS';
          nameControl.className = 'input_control success';
    } 

    if (!email.trim().length) {
        isFormValid = false;
        const emailControl = document.getElementById('email')!.parentElement!;
        const emailSmall = emailControl.querySelector('small')!;
        emailSmall.innerText = 'EMPTY FIELD';
        emailControl.className = 'input_control error';
    } else if (!emailRegex.test(email.trim())) {
        isFormValid = false;
        const emailControl = document.getElementById('email')!.parentElement!;
        const emailSmall = emailControl.querySelector('small')!;
        emailSmall.innerText = 'INVALID EMAIL';
        emailControl.className = 'input_control error';
    } else {
          const emailControl = document.getElementById('email')!.parentElement!;
          const emailSmall = emailControl.querySelector('small')!;
          emailSmall.innerText = 'SUCCESS';
          emailControl.className = 'input_control success';
      } 

    if (!birth.trim().length) {
        isFormValid = false;
        const birthControl = document.getElementById('birth')!.parentElement!;
        const birthSmall = birthControl.querySelector('small')!;
        birthSmall.innerText = 'EMPTY FIELD';
        birthControl.className = 'input_control error';
    } else {
          const birthControl = document.getElementById('birth')!.parentElement!;
          const birthSmall = birthControl.querySelector('small')!;
          birthSmall.innerText = 'SUCCESS';
          birthControl.className = 'input_control success';
    } 

    if (!password.trim().length) {
          isFormValid = false;
          const passwordControl = document.getElementById(
            'password'
          )!.parentElement!;
          const passwordSmall = passwordControl.querySelector('small')!;
          passwordSmall.innerText = 'EMPTY FIELD';
          passwordControl.className = 'input_control error';
      } else if (!passwordRegex.test(password.trim())) {
          isFormValid = false;
          const passwordControl = document.getElementById(
            'password'
          )!.parentElement!;
          const passwordSmall = passwordControl.querySelector('small')!;
          passwordSmall.innerText = 'INVALID (REQUIREMENTS: ONE SPECIAL CHARACTER, CAPITAL LETTER AND NUMBER)';
          passwordControl.className = 'input_control error';
      } else {
          const passwordControl = document.getElementById(
            'password'
          )!.parentElement!;
          const passwordSmall = passwordControl.querySelector('small')!;
          passwordSmall.innerText = 'SUCCESS';
          passwordControl.className = 'input_control success';
       } 

       if (!passwordTwo.trim().length) {
        isFormValid = false;
        const passwordTwoControl = document.getElementById(
          'passwordTwo'
        )!.parentElement!;
        const passwordTwoSmall = passwordTwoControl.querySelector('small')!;
        passwordTwoSmall.innerText = 'EMPTY FIELD';
        passwordTwoControl.className = 'input_control error';
    } else {
        if(password === passwordTwo){
          const passwordControl = document.getElementById(
            'password'
          )!.parentElement!;
          const passwordSmall = passwordControl.querySelector('small')!;
          passwordSmall.innerText = 'SUCCESS';
          passwordControl.className = 'input_control success';  
        } else {
          isFormValid = false;
          const passwordTwoControl = document.getElementById(
            'passwordTwo'
          )!.parentElement!;
          const passwordTwoSmall = passwordTwoControl.querySelector('small')!;
          passwordTwoSmall.innerText = 'PASSWORDS DO NOT MATCH';
          passwordTwoControl.className = 'input_control error';
        }
      }


      return isFormValid;
};

    return (
    <div className="container">
        <div className="boxFormRegister">
        <h1>Olá,</h1>
        <p>Por favor, registre-se para continuar</p>
  
        <form action="" method="post" className="formRegister" id="form" onSubmit={handleSubmit}>
          <h3>Registro</h3>

        <Input
          type='text'
          name='name'
          id='name'
          value={name}
          className='input_control'
          placeholder='Name'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
        {/* <small></small> */}

        <Input
          type='text'
          name='user'
          id='user'
          value={user}
          className='input_control'
          placeholder='Username'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUser(e.target.value)
          }
        />
        {/* <small></small> */}

        <Input
          type='email'
          name='email'
          id='email'
          value={email}
          className='input_control'
          placeholder='Email'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        {/* <small></small> */}
        <Input
          type='date'
          name='birth'
          id='birth'
          value={birth}
          className='input_control'
          placeholder='Birth'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setBirth(e.target.value)
          }
        />
        {/* <small></small> */}
        <Input
          type='password'
          name='password'
          id='password'
          value={password}
          className='input_control'
          placeholder='Password'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        {/* <small></small> */}
        <Input
          type='password'
          name='passwordTwo'
          id='passwordTwo'
          value={passwordTwo}
          className='input_control'
          placeholder='Password Confirm'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPasswordTwo(e.target.value)
          }
        />
        {/* <small></small> */}

          <button type="submit" className="btnRegister">Registrar-se</button>
          <p className="log">
            Já possui uma conta? <a href="/Login">Faça Login</a>
          </p>
        </form>
      </div>
      <div className="image">
        <img src={Logo} alt="Image Compass" />
      </div>
      </div>
    );
};

export default Register;