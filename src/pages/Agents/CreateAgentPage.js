import React from "react";
import FormControlInput from "components/Input/FormControlInput";
import FormButton from "components/Button/FormButton";
import Footer from "layouts/Footer/Footer";
import styled from "styled-components";
import { Box } from "@material-ui/core";
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
let CreateAgentTitle = styled.a`
  position: absolute;
  top: 24px;
  left: 44px;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  color: #161c2f;
`;

let FormContainer = styled.form`
  margin-top: 24px;
`;
let FormContainerWrapper = styled.form`
  width: 90%;
  max-width: 342px;
`;

function CreateAgentPage(props) {
  let { page, setPage } = props;

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

    setPage("Agents");
  };

  return (
    <MainContainer>
      {/* Title */}
      <CreateAgentTitle>Create Agent</CreateAgentTitle>

      <Box
        flex="1"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        {/* FormContainerWrapper */}
        <FormContainerWrapper>
          {/* FormContainer */}
          <FormContainer>
            <Box>
              {/* FormControlInput */}
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
            ></FormButton>
          </FormContainer>
        </FormContainerWrapper>
      </Box>
      {/* Footer */}
      <Footer />
    </MainContainer>
  );
}

export default CreateAgentPage;
