import React from "react";
import styled from "styled-components";
import AgentSelect from "components/Selects/AgentSelect";
import { RiDeleteBinLine } from "react-icons/ri";
import Footer from "layouts/Footer/Footer";
import ReturningIcon from "components/ReturningIcon/ReturningIcon";
import FormButtom from "components/Button/FormButton";
import { Box, Dialog, Typography } from "@material-ui/core";
import defaultTheme from "theme/defaultTheme";
import { useHistory } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import DailogBtn from "components/Button/DailogBtn";

let BoxContainer = styled(Box)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 50px 60px;
  background-color: ${defaultTheme.palette.bgLightColor};
  /* border: 2px solid red; */
`;
let TableContainer = styled.table`
  width: 100%;
  text-align: left;
  border-radius: 4px;
  height: auto;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  margin-bottom: 44px;

  & tbody tr:not(:last-child) {
    border-bottom: 1px solid ${defaultTheme.palette.borderColor};
  }
  & thead tr {
    border-bottom: 1px solid ${defaultTheme.palette.borderColor};
  }
`;
let TableRow = styled.tr`
  display: flex;
  background-color: ${defaultTheme.palette.whiteColor};
  padding: 21px 24px;
`;
let TableHeading = styled.th`
  flex: 1;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 18px;
  color: ${defaultTheme.palette.textBoldColor};
`;
let TableData = styled.td`
  flex: 1;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 16px;
  color: ${defaultTheme.palette.textBoldColor};
`;
let CustomBox = styled(Box)`
  width: 580px;
  height: 262px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
let DialogHeading = styled.p`
  font-weight: bold;
  font-size: 24px;
  color: ${defaultTheme.palette.textBoldColor};
  margin-bottom: 15px;
`;
let DialogDisc = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: ${defaultTheme.palette.textBoldColor};
  margin-bottom: 15px;
`;
let DialogBtns = styled.div`
  width: 80%;
  display: flex;
`;

const AgentPage = (props) => {
  let { path } = useRouteMatch();
  let history = useHistory();
  let [open, setOpen] = React.useState(false);
  let agents = [
    {
      id: 1,
      name: "Lucas Franco",
      email: "lucas@voki.com",
      status: "Available",
    },
    {
      id: 1,
      name: "John Downdall",
      email: "john@voki.com",
      status: "Busy",
    },
    {
      id: 1,
      name: "Nir Chatherol",
      email: "nir@voki.com",
      status: "Offline",
    },
  ];

  const openDialogBox = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <BoxContainer>
        <Box flex="1">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h1" color={defaultTheme.palette.textDarkColor}>
              Agents
            </Typography>
            <Box>
              <AgentSelect />
            </Box>
          </Box>

          <Dialog open={open} onClose={handleClose}>
            <CustomBox>
              <DialogHeading>Delete Agent</DialogHeading>
              <DialogDisc>Are you sure you wanna delete this agent?</DialogDisc>
              <DialogBtns>
                <DailogBtn
                  title="No"
                  border={true}
                  mr="10px"
                  click={() => setOpen(false)}
                />
                <DailogBtn
                  title="Yes"
                  border={false}
                  mr="0px"
                  click={() => setOpen(false)}
                />
              </DialogBtns>
            </CustomBox>
          </Dialog>

          <Box mt="38px">
            <TableContainer as="table">
              <thead>
                <TableRow>
                  <TableHeading>Agent Name</TableHeading>
                  <TableHeading>Email</TableHeading>
                  <TableHeading>Status</TableHeading>
                  <TableHeading style={{ flex: 0.3, textAlign: "center" }}>
                    Delete
                  </TableHeading>
                </TableRow>
              </thead>
              <tbody>
                {agents.map((agent, index) => (
                  <TableRow key={index}>
                    <TableData>{agent.name}</TableData>
                    <TableData>{agent.email}</TableData>
                    <TableData>
                      <Box
                        maxWidth="120px"
                        width="50%"
                        display="flex"
                        justifyContent="space-between"
                      >
                        {agent.status}
                        <ReturningIcon agent={agent} />
                      </Box>
                    </TableData>
                    <TableData style={{ flex: 0.3, textAlign: "center" }}>
                      <RiDeleteBinLine
                        onClick={openDialogBox}
                        style={{ cursor: "pointer" }}
                      />
                    </TableData>
                  </TableRow>
                ))}
              </tbody>
            </TableContainer>
            <Box marginBottom="100px">
              <FormButtom
                title="Create Agent"
                width="195px"
                onPress={() => history.push(`${path}/createAgent`)}
              />
            </Box>
          </Box>
        </Box>
        <Footer />
      </BoxContainer>
    </>
  );
};

export default AgentPage;
