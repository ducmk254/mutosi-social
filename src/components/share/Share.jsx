import React from 'react';
import "./share.css";
import {PhotoLibrary,InsertEmoticon,Label,Place} from '@material-ui/icons'
const Share = () => {
    return (
        <div className="shareFeed">
            <div className="feedTop">
                <img className="feedProfileImg" src="/assets/person/1.jpeg" alt="name" />
                <input className="feedInput" type="text" placeholder="Châu ơi, bạn đang nghĩ gì thế?" />
            </div>
            <div className="feedBottom">
                <div className="feedBottom__item">
                    <span><PhotoLibrary  htmlColor="tomato" className="feedItem__icon" /> Picture or Video</span>
                </div>
                <div className="feedBottom__item">
                    <span><Label  htmlColor="blue" className="feedItem__icon" /> Tag</span>
                </div>
                <div className="feedBottom__item">
                    <span><Place  htmlColor="green"  className="feedItem__icon" /> Tag</span>
                </div>
                <div className="feedBottom__item">
                    <span><InsertEmoticon  htmlColor="yellow" className="feedItem__icon" /> Feelings</span>
                </div>
            </div>
        </div>
    );
};
export default Share;