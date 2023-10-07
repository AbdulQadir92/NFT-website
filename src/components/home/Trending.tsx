// @ts-nocheck
import { TrendingStyled, CardsContainer, Card, CardHeader, CardBody, Floor, Volume } from "../../styles/components/home/Trending"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import CONTENT from "../../utils/content"
import TrendingLoader from "./loaders/TrendingLoader"

import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../store/store"
import { getTrendingCollections } from "../../store/collectionsSlice"


const Trending = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch<AppDispatch>();
    const { data } = useSelector((state: RootState) => state.collections);

    useEffect(() => {
        dispatch(
            getTrendingCollections()
        )
    }, [dispatch])

    const navigateToCollection = (item: any) => {
        navigate(`/collections/${item.contracts[0].contract_address}`)
    }

    return (
        <TrendingStyled>
            <h1>{CONTENT.home.trendingCollectionsSection.heading}</h1>
            <CardsContainer>
                {data.trendingCollections.loading ? <TrendingLoader /> : (
                    <>
                        {data.trendingCollections.item.results.map((item, index) => (
                            <Card key={index} onClick={() => navigateToCollection(item)}>
                                <CardHeader>
                                    <div>
                                        <img src={item.image_url} alt="..." />
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <h2>{item.name}</h2>
                                    <div>
                                        <Floor>
                                            <h3>Floor Price</h3>
                                            <p>{item.stats.one_day_volume.toFixed(2)} arb</p>
                                        </Floor>
                                        <Volume>
                                            <h3>Total Volume</h3>
                                            <p>{item.stats.total_volume.toFixed(2)} arb</p>
                                        </Volume>
                                    </div>
                                </CardBody>
                            </Card>
                        ))}
                    </>
                )}
            </CardsContainer>
        </TrendingStyled>
    )
}

export default Trending