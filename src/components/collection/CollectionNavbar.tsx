import { NavbarStyled, SidebarButton, Search, Filters } from "../../styles/components/collection/CollectionNavbar"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaSearch, FaChevronDown, FaBars } from "react-icons/fa"
import NavDropdown from "./NavDropdown"


const CollectionNavbar = ({ filters, setFilters }: any) => {
    const navigate = useNavigate();

    const [price, setPrice] = useState('Low to high');

    const toggleDropdown = (e: any) => {
        e.stopPropagation();
        e.currentTarget.nextElementSibling.classList.toggle('shown')
        // e.currentTarget.nextElementSibling.classList.add('shown');
    }

    const toggleSidebar = () => {
        const collectionSidebar = document.querySelector('#collectionSidebar') as HTMLDivElement;
        collectionSidebar.classList.toggle('hidden');

        // const infiniteScrollMain = document.querySelector('#infiniteScrollMain');
        // infiniteScrollMain.classList.toggle('hidden');
    }

    const formatFilters = () => {
        let _filters = [];
        for (let property in filters) {
            if (filters[property]) {
                if (filters[property] instanceof Array) {
                    filters[property].forEach((item: any) => _filters.push(item));
                } else {
                    _filters.push(filters[property])
                }
            }
        }
        return _filters.length
    }

    const resetFilters = () => {
        navigate('/');
        navigate(-1);
    }

    return (
        <NavbarStyled>
            <Search>
                <input type="search" placeholder="Search NFTs" />
                <span>
                    <FaSearch />
                </span>
            </Search>
            <SidebarButton>
                <div onClick={toggleSidebar}>
                    <FaBars />
                    <span>Filters</span>
                </div>
                <div>{formatFilters()}</div>
                <div className={formatFilters() ? 'shown' : ''} onClick={resetFilters}>Clear All</div>
            </SidebarButton>
            <Filters>
                <ul>
                    <li>
                        <div onClick={toggleDropdown}>
                            <span>
                                Price: {price}
                            </span>
                            <FaChevronDown />
                        </div>
                        <NavDropdown setState={setPrice} data={['Low to high', 'High to low', 'Recently listed']} />
                    </li>
                </ul>
            </Filters>
        </NavbarStyled>
    )
}

export default CollectionNavbar