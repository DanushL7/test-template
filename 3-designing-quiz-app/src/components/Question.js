import React from "react";
import styled from "styled-components";

const Option= styled.div`
    background: #eee;
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 14px;
}
`;

const QuestionContainer = styled.div`
  margin-bottom: 60px;
`;

const QuestionItem = styled(QuestionContainer)`
  margin-bottom: 20px;
`;

export const Question = ({question,options}) => {
  return (
    <QuestionContainer>
      <QuestionItem>{question}</QuestionItem>
      {options.map((option) => (
        <Option key={option.text}> {option.text} </Option>
      ))}
    </QuestionContainer>
  );
};
