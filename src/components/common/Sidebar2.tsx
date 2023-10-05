import { Sidebar2Styled, Li } from "../../styles/components/common/Sidebar"
import { FaChevronRight } from 'react-icons/fa'
import Sidebar3 from "./Sidebar3"
import { Link } from "react-router-dom"


const Sidebar2 = ({ subItems, title }: any) => {
    return (
        <Sidebar2Styled id="sidebar2">
            <ul>
                {subItems && subItems.map((item: any) => (
                    <Li key={item.id}>
                        <Link to={`/${title?.toLowerCase()}/${item.id}`}>
                            {item.title}
                        </Link>
                        <span>
                            {item.moreItems.length ?
                                (<>
                                    <FaChevronRight />
                                    <Sidebar3 moreItems={item.moreItems} />
                                </>) :
                                <></>
                            }
                        </span>
                    </Li>
                ))}
            </ul>
        </Sidebar2Styled>
    )
}

export default Sidebar2