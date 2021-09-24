import React from 'react';
import Share from '../share/Share';
import Post from '../Post/Post';
import "./Feed.css";

import {PostList} from "../../DummyData";
import { UserOnline } from '../../DummyData';
const Feed = () => {
    return (
        <div className="feedContainer">
            <div className="feedWrapper">
                <Share UserOnline = {UserOnline} />
                {
                    PostList.map(post => <Post key={post.id} post={post} />)
                }
            </div>
        </div>
    );
};

export default Feed;