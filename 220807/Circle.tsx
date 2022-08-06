import styled from "styled-components";

//props의 타입을 설정해줌

interface CircleProps {
  bgColor: string;
}

const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
`;

function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor} />;
}

// 1. 어떻게 우리 자신과 props를 interface를 사용하여 보호하는지
// interface는 object를 설명해주는 것임

export default Circle;
