import styled from "styled-components"


export const CollectionLoaderStyled = styled.div`
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   grid-gap: 15px;
   width: calc(400% + 45px) !important;

   @media (max-width: 1200px) {
        /* grid-template-columns: repeat(3, 1fr);
        width: calc(300% + 30px) !important; */
        grid-template-columns: repeat(2, 1fr);
        width: calc(200% + 15px) !important;
    }

    /* @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        width: calc(200% + 15px) !important;
    } */

    @media (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr); 
        width: calc(100%) !important;
    }
`

export const Card = styled.div`
    height: 285px;
    padding: 10px;
    border-radius: 10px;

    background: ${({ theme }) => theme.colors.glassBg};
    backdrop-filter: ${({ theme }) => theme.colors.glassBackdropFilter};
    box-shadow: ${({ theme }) => theme.colors.glassShadow};
    border: ${({ theme }) => theme.colors.glassBorder};

    > div:first-child {
        margin-bottom: 20px;
    }
`