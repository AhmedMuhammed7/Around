import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Cart from '../../components/Cart/Cart'
import Sidebar from '../../components/Sidebar/Sidebar'
import { CSSTransition } from 'react-transition-group'
import { navLinks } from '../../utils/constants'
import Icon from '../../components/Icon/Icon'
import { Person } from 'react-bootstrap-icons'
import { Overlay } from '../Overlay/Overlay'

export const FixedComponents = () => {
  const [cartMode, setCartMode] = useState(false)
  const [sidebarMode, setSidebarMode] = useState(false)
  const navIcon = (
    <Icon path="/profile" icon={<Person size={27} color="#4a4b65" />} />
  )
  return (
    <>
      <CSSTransition
        in={cartMode}
        classNames="transition"
        unmountOnExit
        timeout={300}
      >
        <Overlay setMode={setCartMode} position="r">
          <Cart setCartMode={setCartMode} />
        </Overlay>
      </CSSTransition>
      <CSSTransition
        in={sidebarMode}
        classNames="transition"
        unmountOnExit
        timeout={300}
      >
        <Overlay setMode={setSidebarMode} position="l">
          <Sidebar setSidebarMode={setSidebarMode} />
        </Overlay>
      </CSSTransition>
      <Navbar
        navLinks={navLinks}
        navIcons={navIcon}
        setCartMode={setCartMode}
        setSidebarMode={setSidebarMode}
        sidebarMode={sidebarMode}
      />
    </>
  )
}
