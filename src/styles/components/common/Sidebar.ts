import styled from "styled-components"


export const SidebarStyled = styled.aside`
    /* * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    } */

    position: fixed;
    left: -280px;
    top: 65px;
    z-index: 1000;

    width: 270px;
    min-height: 270px;
    border: 1px solid ${({ theme }) => theme.sidebar.border};
    border-radius: 10px;
    transition: 0.3s;

    // neumorphism dark
    background: ${({ theme }) => theme.colors.neuBgDark};
    box-shadow: ${({ theme }) => theme.colors.neuShadowDark};

    &.active {
        left: 5px;
    }

    > ul {
        list-style: none;
        padding: 40px 0;

        li:first-child {
            border-top: 1px solid ${({ theme }) => theme.sidebar.liBorder};
        }
    }

    @media (max-width: 768px) {
        width: 30vw;

        > ul {
            padding: 30px 0;
        }
    }

    @media (max-width: 576px) {
        &.active {
            left: 2px;
        }

        top: 2px;

        width: 50vw;
    }
`

export const Sidebar2Styled = styled(SidebarStyled)`
    left: 277px;
    display: none;

    li:hover {
        #sidebar3 {
            display: block;
        }
    }

    @media (max-width: 768px) {
        left: calc(30vw + 2px);
        width: 30vw;
    }

    @media (max-width: 576px) {
        top: 2px;

        left: calc(50vw + 2px);
        width: calc(50vw - 4px);
    }
`

export const Sidebar3Styled = styled(SidebarStyled)`
    left: 549px;
    display: none;

    @media (max-width: 768px) {
        left: calc(60vw + 2px);
        width: 30vw;
    }

    @media (max-width: 576px) {
        top: 276px;
        left: 2px;

        width: calc(100vw - 4px);
    }
`

export const Li = styled.li`
    position: relative;
    margin-top: 7px;
    padding: 0 7.5px;

    > a {
        display: block;
        padding: 7.5px 10px;
        border-bottom: 1px solid ${({ theme }) => theme.sidebar.liBorder};
        border-radius: 10px;
        cursor: pointer;
        text-decoration: none;
        font-size: 16px;
        transition: 0.3s;

        // neumorphism light
        // background: ${({ theme }) => theme.colors.neuBgLight};
        // box-shadow: ${({ theme }) => theme.colors.neuShadowLight};
        // color: ${({ theme }) => theme.colors.darkText};

        // neumorphism dark
        background: ${({ theme }) => theme.colors.neuBgDark};
        box-shadow: ${({ theme }) => theme.colors.neuShadowDark};
        color: ${({ theme }) => theme.colors.lightText};

    }

    &:hover {
        > a {
            /* background-color: ${({ theme }) => theme.colors.mainColor};
            background-image: linear-gradient(180deg, rgba(255, 255, 255, .15), rgba(255, 255, 255, 0));
            box-shadow: ${({ theme }) => theme.sidebar.liShadow}; */
            /* color: ${({ theme }) => theme.colors.lightText}; */

            // neumorphism light
            // box-shadow: ${({ theme }) => theme.colors.neuShadowLightHover};

            // neumorphism dark
            box-shadow: ${({ theme }) => theme.colors.neuShadowDarkHover};
        }        

        #sidebar2 {
            display: block;
        }
    }

    span {
        position: absolute;
        top: 10px;
        right: 19px;

        font-size: 14px;
        color: ${({ theme }) => theme.colors.lightTextSec};
    }

    @media (max-width: 768px) {
        > a {
            padding: 5px 10px;
        }

        span {
            top: 5px;
            right: 10px;
        }
    }
`

export const CloseIcon = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 20px;
    cursor: pointer;
    color: ${({ theme }) => theme.sidebar.closeIcon};
    border-radius: 10px;

    // neumorphism light
    // background: ${({ theme }) => theme.colors.neuBgLight};
    // box-shadow: ${({ theme }) => theme.colors.neuShadowLight};

    // neumorphism dark
    background: ${({ theme }) => theme.colors.neuBgDark};
    box-shadow: ${({ theme }) => theme.colors.neuShadowDark};

    @media (max-width: 768px) {
        right: 8px;
    }
`