import "./topbar.css";
import { ArrowDropDown, Notifications, Person, Search, Sms } from "@material-ui/icons";
import {NavLink,Link} from "react-router-dom";
import StoreOutline from "../icons/StoreOutline";
import GroupIcon from "../icons/GroupIcon";
import HomeIcon from "../icons/HomeIcon";
import {UserList} from "../../DummyData";
import {UserOnline} from "../../DummyData";

const Topbar = () => {
    
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo"><Link className="logo_link" to="/">Mutosi</Link></span>
                <div className="searchBar">
                    <Search className="searchIcon" />
                    <input   className="searchInput" type="text" placeholder="Tìm kiếm trên Mutosi social" />
                </div>
            </div>
            <div className="topbarCenter">
                <div className="topbarLink">
                    <NavLink className="topbarLink__item" activeClassName="topbarLink__active" to="/">
                        <HomeIcon width="3rem" height="3rem" color="#fff" classNameIcon="topbarCenter__item" />
                    </NavLink >
                    <NavLink className="topbarLink__item"  to="/">
                        <GroupIcon width="3rem" height="3rem" color="#fff" classNameIcon="topbarCenter__item" />
                    </NavLink>
                    <NavLink className="topbarLink__item"  to="/">
                        <StoreOutline width="3rem" height="3rem"  color="#fff" classNameIcon="topbarCenter__item" />
                    </NavLink>
                </div>
            </div>
            <div className="topbarRight">
               
                <div className="topbarIcon">
                    <div className="topbarIconItem">
                        <Person  className="topbarIcon__item" />
                        <span className="topbarIcon__text">4</span>
                    </div>
                    <div className="topbarIconItem">
                        <Sms  className="topbarIcon__item" />
                        <span className="topbarIcon__text">4</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications  className="topbarIcon__item" />
                        <span className="topbarIcon__text">4</span>
                    </div>                                   
                </div>
                <div className="topbarAvatar">
                    <img src={UserList.filter(u=>u.id===UserOnline.id)[0].profile} alt={UserList.filter(u=>u.id===UserOnline.id)[0].username} className="topbarAvantar__img" />
                    <span className="topbarAccount">{UserList.filter(u=>u.id===UserOnline.id)[0].username}</span>
                    <ArrowDropDown fontSize="1.6rem" style={{color:"white",cursor:"pointer"}} />
                </div>
            </div>
        </div>
    );
};

export default Topbar;