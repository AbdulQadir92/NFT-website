import styled from "styled-components"


export const TopSectionLoaderStyled = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-gap: 20px;


    @media (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
        > div:nth-child(3) {
            display: none;
        }
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        > div:nth-child(2) {
            display: none;
        }
    }
`

export const Card = styled.div`
    height: 350px;
    padding: 10px;
    border-radius: 10px;

    background: ${({ theme }) => theme.colors.glassBg};
    backdrop-filter: ${({ theme }) => theme.colors.glassBackdropFilter};
    box-shadow: ${({ theme }) => theme.colors.glassShadow};
    border: ${({ theme }) => theme.colors.glassBorder};

    @media (max-width: 992px) {
        height: 300px;
    }

    @media (max-width: 768px) {
        height: 500px;
    }

    @media (max-width: 576px) {
        height: 300px;
    }
`

export const Skeleton1 = styled.div`
    margin-bottom: 20px;

    // loading skeleton
    > span > span {
        height: 250px;
    }

    @media (max-width: 992px) {
        > span > span {
            height: 210px;
        }
    }

    @media (max-width: 768px) {
        > span > span {
            height: 400px;
        }
    }

    @media (max-width: 576px) {
        > span > span {
            height: 210px;
        }
    }
`

export const Skeleton2 = styled.div`
    margin-bottom: 10px;

    // loading skeleton
    > span > span {
        height: 35px;
    }

    @media (max-width: 992px) {
        > span > span {
            height: 35px;
        }
    }
`