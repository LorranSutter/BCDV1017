import React from 'react';

import LikeButton from './LikeButton';
import Timer from './Timer';

class Comment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Timer></Timer>
                <h3 style={{ margin: '0 0.5em' }}>{this.props.commentPost}</h3>
                <LikeButton></LikeButton>
            </div>
        );
    }
}

export default Comment;