// @ts-nocheck
import { TopSectionStyled, TopPart, BottomPart } from "../../styles/components/home/TopSection"
import CONTENT from "../../utils/content"
import HomeMultiCarousel from "./HomeMultiCarousel"
import { useEffect } from 'react'
import TopSectionLoader from "./loaders/TopSectionLoader"

import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from "../../store/store"
import { getTopCollections } from "../../store/collectionsSlice"


const TopSection = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { data, loading } = useSelector((state: RootState) => state.collections);

    useEffect(() => {
        dispatch(
            getTopCollections()
        )
    }, [dispatch])

    return (
        <TopSectionStyled>
            <TopPart>
                <div>
                    <h1>{CONTENT.home.topSection.heading}</h1>
                    <div>{CONTENT.home.topSection.description}</div>
                </div>
            </TopPart>
            <BottomPart>
                {loading ? <TopSectionLoader /> : <HomeMultiCarousel data={data.results} />}
            </BottomPart>
        </TopSectionStyled>
    )
}

export default TopSection