import styled from 'styled-components'


export const TopCollectionsStyled = styled.section`
    
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
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;

    @media (max-width: 992px) {
        grid-template-columns: 1fr;
    }
`

export const Card = styled.div`
    display: grid;
    grid-template-columns: 130px 1fr;

    height: 130px;
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
    }

    @media (max-width: 300px) {
        grid-template-columns: 100px 1fr;
        height: 100px;
    }
`

export const ImageContainer = styled.div`
    height: inherit;
    padding: 5px;

    img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
`

export const CardBody = styled.div`
    padding: 10px 15px;

    > h2 {
        height: 30%;
        text-align: center;
        word-break: break-all;

        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    > div {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        height: 70%;

        h3 {
            font-size: 1.5rem;
            font-weight: 700;
            color: ${({ theme }) => theme.colors.lightTextSec};

        }

        p {
            color: ${({ theme }) => theme.colors.lightText};
            font-size: 2rem;
            font-weight: 500;
        }
    }

    @media (max-width: 992px) {
        > h2 {
            height: 27%;
            font-size: 2.2rem;
        }

        > div {
            height: 73%;
        }

        p {
            font-size: 17px;
        }
    }

    @media (max-width: 600px) {
        padding: 15px 5px;

        > h2 {
            font-size: 2rem;
            text-align: left;
        }

        > div {
            h3, p {
                font-size: 1.3rem;
            }
        }
    }

    @media (max-width: 300px) {
        padding: 10px 3px;

        > h2 {
            font-size: 1.8rem;
            text-align: left;
        }

        > div {
            h3, p {
                font-size: 1.1rem;
            }
        }
    }
`

export const Floor = styled.div`
    
`

export const Volume = styled.div`
    
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
     
    > button {
        transition: 100ms;
    }

    a {
        text-decoration: none;
    }

    @media (max-width: 576px) {
        padding: 4px 8px;

        > button {
            margin: auto;
        }
    }
`