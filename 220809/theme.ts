import { DefaultTheme } from "styled-components";

//theme 사용하는 법
// 1. styled.d.ts 를 만든다. (참고: d.ts 는 declaration file 이라는 뜻이다.)
// 2. theme.ts (테마) 를 만든다.
// 3. index.tsx 에 2에서 만든 테마를 주입한다.
// 4. app.tsx 에서 props 로 받아 사용한다.

export const theme: DefaultTheme = {
  bgColor: "#2f3640",
  textColor: "#f5f6fa",
  accentColor: "#4cd137",
};
