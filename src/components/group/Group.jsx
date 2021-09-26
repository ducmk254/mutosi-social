import React from 'react';
import "./group.css";
const Group = () => {
    return (
        <div className="rightbarGroup">
                <div className="rightbarGroup__header">
                    <span className="rightbarGroup__header_title">
                        Nhóm
                    </span>
                    <span className="rightbarGroup__header_view">
                        Xem tất cả
                    </span>
                </div>
                <ul className="rightbarGroup__List">
                    <li className="rightbarGroup__item">a</li>
                    <li className="rightbarGroup__item">a</li>
                    <li className="rightbarGroup__item">a</li>
                </ul>
                <button className="rightbarGroup__footer">
                    Tạo nhóm
                </button>
            </div>
    );
};

export default Group;