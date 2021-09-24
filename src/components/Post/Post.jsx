import React from 'react';
import "./post.css";
import {MoreHoriz} from '@material-ui/icons'
import {ShareAltOutlined,MessageOutlined,LikeOutlined } from '@ant-design/icons';
import {UserList} from "../../DummyData";
const Post = ({post}) => {
    console.log(post);
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postHeader">
                    <img className="postProfileImg" src={UserList.filter(user=> user.id===post.userId)[0].profile} alt="name"/>
                    <div className="postProfileName">
                        <span className="postName">{UserList.filter(user=> user.id===post.userId)[0].username}</span>
                        <span className="postTime">{post.time}</span>
                    </div>
                    <div className="postHeaderAction"><MoreHoriz className="postHeaderIcon" /></div>
                </div>
                <div className="postContent">
                    <span className="postContentText">{post?.title}</span>
                    <img className="postContentImage" src={post?.imgUrl} alt="ảnh minh họa" />
                </div>
                <div className="postAction">
                    <div className="postActionLike"><LikeOutlined style={{fontSize:"4.2rem",color:"gray",marginRight:"5px"}} />{post.like}</div>
                    <div className="postActionComment"><MessageOutlined style={{fontSize:"4.2rem",color:"gray",marginRight:"5px"}} />{post.comment}</div>
                    <div className="postActionShare"><ShareAltOutlined  style={{fontSize:"4.2rem",color:"gray",marginRight:"5px"}} />{post.share}</div>
                </div>
                <div className="postComment">
                    
                </div>
            </div>
        </div>
    );
};

export default Post;