import { ItemsLoaderStyled, Card } from '../../../styles/components/categories/loaders/ItemsLoader'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useTheme } from 'styled-components'
import React from 'react'


const ItemsLoader = () => {
    const cardsContainer = new Array(3);
    cardsContainer.fill(0);

    const cards = new Array(6);
    cards.fill(0);

    const theme = useTheme();

    return (
        <ItemsLoaderStyled>
            {cardsContainer.map((_, index) => (
                <React.Fragment key={index}>
                    <h2>
                        <Skeleton style={{ borderRadius: '10px' }} height={30} baseColor={theme.colors.glassBg} />
                    </h2>
                    <div>
                        {cards.map((_, i) => (
                            <Card key={i}>
                                <Skeleton style={{ borderRadius: '10px' }} height={150} baseColor={theme.colors.glassBg} />
                            </Card>
                        ))}
                    </div>
                </React.Fragment>
            ))}
        </ItemsLoaderStyled>
    )
}

export default ItemsLoader