import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  background: #b284e5;

  padding: 10px 5px 25px 25px;

  gap: 10px;
`;

const SubHeader = styled.div`
  display: flex;

  img {
    padding: 0px;
    margin: 0px;
  }

  h1 {
    color: #ffff;
  }
`;

export { Wrapper, SubHeader };
