import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    const response = await api.post("/user/login", {
      email,
      password,
    });
    const token = response.data.tokne;
    Cookies.set("authToken", token);
    navigate("/home");
  };

  return (
    <>
      <h2>Login</h2>
      <label>Email: </label>
      <input type="email" value={email} onChange={handleEmailChange} />
      <br />
      <label>Senha: </label>
      <input type="password" value={password} onChange={handlePasswordChange} />
      <br />
      <button type="button" onClick={handleLogin}>
        Entrar
      </button>
      <button type="button" onClick={handleLogin}>
        Cadastrar
      </button>
    </>
  );
}
