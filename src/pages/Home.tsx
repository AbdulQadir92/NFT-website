import { HomeStyled } from "../styles/pages/Home"
import TopSection from "../components/home/TopSection"
import TopCollections from "../components/home/TopCollections"
import Trending from "../components/home/Trending"


const Home = () => {
    return (
        <HomeStyled>
            <TopSection />
            <TopCollections />
            <Trending />
        </HomeStyled>
    )
}

export default Home