import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import * as C from "./styles";
import { getUserName } from "../../service/api/user";

export const PageHeader = ({ children }: any) => {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");

  const navigate = useNavigate();

  const handleMyPageSubmit = () => {
    navigate(`/${userId}`);
  };

  const handleHomeSubmit = () => {
    navigate("/home");
  };

  const handleLogOutSubmit = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    const getUser = async () => {
      return await getUserName();
    };

    getUser().then((userData) => {
      setUserName(userData.user?.email || "Usuario desconhecido");
      setUserId(userData.user?.id || "");
    });
  }, []);

  return (
    <>
      <C.HeaderContainer>
        <C.SpanText>{userName}</C.SpanText>
        <C.ButtonContainer>
          <C.Button onClick={handleMyPageSubmit}>Minha Pagina</C.Button>
          <C.Button onClick={handleHomeSubmit}>Home</C.Button>
          <C.Button onClick={handleLogOutSubmit}>Logout</C.Button>
        </C.ButtonContainer>
      </C.HeaderContainer>
      {children}
    </>
  );
};
