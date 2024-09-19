import styled, { css } from "styled-components";

export const CommonButton = styled.button<{
  $primary?: boolean;
  $error?: boolean;
}>`
  /* Adapt the colors based on primary prop */
  background: ${(props) =>
    props.$primary ? "#4A7BF5FF" : props.$error ? "#F34821FF" : "white"};
  color: ${(props) =>
    props.$primary ? "white" : props.$error ? "white" : "#F34821FF"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid #99b5fd3a;
  border-radius: 6px;
  &:hover {
    background-color: ${(props) =>
      props.$primary ? " #7096f6ff" : props.$error ? "#EC785EFF" : "#4A7BF5FF"};
  }
`;
