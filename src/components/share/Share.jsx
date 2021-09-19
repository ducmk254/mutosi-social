import React from 'react';
import "./share.css";
import PictureVideoIcon from "../icons/PicrureVideoIcon";
import LivestreamIcon from "../icons/LivestreamIcon";
import QuestionIcon from "../icons/QuestionIcon";
const Share = () => {
    return (
        <div className="shareFeed">
            <div className="feedTop">
                <img className="feedProfileImg" src="/assets/person/1.jpeg" alt="name" />
                <input className="feedInput" type="text" placeholder="Châu ơi, bạn đang nghĩ gì thế?" />
            </div>
            <div className="feedBottom">
                <div className="feedBottom__item">
                    <span><PictureVideoIcon width="2.6rem" height="2.6rem"  className="feedItem__icon" /> Picture/Video</span>
                </div>
                <div className="feedBottom__item">
                    <span><LivestreamIcon width="2.6rem" height="2.6rem"  className="feedItem__icon" /> Livestream</span>
                </div>
                <div className="feedBottom__item">
                    <span><QuestionIcon width="2.6rem" height="2.6rem" className="feedItem__icon" /> Question</span>
                </div>
            </div>
        </div>
    );
};
export default Share;