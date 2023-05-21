import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostDetails } from "../../../redux/posts/actions";
import Navbar from "../../../components/ViewerNav";
import { Layout } from "antd";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../../components/Breadcrumbs";

const { Content } = Layout;

const Post = () => {
  const dispatch = useDispatch();
  let params = useParams();

  const post = useSelector((state) => state.posts.postDetailsData);

  const getPostDetailsFn = () => {
    dispatch(getPostDetails(params.id));
  };
  useEffect(() => {
    getPostDetailsFn();
  }, []);

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
            <div style={{height:"fit-content"}} className="site-card-wrapper">
              <h3>{post.title}</h3>
              <br />
              <img src={post.image.src} alt={post.image.alt} style={{margin:"10px"}} />
              <p>{post.postBody}</p>
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default Post;
