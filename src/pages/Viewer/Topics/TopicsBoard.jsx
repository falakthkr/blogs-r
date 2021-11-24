import React from "react";
import { Layout, Card, Col, Row } from "antd";
import Navbar from "../../../components/ViewerNav";
const { Content, Footer } = Layout;
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
          <Navbar />
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
                      <Col key={item.id + "Topic"} span={8}>
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
