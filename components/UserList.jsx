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
                return this.setState({ users: data });
            });
       
    }

    render() {
        const { users } = this.state;

        return (
            <div>
                <h3>ppp</h3>
                {/* <ul>
                    {users.map((item, index) => console.log(item))} 
                    {/* <li key={index}>{item.firstName}</li> */}
                {/* </ul> */} */}
            </div>
        );
    }
    
}

export default UserList;