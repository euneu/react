import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

//index 파일에서 them생성하고 가져와서 사용

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  );
}

//span의 부모 컴포넌트인 Box에서 span element를 조절할 수 있다
// pseudeo select를 만들 수 있음
//span:hover {}를 -> &:hover로 간단하게

export default App;
