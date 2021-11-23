import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
import Dashboard from "../pages/Viewer/Home/Dashboard";
import TopicsBoard from "../pages/Viewer/Topics/TopicsBoard";
import DiscoverBoard from "../pages/Viewer/Discover/DiscoverBoard";

class PrivateRoutes extends React.Component {
  render() {
    const { isAuth } = this.props;
    if (isAuth) {
      return (
        <Switch>
          <Route path="/home" exact component={Dashboard} />
          <Route path="/topics" exact component={TopicsBoard} />
          <Route path="/discover" exact component={DiscoverBoard} />
        </Switch>
      );
    } else {
      alert("Login");
      return <Redirect to="/" />;
    }
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.isAuth,
});

export default connect(mapStateToProps, null)(PrivateRoutes);
