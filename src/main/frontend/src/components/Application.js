import React from 'react';
import $ from 'jquery';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router";

import Header from './Header';

require('!style!css!less!../style/Application.less');

class Application extends React.Component {
    render() {
        return (
          <div className="wrap">
            <Header />
            <Grid>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/users">Users</Link></li>
              </ul>
              <div>
                {this.props.children}
              </div>
            </Grid>
          </div>
        )
    }
}

export default Application;

