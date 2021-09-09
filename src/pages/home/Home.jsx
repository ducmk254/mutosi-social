import "../home/home.css"
import RightBar from '../../components/rightBar/RightBar';
import SideBar from '../../components/sideBar/SideBar';
import Topbar from '../../components/Topbar/Topbar';
import Feed from "../../components/Feed/Feed";


const Home = () => {
    return (
        <>
            <Topbar/>
            <div className="homeContainer">
                <SideBar/>
                <Feed />
                <RightBar/>
            </div>
        </>
    );
};

export default Home;