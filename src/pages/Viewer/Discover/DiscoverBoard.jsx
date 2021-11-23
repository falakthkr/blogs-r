import React from "react";
import { Layout, Menu, Card, Col, Row } from "antd";
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;
const { Meta } = Card;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          id: 1,
          title: "Sample Title 1",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 2,
          title: "Sample Title 2",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 3,
          title: "Sample Title 3",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 4,
          title: "Sample Title 4",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 5,
          title: "Sample Title 5",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 6,
          title: "Sample Title 6",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <Layout>
          <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["3"]}>
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
          {/* <Affix offsetTop={16} style={{ position: "absolute", right: 16 }}>
            <Button type="primary" icon={<FormOutlined />}>
              New Post
            </Button>
          </Affix> */}
          <Content
            className="site-layout"
            style={{ padding: "0 50px", marginTop: 64 }}
          >
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 380, marginTop: "42px" }}
            >
              <div className="site-card-wrapper">
                <Row gutter={16}>
                  {this.state.cards.map((item) => {
                    return (
                      <Col key={item.id + 'Discover'} span={8}>
                        <Card
                          hoverable
                          style={{ margin: "10px" }}
                          cover={
                            <img
                              alt="example"
                              src="https://wallpaperaccess.com/full/635988.png"
                            />
                          }
                        >
                          <Meta title={item.title} description={item.desc} />
                        </Card>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            React Blogs ©2021 Created by falakthkr
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default Dashboard;
