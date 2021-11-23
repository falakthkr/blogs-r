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
          img: "https://wallpapercave.com/wp/wp4468334.jpg",
          title: "Sample Title 1",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 2,
          img: "https://wallpaperaccess.com/full/635988.png",
          title: "Sample Title 2",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 3,
          img: "https://lovelytab.com/wp-content/uploads/2019/01/Tumblr-Aesthetic-Wallpapers-Free-1024x576.jpg",
          title: "Sample Title 3",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 4,
          img: "https://cellularnews.com/wp-content/uploads/2020/03/Cool-9-2-325x485.jpg",
          title: "Sample Title 4",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 5,
          img: "https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1381/posts/35211/image/Vaporwave%20Aesthetic%20Photoshop%20Template%20Promo%20Image.jpg",
          title: "Sample Title 5",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 6,
          img: "https://wallpaperboat.com/wp-content/uploads/2020/04/green-aesthetic-wallpaper-20.jpg",
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
            style={{ padding: "0 50px", marginTop: 30 }}
          >
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 380, marginTop: "20px" }}
            >
              <div className="site-card-wrapper">
                <Row gutter={16}>
                  {this.state.cards.map((item) => {
                    return (
                      <Col key={item.id + "Dashboard"} span={8}>
                        <Link to={`/post/${item.id}`}>
                          <Card
                            hoverable
                            style={{ margin: "10px" }}
                            cover={<img alt="example" src={item.img} />}
                          >
                            <Meta title={item.title} description={item.desc} />
                          </Card>
                        </Link>
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
