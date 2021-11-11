import {
  Button,
  CloseButton,
  Stack,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

export const ToolTipButton = (props) => {
  if (props.active)
    return (
      <OverlayTrigger
        key={props.placement}
        placement={props.placement}
        overlay={
          <Tooltip id={`tooltip-${props.placement}`}>{props.msg}</Tooltip>
        }
      >
        <Button
          variant={props.variant}
          size={props.size}
          onClick={props.onClick}
        >
          <strong>{props.btnname}</strong>
        </Button>
      </OverlayTrigger>
    );
  else
    return (
      <Button
        variant={props.variant}
        size={props.size}
        onClick={props.onClick}
        disabled
      >
        {props.btnname}
      </Button>
    );
};
