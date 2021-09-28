import "./group.css";
import RightBar from '../../components/rightBar/RightBar';
import SideBar from '../../components/sideBar/SideBar';


const Group = () => {
    return (
        <>
            <div className="homeContainer">
                <SideBar/>
                <RightBar/>
            </div>
        </>
    );
};

export default Group;