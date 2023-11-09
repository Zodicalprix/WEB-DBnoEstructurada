import React from 'react';
import { useNavigate } from 'react-router-dom';
import estile from './Login.module.css'

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simplemente redirige al usuario a la pantalla de inicio
    navigate('/home');
  };

  return (
    <div className={estile.login}>
      <h2 className={estile.h2}>Login</h2>
      <form className={estile.form}>
        <div>
          <label>Email</label>
          <input type='email'></input>
        </div>
        <div>
          <label>Password</label>
          <input type='Password'></input>
        </div>
      </form>
      <div><button className={estile.button} onClick={handleLogin}>Iniciar Sesión</button></div>
    </div>
          
  );
}

export default Login;