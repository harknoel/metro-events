import styled from "styled-components";

export const StyledUserAuth = styled.div`
  height: 100vh;
  background-color: #cecded;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 45px;
  div {
    height: 60px;
  }
`;

export const Form = styled.form`
  padding-top: 50px;
  width: 800px;
  height: 400px;
  background-color: #f7f6fc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  width: 90%;
  padding: 10px
  border: 1px solid #494a4f;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #6462f1;
  width: 260px;
  border-radius: 10px;
  border: none;
  color: #ffff;
`;

export const Image = styled.img`
  margin-top: 10px;
  width: 200px;
  height: 100px;
`;

export const Signup = styled.div`
  font-size: 14px;
`;
