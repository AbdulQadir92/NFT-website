import styled from "styled-components"


export const MainSectionStyled = styled.div`
    display: grid;
    grid-template-columns: minmax(300px, 40%) minmax(400px, 60%);
    padding-left: 0;
    padding-right: 0;
    height: 500px;

    p {
        margin-bottom: 0;
    }

    @media (max-width: 1200px) {
        height: 400px;
    }

    @media (max-width: 992px) {
        grid-template-columns: 100%;
        gap: 30px;
        height: auto;
    }
`

export const ImageSection = styled.div`
    height: 100%;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 10px;

    > img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }

    @media (max-width: 992px) {
        height: 600px;
    }

    @media (max-width: 768px) {
        height: 450px;
    }

    @media (max-width: 576px) {
        height: 320px;
    }
`

export const MainDetailsSection = styled.div`
    display: grid;
    grid-template-columns: 70% minmax(150px, 30%);
    height: 100%;

    @media (max-width: 992px) {
        grid-template-columns: 100%;
        gap: 30px;
    }
`

export const LeftColumn = styled.div`

    // taken name
    > h1 {
        font-size: 2.2rem;
        color: ${({ theme }) => theme.colors.lightText};
        text-align: center;
        margin-top: 20px;
        margin-bottom: 50px;
    }
`

export const PriceSection = styled.div`
    margin: 30px;
    padding: 20px 0;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    // price heading
    > p {
        color: ${({ theme }) => theme.colors.lightTextSec};
        font-size: 1.8rem;
    }

    > div {
        display: flex;
        align-items: center;

        > p:first-child {
            color: ${({ theme }) => theme.colors.lightText};
            font-size: 3rem;
            margin-right: 20px;
        }

        > p:last-child {
            color: ${({ theme }) => theme.colors.lightTextSec};   
        }
    }

    @media (max-width: 992px) {
        margin: 30px 0;

        > p {
            font-size: 1.6rem;
        }

        > div {
            > p:first-child {
                font-size: 2.5rem;
            }
        }
    }

    @media (max-width: 576px) {
        margin: 30px 10px;

        > div {
            > p:first-child {
                font-size: 2rem;
            }
        }
    }
`

export const LeftButtonsSection = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
`

export const BuyButton = styled.button`
    width: 50%;
    padding: 9px 12px;
    background: ${({ theme }) => theme.colors.mainColor};
    color: ${({ theme }) => theme.NFT.darkText};
    border: 1px solid ${({ theme }) => theme.colors.mainColor};
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border-radius: 10px;
    font-size: 1.8rem;
    font-weight: 500;
    transition: 300ms;
    cursor: pointer;

    &:hover {
        // glassmorphism
        background: ${({ theme }) => theme.colors.glassBg};
        backdrop-filter: ${({ theme }) => theme.colors.glassBackdropFilter};
        box-shadow: ${({ theme }) => theme.colors.glassShadow};
        border: ${({ theme }) => theme.colors.glassBorder};
        color: ${({ theme }) => theme.colors.lightText};
    }

    @media (max-width: 768px) {
        padding: 6px 9px;
        font-size: 15px;
    }
`

export const OfferButton = styled(BuyButton)`
    background: ${({ theme }) => theme.colors.secColor};
    border: 1px solid ${({ theme }) => theme.colors.secColor};
`

export const DescriptionSection = styled.div`
    margin: 0 30px;

    > h3 {
        text-align: center;
    }

    @media (max-width: 992px) {
        margin: 0;
    }

    @media (max-width: 576px) {
        margin: 0 10px;

        > h3 {
            text-align: left;
        }
    }

`

export const BySection = styled.p`
    color: ${({ theme }) => theme.colors.lightText};

    > span:first-child {
        color: ${({ theme }) => theme.colors.lightTextSec};
    }

    > span:last-child {
        font-weight: 500;
        font-size: 1.7rem;
    }
`

export const Description = styled.div`
    margin-top: 20px;

    > h3 {
        font-size: 1.6rem;
        text-align: center;
        margin-bottom: 10px;
    }

    > p {
        color: ${({ theme }) => theme.colors.lightText};
        text-align: center;
    }
`

export const RightColumn = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 10px;
    padding: 10px;

    @media (max-width: 992px) {
       padding-bottom: 30px;
    }

    @media (max-width: 576px) {
        margin: 0 10px;
    }
`

export const RightButtonsSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const CartButton = styled(BuyButton)`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    padding: 5px 12px;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.lightTextSec};
    transition: 300ms;
    cursor: pointer;

    // glassmorphism
    background: ${({ theme }) => theme.colors.glassBg};
    backdrop-filter: ${({ theme }) => theme.colors.glassBackdropFilter};
    box-shadow: ${({ theme }) => theme.colors.glassShadow};
    border: ${({ theme }) => theme.colors.glassBorder};

    &:hover {
        background: ${({ theme }) => theme.colors.glassBgHover};
        border: ${({ theme }) => theme.colors.glassBorderHover};
    }

    // cart icon
    > span:last-child {
        display: inline-block; 
        margin-left: 5px;
        color: #4169E1;
    }

    @media (max-width: 1300px) {
        padding: 5px 7px;
    }
`

export const FavouritesButton = styled(CartButton)`

    // heart icon
    > span:last-child {
        display: inline-block; 
        color: ${({ theme }) => theme.colors.mainColor};
    }
`

export const MoreDetails = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    > div {
        width: calc(100% - 10px);
        padding: 20px 5px 10px;
        border-bottom: 1px solid ${({ theme }) => theme.colors.border};

        h3 {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10px;

            font-size: 14px;
            color: ${({ theme }) => theme.colors.lightTextSec};
            margin-bottom: 0;
        }

        p {
            color: ${({ theme }) => theme.colors.lightText};
            margin-top: 5px;
        }
    }
`