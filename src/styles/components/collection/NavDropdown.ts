import styled from 'styled-components'


export const DropdownStyled = styled.div`
    position: absolute;
    left: 0;
    top: 35px;

    // glassmorphism
    background: ${({ theme }) => theme.colors.glassBg};
    backdrop-filter: ${({ theme }) => theme.colors.glassBackdropFilter};
    box-shadow: ${({ theme }) => theme.colors.glassShadow};
    border: ${({ theme }) => theme.colors.glassBorder};

    width: 100%;
    padding: 10px 0;
    border-radius: 6px;
    display: none;

    > div:not(:last-child) {
        border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    }

    &.shown {
        display: block;
    }
`

export const Item = styled.div`
    padding: 7.5px 10px;
    cursor: pointer;

    &.active {
        // glassmorphism
        background: ${({ theme }) => theme.colors.glassBg};
        backdrop-filter: ${({ theme }) => theme.colors.glassBackdropFilter};
        box-shadow: ${({ theme }) => theme.colors.glassShadow};
    }
`