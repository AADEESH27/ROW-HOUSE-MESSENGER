import { IconButton } from "@mui/material";
import DoneOutlineOutlinedIcon from "@mui/icons-material/DoneOutlineOutlined";
import React from "react";

const createGroups = () => {
  return (
    <div className="createGroups-container">
      <input placeholder="Enter Group Name" className="search-box" />
      <IconButton>
        <DoneOutlineOutlinedIcon />
      </IconButton>
    </div>
  );
};

export default createGroups;
