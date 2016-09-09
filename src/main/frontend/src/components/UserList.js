import React from 'react';

import User from './User';

class UserList extends React.Component{
  render() {
      var users = this.props.users.map(user =>
          <User key={user.id} user={user}/>
      );
      return (
          <table className="table">
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

export default UserList;
