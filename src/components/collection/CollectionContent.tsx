import { CollectionContentStyled, UpArrow } from "../../styles/components/collection/CollectionContent"
import ReactInfiniteScroll from "../common/ReactInfiniteScroll"
import { useEffect } from "react"


const CollectionContent = ({ contract_address }: any) => {
    useEffect(() => {
        const arrowUp = document.querySelector('#arrowUp') as HTMLDivElement;
        window.onscroll = () => {
            const scrollY = window.scrollY;
            if (scrollY >= 1000 && scrollY <= 1300) {
                arrowUp.classList.add('shown');
            }
            if (scrollY < 1000) {
                arrowUp.classList.remove('shown');
            }
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <CollectionContentStyled>
            <ReactInfiniteScroll
                contract_address={contract_address}
            />
            <UpArrow onClick={scrollToTop} id="arrowUp">
                <img src="/assets/images/other/arrow-up.png" width="20" height="20" alt="..." />
            </UpArrow>
        </CollectionContentStyled>
    )
}

export default CollectionContent