import styled from "styled-components";

//optional props를 설정할 수 있음 -> ? 이거 하나로
// 사용할 수도 있고 안 할 수도 있는 설정

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}
//borderColor -> undefined 될 수 있음

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
  // ContainerProps 에서는 borderColor가 required임! 그래서 설정해줘야 함
`;

//default 값을 지정해줄 수도 있음
function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
  //borderColor는 CircleProps에서는 undefined | stirng 이지만
  // ContainerProps에서는 string임 --> 문제 발생!
  //그래서 borderColor가 있으면 그걸로 설정하고 없다면 bgColor로 설정해달라는 것임
}

export default Circle;
