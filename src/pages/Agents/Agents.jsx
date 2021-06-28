import React from "react";
import styled from "styled-components";
import AgentSelect from "components/Selects/AgentSelect";
import { RiDeleteBinLine } from "react-icons/ri";
import Footer from "layouts/Footer/Footer";
import ReturningIcon from "components/ReturningIcon/ReturningIcon";
import FormButton from "components/Button/FormButton";
import { Box, Dialog, Typography } from "@material-ui/core";
import defaultTheme from "theme/defaultTheme";
import { useHistory } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";

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
      <Box
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        pt={12.5}
        pb={6.25}
        px={15.125}
        bgcolor={defaultTheme.palette.bgLightColor}
      >
        <Box flex="1">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="h1"
              style={{ color: defaultTheme.palette.textDarkColor }}
            >
              Agents
            </Typography>
            <Box>
              <AgentSelect />
            </Box>
          </Box>

          <Dialog open={open} onClose={handleClose}>
            <Box
              width={580}
              height={262}
              display="flex"
              justifyContent="center"
              flexDirection="column"
            >
              <Box mb={2} textAlign="center">
                <Typography variant="h4">Delete Agent</Typography>
              </Box>
              <Box mb={2.5} textAlign="center">
                <Typography variant="subtitle2">
                  Are you sure you wanna delete this agent?
                </Typography>
              </Box>
              <Box display="flex" justifyContent="center" px={5}>
                <Box mr={1.25} width="100%">
                  <FormButton
                    onPress={() => setOpen(false)}
                    width="100%"
                    title="No"
                    border={true}
                  />
                </Box>
                <FormButton
                  onPress={() => setOpen(false)}
                  width="100%"
                  title="Yes"
                />
              </Box>
            </Box>
          </Dialog>

          <Box mt={5}>
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
            <Box marginBottom="100px" mt={2.125}>
              <FormButton
                title="Create Agent"
                width="195px"
                onPress={() => history.push(`${path}/createAgent`)}
              />
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default AgentPage;
