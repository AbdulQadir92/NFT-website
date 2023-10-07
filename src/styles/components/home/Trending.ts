import styled from "styled-components"


export const TrendingStyled = styled.section`
    > h1 {
        margin-bottom: 30px;
    }

    @media (max-width: 576px) {
        > h1 {
            text-align: center;
        }
    }
`

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;

    @media (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 576px) {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 30px;
    }
`

export const Card = styled.div`
    border-radius: 10px;
    cursor: pointer;
    transition: 300ms;

    // glassmorphism
    background: ${({ theme }) => theme.colors.glassBg};
    backdrop-filter: ${({ theme }) => theme.colors.glassBackdropFilter};
    box-shadow: ${({ theme }) => theme.colors.glassShadow};
    border: ${({ theme }) => theme.colors.glassBorder};

    &:hover {
        background: ${({ theme }) => theme.colors.glassBgHover};
        border: ${({ theme }) => theme.colors.glassBorderHover};

        > div:first-child img {
            transform: scale(1.2);
        }
    }
`

export const CardHeader = styled.div`
    height: 210px; 
    border-radius: 10px;
    overflow: hidden;

    > div {
        padding: 10px;
        overflow: hidden;
        border-radius: 8px;
    }

    img {
       width: 100%;
       height: 200px; 
       border-radius: 8px;
       transition: 300ms;
    }
`

export const CardBody = styled.div`
    padding: 10px 10px 5px;

    > h2 {
        height: 50px;
        font-size: 2rem;
        text-align: center;
        margin-top: 5px;
    }

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        margin-top: 25px;
    }

    @media (max-width: 576px) {
        > div {
            padding: 0 10px;
        }
    }
`

export const Floor = styled.div`
    
    h3 {
        font-size: 1.5rem;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.lightTextSec};
    }

    p {
        color: ${({ theme }) => theme.colors.lightText};
        font-size: 1.8rem;
        font-weight: 500;
    }
`

export const Volume = styled(Floor)`

`