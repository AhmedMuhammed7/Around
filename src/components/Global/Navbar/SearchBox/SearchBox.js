import React from 'react'
import { func } from 'prop-types'
import { CloseButton } from 'react-bootstrap'

const SearchBox = ({ setSearchMode }) => {
  const handleSetMode = () =>setSearchMode(false)
  return (
    <div className="search-box w-100 h-100 d-flex align-item-center justify-content-center">
      <form className=" w-75">
        <input
          type="text"
          className="p-4 w-100 fs-4"
          maxLength={40}
          placeholder="Search"
        />
      </form>
      <CloseButton
        onClick={handleSetMode}
        className="fs-2 color-text-1 d-flex align-items-center justify-content-between"
      />
    </div>
  )
}

SearchBox.propTypes = {
  setSearchMode : func
}

export default SearchBox
