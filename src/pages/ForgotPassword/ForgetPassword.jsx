import React from "react";
import logo from "assets/images/logo.svg";
import { Link, useHistory } from "react-router-dom";
import FormControlInput from "components/Input/FormControlInput";
import FormButton from "components/Button/FormButton";
import Footer from "layouts/Footer/Footer";
import styled from "styled-components";
import defaultTheme from "theme/defaultTheme";
import { Box, Typography } from "@material-ui/core";
import { Formik, Form } from "formik";

let Logo = styled.a`
  display: block;
  position: absolute;
  top: 100px;
  left: 100px;
  img {
    width: 139.99px;
    height: 56px;
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
const ForgetPassword = () => {
  let history = useHistory();

  const initialValues = {
    email: "",
  };

  const formValidation = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email is required";
    }
    return errors;
  };

  const formSubmit = (values) => {
    console.log(values);
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
        <Box maxWidth="342px" width="90%">
          <Box mb="8px">
            <Typography
              style={{ color: defaultTheme.palette.textDarkColor }}
              variant="h6"
            >
              Forget your Password
            </Typography>
          </Box>
          <Typography
            variant="body2"
            style={{ color: defaultTheme.palette.formLabelColor }}
          >
            Please enter your email address so we can send you a link to reset
            your password
          </Typography>

          <Formik
            initialValues={initialValues}
            onSubmit={formSubmit}
            validate={formValidation}
          >
            {({ values, handleChange, errors, handleSubmit, handleReset }) => (
              <Form onReset={handleReset} onSubmit={handleSubmit}>
                <Box mt="24px">
                  <Box>
                    <FormControlInput
                      value={values.email}
                      type="email"
                      errorMsg={errors.email}
                      label="Email Address"
                      width="100%"
                      marginBottom="0px"
                      forhtml="Email-Address"
                      name="email"
                      onchange={handleChange}
                    />
                  </Box>
                  <Box mt="17px">
                    <FormButton
                      title="Reset Password"
                      width="100%"
                      type="submit"
                      onPress={formSubmit}
                    />
                  </Box>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default ForgetPassword;
