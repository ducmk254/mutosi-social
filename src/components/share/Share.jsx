import React from 'react';
import "./share.css";
import PictureVideoIcon from "../icons/PicrureVideoIcon";
import Incentive from "../icons/Incentive";
import QuestionIcon from "../icons/QuestionIcon";
import {UserList} from "../../DummyData";

const Share = ({UserOnline}) => {
    return (
            <div className="shareFeed">
            <div className="feedTop">
                <img className="feedProfileImg" src={UserList.filter(u => u.id === UserOnline.id)[0].profile} alt="name" />
                <input className="feedInput" type="text" placeholder={UserList.filter(u => u.id === UserOnline.id)[0].username + " ơi, bạn đang nghĩ gì thế?"} />
            </div>
            <div className="feedBottom">
                <div className="feedBottom__item">
                    <span><PictureVideoIcon width="2.6rem" height="2.6rem"  className="feedItem__icon" /> Picture/Video</span>
                </div>
                <div className="feedBottom__item">
                    <span><Incentive width="2.6rem" height="2.6rem"  className="feedItem__icon" />Give Recognition</span>
                </div>
                <div className="feedBottom__item">
                    <span><QuestionIcon width="2.6rem" height="2.6rem" className="feedItem__icon" /> Question</span>
                </div>
            </div>
        </div>

    );
};
export default Share;