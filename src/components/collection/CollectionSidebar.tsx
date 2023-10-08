import {
    CollectionSidebarStyled, Item, StatusOptions, StatusOption, PriceOptions, MinMax, PriceDropdown, PriceDropdownBody, ApplyContainer,
    QuantityOptions, QuantityOption, CurrencyOptions, CurrencyOption
} from "../../styles/components/collection/CollectionSidebar"
import { useState, useEffect } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { BsCheck } from 'react-icons/bs'
import { ButtonStyled } from "../../styles/components/common/Button"


const CollectionSidebar = ({ setFilters }: any) => {
    const [status, setStatus] = useState('All');
    const [price, setPrice] = useState({});
    const [quantity, setQuantity] = useState('All Items');
    const [currency, setCurrency] = useState([]);

    useEffect(() => {
        if (status === 'All') {
            setFilters((prevValue: any) => ({ ...prevValue, status: 0 }));
        } else if (status === 'Buy Now' || 'On Auction') {
            setFilters((prevValue: any) => ({ ...prevValue, status: 1 }));
        }
    }, [status, setFilters])

    useEffect(() => {
        if (Object.keys(price).length === 0) {
            setFilters((prevValue: any) => ({ ...prevValue, price: 0 }));
        } else {
            setFilters((prevValue: any) => ({ ...prevValue, price: 1 }));
        }
    }, [price, setFilters])

    useEffect(() => {
        if (quantity === 'All Items') {
            setFilters((prevValue: any) => ({ ...prevValue, quantity: 0 }));
        } else if (quantity === 'Single Items' || 'Bundles') {
            setFilters((prevValue: any) => ({ ...prevValue, quantity: 1 }));
        }
    }, [quantity, setFilters])

    useEffect(() => {
        setFilters((prevValue: any) => ({
            ...prevValue, currency: currency.filter(item => {
                if (item) {
                    return item
                } else {
                    return null
                }
            })
        }))
    }, [currency, setFilters])

    useEffect(() => {
        document.addEventListener('click', (e: any) => {
            e.stopPropagation();
            const priceDropdownBody = document.querySelector('#priceDropdownBody') as HTMLDivElement;
            if (!e.target.closest('#priceDropdownBody') && priceDropdownBody?.classList.contains('shown')) {
                priceDropdownBody.classList.remove('shown');
            }
        })
    }, [])

    const openItem = (e: any) => {
        e.stopPropagation();
        const lastSpan = e.currentTarget.querySelector('span:last-child') as HTMLSpanElement;
        lastSpan.classList.toggle('rotated');

        const optionsContainer = e.currentTarget.querySelector('div:last-child') as HTMLDivElement;
        optionsContainer.classList.toggle('shown');
    }

    const makeActive = (e: any, setState: any) => {
        e.stopPropagation();
        const optionDivs = e.currentTarget.parentElement.childNodes;
        optionDivs.forEach((item: any) => {
            item.classList.remove('active');
        })

        e.currentTarget.classList.add('active');
        setState(e.currentTarget.childNodes[0].innerText);
    }

    const togglePriceDropdown = (e: any) => {
        const priceDropdownBody = e.currentTarget.nextElementSibling;
        priceDropdownBody.classList.toggle('shown');
    }

    const [dropdownCurrency, setDropdownCurrency] = useState('ETH');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    useEffect(() => {
        if (dropdownCurrency === 'ETH' && !minPrice && !maxPrice) {
            setPrice({});
        }
    }, [dropdownCurrency, minPrice, maxPrice])

    const changeDropdownCurrency = (e: any) => {
        setDropdownCurrency(e.currentTarget.innerText);

        const priceDropdownBody = e.currentTarget.parentElement;
        priceDropdownBody.childNodes.forEach((item: any) => {
            item.classList.remove('active');
        })
        e.currentTarget.classList.add('active');
    }

    const getByPrice = () => {
        const price = {
            minPrice,
            maxPrice,
            currency: dropdownCurrency
        }
        setPrice(price);
    }

    const makeCurrencyActive = (e: any) => {
        e.stopPropagation();
        e.currentTarget.classList.toggle('active');

        if (e.currentTarget?.classList.contains('active')) {
            const _currency = e.currentTarget?.childNodes[0].innerText;
            // @ts-ignore
            setCurrency((prevValue: any) => [...prevValue, _currency]);
        } else {
            const _currency = e.currentTarget?.childNodes[0].innerText;
            setCurrency((prevValue: any) => prevValue.map((item: any) => {
                if (item === _currency) {
                    return ""
                } else {
                    return item
                }
            }))
        }
    }


    return (
        <CollectionSidebarStyled id="collectionSidebar">
            <ul>
                <Item onClick={openItem}>
                    <div>
                        <span>Status</span>
                        <span>
                            <FaChevronDown />
                        </span>
                    </div>
                    <StatusOptions>
                        <StatusOption className="active" onClick={(e) => makeActive(e, setStatus)}>
                            <span>
                                All
                            </span>
                            <span>
                                <BsCheck />
                            </span>
                        </StatusOption>
                        <StatusOption onClick={(e) => makeActive(e, setStatus)}>
                            <span>
                                Buy Now
                            </span>
                            <span>
                                <BsCheck />
                            </span>
                        </StatusOption>
                        <StatusOption onClick={(e) => makeActive(e, setStatus)}>
                            <span>
                                On Auction
                            </span>
                            <span>
                                <BsCheck />
                            </span>
                        </StatusOption>
                    </StatusOptions>
                </Item>
                <Item onClick={openItem}>
                    <div>
                        <span>Price</span>
                        <span>
                            <FaChevronDown />
                        </span>
                    </div>
                    <PriceOptions onClick={(e) => e.stopPropagation()}>
                        <div>
                            <MinMax>
                                <input type="text" placeholder="Min" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
                                <span>to</span>
                                <input type="text" placeholder="Max" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
                            </MinMax>
                            <PriceDropdown>
                                <div onClick={togglePriceDropdown}>
                                    <span>
                                        {dropdownCurrency}
                                    </span>
                                    <span>
                                        <FaChevronDown />
                                    </span>
                                </div>
                                <PriceDropdownBody id="priceDropdownBody">
                                    <div className="active" onClick={changeDropdownCurrency}>
                                        <span>
                                            ETH
                                        </span>
                                        <span>
                                            <BsCheck />
                                        </span>
                                    </div>
                                    <div onClick={changeDropdownCurrency}>
                                        <span>
                                            WETH
                                        </span>
                                        <span>
                                            <BsCheck />
                                        </span>
                                    </div>
                                    <div onClick={changeDropdownCurrency}>
                                        <span>
                                            USDC
                                        </span>
                                        <span>
                                            <BsCheck />
                                        </span>
                                    </div>
                                </PriceDropdownBody>
                            </PriceDropdown>
                        </div>
                        <ApplyContainer>
                            <ButtonStyled onClick={getByPrice} disabled={(!maxPrice && !minPrice) ? true : false}>Apply</ButtonStyled>
                        </ApplyContainer>
                    </PriceOptions>
                </Item>
                <Item onClick={openItem}>
                    <div>
                        <span>Quantity</span>
                        <span>
                            <FaChevronDown />
                        </span>
                    </div>
                    <QuantityOptions>
                        <QuantityOption className="active" onClick={(e) => makeActive(e, setQuantity)}>
                            <span>
                                All Items
                            </span>
                            <span>
                                <BsCheck />
                            </span>
                        </QuantityOption>
                        <QuantityOption onClick={(e) => makeActive(e, setQuantity)}>
                            <span>
                                Single Items
                            </span>
                            <span>
                                <BsCheck />
                            </span>
                        </QuantityOption>
                        <QuantityOption onClick={(e) => makeActive(e, setQuantity)}>
                            <span>
                                Bundles
                            </span>
                            <span>
                                <BsCheck />
                            </span>
                        </QuantityOption>
                    </QuantityOptions>
                </Item>
                <Item onClick={openItem}>
                    <div>
                        <span>Currency</span>
                        <span>
                            <FaChevronDown />
                        </span>
                    </div>
                    <CurrencyOptions>
                        <CurrencyOption onClick={makeCurrencyActive}>
                            <span>
                                ETH
                            </span>
                            <span>
                                <BsCheck />
                            </span>
                        </CurrencyOption>
                        <CurrencyOption onClick={makeCurrencyActive}>
                            <span>
                                WETH
                            </span>
                            <span>
                                <BsCheck />
                            </span>
                        </CurrencyOption>
                        <CurrencyOption onClick={makeCurrencyActive}>
                            <span>
                                USDC
                            </span>
                            <span>
                                <BsCheck />
                            </span>
                        </CurrencyOption>
                    </CurrencyOptions>
                </Item>
            </ul>
        </CollectionSidebarStyled>
    )
}

export default CollectionSidebar