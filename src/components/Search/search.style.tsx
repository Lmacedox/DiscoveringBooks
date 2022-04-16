import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 10px;
  gap: 15px;

  h3 {
    color: #ffffff;
  }
`;

const Form = styled.form`
  display: flex;
  width: 60%;

  input {
    width: 100%;
    height: 30px;
    padding: 0 0 0 10px;

    font-size: 15px;
    font-weight: bold;

    background: #ffffff;
    color: #d14;

    border: none;
    outline: none;
  }
`;

const ButtonSearch = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: black;
  width: 100px;

  img {
    width: 15%;
  }

  cursor: pointer;
`;

export { Wrapper, Form, ButtonSearch };
