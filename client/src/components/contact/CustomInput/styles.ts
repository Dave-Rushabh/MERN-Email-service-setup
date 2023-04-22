import styled from 'styled-components';

export const Input = styled.input`
  padding: 0.5rem;
  height: 2rem;
  width: 100%;

  &:focus {
    outline: none;
    border: 1px solid teal;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
`;

export const Textarea = styled.textarea`
  padding: 0.5rem;
  height: 5rem;
  width: 100%;
  resize: none;

  &:focus {
    outline: none;
    border: 1px solid teal;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
`;
