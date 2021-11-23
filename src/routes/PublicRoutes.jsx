import React from "react";
import { Route } from "react-router-dom";
import Login from "../pages/Auth/Login/Login";
// import PrivateRoutes from "./PrivateRoutes"
import Dashboard from "../pages/Viewer/Home/Dashboard";
import TopicsBoard from "../pages/Viewer/Topics/TopicsBoard";
import DiscoverBoard from "../pages/Viewer/Discover/DiscoverBoard";
import PostPage from "../pages/Viewer/Post/PostPage";

const PublicRoutes = (props) => {
  return (
    <div>
      <Route path="/" exact render={() => <Login />} />
      {/* <Route path="/home"  render={()=><PrivateRoutes />} /> */}
      <Route path="/home" exact component={Dashboard} />
      <Route path="/topics" exact component={TopicsBoard} />
      <Route path="/discover" exact component={DiscoverBoard} />
      <Route path="/post/:id" exact component={PostPage} />
    </div>
  );
};

export default PublicRoutes;
