import { NFTStyled } from "../styles/pages/NFT"
import MainSection from "../components/nft/MainSection"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store/store"
import { getNFT } from "../store/collectionsSlice"


const NFT = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { item, loading } = useSelector((state: RootState) => state.collections.data.nft);
    const { token } = useParams();

    useEffect(() => {
        dispatch(
            // @ts-ignore
            getNFT(token)
        )
    }, [dispatch, token])

    return (
        <NFTStyled>
            {!loading && <MainSection nft={item} />}
        </NFTStyled>
    )
}

export default NFT