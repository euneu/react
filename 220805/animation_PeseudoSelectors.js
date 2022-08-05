import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const rotateAnimation = keyframes`
  0%{
    transform:rotate(0deg);
    border-radius : 0px;
    
  }
  50% {
    transform:rotate(360deg);
    border-radius : 100px
  }
  100%{
    transform:rotate(0deg);
    border-radius : 0px;

  }`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotateAnimation} 2s linear infinite;
  ${Emoji}:hover {
    font-size: 40px;
  }
`;

//span -> Emoji로 컴포넌트해서 사용할 수 있음

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>😍</Emoji>
      </Box>
      <Emoji>😍</Emoji>
    </Wrapper>
  );
}

export default App;
