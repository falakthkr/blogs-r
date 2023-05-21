import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../../../components/ViewerNav";
import { getAllPosts } from "../../../redux/posts/actions";
import { Layout, Card, Col, Row } from "antd";
import { Link } from "react-router-dom";

const { Content, Footer } = Layout;
const { Meta } = Card;

const Dashboard = () => {
  const dispatch = useDispatch();

  const [cards, setCards] = useState([]);

  const getCards = () => {
    dispatch(getAllPosts()).then((res) => {
      setCards(res.payload.allPostsData);
    });
  };

  useEffect(() => {
    getCards();
  });
  return (
    <div>
      <Layout>
        <Navbar />
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
                {cards.map((item) => {
                  return (
                    <Col key={item._id} span={8}>
                      <Link to={`/post/${item._id}`}>
                        <Card
                          hoverable
                          style={{ margin: "10px" }}
                          cover={
                            <img
                              alt={item.image.alt}
                              src={item.image.src}
                              style={{ height: "500px" }}
                            />
                          }
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
};

export default Dashboard;
