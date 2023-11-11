import { SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as C from "./styles";
import { userLogin } from "../../service/api/user";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (email === "" || password === "") {
      alert("Credencial invalida");
      return;
    }
    const loginResponse = await userLogin(email, password);

    if (loginResponse.status !== 200) {
      alert("Credencial invalida");
      return;
    }
    console.log(loginResponse);
    localStorage.setItem("token", loginResponse.token);
    navigate("/home");
  };

  return (
    <C.LoginContainer>
      <C.BoxLogin>
        <C.SpanText>Sistema de aluguel de imóvel</C.SpanText>
        <C.SpanText>Login</C.SpanText>
        <C.InputText
          type="email"
          placeholder="Digite seu e-mail"
          onChange={(e: { target: { value: SetStateAction<string> } }) => {
            setEmail(e.target.value);
          }}
        ></C.InputText>
        <C.InputText
          type="password"
          placeholder="Digite sua senha"
          onChange={(e: { target: { value: SetStateAction<string> } }) => {
            setPassword(e.target.value);
          }}
        ></C.InputText>
        <C.SubmitButton onClick={handleSubmit}>Enviar</C.SubmitButton>
      </C.BoxLogin>
    </C.LoginContainer>
  );
};
