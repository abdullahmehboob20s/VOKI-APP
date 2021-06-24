import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import defaultTheme from "theme/defaultTheme";

let DialogClosingBtn = styled(Button)`
  &&& {
    flex: 1;
    margin-right: ${(props) => props.mr};
    background: ${(props) =>
      props.border === true
        ? defaultTheme.palette.whiteColor
        : defaultTheme.palette.textDarkColor};
    border-radius: 4px;
    height: 48px;
    color: ${(props) =>
      props.border === true
        ? defaultTheme.palette.textDarkColor
        : defaultTheme.palette.whiteColor};

    border: ${(props) =>
      props.border === true
        ? `1px solid ${defaultTheme.palette.textDarkColor}`
        : "none"};
    &:hover {
      background: ${(props) =>
        props.border === true
          ? defaultTheme.palette.textDarkColor
          : defaultTheme.palette.whiteColor};
      color: ${(props) =>
        props.border === true
          ? defaultTheme.palette.whiteColor
          : defaultTheme.palette.textDarkColor};

      border: ${(props) =>
        props.border === true
          ? "none"
          : `1px solid ${defaultTheme.palette.textDarkColor}`};
    }
  }
`;

let DailogBtn = (props) => {
  let { title, border, mr, click } = props;
  return (
    <DialogClosingBtn border={border} onClick={click} mr={mr}>
      {title}
    </DialogClosingBtn>
  );
};

export default DailogBtn;

{
  /* <DialogClosingBtn
                  onClick={() => setOpen(false)}
                  border={true}
                  mr="10px"
                >
                  No
                </DialogClosingBtn> */
}
