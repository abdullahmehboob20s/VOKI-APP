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

// @material-ui/core"
import { Box, Checkbox, Typography } from "@material-ui/core";

import defaultTheme from "theme/defaultTheme";

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
let ContainerFormLabel = styled(Typography)`
  &&& {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: ${defaultTheme.palette.textDarkColor};
    margin-bottom: 8px;
  }
`;
let ContainerFormTitle = styled(Typography)`
  &&& {
    font-weight: 500;
    font-size: 30px;
    line-height: 37px;
    color: ${defaultTheme.palette.textDarkColor};
  }
`;
let CheckBoxLabel = styled.label`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${defaultTheme.palette.textDarkColor};
`;
let ForgetPasswordLink = styled.a`
  font-weight: 500;
  font-size: 14px;
  color: ${defaultTheme.palette.textDarkColor};
  text-decoration: none;
`;
let CustomCheckBox = styled(Checkbox)`
  &&& {
    margin-right: 7.5px;
    border-radius: 4px;
    width: 16.95px;
    height: 17px;
  }
`;

const Login = () => {
  let history = useHistory();

  let [data, setData] = React.useState({
    email: "",
    password: "",
  });

  let [errorMsg, seterrorMsg] = React.useState({
    email: { status: false, msg: "" },
    password: { status: false, msg: "" },
  });

  let inputValue = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  let formSubmit = () => {
    // HAVE TO UNCOMMENT LATER ======================================

    if (!data.email || !data.password) {
      seterrorMsg({
        password: {
          status: !data.password ? true : false,
          msg: !data.password ? "Password Cannot Be Empty" : "",
        },
        email: {
          status: !data.email ? true : false,
          msg: !data.email ? "Email Cannot Be Empty" : "",
        },
      });
      return;
    }

    seterrorMsg({
      email: { status: false, msg: "" },
      password: { status: false, msg: "" },
    });

    console.log(data);

    setData({
      email: "",
      password: "",
    });

    history.push("/Agents");
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
            <Typography variant="h6">Welcome to Voki</Typography>
          </Box>
          <Typography variant="h5">Login to your Account</Typography>

          {/* FormContainer */}
          <FormContainer>
            <Box>
              {/* FormControlInput */}
              <FormControlInput
                value={data.email}
                error={errorMsg.email.status}
                errorMsg={errorMsg.email.msg}
                label="Email/Username"
                type="email"
                marginBottom="16px"
                width="100%"
                forhtml="Email/Username"
                name="email"
                onchange={(e) => inputValue(e)}
              />
              <FormControlInput
                value={data.password}
                error={errorMsg.password.status}
                errorMsg={errorMsg.password.msg}
                label="Password"
                marginBottom="10px"
                width="100%"
                forhtml="Password"
                type="password"
                name="password"
                onchange={(e) => inputValue(e)}
              />
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <CustomCheckBox id="remember" color="primary"></CustomCheckBox>
                <CheckBoxLabel htmlFor="remember">Remember me</CheckBoxLabel>
              </Box>
              <ForgetPasswordLink as={Link} to="/agents/forgetpassword">
                Forgot password?
              </ForgetPasswordLink>
            </Box>

            <FormButton
              type="submit"
              title="LOG IN"
              onPress={formSubmit}
            ></FormButton>
          </FormContainer>
        </FormContainerWrapper>
      </Box>
      {/* Footer */}
      <Footer />
    </MainContainer>
  );
};

export default Login;
