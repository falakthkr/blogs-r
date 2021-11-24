import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPostDetails } from "../../../redux/posts/actions";
import Navbar from "../../../components/ViewerNav";
import { Layout } from "antd";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../../components/Breadcrumbs";

const { Content } = Layout;

const Post = () => {
  const dispatch = useDispatch();
  let params = useParams();
  
  const [post, setPost] = useState({});
  
  const getPostDetailsFn = () => {
    dispatch(getPostDetails(params.id)).then((res) => {
      setPost(res.payload.postDetailsData);
    });
  };
  useEffect(() => {
    getPostDetailsFn();
  });

  const routes = [
    {
      path: "/",
      breadcrumbName: "home",
    },
    {
      path: "post",
      breadcrumbName: post.title,
    },
  ];

  return (
    <div>
      <Layout>
        <Navbar />
        <Content
          className="site-layout"
          style={{ padding: "0 50px", margin: "30px 0" }}
        >
          <Breadcrumb routes={routes} />
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380, marginTop: "20px" }}
          >
            <div className="site-card-wrapper">
              <h3>{post.title}</h3>
              <br />
              <img src={post.image} alt={post.title} width="40%" style={{marginBottom: '20px'}} />
              <p>{post.postBody}</p>
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default Post;
