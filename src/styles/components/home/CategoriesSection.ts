import styled from "styled-components";


export const CategoriesSectionStyled = styled.section`
   
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
    padding: 10px;
    /* border: 1px solid ${({ theme }) => theme.colors.border}; */
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;

    background: ${({ theme }) => theme.colors.glassBg};
    backdrop-filter: ${({ theme }) => theme.colors.glassBackdropFilter};
    box-shadow: ${({ theme }) => theme.colors.glassShadow};
    border: ${({ theme }) => theme.colors.glassBorder};


    &:hover {
        background: ${({ theme }) => theme.colors.glassBgHover};
        border: ${({ theme }) => theme.colors.glassBorderHover};

        img {
            transform: scale(1.1);
        }
    }

    img {
        width: 100%;
        height: 170px;
        border-radius: 8px;
        transition: 300ms;
    }

    h3 {
        display: flex;
        justify-content: center;
        align-items: center;

        padding-top: 10px;
        height: 40px;
    }

    @media (max-width: 992px) {
        img {
            height: 200px;
        }
    }

    @media (max-width: 768px) {
        img {
            height: 170px;
        }
    }

    @media (max-width: 576px) {
        img {
            height: 220px;
        }
    }
`