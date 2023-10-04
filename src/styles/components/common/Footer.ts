import styled from "styled-components"


export const FooterStyled = styled.footer`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr; 
    grid-gap: 70px;
    justify-content: center;

    margin-top: 60px;
    padding: 70px 10%;

    // glassmorphism
    background: ${({ theme }) => theme.footer.glassBg};
    backdrop-filter: ${({ theme }) => theme.colors.glassBackdropFilter};

    h3 {
        text-align: center;
        margin-bottom: 20px;
        color: ${({ theme }) => theme.footer.lightTextSec};
        font-weight: bold;
    }

    @media (max-width: 992px) {
        padding: 70px 7%;
        gap: 20px;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr; 
    }
`

export const AboutSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        color: ${({ theme }) => theme.footer.lightTextSec};
        text-align: center;
    }
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    
    img {
        width: 60px;
        height: 60px;
    }

    h1 {
        margin-bottom: 5px;

        a {
            color: ${({ theme }) => theme.footer.lightText};
            text-shadow: 
            -1px 0 ${({ theme }) => theme.colors.mainColor},
            1px 0 ${({ theme }) => theme.colors.mainColor}, 
            0 -1px ${({ theme }) => theme.colors.mainColor}, 
            0 1px ${({ theme }) => theme.colors.mainColor};
            font-size: 25px;
            text-decoration: none;
        }
    }
`

export const AccountSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > ul {
        display: flex;
        flex-direction: column;
        gap: 15px;

        width: 120px;
        padding: 0;
        list-style: none;
        transform: translateX(19px);
    }

    > ul a {
        color: ${({ theme }) => theme.footer.lightTextSec};
        text-decoration: none;
        font-size: 15px;
    }

    @media (max-width: 768px) {
        > ul {
            transform: translateX(0);
            text-align: center;
        }
    }
`

export const LearnSection = styled(AccountSection)`
    transform: translateX(-50px);

    > ul {
        width: 200px;
        transform: translateX(73px);
    }

    @media (max-width: 992px) {

        > ul {
            transform: translateX(70px);
        }
    }

    @media (max-width: 768px) {
        transform: translateX(0);

        > ul {
            transform: translateX(0);
        }
    }
`