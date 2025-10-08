import { useState } from "react";

export function FormularioSimples() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleChange(event) {
    setNome(event.target.value);
  }

  function enviarInfos() {
    console.log(nome)
    setMensagem(`Olá ${nome}, seu email é ${email}`);
    setNome("")
    setEmail("")
    console.log(nome)
  }
  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>Formulário Simples</h2>

      <div style={{ marginBottom: "15px" }}>
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={handleChange}
          placeholder="Digite seu nome"
          style={{
            display: "block",
            width: "100%",
            padding: "8px",
            marginTop: "5px",
          }}
        />
        <small>Caracteres digitados: {nome.length}</small>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu email"
          style={{
            display: "block",
            width: "100%",
            padding: "8px",
            marginTop: "5px",
          }}
        />
      </div>

      <button
        onClick={enviarInfos}
        style={{
          padding: "10px 20px",
          background: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Enviar
      </button>

      {mensagem  && (
        <p
          style={{
            marginTop: "20px",
            padding: "10px",
            background: "#d4edda",
            borderRadius: "5px",
          }}
        >
          {mensagem}
        </p>
      )}
    </div>
  );
}
