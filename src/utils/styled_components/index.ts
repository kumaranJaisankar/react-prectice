import styled, { css } from "styled-components";

export const CommonButton = styled.button<{ $primary?: boolean }>`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.$primary ? "#4A7BF5FF" : "white")};
  color: ${(props) => (props.$primary ? "white" : "#4A7BF5FF")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #4a7bf5ff;
  border-radius: 6px;
  &:hover {
    background-color: #7096f6ff;
  }
`;
