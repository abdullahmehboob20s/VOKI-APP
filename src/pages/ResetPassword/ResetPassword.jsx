import React from "react";
import logo from "assets/images/logo.svg";
import { Link } from "react-router-dom";
import FormControlInput from "components/Input/FormControlInput";
import FormButton from "components/Button/FormButton";
import Footer from "layouts/Footer/Footer";
import defaultTheme from "theme/defaultTheme";
import styled from "styled-components";
import { Box, Typography } from "@material-ui/core";
import { Formik, Form } from "formik";

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

const Login = () => {
  const initialValues = {
    newPassword: "",
    retypePassword: "",
  };

  const formValidation = (values) => {
    const errors = {};
    if (!values.newPassword) {
      errors.newPassword = "Password cannot be empty";
    }
    if (!values.retypePassword) {
      errors.retypePassword = "Password cannot be empty";
    }

    if (values.newPassword !== values.retypePassword) {
      errors.newPassword = "Passwords are not matching";
      errors.retypePassword = "Passwords are not matching";
    }

    return errors;
  };

  const formSubmit = (values) => {
    console.log(values);
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
            <Typography
              style={{ color: defaultTheme.palette.textDarkColor }}
              variant="h6"
            >
              Reset your Password
            </Typography>
          </Box>
          <Typography
            style={{ color: defaultTheme.palette.formLabelColor }}
            variant="body2"
          >
            Please enter your new password
          </Typography>

          <Formik
            initialValues={initialValues}
            validate={formValidation}
            onSubmit={formSubmit}
          >
            {({ values, handleChange, errors, handleSubmit }) => (
              <Form>
                <Box mt="24px">
                  <Box>
                    <FormControlInput
                      value={values.newPassword}
                      errorMsg={errors.newPassword}
                      label="New Password"
                      type="password"
                      marginBottom="16px"
                      width="100%"
                      forhtml="New-Password"
                      name="newPassword"
                      onchange={handleChange}
                    />
                    <FormControlInput
                      value={values.retypePassword}
                      errorMsg={errors.retypePassword}
                      label="Retype Password"
                      forhtml="Retype-Password"
                      type="password"
                      marginBottom="0px"
                      width="100%"
                      name="retypePassword"
                      onchange={handleChange}
                    />
                  </Box>
                  <Box mt="17px">
                    <FormButton
                      type="submit"
                      title="Reset Password"
                      width="100%"
                      onPress={formSubmit}
                    />
                  </Box>
                </Box>
              </Form>
            )}
          </Formik>
        </FormContainerWrapper>
      </Box>
      <Footer />
    </Box>
  );
};

export default Login;
