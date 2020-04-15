import React from 'react';

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { numLikes: 0 }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.setState({ numLikes: this.state.numLikes + 1 });
    }

    render() {
        return (
            <>
                <button value="Like" onClick={this.handleClick}>Like</button>
                <p style={{ marginLeft: '0.5em' }}>{this.state.numLikes} Likes</p>
            </>
        );
    }
}

export default LikeButton;