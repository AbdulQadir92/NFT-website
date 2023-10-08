import styled from "styled-components"


export const CollectionStyled = styled.div`
    padding-top: 0px;

    > h2 {
        text-align: center;
        color: ${({ theme }) => theme.colors.lightText};
        margin-bottom: 15px;
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

export const CollectionSticky = styled.div`
    padding: 15px 2.5% 0;

    @media (min-width: 1400px) {
        padding: 15px 0 0;
    }
`

export const CollectionMain = styled.div`
    display: grid;
    grid-template-columns: auto 4fr;

    position: relative;

    padding-top: 15px;

    @media (max-width: 768px) {
        margin-top: 50px;
    }

    @media (max-width: 576px) {
        margin-top: 100px;
    }
`