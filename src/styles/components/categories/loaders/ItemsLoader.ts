import styled from "styled-components"


export const ItemsLoaderStyled = styled.div`

    > h2 {
        width: 20%;
        margin: auto;
        margin-bottom: 20px;
    }

    > div {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-column-gap: 10px;
        width: 100% !important;
        border-bottom: 1px solid ${({ theme }) => theme.colors.border};
        padding-bottom: 20px;
    }

    > div:not(:last-child) {
        margin-bottom: 30px;
    }

    @media (max-width: 992px) {
        > div {
            grid-template-columns: repeat(4, 1fr);

            > div:nth-child(5), > div:nth-child(6) {
                display: none;
            }
        }
    }

    @media (max-width: 768px) {
        > div {
            grid-template-columns: repeat(2, 1fr);

            > div:nth-child(3), > div:nth-child(4), > div:nth-child(5), > div:nth-child(6) {
                display: none;
            }
        }
    }
`

export const Card = styled.div`
    // glassmorphism
    backdrop-filter: ${({ theme }) => theme.colors.glassBackdropFilter};
    box-shadow: ${({ theme }) => theme.colors.glassShadow};
    border: ${({ theme }) => theme.colors.glassBorder};

    border-radius: 10px;
`