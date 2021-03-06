import "../home/home.css"
import RightBar from '../../components/rightBar/RightBar';
import SideBar from '../../components/sideBar/SideBar';
import Feed from "../../components/Feed/Feed";


const Home = () => {
    return (
        <>
            <div className="homeContainer">
                <SideBar/>
                <Feed />
                <RightBar/>
            </div>
        </>
    );
};

export default Home;