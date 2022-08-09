import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

interface LocationParams {
  state: {
    name: string;
  };
}

function Coin() {
  const { coinId } = useParams();
  const [loading, setLoading] = useState(true);
  //react-router-dom v6 부터 제네릭을 지원하지 않아서 이렇게 작성해야함
  //coin에서 받아온 state 사용하기 위해서 interface로 타입 정해주고 받음
  const { state } = useLocation() as LocationParams;
  console.log(state);
  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}

export default Coin;
