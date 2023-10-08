import { CollectionStyled, CollectionSticky, CollectionMain } from "../styles/pages/Collection"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import Header from "../components/collection/Header"
import CollectionNavbar from "../components/collection/CollectionNavbar"
import CollectionSidebar from "../components/collection/CollectionSidebar"
import CollectionContent from "../components/collection/CollectionContent"

import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store/store"
import { getCollection, getCollectionNFTs } from "../store/collectionsSlice"


const Collection = () => {
    const { contract_address } = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const { data } = useSelector((state: RootState) => state.collections);

    const [filters, setFilters] = useState({});

    useEffect(() => {
        document.addEventListener('click', (e: any) => {
            e.stopPropagation();
            const navDropdown = document.querySelector('#navDropdown') as HTMLDivElement;
            if (!e.target.closest('#navDropdown') && navDropdown?.classList.contains('shown')) {
                navDropdown.classList.remove('shown');
            }
        })
    }, [])

    useEffect(() => {
        dispatch(
            getCollection()
        )
        dispatch(
            getCollectionNFTs()
        )
    }, [dispatch])


    return (
        <>
            {data.collection.loading && data.collectionNFTs.loading ? <div>Loading</div> :
                <>
                    <Header collection={data.collection.item} nfts={data.collectionNFTs.item} />
                    <CollectionStyled>
                        <h2>Items</h2>
                        <CollectionSticky>
                            <CollectionNavbar filters={filters} />
                            <CollectionMain>
                                <div>
                                    <CollectionSidebar setFilters={setFilters} />
                                </div>
                                <CollectionContent contract_address={contract_address} />
                            </CollectionMain>
                        </CollectionSticky>
                    </CollectionStyled>
                </>
            }
        </>
    )
}

export default Collection