import "./topbar.css";
import { Notifications, Person, Search, Sms } from "@material-ui/icons";
import {Link} from "react-router-dom";
const Topbar = () => {
    
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo"><Link className="logo_link" to="/">Mutosi</Link></span>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <Search className="searchIcon" />
                    <input   className="searchInput" type="text" placeholder="Tìm kiếm trên Mutosi social" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLink">
                    <Link className="topbarLink__item" to="/">Homepage</Link >
                    <Link className="topbarLink__item" to="/">Timeline</Link>
                </div>
                <div className="topbarIcon">
                    {/* <Badge badgeContent={4} color="secondary">
                        <Person className="topbarIcon__item" />
                    </Badge>
                    <Badge badgeContent={4} color="secondary">
                        <Sms className="topbarIcon__item" />
                    </Badge>
                    <Badge badgeContent={4} color="secondary">
                    <NotificationsNone className="topbarIcon__item" />
                    </Badge> */}
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
                    <img src="/assets/person/1.jpeg" alt="avatar" className="topbarAvantar__img" />
                </div>
            </div>
        </div>
    );
};

export default Topbar;