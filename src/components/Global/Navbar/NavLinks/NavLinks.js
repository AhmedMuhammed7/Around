import React, {useState, useEffect} from 'react'
import { arrayOf, objectOf, string, bool, func } from 'prop-types'
import { Link } from 'react-router-dom'
import NavIcons from '../NavIcons/NavIcons'


const NavLinks = ({ links, open, setOpen, setSearchMode }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleClick = () => setOpen(false)
  const navLinks = links?.map((link) => (
    <li className="me-5" key={link.path} onClick={handleClick}>
      <Link to={link.path} className="text-capitalize color-text-3">
        {link.name}
      </Link>
    </li>
  ))
  const navLinksListHeight =
    windowWidth < 768 ? +open && window.innerHeight + 'px' : 'auto'

  useEffect(() => {
    const handleChange = function() {setWindowWidth(window.innerWidth)}
    window.addEventListener('resize', handleChange)
    return () => window.removeEventListener('resize', handleChange)
  }, [windowWidth])

  return (
    <ul
      className="nav-links d-flex overflow-hidden"
      style={{ height: navLinksListHeight }}
    >
      {navLinks}
      <li className="d-block d-md-none">
        <NavIcons status="authenticated" setSearchMode={setSearchMode} />
      </li>
    </ul>
  )
}

NavLinks.propTypes = {
  links: arrayOf(objectOf(string)).isRequired,
  open: bool.isRequired,
  setOpen: func.isRequired,
  setSearchMode : func.isRequired,
}

export default NavLinks
