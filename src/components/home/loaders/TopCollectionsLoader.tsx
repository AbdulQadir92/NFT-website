import {
    TopCollectionsLoaderStyled, Card, ImageContainer,
    CardBody, Floor, Volume
} from '../../../styles/components/home/loaders/TopCollectionsLoader'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useTheme } from 'styled-components'


const TopCollectionsLoader = () => {
    const cards = new Array(10);
    cards.fill(0);

    const theme = useTheme();

    return (
        <TopCollectionsLoaderStyled>
            {cards.map((_, i) => (
                <Card key={i}>
                    <ImageContainer>
                        <Skeleton height={115} baseColor={theme.app.gradientFallback} />
                    </ImageContainer>
                    <CardBody>
                        <div>
                            <Skeleton height={20} baseColor={theme.app.gradientFallback} />
                        </div>
                        <div>
                            <Floor>
                                <div>
                                    <Skeleton height={15} baseColor={theme.app.gradientFallback} />
                                </div>
                                <div>
                                    <Skeleton height={15} baseColor={theme.app.gradientFallback} />
                                </div>
                            </Floor>
                            <Volume>
                                <div>
                                    <Skeleton height={15} baseColor={theme.app.gradientFallback} />
                                </div>
                                <div>
                                    <Skeleton height={15} baseColor={theme.app.gradientFallback} />
                                </div>
                            </Volume>
                        </div>
                    </CardBody>
                </Card>
            ))}
        </TopCollectionsLoaderStyled>
    )
}

export default TopCollectionsLoader