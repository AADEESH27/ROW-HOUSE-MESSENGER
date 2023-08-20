import React from "react";
import logo from "../Logo/messenger.png";
import { IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const onlineGroups = () => {
  return (
    <div className="online-users-container">
      <div className="online-users-header">
        <img src={logo} alt="Logo" style={{ height: "7vh" }} />
        <p
          style={{
            fontFamily: "sans-serif",
            fontSize: "2rem",
            fontWeight: "bolder",
          }}
        >
          Online Groups
        </p>
      </div>
      <div className="sb-search">
        <IconButton>
          <SearchOutlinedIcon />
        </IconButton>
        <input placeholder="Search" className="search-box" />
      </div>
      <div className="online-users-list">
        <div className="user-list">
          <p className="con-icon">T</p>
          <p className="con-title">Test 1</p>
        </div>
        <div className="user-list">
          <p className="con-icon">T</p>
          <p className="con-title">Test 1</p>
        </div>
        <div className="user-list">
          <p className="con-icon">T</p>
          <p className="con-title">Test 1</p>
        </div>
        <div className="user-list">
          <p className="con-icon">T</p>
          <p className="con-title">Test 1</p>
        </div>
        <div className="user-list">
          <p className="con-icon">T</p>
          <p className="con-title">Test 1</p>
        </div>
        <div className="user-list">
          <p className="con-icon">T</p>
          <p className="con-title">Test 1</p>
        </div>
        <div className="user-list">
          <p className="con-icon">T</p>
          <p className="con-title">Test 1</p>
        </div>
        <div className="user-list">
          <p className="con-icon">T</p>
          <p className="con-title">Test 1</p>
        </div>
        <div className="user-list">
          <p className="con-icon">T</p>
          <p className="con-title">Test 1</p>
        </div>
        <div className="user-list">
          <p className="con-icon">T</p>
          <p className="con-title">Test 1</p>
        </div>
        <div className="user-list">
          <p className="con-icon">T</p>
          <p className="con-title">Test 1</p>
        </div>
        <div className="user-list">
          <p className="con-icon">T</p>
          <p className="con-title">Test 1</p>
        </div>
        <div className="user-list">
          <p className="con-icon">T</p>
          <p className="con-title">Test 1</p>
        </div>
        <div className="user-list">
          <p className="con-icon">T</p>
          <p className="con-title">Test 1</p>
        </div>
        <div className="user-list">
          <p className="con-icon">T</p>
          <p className="con-title">Test 1</p>
        </div>
        <div className="user-list">
          <p className="con-icon">T</p>
          <p className="con-title">Test 1</p>
        </div>
        <div className="user-list">
          <p className="con-icon">T</p>
          <p className="con-title">Test 1</p>
        </div>
      </div>
    </div>
  );
};

export default onlineGroups;
