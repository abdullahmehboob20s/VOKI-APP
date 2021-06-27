import React from "react";
import logo from "assets/images/logo.svg";
import { Link } from "react-router-dom";
import FormControlInput from "components/Input/FormControlInput";
import FormButton from "components/Button/FormButton";
import Footer from "layouts/Footer/Footer";
import defaultTheme from "theme/defaultTheme";
import styled from "styled-components";
import { Box, Typography } from "@material-ui/core";

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
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      position="relative"
      bgcolor={defaultTheme.palette.bgLightColor}
      py={3.75}
      px={0}
    >
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
        <FormContainerWrapper>
          <Box mb="8px">
            <Typography color={defaultTheme.palette.textDarkColor} variant="h6">
              Reset your Password
            </Typography>
          </Box>
          <Typography
            color={defaultTheme.palette.formLabelColor}
            variant="body2"
          >
            Please enter your new password
          </Typography>

          <FormContainer>
            <Box>
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

            <FormButton
              title="Reset Password"
              width="100%"
              onPress={formSubmit}
            />
          </FormContainer>
        </FormContainerWrapper>
      </Box>
      <Footer />
    </Box>
  );
};

export default Login;
