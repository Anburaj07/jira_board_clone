import React from "react";
import styled from "styled-components";
import Banner1 from "./Banner1";
import Board from "./Board";

const Dashboard = () => {
  return (
    <DASHBOARD className="p-8">
      <Banner1 />
      <Board/>
    </DASHBOARD>
  );
};

export default Dashboard;

const DASHBOARD = styled.div`
  width: 85%;
`;
