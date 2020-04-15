import React from 'react';

import Comment from './Comment';

class TweetContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commentList: [],
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.value !== '') {
            const newComment = <Comment commentPost={this.state.value}></Comment>;
            this.setState({ commentList: [...this.state.commentList, newComment] });

            this.setState({ value: '' });
        }
    }

    render() {
        return (
            <>
                <h1>{this.props.status}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="Post" />
                </form>
                <ul>
                    {this.state.commentList.map((item, key) =>
                        <li style={{ listStyle: 'none' }} key={key}>
                            {item}
                        </li>
                    )}
                </ul>
            </>
        );
    }
}

export default TweetContainer;