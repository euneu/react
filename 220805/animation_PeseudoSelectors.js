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

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotateAnimation} 1s linear infinite;
  span {
    font-size: 36px;
    &:hover {
      //span:hover {}과 같음
      font-size: 40px;
    }
    &:active {
      //클릭하고 있을 때의 상태
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <span>😍</span>
      </Box>
    </Wrapper>
  );
}

//span의 부모 컴포넌트인 Box에서 span element를 조절할 수 있다
// pseudeo select를 만들 수 있음
//span:hover {}를 -> &:hover로 간단하게

export default App;
