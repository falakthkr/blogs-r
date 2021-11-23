import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import Breadcrumb from "../../../components/Breadcrumbs";

const { Header, Content } = Layout;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: [
        {
          path: '/',
          breadcrumbName: 'home',
        },
        {
          path: '/post/:id',
          breadcrumbName: 'post',
        },
      ]
    };
  }

  render() {
    return (
      <div>
        <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
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
          <Content
            className="site-layout"
            style={{ padding: "0 50px", margin: "30px 0" }}
            >
              <Breadcrumb routes={this.state.routes} />
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 380, marginTop: "20px" }}
            >
              <div className="site-card-wrapper">
                Sample Text
              </div>
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default Dashboard;
