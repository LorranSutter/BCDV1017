import React from 'react';
import axios from 'axios';

class AddStudent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
        const newName = event.target.value;
        this.setState(() => ({
            name: newName
        }));
    }

    handleSubmit = event => {
        event.preventDefault();

        axios
            .post('https://jsonplaceholder.typicode.com/users',
                {
                    user: this.state.name
                },
                {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
            .then((res) => {
                console.log(res.data);
                this.props.onAddStudent(res.data);
            });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="personName">
                        Person name:
                        <input type="text" name="name" id="personName" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}

export default AddStudent;