import React from "react";
import styled from "styled-components";
import projectLogo from "../images/projectLogo.png";
import board from "../images/board.png";
import timeline from "../images/timeline.png";
import backlog from "../images/backlog.png";
import code from "../images/code.png";
import pages from "../images/pages.png";
import shortcut from "../images/shortcut.png";
import settings from "../images/settings.png";

const SideBar = () => {
  return (
    <SIDEBAR className="p-3 pr-3">
      <div className="flex items-center justify-around w-[90%] pt-7 pb-7">
        <div>
          <img src={projectLogo} alt="Project Logo" />
        </div>
        <div>
          <h1 className="text-sm font-semibold">RETRO-FLOW</h1>
          <p className="text-sm text-[#454546]">Software Project</p>
        </div>
      </div>
      <div className="pl-3 text-sm border-b-2 border-[#e9e9ec]-500 w-[100%]">
        <h1 className="font-semibold">PLANNING</h1>
        <div className="flex-col pb-4" id="planning">
          <div>
            <div>
              <img src={timeline} alt="" />
            </div>
            <p>Timeline</p>
          </div>
          <div>
            <div>
              <img src={backlog} alt="" />
            </div>
            <p>Backlog</p>
          </div>
          <div>
            <div>
              <img src={board} alt="" />
            </div>
            <p>Board</p>
          </div>
        </div>
        <h1 className="font-semibold">DEVELOPMENT</h1>
        <div className="pb-2" id="development">
          <div>
            <div>
              <img src={code} alt="" />
            </div>
            <p>Code</p>
          </div>
        </div>
      </div>
      <div id="projectFeautes" className="pl-3 pb-5 pt-5">
        <div>
          <div>
            <img src={pages} alt="pages" />
          </div>
          <p>Project pages</p>
        </div>
        <div>
          <div>
            <img src={shortcut} alt="shortcut" />
          </div>
          <p>Add shortcut</p>
        </div>
        <div>
          <div>
            <img src={settings} alt="settings" />
          </div>
          <p>Project settings</p>
        </div>
      </div>
      <div className="text-xs text-center pt-20">
        <p>You'r in a team-managed project</p>
        <p className="font-medium">Learn more</p>
      </div>
    </SIDEBAR>
  );
};

export default SideBar;

const SIDEBAR = styled.div`
  width: 15%;
  box-sizing: border-box;
  border-right: 2px solid #e9e9ec;
  background-color: white;

  #planning,
  #development,
  #projectFeautes {
    div {
      display: flex;
      align-items: center;
      padding: 4px;
      p {
        padding-left: 10px;
        font-size: 0.875rem; /* 14px */
        line-height: 1.25rem;
      }
      p:hover {
        cursor: pointer;
      }
    }
  }
`;
