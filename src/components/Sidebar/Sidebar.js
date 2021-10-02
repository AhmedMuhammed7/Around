import React from 'react'
import { func } from 'prop-types'
import { MenuHeader } from '../MenuHeader/MenuHeader'
import NavLinks from '../Navbar/NavLinks/NavLinks'
import { navLinks } from '../../utils/constants'


const Sidebar = ({ setSidebarMode }) => {
  return (
    <>
      <MenuHeader label="menu" cancelMode={setSidebarMode} />
      <NavLinks links={navLinks}/>
    </>
  )
}

Sidebar.propTypes = {
  setSidebarMode : func
}

export default Sidebar
