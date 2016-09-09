import React from 'react';
import $ from 'jquery';
import axios from 'axios'
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router";

import UserList from './UserList';

export class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {users: []};
    }
    componentDidMount() {
        axios.get('/api').then((response) => {
          console.dir(response);
          this.setState({users: response.data});
        }).catch((response) => {
          console.log(response)
        })
    }
    render() {
        return (
            <Row>
              <UserList users={this.state.users}/>
            </Row>
        )
    }
}

export default Users;
