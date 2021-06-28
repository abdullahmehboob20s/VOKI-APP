import React from "react";
import logo from "assets/images/logo.svg";
import { Link, useHistory } from "react-router-dom";
import FormControlInput from "components/Input/FormControlInput";
import FormButton from "components/Button/FormButton";
import Footer from "layouts/Footer/Footer";
import styled from "styled-components";
import { Box, Checkbox, Typography } from "@material-ui/core";
import defaultTheme from "theme/defaultTheme";
import { useFormik } from "formik";

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

let FormContainerWrapper = styled.form`
  width: 90%;
  max-width: 342px;
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
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Email is required";
      }
      if (!values.password) {
        errors.password = "Password is required";
      }
      return errors;
    },
    onSubmit: (values) => {
      console.log(values);
      history.push("/Agents");
    },
  });

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
            <Typography
              color={defaultTheme.palette.textDarkColor}
              variant="body1"
            >
              Welcome to Voki
            </Typography>
          </Box>
          <Typography color={defaultTheme.palette.textDarkColor} variant="h6">
            Login to your Account
          </Typography>

          <Box mt="24px">
            <form onSubmit={formik.handleSubmit}>
              <Box>
                <FormControlInput
                  label="Email/Username"
                  type="email"
                  marginBottom="16px"
                  width="100%"
                  forhtml="Email/Username"
                  name="email"
                  value={formik.values.email}
                  errorMsg={formik.errors.email}
                  onchange={formik.handleChange}
                />
                <FormControlInput
                  label="Password"
                  marginBottom="10px"
                  width="100%"
                  forhtml="Password"
                  type="password"
                  name="password"
                  value={formik.values.password}
                  errorMsg={formik.errors.password}
                  onchange={formik.handleChange}
                />
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <CustomCheckBox
                    id="remember"
                    color="primary"
                  ></CustomCheckBox>
                  <CheckBoxLabel htmlFor="remember">Remember me</CheckBoxLabel>
                </Box>
                <ForgetPasswordLink as={Link} to="/agents/forgetpassword">
                  Forgot password?
                </ForgetPasswordLink>
              </Box>

              <FormButton type="submit" title="LOG IN" width="100%" />
            </form>
          </Box>
        </FormContainerWrapper>
      </Box>
      <Footer />
    </Box>
  );
};

export default Login;
