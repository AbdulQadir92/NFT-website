import { HomeMultiCarouselStyled, Collection, CollectionName } from "../../styles/components/home/HomeMultiCarousel"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { useNavigate } from "react-router"


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 3000, min: 992 },
        items: 3,
        slidesToSlide: 3
    },
    tablet: {
        breakpoint: { max: 992, min: 768 },
        items: 2,
        slidesToSlide: 2
    },
    mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};


const HomeMultiCarousel = ({ data }: any) => {
    const navigate = useNavigate();

    const navigateToCollection = (item: any) => {
        navigate(`/collections/${item.contracts[0].contract_address}`)
    }

    return (
        <HomeMultiCarouselStyled>
            <Carousel
                swipeable={true}
                draggable={false}
                showDots={true}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
            >
                {data.map((item: any, index: number) => (
                    <Collection key={index} onClick={() => navigateToCollection(item)}>
                        <CollectionName>
                            {item.name}
                        </CollectionName>
                        <span>
                            <img src={item.image_url} alt="..." />
                        </span>
                    </Collection>
                ))}
            </Carousel>
        </HomeMultiCarouselStyled>
    )
}

export default HomeMultiCarousel