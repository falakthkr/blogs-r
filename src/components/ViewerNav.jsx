import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const Navbar = () => {
  return (
    <div>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/topics">Topics</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/discover">Discover</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </div>
  );
};

export default Navbar;
