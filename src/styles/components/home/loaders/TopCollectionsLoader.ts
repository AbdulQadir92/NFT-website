import styled from "styled-components"


export const TopCollectionsLoaderStyled = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-gap: 10px;
   width: calc(200% + 10px) !important;

    @media (max-width: 992px) {
        grid-template-columns: repeat(1, 1fr);
        width: 100% !important;
    }
`

export const Card = styled.div`
    display: grid;
    grid-template-columns: 120px 1fr;
    align-items: start;
    gap: 20px;

    height: 130px;
    padding: 5px;
    border-radius: 10px;

    background: ${({ theme }) => theme.colors.glassBg};
    backdrop-filter: ${({ theme }) => theme.colors.glassBackdropFilter};
    box-shadow: ${({ theme }) => theme.colors.glassShadow};
    border: ${({ theme }) => theme.colors.glassBorder};
`

export const ImageContainer = styled.div`
    border-radius: 10px;
`

export const CardBody = styled.div`
    > div:first-child {
        width: 50%;
        margin: auto;
        margin-top: 10px;
    }

    > div:last-child {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        margin-top: 30px;
    }

    @media (max-width: 992px) {
        > div:first-child {
            margin-top: 10px;
        }

        > div:last-child {
            margin-top: 40px;
        }
    }
`

export const Floor = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    > div:first-child {
        width: 60%;
    }

    > div:last-child {
        width: 80%;
    }
`
export const Volume = styled(Floor)`

`