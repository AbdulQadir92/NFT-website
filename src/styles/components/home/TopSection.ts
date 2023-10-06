import styled from 'styled-components'


export const TopSectionStyled = styled.section`
    
`

export const TopPart = styled.div`
    padding: 0 0 30px;

    h1 {
        font-size: 50px;
        color: ${({ theme }) => theme.colors.lightText};
        text-align: center;
    }

    > div > div {
        color: ${({ theme }) => theme.colors.lightText};
        margin-top: 10px;
        font-size: 20px;
        text-align: center;
    }

    @media (max-width: 576px) {
        h1 {
            font-size: 30px;
        }

        > div > div {
            margin-top: 10px;
            font-size: 18px;
        }
    }
`

export const BottomPart = styled.div`
   
`