import React from "react";
// logo
import logo from "assets/images/logo.svg";
// react-router-dom
import { Link, useHistory } from "react-router-dom";
// components
import FormControlInput from "components/Input/FormControlInput";
import FormButton from "components/Button/FormButton";
import Footer from "layouts/Footer/Footer";
// styled-components
import styled from "styled-components";

import defaultTheme from "theme/defaultTheme";
import { Box, Typography } from "@material-ui/core";

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

          {/* FormContainer */}
          <FormContainer>
            <Box>
              {/* FormControlInput */}
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

            <FormButton title="Reset Password" onPress={formSubmit} />
          </FormContainer>
        </FormContainerWrapper>
      </Box>
      {/* Footer */}
      <Footer />
    </MainContainer>
  );
};

export default ForgetPassword;
