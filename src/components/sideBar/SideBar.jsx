import Member from "../icons/Member";
import OrgSetting from "../icons/OrgSetting";
import GroupSetting from "../icons/GroupSetting";
import StoreOutline from "../icons/StoreOutline";
import "./SideBar.css";
import SaveIcon from '../icons/SaveIcon';

import {UserList} from "../../DummyData";
import {UserOnline} from "../../DummyData";

const SideBar = () => {
    return (
        <div className="sidebarContainer">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarItem">
                        <img className="sidebarAvatar" src={UserList.filter(u=>u.id === UserOnline.id)[0].profile} alt={UserList.filter(u=>u.id === UserOnline.id)[0].username} /> {UserList.filter(u=>u.id === UserOnline.id)[0].username}
                    </li>
                    <li className="sidebarItem">
                        <Member width="3rem" height="3rem" className="sidebarIcon" /> Bạn bè
                    </li>
                    <li className="sidebarItem">
                        <OrgSetting width="3rem" height="3rem" color="secondary" className="sidebarIcon" /> Trang
                    </li>
                    <li className="sidebarItem">
                        <GroupSetting width="3rem" height="3rem" color="error" className="sidebarIcon" /> Nhóm
                    </li>
                    <li className="sidebarItem">
                        <StoreOutline width="3.4rem" height="3.4rem" color="green" classNameIcon="sidebarIcon" /> Mutosi market
                    </li>
                    <li className="sidebarItem">
                        <SaveIcon width="3.4rem" height="3.4rem" className="sidebarIcon" /> Khảo sát thành viên
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideBar;