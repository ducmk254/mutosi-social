import React from 'react';
import Friend from '../friend/Friend';
import Group from '../group/Group';

import "./RightBar.css";
const RightBar = () => {
    return (
        <div className="rightbarContainer">
            <Group />
            <Friend />
        </div>
    );
};

export default RightBar;