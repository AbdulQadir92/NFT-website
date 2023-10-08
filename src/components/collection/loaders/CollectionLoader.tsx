import { CollectionLoaderStyled, Card } from '../../../styles/components/collection/loaders/CollectionLoader'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useTheme } from 'styled-components'


const CollectionLoader = () => {
    const cards = new Array(8);
    cards.fill(0);

    const theme = useTheme();

    return (
        <CollectionLoaderStyled>
            {cards.map((_, i) => (
                <Card key={i}>
                    <div>
                        <Skeleton height={150} baseColor={theme.app.gradientFallback} />
                    </div>
                    <div>
                        <Skeleton style={{ marginBottom: '15px' }} height={30} count={2} baseColor={theme.app.gradientFallback} />
                    </div>
                </Card>
            ))}
        </CollectionLoaderStyled>
    )
}

export default CollectionLoader