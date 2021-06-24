import React from "react";

// logo
import logo from "assets/images/logo.svg";

// react-router-dom
import { Link } from "react-router-dom";

// components
import FormControlInput from "components/Input/FormControlInput";
import FormButton from "components/Button/FormButton";
import Footer from "layouts/Footer/Footer";

import defaultTheme from "theme/defaultTheme";

// styled-components
import styled from "styled-components";
import { Box } from "@material-ui/core";

// Styling

let MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  background: ${defaultTheme.palette.bgLightColor};
  padding: 30px 0;

  @media (max-width: 500px) {
    min-height: 700px;
    /* border: 2px solid red; */
  }
`;
let Logo = styled.a`
  display: block;
  position: absolute;
  top: 50px;
  left: 50px;
  img {
    width: 194.39px;
    height: 78px;
  }

  @media (max-width: 880px) {
    img {
      width: 150px;
    }
  }

  @media (max-width: 800px) {
    position: static;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 134.39px;
    }
  }
`;

let FormContainer = styled.form`
  margin-top: 24px;
`;
let FormContainerWrapper = styled.form`
  width: 90%;
  max-width: 342px;
`;
let ContainerFormLabel = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: ${defaultTheme.palette.formLabelColor};
  margin-bottom: 24px;
`;
let ContainerFormTitle = styled.p`
  font-weight: 500;
  font-size: 30px;
  line-height: 37px;
  color: ${defaultTheme.palette.textDarkColor};
  margin-bottom: 8px;
`;

const Login = () => {
  let [data, setData] = React.useState({
    newPassword: "",
    retypePassword: "",
  });
  let [errorMsg, seterrorMsg] = React.useState({
    newPassword: { status: false, msg: "" },
    retypePassword: { status: false, msg: "" },
  });

  let inputValue = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  let formSubmit = () => {
    if (!data.newPassword || !data.retypePassword) {
      seterrorMsg({
        retypePassword: {
          status: !data.retypePassword ? true : false,
          msg: !data.retypePassword ? "Input Cannot Be Empty" : "",
        },
        newPassword: {
          status: !data.newPassword ? true : false,
          msg: !data.newPassword ? "Input Cannot Be Empty" : "",
        },
      });
      return;
    }

    if (data.newPassword !== data.retypePassword) {
      seterrorMsg({
        retypePassword: {
          status: true,
          msg: "Passwords Are Not Matching",
        },
        newPassword: {
          status: true,
          msg: "Passwords Are Not Matching",
        },
      });
      return;
    }

    seterrorMsg({
      newPassword: { status: false, msg: "" },
      retypePassword: { status: false, msg: "" },
    });

    setData({
      newPassword: "",
      retypePassword: "",
    });
  };

  return (
    <MainContainer>
      {/* Logo */}
      <Logo as={Link} to="/">
        <img src={logo} alt="" />
      </Logo>
      <Box
        flex="1"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        {/* FormContainerWrapper */}
        <FormContainerWrapper>
          {/* Titles */}
          <ContainerFormTitle>Reset your Password</ContainerFormTitle>
          <ContainerFormLabel>
            Please enter your new password
          </ContainerFormLabel>

          {/* FormContainer */}
          <FormContainer>
            <Box>
              {/* FormControlInput */}
              <FormControlInput
                value={data.newPassword}
                error={errorMsg.newPassword.status}
                errorMsg={errorMsg.newPassword.msg}
                label="New Password"
                type="password"
                marginBottom="16px"
                width="100%"
                forhtml="New-Password"
                name="newPassword"
                onchange={inputValue}
              />
              <FormControlInput
                value={data.retypePassword}
                error={errorMsg.retypePassword.status}
                errorMsg={errorMsg.retypePassword.msg}
                label="Retype Password"
                forhtml="Retype-Password"
                type="password"
                marginBottom="0px"
                width="100%"
                name="retypePassword"
                onchange={inputValue}
              />
            </Box>

            <FormButton title="Reset Password" onPress={formSubmit} />
          </FormContainer>
        </FormContainerWrapper>
      </Box>
      {/* Footer */}
      <Footer />
    </MainContainer>
  );
};

export default Login;
