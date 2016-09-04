"use strict";

import React from 'react';
import $ from 'jquery';
import axios from 'axios'

require('!style!css!less!./Application.less');

export class Application extends React.Component {
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
            <UserList users={this.state.users}/>
        )
    }
}


class UserList extends React.Component{
  render() {
      var users = this.props.users.map(user =>
          <User key={user.id} user={user}/>
      );
      return (
          <table>
            <thead>
              <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Memo</th>
                  <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {users}
            </tbody>
          </table>
      )
  }
}

class User extends React.Component{
    render() {
        return (
            <tr>
                <td>{this.props.user.id}</td>
                <td>{this.props.user.name}</td>
                <td>{this.props.user.memo}</td>
                <td>{this.props.user.date}</td>
            </tr>
        )
    }
}
