import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Router from "./Router";
import { lightTheme, darkTheme } from "./theme";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
//reset css -> css의 기본값을 모두 제거하는 리셋
// https://github.com/zacanger/styled-reset/blob/master/src/index.ts <- 설치할 수 있으나
// 가져와서 사용함
// createGlobalStyle <- css를 한 엘리멘트, 컴포넌트에 고립시키지 않고 전체에 적용될 수 있게 해줌
const GlobalStyle = createGlobalStyle`
 
 @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400&family=Source+Sans+Pro:wght@300;400&display=swap');
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }
  body {
    line-height: 1;
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Source Sans Pro', sans-serif;
    font-family: 'Noto Sans KR', sans-serif;
    background-color: ${(props) => props.theme.bgColor};
    color : ${(props) => props.theme.textColor};
    transition: background-color 0.3s, color 0.3s;
    font-size :16px;
  }
  a{
    text-decoration: none;
    color : inherit;
  }
`;

const ThemChange = styled.div`
  display: block;
  font-size: 25px;
  padding: 10px;
  background-color: ${(props) => props.theme.containerColor};
  color: ${(props) => props.theme.accentColor};
  position: fixed;
  left: 1rem;
  top: 1rem;
  border-radius: 50%;
  border: none;
  a {
    transition: all 0.2s;
  }
  &:hover {
    cursor: pointer;
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };
  return (
    // <> </> -> Framgment 라고 불리는 유령 컴포넌트 div 를 대신해서 부모 없이 서로 붙어있을 수 있게 해줌
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <ThemChange onClick={toggleDarkMode}>
          {isDarkMode ? <BsSunFill /> : <BsMoonFill />}
        </ThemChange>
        <GlobalStyle />
        <Router />
        <ReactQueryDevtools initialIsOpen={true}></ReactQueryDevtools>
      </ThemeProvider>
    </>
  );
}

export default App;
