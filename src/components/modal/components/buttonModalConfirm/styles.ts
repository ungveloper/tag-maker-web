import styled from "@emotion/styled";
import { InitModalButton } from "../../styles";

export const Button = styled(InitModalButton)`
  border-left: 0.1rem solid ${(props) => props.theme.borderColor};

  &:hover {
    background-color: ${(props) => props.theme.pointBgColorHover};
    color: ${(props) => props.theme.pointTextColor};
  }
`;
