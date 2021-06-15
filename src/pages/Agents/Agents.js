import React from "react";
import styled from "styled-components";

function Agents() {
  return (
    <Container>
      <ContainerWrapper>
        <AgentTitle>Agents</AgentTitle>
      </ContainerWrapper>
    </Container>
  );
}

export default Agents;

let Container = styled.div`
  height: 100vh;
  padding: 100px;
  background-color: #f3f8fa;
`;
let ContainerWrapper = styled.div``;
let AgentTitle = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 59px;
  color: #161c2f;
`;
