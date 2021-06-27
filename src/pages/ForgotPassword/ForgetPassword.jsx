import React from "react";
import logo from "assets/images/logo.svg";
import { Link, useHistory } from "react-router-dom";
import FormControlInput from "components/Input/FormControlInput";
import FormButton from "components/Button/FormButton";
import Footer from "layouts/Footer/Footer";
import styled from "styled-components";
import defaultTheme from "theme/defaultTheme";
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

const ForgetPassword = () => {
  let history = useHistory();
  let [data, setData] = React.useState({
    email: "",
  });

  let [errorMsg, seterrorMsg] = React.useState({
    email: { status: false, msg: "" },
  });

  let inputValue = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  let formSubmit = () => {
    if (!data.email) {
      seterrorMsg({
        email: {
          status: !data.email ? true : false,
          msg: !data.email ? "Email Cannot Be Empty" : "",
        },
      });
      return;
    }

    seterrorMsg({
      email: { status: false, msg: "" },
    });

    setData({
      email: "",
    });

    history.push("/agents/resetpassword");
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
              Forget your Password
            </Typography>
          </Box>
          <Typography
            variant="body2"
            color={defaultTheme.palette.formLabelColor}
          >
            Please enter your email address so we can send you a link to reset
            your password
          </Typography>

          <FormContainer>
            <Box>
              <FormControlInput
                value={data.email}
                type="email"
                error={errorMsg.email.status}
                errorMsg={errorMsg.email.msg}
                label="Email Address"
                width="100%"
                marginBottom="0px"
                forhtml="Email-Address"
                name="email"
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

export default ForgetPassword;
