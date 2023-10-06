import styled from "styled-components"


export const ButtonStyled = styled.button`
    padding: 5px 10px;
    background: ${({ theme }) => theme.colors.mainColor};
    border: 1px solid ${({ theme }) => theme.colors.mainColor};
    box-shadow: rgba(100, 100, 100, .3) 0 5px 15px;
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;
    transition: 300ms;

    a {
        color: ${({ theme }) => theme.colors.lightText};
    }

    &:hover {
        // glassmorphism
        background: ${({ theme }) => theme.colors.glassBg};
        backdrop-filter: ${({ theme }) => theme.colors.glassBackdropFilter};
        box-shadow: ${({ theme }) => theme.colors.glassShadow};
        border: ${({ theme }) => theme.colors.glassBorder};
    }

    @media (max-width: 768px) {
        padding: 4px 8px;
        font-size: 14px;
    }
`