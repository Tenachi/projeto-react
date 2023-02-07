import "./index.css";
import { useState } from "react";
import axios from "axios";

function LoginForm() {
  const [nome, setNome] = useState("");
  const [login, setLogin] = useState("");
  const [pwd, setPwd] = useState("");
  const [message, setMessage] = useState("");
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify({
      nome: nome,
      login: login,
      pwd: pwd,
    })
};

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
    fetch('http://localhost:9090/usr',requestOptions)
        .then(response => response.json())
      
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="LoginForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nome}
          placeholder="Nome"
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="text"
          value={login}
          placeholder="Login"
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          type="text"
          value={pwd}
          placeholder="Password"
          onChange={(e) => setPwd(e.target.value)}
        />

        <button type="submit">Create</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default LoginForm;
