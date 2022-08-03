import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;
// back tick ``<< 이용

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;
//1.porps를 통해 컴포넌트 설정하는 방법
//컴포넌트 하나로 재사용 가능
// prop 이름을 전달해서 함수 내에서 해당 prop를 받음

//2. 컴포넌트 확장
//이전 컴포넌트의(BOX) 모든 속성을 가져온 후 추가로 새로운 속성 더해줌
const Circle = styled(Box)`
  border-radius: 50px;
`;

function App() {
  return (
    <Father>
      <Circle bgColor="teal" />
      <Box bgColor="tomato" />
    </Father>
  );
}

export default App;
