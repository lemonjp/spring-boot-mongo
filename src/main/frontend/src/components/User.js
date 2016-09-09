import React from 'react';

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

export default User;
