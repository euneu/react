import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

interface CircleProps {
  bgColor: string;
  borderColor?: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

function Circle({ bgColor, borderColor }: CircleProps) {
  // 초기값을 보고 counter type를 추측해서 만들어줌 이 경우는 number
  const [conuter, setCounter] = useState(1);
  setCounter(2);
  //setCounter 안에 number가 아닌 값을 넣으면 오류가 날 것임

  //만약 state 값이 string or number 둘 다 될 수 있다면
  //useState<number|string>(0) <- 이렇게 설정해줌
  return (
    <Container
      bgColor={bgColor}
      borderColor={borderColor ?? bgColor}
    ></Container>
  );
}
export default Circle;
