import React, {useState, useEffect} from 'react'
import './nav-links.scss'
import { arrayOf, objectOf, string, func } from 'prop-types'
import { Link } from 'react-router-dom'



const NavLinks = ({ links, setSidebarMode }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleClick = () => setSidebarMode(false)
  const navLinks = links?.map((link) => (
    <li className="me-5" key={link.path} onClick={handleClick}>
      <Link to={link.path} className="text-capitalize color-text-3">
        {link.name}
      </Link>
    </li>
  ))
  const navListHeight = () =>
    windowWidth < 768 ? window.innerHeight + 'px' : 'auto'

  const navListWidth = () => (windowWidth < 768 ? windowWidth + 'px' : 'auto')

  useEffect(() => {
    const handleChange = function () {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleChange)
    return () => window.removeEventListener('resize', handleChange)
  }, [windowWidth])

  return (
    <ul
      className="nav-links d-flex overflow-hidden w-100 justify-content-md-end"
      style={{ height: navListHeight(), width: navListWidth() }}
    >
      {navLinks}
    </ul>
  )
}

NavLinks.propTypes = {
  links: arrayOf(objectOf(string)).isRequired,
  setSidebarMode: func,
}

export default NavLinks
