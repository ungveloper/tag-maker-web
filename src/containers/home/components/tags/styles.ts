import styled from "@emotion/styled";
import TextareaAutosize from "react-textarea-autosize";

export const Textarea = styled(TextareaAutosize)`
  padding: 1.6rem 1.6rem 0;
  line-height: 2.2rem;
  font-size: 1.6rem;

  &::placeholder {
    color: ${(props) => props.theme.placeholderTextColor};
  }
`;
