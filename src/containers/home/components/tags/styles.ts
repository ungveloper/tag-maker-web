import styled from "@emotion/styled";

export const Textarea = styled.textarea`
  padding: 1.6rem 1.6rem 0;
  min-height: 36vh;
  line-height: 2.2rem;
  font-size: 1.6rem;

  &::placeholder {
    color: ${(props) => props.theme.placeholderTextColor};
  }
`;
