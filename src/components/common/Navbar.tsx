import { useEffect } from "react"
import { Link } from "react-router-dom"
import { NavbarStyled, Brand, Logo, Explore, MenuIcon, Search, Links, LinkStyled } from "../../styles/components/common/Navbar"
import { FaSearch, FaInfoCircle, FaShoppingCart, FaWallet, FaBars } from 'react-icons/fa'
import { MdAccountCircle } from 'react-icons/md'
import { useNavigate } from "react-router-dom"


const Navbar = ({ theme, setTheme }: any) => {
    const navigate = useNavigate();

    useEffect(() => {
        // function to close Navbar when clicked outside of it
        document.addEventListener('click', (e: any) => {
            e.stopPropagation();
            const navbar = document.querySelector('#navbar') as HTMLElement;
            if (!e.target.closest('#navbar') && navbar.classList.contains('active')) {
                navbar.classList.remove('active');
            }
        })
    }, [])

    // const toggleTheme = (newTheme: string) => {
    //     localStorage.setItem('theme', newTheme);
    //     setTheme(newTheme);
    // }

    const toggleNavbar = () => {
        const navbar = document.querySelector('#navbar') as HTMLElement;
        navbar.classList.toggle('active');
    }

    const toggleSidebar = () => {
        const sidebar = document.querySelector('#sidebar') as HTMLElement;
        sidebar.classList.add('active');
    }

    return (
        <NavbarStyled id="navbar">
            <Brand>
                <Logo onClick={() => navigate('/')}>
                    <img src="/nft-logo.png" alt="logo" width="35" height="35" />
                    <h1>
                        NFT Web
                    </h1>
                </Logo>
                <Explore onClick={toggleSidebar} id="explore">
                    <div>Explore</div>
                </Explore>
                <MenuIcon onClick={toggleNavbar}>
                    <FaBars />
                </MenuIcon>
            </Brand>
            <Search>
                <input type="search" placeholder="Search" />
                <span>
                    <FaSearch />
                </span>
            </Search>
            <Links>
                <ul>
                    <li>
                        <Link to="#">
                            <LinkStyled>
                                <FaInfoCircle />
                            </LinkStyled>
                        </Link>
                        <div className="info-card">Information</div>
                    </li>
                    <li>
                        <Link to="#">
                            <LinkStyled>
                                <MdAccountCircle />
                            </LinkStyled>
                        </Link>
                        <div className="info-card">Account</div>
                    </li>
                    <li>
                        <Link to="#">
                            <LinkStyled>
                                <FaShoppingCart />
                            </LinkStyled>
                        </Link>
                        <div className="info-card">Cart</div>
                    </li>
                    <li>
                        <Link to="#">
                            <LinkStyled>
                                <FaWallet />
                            </LinkStyled>
                        </Link>
                        <div className="info-card">Wallet</div>
                    </li>
                </ul>
            </Links>
            {/* <div>
                <div onClick={() => toggleTheme('dark')}>
                    <FaMoon />
                </div>

                <div onClick={() => toggleTheme('light')}>
                    <FaSun />
                </div>

                <div onClick={() => toggleTheme('gradient')}>
                    Gradient
                </div>
            </div> */}
        </NavbarStyled>
    )
}

export default Navbar