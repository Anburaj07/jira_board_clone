import React from "react";
import styled from "styled-components";
import search from "../images/search.png";

const Banner1 = () => {
  return (
    <BANNER1 className="">
      <div className="pb-5">
        <p className="text-sm">Projects / RETRO-FLOW</p>
        <h1 className="text-lg font-semibold">RF Sprint 6</h1>
      </div>
      <div className="flex items-center justify-between">
        <div className="p-1 w-[10%] flex items-center bg-[#ffffff] border-solid border-2 border-gray-400 rounded">
          <input type="text" className="bg-[#ffffff] w-[72%]" />
          <div>
            <img src={search} alt="search" />
          </div>
        </div>
        <div className="flex w-[35%] items-center justify-between" id="filter">
          <p className="text-xs">GROUP BY</p>
          <div>
            <select name="">
              <option value="">None</option>
              <option value="">Assignee</option>
              <option value="">SubTask</option>
            </select>
          </div>
          <div>
            <button>Insights</button>
          </div>
          <div>
            <button>View settings</button>
          </div>
        </div>
      </div>
    </BANNER1>
  );
};

export default Banner1;

const BANNER1 = styled.div`
  #filter {
    div,
    button,
    select {
      background-color: #f1f2f4;
      border: none;
      font-size: 0.875rem; /* 14px */
      line-height: 1.25rem;
      padding: 4px;
    }
  }
`;
