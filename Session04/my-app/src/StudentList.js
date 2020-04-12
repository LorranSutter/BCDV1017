import React from 'react';
import axios from 'axios';

import AddStudent from './AddStudent';
import DeleteStudent from './DeleteStudent';

class StudentList extends React.Component {

    constructor(props) {
        super(props);

        this.handleAddStudent = this.handleAddStudent.bind(this);
    }

    state = {
        users: []
    }

    handleAddStudent = (newUser) => {
        newUser.name = newUser.user;

        this.setState(() => ({
            users: [...this.state.users, newUser]
        }));
    }

    handleDeleteStudent = (deletedId) => {
        this.setState(() => ({
            users: this.state.users.filter(user => user.id !== deletedId)
        }));
    }

    componentDidMount() {
        axios
            .get('http://jsonplaceholder.typicode.com/users')
            .then((res) => {
                this.setState(() => ({
                    users: res.data
                }));
            });
    }

    render() {
        return (
            <>
                <AddStudent onAddStudent={this.handleAddStudent} />
                <ul>
                    {this.state.users.map((item, key) =>
                        <li key={item.id}>
                            {item.name}
                            <DeleteStudent id={item.id} onDeleteStudent={this.handleDeleteStudent} />
                        </li>
                    )}
                </ul>
            </>
        );
    }
}

export default StudentList;