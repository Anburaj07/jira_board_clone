import React from "react";
import logo from "../images/logo.png";
import search from "../images/search.png";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NAVBAR className="bg-[#ffffff] flex items-center justify-between">
      <div>
        <img src={logo} alt="logo" className="w-[100%]" />
      </div>
      <div className="flex items-center justify-between w-[40%]">
        <p>Your work</p>
        <p>Projects</p>
        <p>Filters</p>
        <p>Dashboards</p>
        <p>Teams</p>
        <p>Plans</p>
        <p>Apps</p>
        <button className="bg-[#0052CC] text-[#ffffff]">Create</button>
      </div>
      <div className="flex items-center justify-between w-[24%] mr-3">
        <button className="bg-[#ffffff] text-[#0052CC] border-solid border-2 border-sky-500 rounded">
          Upgrade
        </button>
        <div className="p-1 flex items-center bg-[#ffffff] border-solid border-2 border-gray-400 rounded">
          <div>
            <img src={search} alt="search" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-[#ffffff] pl-2"
          />
        </div>
      </div>
    </NAVBAR>
  );
};

export default Navbar;

const NAVBAR = styled.div`
  border-bottom: 1px solid #e9e9ec;
  p:hover {
    color: #0052cc;
    cursor: pointer;
  }
  img:hover {
    cursor: pointer;
  }
`;
