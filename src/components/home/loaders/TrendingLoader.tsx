import { TrendingLoaderStyled, Card, CardHeader, CardBody, Floor, Volume } from '../../../styles/components/home/loaders/TrendingLoader'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useTheme } from 'styled-components'


const TrendingLoader = () => {
    const cards = new Array(8);
    cards.fill(0);

    const theme = useTheme();

    return (
        <TrendingLoaderStyled>
            {cards.map((_, i) => (
                <Card key={i}>
                    <CardHeader>
                        <Skeleton style={{ borderRadius: '10px' }} height={200} baseColor={theme.app.gradientFallback} />
                    </CardHeader>
                    <CardBody>
                        <div>
                            <Skeleton height={25} baseColor={theme.app.gradientFallback} />
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
        </TrendingLoaderStyled>
    )
}

export default TrendingLoader