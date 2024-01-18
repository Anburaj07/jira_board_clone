import React from "react";
import styled from "styled-components";
import Banner1 from "./Banner1";
import Table from "./Table";

const Dashboard = () => {
  return (
    <DASHBOARD className="p-8">
      <Banner1 />
      <Table/>
    </DASHBOARD>
  );
};

export default Dashboard;

const DASHBOARD = styled.div`
  width: 85%;
  border-bottom: 1px solid red;
`;
