import { DropdownStyled, Item } from "../../styles/components/collection/NavDropdown"
import { useEffect } from "react"

const NavDropdown = ({ setState, data }: any) => {

    useEffect(() => {
        const items = document.querySelectorAll('.dropdown-item') as NodeList;
        items.forEach((item: any) => {
            if (item.innerText === data[0]) {
                item.classList.add('active');
            }
        })
    }, [data])

    const changeState = (e: any) => {
        setState(e.target.innerText);
        const items = document.querySelectorAll('.dropdown-item') as NodeList;
        items.forEach((item: any) => {
            if (item.innerText === e.target.innerText) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        })
    }

    return (
        <DropdownStyled id="navDropdown">
            {data && data.map((item: any, index: number) => (
                <Item key={index} onClick={changeState} className="dropdown-item">
                    {item}
                </Item>
            ))}
        </DropdownStyled>
    )
}

export default NavDropdown