// @ts-nocheck
import { CategoryMultiCarouselStyled, ImageContainer, AllNftsLink } from "../../styles/components/categories/CategoryMultiCarousel"
import Carousel from 'react-multi-carousel'
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../store/store"
import { getNFTs } from "../../store/categoriesSlice"


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 6
    },
    desktop: {
        breakpoint: { max: 3000, min: 992 },
        items: 6,
        slidesToSlide: 6
    },
    tablet: {
        breakpoint: { max: 992, min: 767 },
        items: 4,
        slidesToSlide: 4
    },
    mobile: {
        breakpoint: { max: 767, min: 0 },
        items: 2,
        slidesToSlide: 2
    }
}

const CategoryMultiCarousel = ({ data, linkTo = "", allNftsLink = "" }: any) => {
    const dispatch = useDispatch<AppDispatch>();
    const { item } = useSelector((state: RootState) => state.categories.data.nfts)

    useEffect(() => {
        dispatch(
            // @ts-ignore
            getNFTs(data.contracts[0].contract_address)
        )
    }, [dispatch, data.contracts])
    // console.log(data.contracts[0].contract_address)

    console.log(item)


    return (
        <CategoryMultiCarouselStyled>
            {Object.keys(item).length &&
                (<Carousel
                    swipeable={true}
                    draggable={false}
                    responsive={responsive}
                >
                    {item.results.map((value: any, index: number) => (
                        <ImageContainer key={index}>
                            {index === item.results.length - 1 ? (
                                <AllNftsLink>
                                    <Link to={allNftsLink}>View All NFTs</Link>
                                </AllNftsLink>
                            ) : (
                                <Link to={linkTo}>
                                    <img src={value.cached_images?.original ? value.cached_images.original : ''} alt="..." />
                                </Link>
                            )}
                        </ImageContainer>
                    ))}
                </Carousel>)
            }
        </CategoryMultiCarouselStyled>
    )
}


export default CategoryMultiCarousel