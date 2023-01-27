import React from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/Header";
import { Question } from "./components/Question";
import "./index.css";
import questionsData from "./sample-data";
import styled from "styled-components";
import { Footer } from "./components/Footer";

const Container = styled.div`
  margin: auto;
  max-width: 720px;
  padding: 20px;
`;

const App = () => {
  return (
    <Container>
      <Header />
      <div id="questionList">
        {questionsData.map((questionWithOptions, index) => (
          <Question key={`question${index}`} {...questionWithOptions} />
        ))}
      </div>
      <Footer />
    </Container>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
