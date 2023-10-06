import styled from 'styled-components'


export const HomeMultiCarouselStyled = styled.div`
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
        bottom: 5px;

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
                background: ${({ theme }) => theme.colors.mainColor};
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

    @media (max-width: 576px) {
        .react-multi-carousel-dot-list {
            li {
                padding-right: 5px;
            }

            button {
                width: 20px;
            }
        }
    }

    @media (max-width: 300px) {
        .react-multi-carousel-dot-list {
            li {
                padding-right: 2px;
            }
        }
    }
`

export const Collection = styled.div`
    padding: 0 10px;
    border-radius: 10px;
    position: relative;
    cursor: pointer;

    img {
        width: 100%;
        height: 350px;
        border-radius: 10px;
    }

    @media (max-width: 1200px) {
        img {
            height: 300px;
        }
    }

    @media (max-width: 768px) {
        img {
            height: 500px;
        }
    }

    @media (max-width: 576px) {
        padding: 0 5px;

        img {
            height: 300px;
        }
    }
`

export const CollectionName = styled.p`
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);

    width: 90%;
    background: rgba(0, 0, 0, 0.5);
    padding: 5px 10px;
    border-radius: 5px;
    color: ${({ theme }) => theme.topSectionHome.collectionText};
    font-size: 18px;
    text-align: center;
`