import React from 'react';
import Share from '../share/Share';
import Post from '../Post/Post';
import "./Feed.css";
const Feed = () => {
    return (
        <div className="feedContainer">
            <div className="feedWrapper">
                <Share/>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
};

export default Feed;