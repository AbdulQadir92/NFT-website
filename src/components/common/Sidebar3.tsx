import { Sidebar3Styled, Li } from "../../styles/components/common/Sidebar"
import { Link } from "react-router-dom"


const Sidebar3 = ({ moreItems }: any) => {
    return (
        <Sidebar3Styled id="sidebar3">
            <ul>
                {moreItems && moreItems.map((item: any, index: number) => (
                    <Li key={index}>
                        <Link to={`/moreitems/${index}`}>
                            {item}
                        </Link>
                    </Li>
                ))}
            </ul>
        </Sidebar3Styled>
    )
}

export default Sidebar3
