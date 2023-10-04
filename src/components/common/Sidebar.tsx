import { SidebarStyled, Li, CloseIcon } from "../../styles/components/common/Sidebar"
import { MdClose } from 'react-icons/md'
import { FaChevronRight } from 'react-icons/fa'
import Sidebar2 from "./Sidebar2"
import { Link } from "react-router-dom"
import { useEffect } from 'react'


const Sidebar = () => {

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
                Sidebar
            </ul>
        </SidebarStyled >
    )
}

export default Sidebar