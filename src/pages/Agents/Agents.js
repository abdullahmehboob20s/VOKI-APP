import React from "react";
import CreateAgentPage from "pages/Agents/CreateAgentPage";
import AgentPage from "pages/Agents/AgentPage";

function Agents() {
  let [page, setPage] = React.useState("Agents");

  if (page == "Agents") return <AgentPage page={page} setPage={setPage} />;

  if (page == "CreateAgent")
    return <CreateAgentPage page={page} setPage={setPage} />;
}

export default Agents;
