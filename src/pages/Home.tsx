import { HomeStyled } from "../styles/pages/Home"
import TopSection from "../components/home/TopSection"
import TopCollections from "../components/home/TopCollections"


const Home = () => {
    return (
        <HomeStyled>
            <TopSection />
            <TopCollections />
        </HomeStyled>
    )
}

export default Home