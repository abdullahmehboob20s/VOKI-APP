import React from "react";
import FormControlInput from "components/Input/FormControlInput";
import FormButton from "components/Button/FormButton";
import Footer from "layouts/Footer/Footer";
import { Box, Typography } from "@material-ui/core";
import defaultTheme from "theme/defaultTheme";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";

const CreateAgentPage = (props) => {
  let history = useHistory();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
  };

  const formValidation = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.firstName) {
      errors.firstName = "firstName is required";
    }
    if (!values.lastName) {
      errors.lastName = "lastName is required";
    }
    return errors;
  };

  const formSubmit = (values) => {
    console.log(values);
    history.push("/Agents/");
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
      <Box position="absolute" top="24px" left="44px">
        <Typography color={defaultTheme.palette.bgDarkColor} variant="h1">
          Create Agent
        </Typography>
      </Box>

      <Box
        flex="1"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box width="90%" maxWidth="342px">
          <Box mt="24px">
            <Formik
              initialValues={initialValues}
              validate={formValidation}
              onSubmit={formSubmit}
            >
              {({ values, errors, handleChange, handleSubmit }) => (
                <Form>
                  <Box>
                    <FormControlInput
                      value={values.firstName}
                      errorMsg={errors.firstName}
                      label="First Name"
                      type="text"
                      marginBottom="16px"
                      width="100%"
                      forhtml="firstName"
                      name="firstName"
                      onchange={handleChange}
                    />
                    <FormControlInput
                      value={values.lastName}
                      errorMsg={errors.lastName}
                      label="Last Name"
                      type="text"
                      marginBottom="16px"
                      width="100%"
                      forhtml="lastName"
                      name="lastName"
                      onchange={handleChange}
                    />
                    <FormControlInput
                      value={values.email}
                      errorMsg={errors.email}
                      label="Email"
                      type="email"
                      marginBottom="10px"
                      width="100%"
                      forhtml="email"
                      name="email"
                      onchange={handleChange}
                    />
                  </Box>

                  <FormButton
                    type="submit"
                    title="Create Agent"
                    onPress={formSubmit}
                    width="100%"
                  ></FormButton>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default CreateAgentPage;
