import React from "react";

// logo
import logo from "../../assets/images/logo.svg";

// react-router-dom
import { Link, useHistory } from "react-router-dom";

// components
import FormControlInput from "../../components/Input/FormControlInput";
import FormButton from "../../components/Button/FormButton";
import Footer from "../../layouts/Footer/Footer";

// styled-components
import styled from "styled-components";

// @material-ui/core"
import { Checkbox } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
let Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

let FormContainer = styled.form`
  margin-top: 24px;
`;
let FormContainerWrapper = styled.form`
  width: 90%;
  max-width: 342px;
`;
let ContainerFormLabel = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${defaultTheme.palette.textDarkColor};
  margin-bottom: 8px;
`;
let ContainerFormTitle = styled.p`
  font-weight: 500;
  font-size: 30px;
  line-height: 37px;
  color: ${defaultTheme.palette.textDarkColor};
`;
let FormControlWrapper = styled.div``;
let ForgetPasswordWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

// useStyles
const useStyles = makeStyles((theme) => ({
  myCheckBox: {
    marginRight: "7.5px",
    borderRadius: "4px",
    width: "16.95px",
    height: "17px",
  },
}));

function Login() {
  let classes = useStyles();
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

    // if (!data.email || !data.password) {
    //   seterrorMsg({
    //     password: {
    //       status: !data.password ? true : false,
    //       msg: !data.password ? "Password Cannot Be Empty" : "",
    //     },
    //     email: {
    //       status: !data.email ? true : false,
    //       msg: !data.email ? "Email Cannot Be Empty" : "",
    //     },
    //   });
    //   return;
    // }

    // seterrorMsg({
    //   email: { status: false, msg: "" },
    //   password: { status: false, msg: "" },
    // });

    // console.log(data);

    // setData({
    //   email: "",
    //   password: "",
    // });

    history.push("/Agents");
  };

  return (
    <MainContainer>
      {/* Logo */}
      <Logo as={Link} to="/">
        <img src={logo} alt="" />
      </Logo>
      <Container>
        {/* FormContainerWrapper */}
        <FormContainerWrapper>
          {/* Titles */}
          <ContainerFormLabel>Welcome to Voki</ContainerFormLabel>
          <ContainerFormTitle>Login to your Account</ContainerFormTitle>

          {/* FormContainer */}
          <FormContainer>
            <FormControlWrapper>
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
                type="email"
                marginBottom="10px"
                width="100%"
                forhtml="Password"
                type="password"
                name="password"
                onchange={(e) => inputValue(e)}
              />
            </FormControlWrapper>
            <ForgetPasswordWrapper>
              <div>
                <Checkbox
                  className={classes.myCheckBox}
                  id="remember"
                  color="primary"
                />
                <CheckBoxLabel htmlFor="remember">Remember me</CheckBoxLabel>
              </div>
              <ForgetPasswordLink as={Link} to="/forgetpassword">
                Forgot password?
              </ForgetPasswordLink>
            </ForgetPasswordWrapper>
            <FormButton type="submit" title="LOG IN" onPress={formSubmit} />
          </FormContainer>
        </FormContainerWrapper>
      </Container>
      {/* Footer */}
      <Footer />
    </MainContainer>
  );
}

export default Login;
