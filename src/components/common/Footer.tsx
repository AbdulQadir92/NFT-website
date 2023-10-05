import { FooterStyled, AboutSection, AccountSection, LearnSection, Logo } from "../../styles/components/common/Footer"
import { Link } from "react-router-dom"


const Footer = () => {
    return (
        <FooterStyled>
            <AboutSection>
                <h3>About Us</h3>
                <p>The world&#39;s best digital marketplace for non-fungible tokens (NFTs). Create, buy, sell and discover exclusive digital items.</p>
                <Logo>
                    <img src="/nft-logo.png" alt="logo" width="35" height="35" />
                    <h1>
                        <Link to="/">NFT Web</Link>
                    </h1>
                </Logo>
            </AboutSection>
            <AccountSection>
                <h3>Account</h3>
                <ul>
                    <li>
                        <Link to="#">Profile</Link>
                    </li>
                    <li>
                        <Link to="#">Favorites</Link>
                    </li>
                    <li>
                        <Link to="#">Watchlist</Link>
                    </li>
                    <li>
                        <Link to="#">My Collections</Link>
                    </li>
                    <li>
                        <Link to="#">Settings</Link>
                    </li>
                </ul>
            </AccountSection>
            <LearnSection>
                <h3>Learn</h3>
                <ul>
                    <li>
                        <Link to="#">What is NFT</Link>
                    </li>
                    <li>
                        <Link to="#">How to create an NFT</Link>
                    </li>
                    <li>
                        <Link to="#">How to sell an NFT</Link>
                    </li>
                    <li>
                        <Link to="#">How to buy an NFT</Link>
                    </li>
                    <li>
                        <Link to="#">What is Crypto Wallet</Link>
                    </li>
                </ul>
            </LearnSection>
        </FooterStyled>
    )
}

export default Footer