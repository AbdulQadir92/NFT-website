import { CollectionHeader, Title, Information, Li, Description, SocialIcons, LinkStyled } from '../../styles/components/collection/Header'
import { Link } from 'react-router-dom'
import { FaDiscord, FaTwitter } from 'react-icons/fa'
import { TbWorld } from 'react-icons/tb'


const Header = ({ collection, nfts }: any) => {

    return (
        <>
            {Object.keys(collection).length && Object.keys(nfts).length &&
                <CollectionHeader>
                    <img src={collection.image_url} alt="Collection" />
                    <SocialIcons>
                        <LinkStyled>
                            <Link to="#">
                                <TbWorld />
                            </Link>
                        </LinkStyled>
                        <LinkStyled>
                            <Link to="#">
                                <FaDiscord />
                            </Link>
                        </LinkStyled>
                        <LinkStyled>
                            <Link to="#">
                                <FaTwitter />
                            </Link>
                        </LinkStyled>
                    </SocialIcons>
                    <Title>
                        <h1>{collection.name}</h1>
                        <div>
                            <span>By</span>
                            <h3>{collection.twitter_username ? collection.twitter_username : 'xyz'}</h3>
                        </div>
                    </Title>
                    <Information>
                        <ul>
                            <Li>
                                <div>Items</div>
                                <p>{nfts.per_page}</p>
                            </Li>
                            <Li>
                                <div>Floor Price</div>
                                <p>{collection.stats.floor_price.toFixed(2)}</p>
                            </Li>
                            <Li>
                                <div>Total Volume</div>
                                <p>{collection.stats.total_volume.toFixed(2)}</p>
                            </Li>
                            <Li>
                                <div>Listed</div>
                                <p>{collection.stats.total_minted}</p>
                            </Li>
                            <Li>
                                <div>Chain</div>
                                <p>{nfts.chain}</p>
                            </Li>
                        </ul>
                    </Information>
                    <Description>
                        <p>{collection.description}</p>
                    </Description>
                </CollectionHeader>
            }
        </>
    )
}

export default Header