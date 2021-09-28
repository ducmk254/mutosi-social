import "./store.css";
import RightBar from '../../components/rightBar/RightBar';
import SideBar from '../../components/sideBar/SideBar';


const Store = () => {
    return (
        <>
            <div className="homeContainer">
                <SideBar/>
                <RightBar/>
            </div>
        </>
    );
};

export default Store;