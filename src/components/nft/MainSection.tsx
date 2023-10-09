import {
    MainSectionStyled, ImageSection, MainDetailsSection,
    LeftColumn, PriceSection, LeftButtonsSection, BuyButton, OfferButton, DescriptionSection, BySection, Description,
    RightColumn, RightButtonsSection, CartButton, FavouritesButton, MoreDetails
} from "../../styles/components/nft/MainSection"
import { FaShoppingCart, FaHeart } from "react-icons/fa"
import { HiUsers } from 'react-icons/hi'
import { BsGrid3X2GapFill } from 'react-icons/bs'
import { AiFillEye } from 'react-icons/ai'


const MainSection = ({ nft }: any) => {
    // console.log(nft)

    return (
        <MainSectionStyled>
            <ImageSection>
                <img src={nft.cached_images.original} alt="..." width="350" height="350" />
            </ImageSection>
            <MainDetailsSection>
                <LeftColumn>
                    <h1>{nft.token_name}</h1>
                    <PriceSection>
                        <p>Price</p>
                        <div>
                            <p>0.0001 MATIC</p>
                            <p> &#60; $0.01</p>
                        </div>
                        <LeftButtonsSection>
                            <BuyButton type="button">Buy 1</BuyButton>
                            <OfferButton type="button">Make Offer</OfferButton>
                        </LeftButtonsSection>
                    </PriceSection>
                    <DescriptionSection>
                        <BySection>
                            <span>By</span>
                            <span> bumpkins.eth</span>
                        </BySection>
                        <Description>
                            <h3>Description</h3>
                            <p>{nft.token_description}</p>
                        </Description>
                    </DescriptionSection>
                </LeftColumn>
                <RightColumn>
                    <RightButtonsSection>
                        <CartButton type="button">
                            <span>Add to Cart</span>
                            <span>
                                <FaShoppingCart size={20} />
                            </span>
                        </CartButton>
                        <FavouritesButton type="button">
                            <span>Favorite it</span>
                            <span>
                                <FaHeart size={20} />
                            </span>
                        </FavouritesButton>
                    </RightButtonsSection>
                    <MoreDetails>
                        <div>
                            <h3>
                                <span>
                                    <HiUsers size={18} />
                                </span>
                                <span>Owners</span>
                            </h3>
                            <p>43.6K</p>
                        </div>
                        <div>
                            <h3>
                                <span>
                                    <BsGrid3X2GapFill size={18} />
                                </span>
                                <span>Items</span>
                            </h3>
                            <p>67.3M</p>
                        </div>
                        <div>
                            <h3>
                                <span>
                                    <AiFillEye size={18} />
                                </span>
                                <span>Views</span>
                            </h3>
                            <p>90.3K</p>
                        </div>
                        <div>
                            <h3>
                                <span>
                                    <FaHeart size={18} />
                                </span>
                                <span>Favorites</span>
                            </h3>
                            <p>449</p>
                        </div>
                    </MoreDetails>
                </RightColumn>
            </MainDetailsSection>
        </MainSectionStyled>
    )
}

export default MainSection