import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import React from 'react';

function itemRender(route, params, routes, paths) {
  const last = routes.indexOf(route) === routes.length - 1;
  return last ? (
    <span>{route.breadcrumbName}</span>
  ) : (
    <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
  );
}

class Breadcrumbs extends React.Component{
  render() {
    return <Breadcrumb style={{ marginTop: '45px' }} itemRender={itemRender} routes={this.props.routes} />;
  }    
}

export default Breadcrumbs;