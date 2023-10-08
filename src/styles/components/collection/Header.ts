import styled from 'styled-components'


export const CollectionHeader = styled.div`
    width: 100%;
    padding-bottom: 80px;   
    position: relative;

    img {
        width: 100%;
        height: 50vh;
    }
`

export const Title = styled.div`
    padding: 30px 2.5% 0;

    > h1 {
        margin-bottom: 10px;
        color: ${({ theme }) => theme.colors.lightText};
    }

    > div {
        color: ${({ theme }) => theme.colors.lightText};

        span {
            margin-right: 5px;
        }

        h3 {
            display: inline-block;
        }
    }

    @media (max-width: 576px) {
        > h1, > div {
            text-align: center;
        }
    }

    @media (min-width: 1400px) {
        padding: 30px 7% 0;
    }

    @media (min-width: 1700px) {
        padding: 30px 10% 0;
    }

    @media (min-width: 2000px) {
        padding: 30px 15% 0;
    }
`

export const Information = styled.div`
    padding: 0 2.5%;
    margin-top: 30px;

    > ul {
        list-style: none;
        padding: 0;
        margin: 0;

        display: grid;
        grid-template-columns: repeat(5, 1fr);

        > li:not(:last-child) {
            border-right: 2px solid ${({ theme }) => theme.colors.border};
        }
    }

    @media (max-width: 768px) {
        margin-top: 50px;

        > ul {
            grid-template-columns: repeat(1, 1fr);

            li {
                border-right: none !important;
                border-bottom: 2px solid ${({ theme }) => theme.colors.border};
                padding: 10px 0;
            }

            li:first-child {
                padding-top: 0;
            }
        }
    }

    @media (min-width: 1400px) {
        padding: 0 7%;
    }

    @media (min-width: 1700px) {
        padding: 0 10%;
    }

    @media (min-width: 2000px) {
        padding: 0 15%;
    }
`

export const Li = styled.li`
    text-align: center;

    > div {
        color: ${({ theme }) => theme.colors.lightTextSec};
        margin-bottom: 5px;
        font-size: 15px;
    }

    > p {
        color: ${({ theme }) => theme.colors.lightText};
        margin: 0;
    }
`

export const Description = styled.div`
    padding: 30px 10% 0;

    p {
        color: ${({ theme }) => theme.colors.lightText};
    }

    @media (max-width: 768px) {
        padding: 50px 10% 0;
    }

    @media (min-width: 1400px) {
        padding: 30px 13% 0;
    }

    @media (min-width: 1700px) {
        padding: 30px 16% 0;
    }

    @media (min-width: 2000px) {
        padding: 30px 21% 0;
    }
`

export const SocialIcons = styled.div`
    display: flex;
    align-items: center;

    position: absolute;
    right: 2.5%;
    top: calc(50vh - 50px);

    > span:not(:last-child) {
        margin-right: 30px;
    }

    @media (max-width: 576px) {
        top: calc(50vh - 40px);

        > span:not(:last-child) {
            margin-right: 15px;
        }
    }

    @media (min-width: 1400px) {
        right: 7%;
    }

    @media (min-width: 1700px) {
        right: 10%;
    }

    @media (min-width: 2000px) {
        right: 15%;
    }
`

export const LinkStyled = styled.span`
    > a {
        display: flex;
        justify-content: space-between;
        align-items: center;

        display: flex;
        justify-content: center;
        align-items: center;

        width: 30px;
        height: 30px;
        border-radius: 50%;
        font-size: 16px;
        color: ${({ theme }) => theme.colors.lightText};   
        cursor: pointer;
        transition: 0.3s;

        // glassmorphism
        background: ${({ theme }) => theme.colors.glassBg};
        backdrop-filter: ${({ theme }) => theme.colors.glassBackdropFilter};
        box-shadow: ${({ theme }) => theme.colors.glassShadow};
        border: ${({ theme }) => theme.colors.glassBorder};
    }

    > a:hover {
        // glassmorphism
        background: ${({ theme }) => theme.colors.glassBgHover};
        border: ${({ theme }) => theme.colors.glassBorderHover};
        transform: scale(1.2);
    }
`