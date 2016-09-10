import React from 'react';
import $ from 'jquery';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router";

import Header from './Header';

require('!style!css!less!../style/Application.less');

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {fluid: true};
    }
    //let fluid=true;
    render() {
        return (
          <Grid fluid={this.state.fluid}>
            <Header />
            <Row>
              <Col md={4}>.col-md-4</Col>
              <Col md={4}>.col-md-4</Col>
              <Col md={4}>.col-md-4</Col>
            </Row>
            <Row>
              <Col md={12}>
                {this.props.children}
              </Col>
            </Row>
          </Grid>
        )
    }
}

export default Application;

