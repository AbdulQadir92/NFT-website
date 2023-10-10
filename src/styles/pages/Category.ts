import styled from "styled-components"


export const CategoryHeader = styled.div`
    width: 100%;
    height: 70vh;

    position: relative;

    img {
        width: 100%;
        height: 100%;
    }

    @media (orientation: portrait) {
        height: 50vh;
    }
`

export const Breadcrumb = styled.div`
    position: absolute;
    top: 70px;
    left: 2.5%;

    > h2 {
        color: ${({ theme }) => theme.colors.darkText};
    }

    span:nth-child(2) {
        color: ${({ theme }) => theme.colors.darkTextSec};
    }
`

export const CategoryStyled = styled.main`
    padding-left: 2.5%;
    padding-right: 2.5%;

    > h1 {
        margin-bottom: 20px;
        color: ${({ theme }) => theme.colors.lightText};
    }

    @media (max-width: 768px) {
        > h1 {
            text-align: center;
        }
    }

    @media (min-width: 1400px) {
        padding-left: 7%;
        padding-right: 7%;
    }

    @media (min-width: 1700px) {
        padding-left: 10%;
        padding-right: 10%;
    }

    @media (min-width: 2000px) {
        padding-left: 15%;
        padding-right: 15%;
    }
`

// export const Collection = styled.div`
//     margin-bottom: 30px;
//     padding-bottom: 20px;
//     border-bottom: 1px solid ${({ theme }) => theme.colors.border};

//     h2 {
//         margin-bottom: 20px;
//         text-align: center;

//         a {
//             text-decoration: none;
//             color: ${({ theme }) => theme.colors.lightText};
//         }
//     }

//     @media (max-width: 576px) {
//         h2 {
//             a {
//                 font-size: 20px;
//             }
//         }
//     }
// `


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

