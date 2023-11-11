import styled from "styled-components";

export const LoginContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxLogin = styled.div`
  width: 60%;
  max-width: 850px;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SpanText = styled.span`
  font-size: 34px;
  margin: 10px;
`;

export const FormLabel = styled.span`
  font-size: 24px;
  margin: 10px;
`;

export const InputText = styled.input`
  border-radius: 5px;
  margin: 10px;
  width: 60%;
  text-align: center;
  font-size: 20px;
`;

export const SubmitButton = styled.button`
  font-size: 20px;
`;
