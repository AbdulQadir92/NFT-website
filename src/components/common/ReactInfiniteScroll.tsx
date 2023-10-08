// @ts-nocheck
import { ReactInfiniteScrollStyled, EndMessage, Card } from "../../styles/components/common/ReactInfiniteScroll"
import { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useNavigate } from "react-router-dom"
import CollectionLoader from "../collection/loaders/CollectionLoader"

import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../store/store"
import { getCollectionNFTs } from "../../store/collectionsSlice"


const ReactInfiniteScroll = ({ contract_address }: any) => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { data } = useSelector((state: RootState) => state.collections);

    const [nfts, setNfts] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        dispatch(
            getCollectionNFTs()
        )
    }, [dispatch])

    useEffect(() => {
        if (data.collectionNFTs.item.results) {
            setNfts((prevData: any) => [...prevData, ...data.collectionNFTs.item.results])
        }
    }, [data.collectionNFTs.item.results])

    const fetchData = () => {
        if (nfts.length >= 500) {
            setHasMore(false);
            return;
        }

        setTimeout(() => {
            dispatch(
                getCollectionNFTs()
            )
        }, 2000)
    }

    const navigateToNFT = (index: number) => {
        navigate(`/nft/${index + 1}`)
    }

    return (
        <>
            {Boolean(nfts.length) &&
                <ReactInfiniteScrollStyled>
                    <InfiniteScroll
                        dataLength={nfts.length} // This is important field to render the next data
                        next={fetchData}
                        hasMore={hasMore}
                        loader={
                            <CollectionLoader />
                        }
                        endMessage={
                            <EndMessage>
                                No more NFTs to show!
                            </EndMessage>
                        }
                    >
                        {nfts.map((item: any, index: number) => (
                            <Card key={index} onClick={() => navigateToNFT(index)}>
                                <div>
                                    <img src={item.cached_images.original} alt="..." />
                                </div>
                                <div>
                                    <p>{item.token_name}</p>
                                    <p>{item.recent_price ? item.recent_price : '0.37 ETH'}</p>
                                </div>
                            </Card>
                        ))}
                    </InfiniteScroll>
                </ReactInfiniteScrollStyled >}
        </>
    )
}

export default ReactInfiniteScroll