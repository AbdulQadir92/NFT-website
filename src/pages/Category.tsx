// @ts-nocheck
import { CategoryStyled, CategoryHeader, Breadcrumb, CardsContainer, Card, CardHeader, CardBody, Floor, Volume } from "../styles/pages/Category"
import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import TrendingLoader from "../components/home/loaders/TrendingLoader"

import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store/store"
import { getCollections } from "../store/categoriesSlice"
import CONTENT from "../utils/content"


const Category = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const { item, loading } = useSelector((state: RootState) => state.categories.data.collections)

    useEffect(() => {
        dispatch(
            getCollections()
        )
    }, [dispatch])

    const findCategory = () => {
        const category = CONTENT.categories.find((item: any) => item.id === Number(id))
        return category
    }

    const navigateToCollection = (item: any) => {
        navigate(`/collections/${item.contracts[0].contract_address}`)
    }

    return (
        <>
            <CategoryHeader>
                <img src={findCategory()?.imageUrl} alt="..." />
                <Breadcrumb>
                    <h2>
                        <span>Category </span>
                        <span>&#62;</span>
                        <span> {findCategory()?.title}</span>
                    </h2>
                </Breadcrumb>
            </CategoryHeader>
            <CategoryStyled>
                <h1>Collections</h1>
                <CardsContainer>
                    {loading ? <TrendingLoader /> : (
                        <>
                            {item.results.map((value: any, index: number) => (
                                <Card key={index} onClick={() => navigateToCollection(value)}>
                                    <CardHeader>
                                        <div>
                                            <img src={value.image_url} alt="..." />
                                        </div>
                                    </CardHeader>
                                    <CardBody>
                                        <h2>{value.name}</h2>
                                        <div>
                                            <Floor>
                                                <h3>Floor Price</h3>
                                                <p>{value.stats.one_day_volume.toFixed(2)} arb</p>
                                            </Floor>
                                            <Volume>
                                                <h3>Total Volume</h3>
                                                <p>{value.stats.total_volume.toFixed(2)} arb</p>
                                            </Volume>
                                        </div>
                                    </CardBody>
                                </Card>
                            ))}
                        </>
                    )}
                </CardsContainer>
            </CategoryStyled>
        </>
    )
}

export default Category