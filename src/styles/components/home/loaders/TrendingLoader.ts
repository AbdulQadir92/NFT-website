import styled from "styled-components"


export const TrendingLoaderStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    width: calc(400% + 30px) !important;

    @media (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
        width: calc(200% + 10px) !important;
    }

    @media (max-width: 576px) {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 30px;
        width: calc(100%) !important;
    }
`

export const Card = styled.div`
    display: grid;
    align-items: start;
    gap: 10px;

    padding: 5px;
    border-radius: 10px;

    background: ${({ theme }) => theme.colors.glassBg};
    backdrop-filter: ${({ theme }) => theme.colors.glassBackdropFilter};
    box-shadow: ${({ theme }) => theme.colors.glassShadow};
    border: ${({ theme }) => theme.colors.glassBorder};
`

export const CardHeader = styled.div`
    border-radius: 10px;
    margin: 5px;
`

export const CardBody = styled.div`
    padding: 0 5px 10px;

    > div:first-child {
        width: 50%;
        margin: auto;
    }

    > div:last-child {
        display: grid;
        grid-template-columns: repeat(2, 40%);
        justify-content: space-between;
        gap: 10px;
        margin-top: 50px;
    }

    @media (max-width: 992px) {
        > div:last-child {
            display: grid;
            grid-template-columns: repeat(2, 25%);
        }
    }
`

export const Floor = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const Volume = styled(Floor)`

`