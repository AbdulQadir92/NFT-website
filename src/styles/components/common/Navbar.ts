import styled from "styled-components"


export const NavbarStyled = styled.nav`
    display: grid;
    grid-template-columns: 4fr 5fr 4fr;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    top: 0;
    z-index: 10;
    
    padding: 0 2.5%;

    // glassmorphism
    background: ${({ theme }) => theme.nav.glassBg};
    backdrop-filter: ${({ theme }) => theme.nav.glassBackdropFilter};
    box-shadow: ${({ theme }) => theme.nav.glassShadow};
    border: ${({ theme }) => theme.nav.glassBorder};

    width: 100%;
    height: 65px;
    transition: 0.3s;

    > div {
        transform: translateY(-1px);
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.lightText};
        font-weight: bold;
        font-size: 16px;
    }

    @media (max-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 992px) {
        grid-template-columns: 1fr;
        align-items: start;

        padding-top: 6px;
        overflow: hidden;

        &.active {
            height: 170px;
        }

        > div {
            transform: translateY(0);
        }

        div:nth-child(2) {
            grid-row: 3 / 4;
        }

        div:nth-child(3) {
            grid-row: 2 / 3;
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

export const Brand = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    height: 50px;
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    margin-right: 25px;
    cursor: pointer;

    img {
        width: 60px;
        height: 60px;
    }

    h1 {
        color: ${({ theme }) => theme.colors.lightText};
        text-shadow: 
        -1px 0 ${({ theme }) => theme.colors.mainColor},
        1px 0 ${({ theme }) => theme.colors.mainColor}, 
        0 -1px ${({ theme }) => theme.colors.mainColor}, 
        0 1px ${({ theme }) => theme.colors.mainColor};
        font-size: 25px;
    }

    @media (max-width: 300px) {
        h1 {
            /* width: 110%;
            margin-bottom: 10px; */
            display: none;
        }
    }
`

export const Explore = styled.div`
    margin-right: 15px;

    > div {
        color: ${({ theme }) => theme.colors.lightText};
        border-radius: 6px;
        padding: 6px 10px;
        cursor: pointer;
        transition: 0.3s;

        // glassmorphism
        background: ${({ theme }) => theme.nav.componentsBg};
        backdrop-filter: ${({ theme }) => theme.nav.glassBackdropFilter};
        box-shadow: ${({ theme }) => theme.nav.glassShadow};
        border: ${({ theme }) => theme.nav.glassBorder};
    }

    > div:hover {
        // glassmorphism
        background: ${({ theme }) => theme.colors.glassBgHover};
        border: ${({ theme }) => theme.colors.glassBorderHover};
    }

    @media (max-width: 992px) {
        margin-right: 50px;
    }

    @media (max-width: 300px) {
        margin-right: 40px;
        
        > div {
            padding: 4px 7px;
        }
    }
`

export const MenuIcon = styled.div`
    position: absolute;
    right: 0;
    top: 53%;
    transform: translateY(-50%);

    padding: 0 5px;
    cursor: pointer;

    > * {
        font-size: 2.5rem;
        color: ${({ theme }) => theme.colors.lightText};
        display: none;
    }

    @media (max-width: 991px) {
        > * {
            display: block;
        }
    }
`

export const Search = styled.div`
    display: flex;
    align-items: center;

    position: relative;
    margin-right: 15px;
    height: 50px;

    input {
        padding: 0 40px 0 10px;
        height: 35px;
        color: ${({ theme }) => theme.colors.lightText};
        transition: 300ms;

        // glassmorphism
        background: ${({ theme }) => theme.nav.componentsBg};
        backdrop-filter: ${({ theme }) => theme.nav.glassBackdropFilter};
        box-shadow: ${({ theme }) => theme.nav.glassShadow};
        border: ${({ theme }) => theme.nav.glassBorder};
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
        top: 15px;
        right: 15px;

        font-size: 20px;
        color: ${({ theme }) => theme.colors.mainColor};
        cursor: pointer;
    }

    @media (max-width: 992px) {
        margin-right: 0;
    }
`

export const Links = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    height: 50px;

    > ul {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        list-style: none;

        li {
            position: relative;
        }

        li:not(:last-child) {
            margin-right: 40px;
        }

        li > div {
            display: none;
            position: absolute;
            bottom: -45px;
            right: 0;
            z-index: 10;

            padding: 10px;
            border: 1px solid;
        }

        /* li:hover .info-card {
            display: block;
        } */
    }

    @media (max-width: 992px) {
        justify-content: flex-start;
        
        ul {
            justify-content: flex-start;
        }

        ul li > div {
            left: 0;
            right: initial;
        }

        ul li:not(:last-child) {
            margin-right: 20px;
        }
    }
`

export const LinkStyled = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 35px;
    height: 35px;
    border-radius: 50%;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.lightText};   
    transition: 300ms;

    // glassmorphism
    background: ${({ theme }) => theme.nav.componentsBg};
    backdrop-filter: ${({ theme }) => theme.nav.glassBackdropFilter};
    box-shadow: ${({ theme }) => theme.nav.glassShadow};
    border: ${({ theme }) => theme.nav.glassBorder};

    &:hover {
        // glassmorphism
        background: ${({ theme }) => theme.colors.glassBgHover};
        border: ${({ theme }) => theme.colors.glassBorderHover};
        transform: scale(1.2);
    }

    @media (max-width: 992px) {
        width: 30px;
        height: 30px;
    }

    @media (max-width: 1200px) {
        
    }
`