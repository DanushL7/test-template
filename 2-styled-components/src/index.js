import React from "react";
import { createRoot } from "react-dom/client";
import styled from "styled-components"


const Header= styled.h1`
color:red;

@media(max-width:480px){
  font-size:24px;
  color:green;
}
`

const Hero= styled(Header)`
color:blue;
font-size:100px`
const App = () => {
  return <><Hero>I am Hero</Hero>
  <Header>Hello React!</Header>
  </>
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
