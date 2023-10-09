import styled from "styled-components"


export const ReactInfiniteScrollStyled = styled.div`
    position: relative;
    margin-bottom: 50px;

    .infinite-scroll-component {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 15px;
        /* padding-left: 15px; */

        a {
            text-decoration: none;
            color: ${({ theme }) => theme.colors.lightText};
        }
    }

    @media (max-width: 1200px) {
        .infinite-scroll-component {
            /* grid-template-columns: repeat(3, 1fr); */
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 992px) {
        .infinite-scroll-component {
            padding-left: 0;
        }
    }

    /* @media (max-width: 768px) {
        .infinite-scroll-component {
            grid-template-columns: repeat(2, 1fr);
        }
    } */

    @media (max-width: 500px) {
        .infinite-scroll-component {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`

export const Loader = styled.p`
    color: ${({ theme }) => theme.colors.lightTextSec};
    font-size: 20px;
    margin-top: 10px;
`

export const EndMessage = styled.p`
    position: absolute;
    left: 50%;
    bottom: -60px;
    transform: translateX(-50%);

    color: ${({ theme }) => theme.colors.lightTextSec};
    font-size: 20px;
`

export const Card = styled.div`
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;

    background: ${({ theme }) => theme.colors.glassBg};
    backdrop-filter: ${({ theme }) => theme.colors.glassBackdropFilter};
    box-shadow: ${({ theme }) => theme.colors.glassShadow};
    border: ${({ theme }) => theme.colors.glassBorder};


    &:hover {
        background: ${({ theme }) => theme.colors.glassBgHover};
        border: ${({ theme }) => theme.colors.glassBorderHover};
    }

    // cart top
    > div:first-child {
        width: 100%;
        height: 170px;
        border-radius: 8px;

        img {
            width: 100%;
            height: 100%;
            border-radius: 8px;
        }
    }

    // card body
    > div:last-child {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        height: 80px;
        padding-top: 10px;

        // token name
        > p:first-child {
            text-align: center;
        }

        // token price
        > p:last-child {
            font-size: 18px;
            font-weight: 500;
        }
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