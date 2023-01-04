import { memo } from "react";
import isEqual from "react-fast-compare";
import { Button } from "./styles";

type ButtonModalConfirmProps = {
  title: string;
  onClick: () => void;
};
function ButtonModalConfirm(props: ButtonModalConfirmProps): JSX.Element {
  const { title, onClick } = props;

  return <Button onClick={onClick}>{title}</Button>;
}

export default memo(ButtonModalConfirm, isEqual);
