import Button from "react-bootstrap/esm/Button";

interface IButton {
  onButtonClick: () => void;
  color: string;
  children?: any;
}

export default function SelfButton({
  onButtonClick,
  color,
  children,
}: IButton) {
  return (
    <>
      <Button onClick={onButtonClick} style={{ backgroundColor: color }}>
        {children}
      </Button>
    </>
  );
}
