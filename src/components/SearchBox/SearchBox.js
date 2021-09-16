import React from 'react'
import './search-box.scss'
import { func } from 'prop-types'
import { connect } from 'react-redux'
import { X } from 'react-bootstrap-icons'
import { switchSearchMode } from '../../actions/search'

const SearchBox = ({ switchSearchMode }) => (
  <div className="search-box w-100 d-flex align-item-center justify-content-center fixed-top">
    <form className=" w-75">
      <input
        type="text"
        className="p-4 w-100 fs-4"
        maxLength={40}
        placeholder="Search"
      />
    </form>
    <button type='button' onClick={switchSearchMode}>
      <X size={30} className="color-text-1" />
    </button>
  </div>
)

SearchBox.propTypes = {
  switchSearchMode: func,
}

export default connect(null, { switchSearchMode })(SearchBox)