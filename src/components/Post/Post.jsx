import React from 'react';
import "./post.css";
import {MoreHoriz} from '@material-ui/icons'
import {ShareAltOutlined,MessageOutlined,LikeOutlined } from '@ant-design/icons';
const Post = () => {
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postHeader">
                    <img className="postProfileImg" src="/assets/person/1.jpeg" alt="name"/>
                    <div className="postProfileName">
                        <span className="postName">Minh Chau</span>
                        <span className="postTime">5 minutes ago</span>
                    </div>
                    <div className="postHeaderAction"><MoreHoriz className="postHeaderIcon" /></div>
                </div>
                <div className="postContent">
                    <span className="postContentText">Nội dung bài post này là của tôi nhé các bạn trẻ thân yêu ơi ơi ơi ơi ơi ơi ơi ơi ơi ơi</span>
                    <img className="postContentImage" src="/assets/post/1.jpeg" alt="ảnh minh họa" />
                </div>
                <div className="postAction">
                    <div className="postActionLike"><LikeOutlined style={{fontSize:"4.2rem",color:"gray",marginRight:"5px"}} />Like</div>
                    <div className="postActionComment"><MessageOutlined style={{fontSize:"4.2rem",color:"gray",marginRight:"5px"}} />Comments</div>
                    <div className="postActionShare"><ShareAltOutlined  style={{fontSize:"4.2rem",color:"gray",marginRight:"5px"}} />Share</div>
                </div>
                <div className="postComment">
                    
                </div>
            </div>
        </div>
    );
};

export default Post;