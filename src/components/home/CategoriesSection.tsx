import { CategoriesSectionStyled, CardsContainer, Card } from "../../styles/components/home/CategoriesSection"
import { useNavigate } from 'react-router-dom'
import CONTENT from "../../utils/content"

const categoryImages = [
    '/assets/images/categories/art.png',
    '/assets/images/categories/collectibles.png',
    '/assets/images/categories/domain-names.png',
    '/assets/images/categories/photography.png',
    '/assets/images/categories/sports.png',
    '/assets/images/categories/trading-cards.png',
    '/assets/images/categories/utility.png',
    '/assets/images/categories/virtual-worlds.png'
]


const CategoriesSection = () => {
    const navigate = useNavigate();

    const navigateToCollection = (item: any) => {
        navigate(`categories/${item.id}`)
    }

    return (
        <CategoriesSectionStyled>
            <h1>{CONTENT.home.categoriesSection.heading}</h1>
            <CardsContainer>
                {CONTENT.home.categoriesSection.categories.map((item, index) => (
                    <Card key={item.id} onClick={() => navigateToCollection(item)}>
                        <img src={categoryImages[index]} alt="..." />
                        <h3>{item.title}</h3>
                    </Card>
                ))}
            </CardsContainer>
        </CategoriesSectionStyled>
    )
}

export default CategoriesSection