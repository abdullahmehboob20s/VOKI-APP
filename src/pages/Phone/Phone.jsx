import React from "react";
import { Box, Typography } from "@material-ui/core";
import styled from "styled-components";
import defaultTheme from "theme/defaultTheme";
import Footer from "layouts/Footer/Footer";
import phoneCallImage from "assets/images/phone-call.svg";
import { GrPause } from "react-icons/gr";
import { MdCallEnd } from "react-icons/md";
import forwardIcon from "assets/images/forward-icon.svg";

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
    <Box
      minHeight="100"
      display="flex"
      flexDirection="column"
      pt={12.5}
      pb={6.25}
      px={15.125}
      bgcolor={defaultTheme.palette.bgLightColor}
    >
      <Box flex="1" display="flex" mb={12.5}>
        <Box flex="1" mr={6.25}>
          <Box height="90px" display="flex" alignItems="flex-start">
            <Typography
              variant="h1"
              style={{ color: defaultTheme.palette.textDarkColor }}
            >
              Phone
            </Typography>
          </Box>
          <Box
            bgcolor="white"
            boxShadow={`0px 4px 4px ${defaultTheme.palette.shadowBlueColor}`}
            borderRadius="4px"
            display="flex"
            flexDirection="column"
            pb={2.5}
          >
            <Box
              padding={6.75}
              flex="1"
              display="flex"
              flexDirection="column"
              alignItems="center"
              mb={6.25}
            >
              <Typography variant="caption">James Bond</Typography>
              <Box mt={4} mb={4}>
                <img src={phoneCallImage} alt="" />
              </Box>
              <Typography
                style={{ color: defaultTheme.palette.textBoldColor }}
                variant="subtitle1"
              >
                00:01
              </Typography>

              <Box display="flex" alignItems="center" mt={4}>
                <Box
                  width="72px"
                  height="72px"
                  borderRadius="50%"
                  bgcolor={defaultTheme.palette.whiteColor}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  fontSize="42px"
                  boxShadow=" 0px 4px 4px rgba(0, 0, 0, 0.15)"
                  style={{
                    cursor: "pointer",
                    color: defaultTheme.palette.whiteColor,
                  }}
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
                  boxShadow=" 0px 4px 4px rgba(0, 0, 0, 0.15)"
                  ml={5.875}
                  border="2px solid red"
                  style={{
                    cursor: "pointer",
                    color: defaultTheme.palette.whiteColor,
                  }}
                >
                  <MdCallEnd />
                </Box>
              </Box>
            </Box>
            <Box
              borderTop="1px solid rgba(22, 28, 47, 0.2)"
              padding="20px 0"
              my={0}
              mx={6.75}
            >
              <Box textAlign="center">
                <Typography
                  variant="h3"
                  style={{ color: defaultTheme.palette.textBoldColor }}
                >
                  Reason: I want to clear my bank account.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box flex="1" height="200px">
          <Box height="90px" display="flex" alignItems="flex-start">
            <Typography
              variant="caption"
              style={{ color: defaultTheme.palette.textDarkColor }}
            >
              Notes
            </Typography>
          </Box>

          <Box>
            <Box
              bgcolor={defaultTheme.palette.whiteColor}
              boxShadow={`0px 4px 4px ${defaultTheme.palette.shadowBlueColor}`}
              mb={3.875}
              borderLeft={`6px solid ${defaultTheme.palette.textDarkColor}`}
              py={2}
              px={2.5}
              position="relative"
            >
              <Box width="70%" mb={3.75}>
                <Typography
                  variant="subtitle2"
                  style={{ color: defaultTheme.palette.textBoldColor }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Corrupti quae unde nostrum quam ab maiores laudantium eveniet
                </Typography>
              </Box>
              <CardTopRightText>
                15:30:00 <br /> 28-OCT-2021
              </CardTopRightText>
              <CardBottomRightText>John Downdall</CardBottomRightText>
            </Box>
            <Box
              bgcolor={defaultTheme.palette.whiteColor}
              boxShadow={`0px 4px 4px ${defaultTheme.palette.shadowBlueColor}`}
              mb="31px"
              borderLeft={`6px solid ${defaultTheme.palette.textDarkColor}`}
              py={2}
              px={2.5}
              position="relative"
            >
              <Box width="70%" mb={3.75}>
                <Typography
                  variant="subtitle2"
                  style={{ color: defaultTheme.palette.textBoldColor }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laudantium sapiente quo aliquam asperiores voluptatem, sit
                  mollitia eos officia doloremque, nihil molestiae numquam quia
                  dolorum. Magnam quaerat suscipit voluptas earum repellendus,
                  ut
                </Typography>
              </Box>
              <CardTopRightText>
                15:30:00 <br /> 28-OCT-2021
              </CardTopRightText>
              <CardBottomRightText>John Downdall</CardBottomRightText>
            </Box>

            <Box
              bgcolor="white"
              padding="16px 20px"
              py={2}
              px={2.5}
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
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Phone;
