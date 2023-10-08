import styled from "styled-components"


export const CollectionContentStyled = styled.div`
   position: relative;
`

export const UpArrow = styled.div`
    position: fixed;
    bottom: 10px;
    right: 10px;
    z-index: 1000;

    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;

    width: 30px;
    height: 30px;
    background: rgba(222, 49, 99, 0.5);
    opacity: 0.7;
    border-radius: 50%;
    cursor: pointer;

    display: none;

    &.shown {
        display: flex;
    }

    > img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }
`