import { HomeStyled } from "../styles/pages/Home"
import TopSection from "../components/home/TopSection"
import TopCollections from "../components/home/TopCollections"
import Trending from "../components/home/Trending"
import CategoriesSection from "../components/home/CategoriesSection"


const Home = () => {
    return (
        <HomeStyled>
            <TopSection />
            <TopCollections />
            <Trending />
            <CategoriesSection />
        </HomeStyled>
    )
}

export default Home