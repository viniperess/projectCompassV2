import React, {useState,useEffect, FormEvent} from "react";
import './styles.css';
import Logo from '../image/compass_logo.png';
import Input from '../components/Input';
import { useNavigate } from "react-router-dom";
import { log } from "console";



interface userProps {
  name: string,
  user: string,
  birthdate: Date | string,
  email: string,
  password: string,
  profile_photo: string
}


const Login: React.FC = () => {


const [user, setUser] = useState('');
const [password, setPassword] = useState('');
// const [isFormValid, setIsValid] = useState(false);

const [users, setUsers] = useState<userProps[]>([]);
const fetchusers = async () => {
    const response = await fetch(`http://localhost:5000/api/v1/user`);
    const data = await response.json();
    setUsers(data.users);
    console.log(data.users);
  };

  useEffect(() => {
    fetchusers();
  }, []);


const nav = useNavigate();

const handleSubmit = (e: FormEvent) => {
  
e.preventDefault();

const correctLogin = users.filter((usersArray) => {
  return usersArray.user === user && usersArray.password === password;
}); 

console.log(correctLogin);


  
  // setIsValid(checkInputs());
  if (correctLogin.length !== 0) {
    localStorage.setItem("token", JSON.stringify(correctLogin));
    console.log(JSON.parse(localStorage.getItem("token")!));
    
    nav("/");
    

    // e.currentTarget.submit();

    return;
  }
};

// const checkInputs = (): boolean => {
//   let isFormValid = true;
  
//   if (!user.trim().length) {
//     isFormValid = false;
//     const userControl = document.getElementById('userLogin')!.parentElement!;
//     const userSmall = userControl.querySelector('small')!;
//     userSmall.innerText = 'EMPTY FIELD';
//     userControl.className = 'input_control error';
//   } else {
//       if (user) {
//         const userControl = document.getElementById('userLogin')!.parentElement!;
//         const userSmall = userControl.querySelector('small')!;
//         userSmall.innerText = 'SUCCESS';
//         userControl.className = 'input_control success';
//     } else {
//         isFormValid = false;
//         const userControl = document.getElementById(
//           'userLogin'
//         )!.parentElement!;
//         const userSmall = userControl.querySelector('small')!;
//         userSmall.innerText = 'INVALID CREDENTIALS';
//         userControl.className = 'input_control error';
//       }
//     }

//   if (!password.trim().length) {
//     isFormValid = false;
//     const passwordControl = document.getElementById(
//       'passwordLogin'
//     )!.parentElement!;
//     const passwordSmall = passwordControl.querySelector('small')!;
//     passwordSmall.innerText = 'EMPTY FIELD';
//     passwordControl.className = 'input_control error';
//   } else {
//     if (password) {
//       const passwordControl = document.getElementById(
//         'passwordLogin'
//       )!.parentElement!;
//       const passwordSmall = passwordControl.querySelector('small')!;
//       passwordSmall.innerText = 'SUCCESS';
//       passwordControl.className = 'input_control success';
      
//     } 
//     else {
//       isFormValid = false;
//       const passwordControl = document.getElementById(
//         'passwordLogin'
//       )!.parentElement!;
//       const passwordSmall = passwordControl.querySelector('small')!;
//       passwordSmall.innerText = 'INVALID CREDENTIALS';
//       passwordControl.className = 'input_control error';
//     }
//   }

//   return isFormValid;
// };

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
          onChange={(e) =>
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
          onChange={(e) =>
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
