import React from "react";
import FormControlInput from "components/Input/FormControlInput";
import FormButton from "components/Button/FormButton";
import Footer from "layouts/Footer/Footer";
import styled from "styled-components";
import { Box, Typography } from "@material-ui/core";
import defaultTheme from "theme/defaultTheme";
import { useHistory } from "react-router-dom";

let FormContainer = styled.form`
  margin-top: 24px;
`;
let FormContainerWrapper = styled.form`
  width: 90%;
  max-width: 342px;
`;

const CreateAgentPage = (props) => {
  let history = useHistory();
  let [data, setData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  let [errorMsg, seterrorMsg] = React.useState({
    email: { status: false, msg: "" },
    firstName: { status: false, msg: "" },
    lastName: { status: false, msg: "" },
  });

  let inputValue = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  let formSubmit = () => {
    if (!data.email || !data.firstName || !data.lastName) {
      seterrorMsg({
        firstName: {
          status: !data.firstName ? true : false,
          msg: !data.firstName ? "First Name Cannot Be Empty" : "",
        },
        lastName: {
          status: !data.lastName ? true : false,
          msg: !data.lastName ? "Last Name Cannot Be Empty" : "",
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
      firstName: { status: false, msg: "" },
      lastName: { status: false, msg: "" },
    });

    console.log(data);

    setData({
      firstName: "",
      lastName: "",
      email: "",
    });

    history.goBack();
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
        <FormContainerWrapper>
          <FormContainer>
            <Box>
              <FormControlInput
                value={data.firstName}
                error={errorMsg.firstName.status}
                errorMsg={errorMsg.firstName.msg}
                label="First Name"
                type="text"
                marginBottom="16px"
                width="100%"
                forhtml="firstName"
                name="firstName"
                onchange={(e) => inputValue(e)}
              />
              <FormControlInput
                value={data.lastName}
                error={errorMsg.lastName.status}
                errorMsg={errorMsg.lastName.msg}
                label="Last Name"
                type="text"
                marginBottom="16px"
                width="100%"
                forhtml="lastName"
                name="lastName"
                onchange={(e) => inputValue(e)}
              />
              <FormControlInput
                value={data.email}
                error={errorMsg.email.status}
                errorMsg={errorMsg.email.msg}
                label="Email"
                type="email"
                marginBottom="10px"
                width="100%"
                forhtml="email"
                name="email"
                onchange={(e) => inputValue(e)}
              />
            </Box>

            <FormButton
              type="submit"
              title="Create Agent"
              onPress={formSubmit}
              width="100%"
            ></FormButton>
          </FormContainer>
        </FormContainerWrapper>
      </Box>
      <Footer />
    </Box>
  );
};

export default CreateAgentPage;
