import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <BottomFooter>
      <FooterTitle>
        Copyright © 2021 Voki Technologies . All rights reserved.copyright Voki
        Technology
      </FooterTitle>
      <FooterSubtitle>Privacy Policy | Terms & Conditions</FooterSubtitle>
    </BottomFooter>
  );
}

export default Footer;

let BottomFooter = styled.div``;
let FooterTitle = styled.p`
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #413f3f;
  margin-bottom: 5px;
  text-align: center;
`;
let FooterSubtitle = styled.p`
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #413f3f;
  text-align: center;
`;
