import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featuredContent/Featured";
import Slider from "../../components/slider/Slider";

function Home(props) {
    return (
        <div className="home">
            <Featured type={"movie"}/>
            <Navbar/>
            <Slider/>
            <Slider/>
            <Slider/>
        </div>
    );
}

export default Home;