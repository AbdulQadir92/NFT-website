import { SidebarStyled, Li, CloseIcon } from "../../styles/components/common/Sidebar"
import { MdClose } from 'react-icons/md'
import { FaChevronRight } from 'react-icons/fa'
import Sidebar2 from "./Sidebar2"
import { Link } from "react-router-dom"
import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '../../store/store'
import { getSidebarData } from "../../store/sidebarSlice"


const Sidebar = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { data, loading } = useSelector((state: RootState) => state.sidebar);

    useEffect(() => {
        // function to close Sidebar when clicked outside of it
        document.addEventListener('click', (e: any) => {
            e.stopPropagation();
            const sidebar = document.querySelector('#sidebar') as HTMLElement;
            if (!e.target.closest('#sidebar') && !e.target.closest('#explore') && sidebar.classList.contains('active')) {
                sidebar.classList.remove('active')
            }
        })
    }, [])

    useEffect(() => {
        dispatch(
            getSidebarData()
        )
    }, [dispatch])

    const toggleSidebar = () => {
        const sidebar = document.querySelector('#sidebar') as HTMLElement;
        sidebar.classList.toggle('active');
    }

    return (
        <SidebarStyled id="sidebar">
            <CloseIcon onClick={toggleSidebar}>
                <MdClose />
            </CloseIcon>
            <ul>
                {!loading && (
                    <>
                        <Li>
                            <Link to={`#`}>
                                {data[0].title}
                            </Link>
                            <span>
                                <FaChevronRight />
                                <Sidebar2 subItems={data[0].subItems} title={data[0].title} />
                            </span>
                        </Li>
                        <Li>
                            <Link to={`#`}>
                                {data[1].title}
                            </Link>
                            <span>
                                <FaChevronRight />
                                <Sidebar2 subItems={data[1].subItems} title={data[1].title} />
                            </span>
                        </Li>
                        <Li>
                            <Link to={`item/${data[2].id}`}>
                                {data[2].title}
                            </Link>
                            <span>
                                <FaChevronRight />
                                <Sidebar2 subItems={data[2].subItems} title={data[2].title} />
                            </span>
                        </Li>
                        <Li>
                            <Link to={`item/${data[3].id}`}>
                                {data[3].title}
                            </Link>
                            <span>
                                <FaChevronRight />
                                <Sidebar2 subItems={data[3].subItems} title={data[3].title} />
                            </span>
                        </Li>
                        <Li>
                            <Link to={`item/${data[4].id}`}>
                                {data[4].title}
                            </Link>
                            <span>
                                <FaChevronRight />
                                <Sidebar2 subItems={data[4].subItems} title={data[4].title} />
                            </span>
                        </Li>
                    </>
                )}
            </ul>
        </SidebarStyled >
    )
}

export default Sidebar