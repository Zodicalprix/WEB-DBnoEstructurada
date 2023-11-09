import React from 'react';
import estile from './Registrar.module.css';

function Registrar() {
  return (
    <div className={estile.Registrar}>
      <h2>Register</h2>
      <form className={estile.form}>
        <div>
          <label>User</label>
          <input
          type='User'
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
          type='Email'
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
          type='Password'
          ></input>
        </div>
      </form>
      <div><button className={estile.button}>Register</button></div>
    </div>
  );
}

export default Registrar;