import { TopSectionLoaderStyled, Card, Skeleton1, Skeleton2 } from '../../../styles/components/home/loaders/TopSectionLoader'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useTheme } from 'styled-components'


const TopSectionLoader = () => {
    const theme = useTheme();

    const cards = new Array(3);
    cards.fill(0);


    return (
        <TopSectionLoaderStyled>
            {cards.map((_, i) => (
                <Card key={i}>
                    <Skeleton1>
                        <Skeleton count={1} baseColor={theme.app.gradientFallback} />
                    </Skeleton1>
                    <Skeleton2>
                        <Skeleton count={1} baseColor={theme.app.gradientFallback} />
                    </Skeleton2>
                </Card>
            ))}
        </TopSectionLoaderStyled>
    )
}

export default TopSectionLoader