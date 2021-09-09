import { BookmarkBorder, Flag, GroupWork, People, Storefront } from '@material-ui/icons';
import React from 'react';
import "./SideBar.css";
const SideBar = () => {
    return (
        <div className="sidebarContainer">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarItem">
                        <img className="sidebarAvatar" src="/assets/person/1.jpeg" alt="Sương sara" /> Sương sara
                    </li>
                    <li className="sidebarItem">
                        <People className="sidebarIcon" /> Bạn bè
                    </li>
                    <li className="sidebarItem">
                        <Flag className="sidebarIcon" /> Trang
                    </li>
                    <li className="sidebarItem">
                        <GroupWork className="sidebarIcon" /> Nhóm
                    </li>
                    <li className="sidebarItem">
                        <Storefront className="sidebarIcon" /> Mutosi market
                    </li>
                    <li className="sidebarItem">
                        <BookmarkBorder className="sidebarIcon" /> Đã lưu
                    </li>
                    <li className="sidebarItem">
                        <BookmarkBorder className="sidebarIcon" /> Đã lưu
                    </li>
                    <li className="sidebarItem">
                        <BookmarkBorder className="sidebarIcon" /> Đã lưu
                    </li>
                    <li className="sidebarItem">
                        <BookmarkBorder className="sidebarIcon" /> Đã lưu
                    </li>
                    <li className="sidebarItem">
                        <BookmarkBorder className="sidebarIcon" /> Đã lưu
                    </li>
                    <li className="sidebarItem">
                        <BookmarkBorder className="sidebarIcon" /> Đã lưu
                    </li>
                    <li className="sidebarItem">
                        <BookmarkBorder className="sidebarIcon" /> Đã lưu
                    </li>
                    <li className="sidebarItem">
                        <BookmarkBorder className="sidebarIcon" /> Đã lưu
                    </li>
                    <li className="sidebarItem">
                        <BookmarkBorder className="sidebarIcon" /> Đã lưu
                    </li>
                    <li className="sidebarItem">
                        <BookmarkBorder className="sidebarIcon" /> Đã lưu
                    </li>


                </ul>
            </div>
        </div>
    );
};

export default SideBar;