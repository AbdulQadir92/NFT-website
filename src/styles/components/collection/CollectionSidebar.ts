import styled from 'styled-components'


export const CollectionSidebarStyled = styled.div`
    position: -webkit-sticky;
    position: sticky;
    top: 126px;
    z-index: 1;

    width: 280px;
    height: 70vh;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 6px;
    padding: 30px 10px;
    margin-right: 15px;
    overflow: auto;

    // glassmorphism
    background: ${({ theme }) => theme.colors.glassBg};
    backdrop-filter: ${({ theme }) => theme.colors.glassBackdropFilter};
    box-shadow: ${({ theme }) => theme.colors.glassShadow};
    border: ${({ theme }) => theme.colors.glassBorder};

    &::-webkit-scrollbar {
        width: 5px;
    }

    > ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 20px;

        > li:not(:last-child) {
            border-bottom: 1px solid ${({ theme }) => theme.colors.border};
        }
    }

    &.hidden {
        display: none;
    }

    @media (max-width: 992px) {
        display: none;

        // glassmorphism
        background: ${({ theme }) => theme.colors.glassBg};
        backdrop-filter: ${({ theme }) => theme.colors.glassBackdropFilter};
        box-shadow: ${({ theme }) => theme.colors.glassShadow};
        border: ${({ theme }) => theme.colors.glassBorder};

        &.hidden {
            display: block;

            position: fixed;
            top: 127px;
            left: 22.5px;
        }
    }

    @media (max-width: 768px) {
        &.hidden {
            top: 175px;
            left: 19px;
        }
    }

    @media (max-width: 576px) {
        height: 60vh;

        &.hidden {
            top: 225px;
            left: 13px;
        }
    }

    @media (max-width: 300px) {
        width: 260px;
    }
`

export const Item = styled.li`
    // glassmorphism
    background: ${({ theme }) => theme.colors.glassBg};
    backdrop-filter: ${({ theme }) => theme.colors.glassBackdropFilter};
    box-shadow: ${({ theme }) => theme.colors.glassShadow};
    border: ${({ theme }) => theme.colors.glassBorder};
    
    > div:first-child {
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 10px;
        color: ${({ theme }) => theme.colors.lightText};
        cursor: pointer;

        > span:nth-child(2) {
            font-size: 1.4rem;
            transition: 0.3s;

            &.rotated {
                transform: rotate(180deg);
            }
        }
    }
`

export const StatusOptions = styled.div`
    display: flex;
    flex-direction: column;

    padding: 0 7.5px 10px;
    display: none;

    > div:not(:last-child) {
        border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    }

    &.shown {
        display: flex;
    }
`

export const StatusOption = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 7.5px 10px;
    color: ${({ theme }) => theme.colors.lightText};
    cursor: pointer;

    :hover {
        // glassmorphism
        background: ${({ theme }) => theme.colors.glassBg};
        backdrop-filter: ${({ theme }) => theme.colors.glassBackdropFilter};
        box-shadow: ${({ theme }) => theme.colors.glassShadow};
    }

    > span:last-child {
        display: none;

        svg {
            font-size: 20px;
        }
    }

    &.active {
        > span:last-child {
            display: block;
        }
    }
`

export const PriceOptions = styled.div`
    padding: 0 7.5px 10px;

    > div:first-child {
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-gap: 5px;
        justify-content: space-between;
        align-items: center;
    }

    display: none;

    &.shown {
        display: block;
    }

    input, select {
        // glassmorphism
        background: ${({ theme }) => theme.colors.glassBg};
        backdrop-filter: ${({ theme }) => theme.colors.glassBackdropFilter};
        box-shadow: ${({ theme }) => theme.colors.glassShadow};
        border: ${({ theme }) => theme.colors.glassBorder};

        padding: 3px 7px;
        color: ${({ theme }) => theme.colors.lightText};
    }
`

export const MinMax = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 5px;
    align-items: center;

    color: ${({ theme }) => theme.colors.lightText};

    span {
        color: ${({ theme }) => theme.colors.lightTextSec};
    }
`

export const PriceDropdown = styled.div`
    position: relative;
    z-index: 10;

    > div:first-child {
        display: flex;
        justify-content: space-between;
        align-items: center;

        // glassmorphism
        background: ${({ theme }) => theme.colors.glassBg};
        backdrop-filter: ${({ theme }) => theme.colors.glassBackdropFilter};
        box-shadow: ${({ theme }) => theme.colors.glassShadow};
        border: ${({ theme }) => theme.colors.glassBorder};

        padding: 3px 7px;
        border-radius: 6px;
        color: ${({ theme }) => theme.colors.lightText};
        cursor: pointer;

        > span:last-child svg {
            font-size: 12px;
        }
    }
`

export const PriceDropdownBody = styled.div`
    position: absolute;
    top: calc(100% + 5px);

    // glassmorphism
    background: ${({ theme }) => theme.colors.glassBg};
    backdrop-filter: ${({ theme }) => theme.colors.glassBackdropFilter};
    box-shadow: ${({ theme }) => theme.colors.glassShadow};
    border: ${({ theme }) => theme.colors.glassBorder};

    width: 100%;
    border-radius: 6px;
    padding: 5px 0;
    /* display: none; */

    > div:not(:last-child) {
        border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    }

    > div {
        display: flex;
        justify-content: space-between;

        padding: 5px 7px;
        color: ${({ theme }) => theme.colors.lightText};
        font-size: 1.4rem;
        cursor: pointer;

        > span:last-child {
            display: none;
        }

        :hover {
            // glassmorphism
            background: ${({ theme }) => theme.colors.glassBg};
            backdrop-filter: ${({ theme }) => theme.colors.glassBackdropFilter};
            box-shadow: ${({ theme }) => theme.colors.glassShadow};
        }

        &.active {
            > span:last-child {
                display: block;
            }
        }
    }

    display: none;

    &.shown {
        display: block;
    }
`

export const ApplyContainer = styled.div`
    margin-top: 10px;

    button {
        width: 100%;
        color: ${({ theme }) => theme.colors.lightText};
        padding: 3px;
    }

    button:disabled {
        // glassmorphism
        background: ${({ theme }) => theme.colors.glassBg};
        backdrop-filter: ${({ theme }) => theme.colors.glassBackdropFilter};
        box-shadow: ${({ theme }) => theme.colors.glassShadow};
        border: ${({ theme }) => theme.colors.glassBorder};
    }
`


export const QuantityOptions = styled(StatusOptions)`
    
`

export const QuantityOption = styled(StatusOption)`
    
`

export const CurrencyOptions = styled(StatusOptions)`
    
`

export const CurrencyOption = styled(StatusOption)`
    
    > span:last-child {
        position: relative;

        // glassmorphism
        background: ${({ theme }) => theme.colors.glassBg};
        backdrop-filter: ${({ theme }) => theme.colors.glassBackdropFilter};
        box-shadow: ${({ theme }) => theme.colors.glassShadow};
        border: ${({ theme }) => theme.colors.glassBorder};
        
        width: 20px;
        height: 20px;
        border-radius: 6px;
        display: block;
    }

    > span:last-child {
        svg {
            position: absolute;
            top: -1px;
            left: -1px;

            display: none;
        }
    }

    &.active {
        > span:last-child {
            svg {
                display: block;
            }
        }
    }
`