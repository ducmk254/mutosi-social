import React from 'react';
import "./friend.css";

import {UserList,FriendList} from '../../DummyData.js';
const Friend = () => {
    return (
        <div className="rightbarFriend">
            <h2 className="rightbarFriend_header">
                Liên hệ
            </h2>
            {
                (FriendList.length > 0 ) && 
                <ul className="rightbarFriend_List">
                    {FriendList.map(friend=> friend.status=== true && (
                        <li className="rightbarFriend__item">
                            <img src={UserList.filter(fr =>friend.userId === fr.id)[0].profile} alt={UserList.filter(fr =>friend.userId === fr.id)[0].name} className="rightbarFriend__icon" /> {UserList.filter(fr =>friend.userId === fr.id)[0].name.length > 40 ? UserList.filter(fr =>friend.userId === fr.id)[0].name.substr(0,40).concat("...") : UserList.filter(fr =>friend.userId === fr.id)[0].name} <span className="rightbarFriend__online"></span> 
                        </li>
                    ))}
                </ul>
            }
        </div>
    );
};

export default Friend;