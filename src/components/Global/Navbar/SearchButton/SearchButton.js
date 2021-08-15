import React from 'react'
import { func } from 'prop-types'
import {Search} from 'react-bootstrap-icons'

const SearchButton = ({ setSearchMode }) => {
  const handleClick = () => setSearchMode(true)
  return (
    <button className="search-button" onClick={handleClick}>
      <Search size={22} className="color-text-2" />
    </button>
  )
}

SearchButton.propTypes = {
  setSearchMode : func.isRequired,
}
export default SearchButton