import React from "react";
import styled from "styled-components";
import Box from "@material-ui/core/Box";
import defaultTheme from "theme/defaultTheme";

let FooterTitle = styled.p`
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: ${defaultTheme.palette.footerTitleColor};
  margin-bottom: 5px;
  text-align: center;
`;
let FooterSubtitle = styled.p`
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: ${defaultTheme.palette.footerTitleColor};
  text-align: center;
`;

const Footer = () => {
  return (
    <Box>
      <FooterTitle>
        Copyright © 2021 Voki Technologies . All rights reserved.copyright Voki
        Technology
      </FooterTitle>
      <FooterSubtitle>Privacy Policy | Terms & Conditions</FooterSubtitle>
    </Box>
  );
};

export default Footer;
