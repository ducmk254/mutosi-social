import "./topbar.css";
import { ArrowDropDown, HomeSharp, Notifications, Person, Search, Sms, SupervisedUserCircle,Storefront } from "@material-ui/icons";
import {NavLink,Link} from "react-router-dom";
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
                        <HomeSharp className="topbarCenter__item" />
                    </NavLink >
                    <NavLink className="topbarLink__item"  to="/">
                        <SupervisedUserCircle className="topbarCenter__item" />
                    </NavLink>
                    <NavLink className="topbarLink__item"  to="/">
                        <Storefront className="topbarCenter__item" />
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
                    <img src="/assets/person/1.jpeg" alt="avatar" className="topbarAvantar__img" />
                    <span className="topbarAccount">Sương Sara</span>
                    <ArrowDropDown fontSize="1.6rem" style={{color:"white",cursor:"pointer"}} />
                </div>
            </div>
        </div>
    );
};

export default Topbar;