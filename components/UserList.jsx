import React, { Component } from 'react';
import { getUsers } from '../sources/list';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            firstName: 'test1'
        }
    }

    componentDidMount() {
        console.log('GETUSERS: ', getUsers());

        getUsers({ firstName: this.state.firstName })
            .then(({ data }) =>  {
                console.log('data - ', data);
                this.setState({ users: data });
            });
       
    }

    render() {
        const { users } = this.state;

        if(users.length == 0) {
            return (<div>There are not any data!</div>);
        } else 

        return (
            <div>
                <h3>ppp</h3>
                <ul>
                    {users.map((item, index) => <li key={index}>{item.firstName} + {item.secondName}</li>)} 
                </ul>
            </div>
        );
    }
    
}

export default UserList;