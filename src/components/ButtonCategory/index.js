import { Button, TextLabel } from "./styled.js";

export function ButtonCategory(props) {
  return (
    <Button>
      <TextLabel>{props.children}</TextLabel>
    </Button>
  );
}
