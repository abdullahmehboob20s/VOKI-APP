import React from "react";
import { Box, Typography } from "@material-ui/core";
import styled from "styled-components";
import defaultTheme from "theme/defaultTheme";
import Footer from "layouts/Footer/Footer";
import phoneCallImage from "assets/images/phone-call.svg";
import { GrPause } from "react-icons/gr";
import { MdCallEnd } from "react-icons/md";
import forwardIcon from "assets/images/forward-icon.svg";

let BoxContainer = styled(Box)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 50px 60px;
  background-color: ${defaultTheme.palette.bgLightColor};
  /* border: 2px solid red; */
`;
let PhoneFooter = styled.p`
  text-align: center;
`;
let PhoneTitle = styled.p`
  font-weight: 500;
  font-size: 30px;
  display: flex;
  text-align: center;
  color: ${defaultTheme.palette.textDarkColor};
`;
let PhoneCallTimer = styled.p``;
let PhoneTitleHeading = styled.p`
  font-weight: ${(props) => props.fontweight};
  font-size: ${(props) => props.fontsize};
  color: ${defaultTheme.palette.textDarkColor};
  /* margin-bottom: 37px; */
`;
let CardBox = styled(Box)`
  background-color: white;
  box-shadow: 0px 4px 4px ${defaultTheme.palette.shadowBlueColor};
  margin-bottom: 31px;
  border-left: 6px solid ${defaultTheme.palette.textDarkColor};
  padding: 16px 20px;
  position: relative;
`;
let CardTopRightText = styled.p`
  position: absolute;
  top: 16px;
  right: 20px;
  text-align: right;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  display: flex;
  align-items: center;
  color: ${defaultTheme.palette.lightBlueColor};
`;
let CardBottomRightText = styled.p`
  position: absolute;
  bottom: 16px;
  right: 20px;

  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  color: ${defaultTheme.palette.textDarkColor};
`;
let CardTitle = styled.p`
  width: 70%;
  /* border: 2px solid red; */
  margin-bottom: 30px;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: ${defaultTheme.palette.textBoldColor};
`;
let TextFieldArea = styled.textarea`
  flex: 1;
  margin-right: 20px;
  height: 100px;
  resize: none;
  border: 1px solid ${defaultTheme.palette.borderColor};
  border-radius: 4px;
  outline: none;
  padding: 10px;

  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: ${defaultTheme.palette.textBoldColor};

  &::placeholder {
    font-weight: 500;
    font-size: 20px;
    color: ${defaultTheme.palette.borderColor};
  }
`;

const Phone = () => {
  return (
    <div>
      <BoxContainer>
        <Box flex="1" display="flex" mb="100px">
          <Box flex="1" mr="50px">
            <Box height="90px" display="flex" alignItems="flex-start">
              <Typography
                variant="h1"
                color={defaultTheme.palette.textDarkColor}
              >
                Phone
              </Typography>
            </Box>
            <Box
              bgcolor="white"
              boxShadow="0px 4px 4px rgba(149, 172, 188, 0.5)"
              borderRadius="4px"
              display="flex"
              flexDirection="column"
              paddingBottom="20px"
            >
              <Box
                // border="2px solid black"
                padding="54px"
                flex="1"
                display="flex"
                flexDirection="column"
                alignItems="center"
                mb="50px"
              >
                <Typography variant="caption">James Bond</Typography>
                <Box mt="32px" mb="32px">
                  <img src={phoneCallImage} alt="" />
                </Box>
                <Typography
                  color={defaultTheme.palette.textBoldColor}
                  variant="subtitle1"
                >
                  00:01
                </Typography>

                <Box display="flex" alignItems="center" mt="32px">
                  <Box
                    width="72px"
                    height="72px"
                    borderRadius="50%"
                    bgcolor={defaultTheme.palette.whiteColor}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    fontSize="42px"
                    color={defaultTheme.palette.textBoldColor}
                    boxShadow=" 0px 4px 4px rgba(0, 0, 0, 0.15)"
                    style={{ cursor: "pointer" }}
                  >
                    <GrPause />
                  </Box>
                  <Box
                    width="72px"
                    height="72px"
                    borderRadius="50%"
                    bgcolor={defaultTheme.palette.redBgColor}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    fontSize="42px"
                    color={defaultTheme.palette.whiteColor}
                    boxShadow=" 0px 4px 4px rgba(0, 0, 0, 0.15)"
                    ml="47px"
                    style={{ cursor: "pointer" }}
                  >
                    <MdCallEnd />
                  </Box>
                </Box>
              </Box>
              <Box
                borderTop="1px solid rgba(22, 28, 47, 0.2)"
                padding="20px 0"
                margin="0 54px"
              >
                <Box textAlign="center">
                  <Typography
                    variant="h3"
                    color={defaultTheme.palette.textBoldColor}
                  >
                    Reason: I want to clear my bank account.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/*  */}
          <Box flex="1" height="200px">
            <Box height="90px" display="flex" alignItems="flex-start">
              <Typography
                variant="caption"
                color={defaultTheme.palette.textDarkColor}
              >
                Notes
              </Typography>
            </Box>

            {/*  */}
            <Box>
              <CardBox>
                <Box width="70%" mb="30px">
                  <Typography
                    variant="subtitle2"
                    color={defaultTheme.palette.textBoldColor}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corrupti quae unde nostrum quam ab maiores laudantium
                    eveniet
                  </Typography>
                </Box>
                <CardTopRightText>
                  15:30:00 <br /> 28-OCT-2021
                </CardTopRightText>
                <CardBottomRightText>John Downdall</CardBottomRightText>
              </CardBox>
              <CardBox>
                <Box width="70%" mb="30px">
                  <Typography
                    variant="subtitle2"
                    color={defaultTheme.palette.textBoldColor}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laudantium sapiente quo aliquam asperiores voluptatem, sit
                    mollitia eos officia doloremque, nihil molestiae numquam
                    quia dolorum. Magnam quaerat suscipit voluptas earum
                    repellendus, ut
                  </Typography>
                </Box>
                <CardTopRightText>
                  15:30:00 <br /> 28-OCT-2021
                </CardTopRightText>
                <CardBottomRightText>John Downdall</CardBottomRightText>
              </CardBox>

              <Box
                bgcolor="white"
                padding="16px 20px"
                boxShadow={`0px 4px 4px ${defaultTheme.palette.shadowBlueColor}`}
                display="flex"
              >
                <TextFieldArea placeholder="Add Notes Here"></TextFieldArea>

                <Box
                  width="36px"
                  height="36px"
                  borderRadius="50%"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  bgcolor={defaultTheme.palette.textDarkColor}
                  style={{ cursor: "pointer" }}
                >
                  <img src={forwardIcon} alt="" />
                </Box>
              </Box>
            </Box>
            {/*  */}
          </Box>
          {/*  */}
        </Box>
        <Footer />
      </BoxContainer>
    </div>
  );
};

export default Phone;
