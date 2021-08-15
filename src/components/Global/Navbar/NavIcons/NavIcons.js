import React from 'react'
import { func, string } from 'prop-types'
import IconLink from '../../IconLink/IconLink'
import { Person, Bag } from 'react-bootstrap-icons'
import SearchButton from '../SearchButton/SearchButton'

const NavIcons = ({ status, setSearchMode }) => {
  const icons =
    status === 'authenticated'
      ? [
        <IconLink
          path="/profile"
          icon={<Person size={25} />}
          key="/profile"
        />,
        <IconLink path="/cart" icon={<Bag size={23} />} key="/cart" />,
        <SearchButton key="search-btn" setSearchMode={setSearchMode} />,
      ]
      : [
        <IconLink
          path="/signin"
          icon={<Person size={25} />}
          key="/signin"
          label="Sign in"
        />,
      ]
  return <div className="nav-icons d-flex">{icons}</div>
}

NavIcons.propTypes = {
  status: string,
  setSearchMode : func,
}
export default NavIcons
