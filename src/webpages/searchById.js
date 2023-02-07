import { useState } from "react";

function LoginForm() {
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");
  const element = document.querySelector('.retorno .user');

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
        fetch('http://localhost:9090/usr/'+id)
        .then(response => response.json())
        .then(data => element.innerHTML = JSON.stringify(data) );
      
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="LoginForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={id}
          placeholder="Id"
          onChange={(e) => setId(e.target.value)}
        />

        <button type="submit">Create</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
        <div className="retorno"><p className="user"></p></div>
      </form>
    </div>
  );
}

export default LoginForm;
