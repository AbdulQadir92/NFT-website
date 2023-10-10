import styled from 'styled-components'


export const CategoryMultiCarouselStyled = styled.div`
    width: 100%;

    // Controls
    .react-multi-carousel-list > button {
        border-radius: 10px;
    }

    .react-multi-carousel-list {
        .react-multiple-carousel__arrow--left  {
            left: 2%;
            z-index: 5;
        }

        .react-multiple-carousel__arrow--right  {
            right: 2%;
            z-index: 5;
        }
    }

    // Indicators
    .react-multi-carousel-dot-list {
        li {
            padding-right: 15px;
        }

        button {
            width: 30px;
            height: 5px;
            background: ${({ theme }) => theme.multiCarousel.indicator};
            border-radius: 10px;
            border: none;
        }

        .react-multi-carousel-dot--active {
            button {
                background: ${({ theme }) => theme.multiCarousel.indicatorActive};
            }
        }
    }

    @media (max-width: 768px) {
        .react-multi-carousel-list {
            .react-multiple-carousel__arrow--left  {
                left: 4%;
            }

            .react-multiple-carousel__arrow--right  {
                right: 4%;
            }
        }
    }

    @media (max-width: 575px) {
        .react-multi-carousel-dot-list {
            li {
                padding-right: 5px;
            }

            button {
                width: 20px;
            }
        }
    }
`

export const ImageContainer = styled.div`
    padding-right: 15px;
    border-radius: 10px;

    img {
        width: 100%;
        height: 150px;
        border-radius: 10px;
    }

    @media (max-width: 575px) {
        padding-right: 10px;
    }
`

export const AllNftsLink = styled.div`

    a {
        display: flex;
        justify-content: center;
        align-items: center;

        height: 150px;
        border-radius: 10px;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.lightText};

        // glassmorphism
        background: ${({ theme }) => theme.colors.glassBg};
        backdrop-filter: ${({ theme }) => theme.colors.glassBackdropFilter};
        box-shadow: ${({ theme }) => theme.colors.glassShadow};
        border: ${({ theme }) => theme.colors.glassBorder};

        :hover {
            background: ${({ theme }) => theme.colors.glassBgHover};
            border: ${({ theme }) => theme.colors.glassBorderHover};
        }
    }
`