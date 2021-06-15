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

function Login() {
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

    history.push("/resetpassword");
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
          <ContainerFormTitle>Forget your Password</ContainerFormTitle>
          <ContainerFormLabel>
            Please enter your email address so we can send you a link to reset
            your password
          </ContainerFormLabel>

          {/* FormContainer */}
          <FormContainer>
            <FormControlWrapper>
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
            </FormControlWrapper>

            <FormButton title="Reset Password" onPress={formSubmit} />
          </FormContainer>
        </FormContainerWrapper>
      </Container>
      {/* Footer */}
      <Footer />
    </MainContainer>
  );
}

export default Login;

let MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  background: #f3f8fa;
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
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #575454;
  margin-bottom: 24px;
`;
let ContainerFormTitle = styled.p`
  font-weight: 500;
  font-size: 30px;
  line-height: 37px;
  color: #161c2f;
  margin-bottom: 8px;
`;
let FormControlWrapper = styled.div``;
