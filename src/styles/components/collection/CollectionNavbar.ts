import styled from 'styled-components'


export const NavbarStyled = styled.nav`
    display: grid;
    align-items: center;
    /* grid-template-columns: 1fr 2fr 1fr; */
    grid-template-columns: 280px 2fr 1fr;
    grid-gap: 15px;

    position: -webkit-sticky;
    position: sticky;
    top: 75px;
    z-index: 10;

    /* padding: 0 2.5%; */

    @media (max-width: 992px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export const SidebarButton = styled.div`
    order: 1;

    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr 2fr;

    // glassmorphism
    background: ${({ theme }) => theme.colors.glassBg};
    backdrop-filter: ${({ theme }) => theme.colors.glassBackdropFilter};
    box-shadow: ${({ theme }) => theme.colors.glassShadow};
    border: ${({ theme }) => theme.colors.glassBorder};

    border-radius: 6px;

    > div:first-child {
        display: flex;
        align-items: center;
        padding: 5px 10px;
        cursor: pointer;

        > *:nth-child(1) {
            font-size: 20px;
            color: ${({ theme }) => theme.colors.mainColor};
        }

        > span:nth-child(2) {
            margin-left: 10px;
            color: ${({ theme }) => theme.colors.lightText};
        }
    }

    > div:nth-child(2) {
        display: flex;
        justify-content: center;
        align-items: center;

        // glassmorphism
        background: ${({ theme }) => theme.colors.glassBg};
        backdrop-filter: ${({ theme }) => theme.colors.glassBackdropFilter};
        box-shadow: ${({ theme }) => theme.colors.glassShadow};
        border: ${({ theme }) => theme.colors.glassBorder};

        width: 20px;
        height: 20px;
        font-size: 14px;
        color: ${({ theme }) => theme.colors.lightText};
        border-radius: 50%;

        * {
            border-radius: 50%;
        }
    }

    > div:nth-child(3) {
        // glassmorphism
        background: ${({ theme }) => theme.colors.glassBg};
        backdrop-filter: ${({ theme }) => theme.colors.glassBackdropFilter};
        box-shadow: ${({ theme }) => theme.colors.glassShadow};
        border: ${({ theme }) => theme.colors.glassBorder};

        margin-right: 10px;
        padding: 0 5px;
        text-align: center;
        color: ${({ theme }) => theme.colors.lightText};
        border-radius: 6px;
        cursor: pointer;
        visibility: hidden;

        &.shown {
            visibility: visible;
        }
    }

    @media (max-width: 768px) {
        position: absolute;
        bottom: -49px;
        left: 0;

        width: calc(50% - 7.5px);
    }

    @media (max-width: 576px) {
        width: 100%;
    }
`

export const Search = styled.div`
    order: 2;

    display: flex;
    align-items: center;

    position: relative;

    input {
        padding: 0 40px 0 10px;
        height: 33px;
        color: ${({ theme }) => theme.colors.lightText};

        // glassmorphism
        background: ${({ theme }) => theme.colors.glassBg};
        backdrop-filter: ${({ theme }) => theme.colors.glassBackdropFilter};
        box-shadow: ${({ theme }) => theme.colors.glassShadow};
        border: ${({ theme }) => theme.colors.glassBorder};
    }

    input:focus {
        // glassmorphism
        background: ${({ theme }) => theme.colors.glassBgHover};
        border: ${({ theme }) => theme.colors.glassBorderHover};
        box-shadow: ${({ theme }) => theme.colors.glassShadow};
        outline: none;
    }

    span {
        position: absolute;
        top: 6px;
        right: 15px;

        font-size: 20px;
        color: ${({ theme }) => theme.colors.mainColor};
        cursor: pointer;
    }

    @media (max-width: 992px) {
        margin-right: 0;
    }

    @media (max-width: 768px) {
        order: 1;
    }   
`

export const Filters = styled.div`
    order: 3;

    > ul {
        list-style: none;

        > li {
            position: relative;

            // glassmorphism
            background: ${({ theme }) => theme.colors.glassBg};
            backdrop-filter: ${({ theme }) => theme.colors.glassBackdropFilter};
            box-shadow: ${({ theme }) => theme.colors.glassShadow};
            border: ${({ theme }) => theme.colors.glassBorder};

            padding: 6.5px 10px;
            border-radius: 6px;
            color: ${({ theme }) => theme.colors.lightText};

            > div:first-child {
                display: flex;
                justify-content: space-between;
                align-items: center;

                cursor: pointer;
            }
        }
    }

    @media (max-width: 768px) {
        position: absolute;
        bottom: -50px;
        right: 0;

        width: calc(50% - 7.5px);
    }

    @media (max-width: 576px) {
        bottom: -100px;
        width: 100%;
    }
`