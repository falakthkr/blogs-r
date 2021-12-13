import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

const { Header } = Layout;

const Navbar = () => {
  const [key, setKey] = useState("");
  let route = useLocation();
  const setNavKey = () => {
    if (route.pathname === "/home") {
      setKey("1");
    }
    if (route.pathname === "/topics") {
      setKey("2");
    }
    if (route.pathname === "/discover") {
      setKey("3");
    }
  };
  useEffect(() => {
    setNavKey();
  });
  return (
    <div>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" selectedKeys={key}>
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
