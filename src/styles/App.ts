import styled from "styled-components"


export const AppDiv = styled.div`
    background: ${({ theme }) => theme.app.gradientFallback}; 
    background: -webkit-linear-gradient(to right, ${({ theme }) => theme.app.gradientStart}, ${({ theme }) => theme.app.gradientEnd}); 
    background: linear-gradient(to right, ${({ theme }) => theme.app.gradientStart}, ${({ theme }) => theme.app.gradientEnd}); 

    background-size: 100% 100%;
    background-position: center;
`

export const PagesContainer = styled.div`
    min-height: 90vh;
`

export const PageStyled = styled.div`
    padding: 90px 2.5% 30px 2.5%;
    
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

export const SectionStyled = styled.div`
    padding: 30px 2.5%;

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