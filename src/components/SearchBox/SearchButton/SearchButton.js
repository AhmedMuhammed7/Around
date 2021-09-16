import React from 'react'
import { func } from 'prop-types'
import { Search } from 'react-bootstrap-icons'
import { connect } from 'react-redux'
import { switchSearchMode } from '../../../actions/search'

const SearchButton = ({ switchSearchMode }) => (
  <button
    className="search-button"
    style={{ zIndex: 10000 }}
    onClick={switchSearchMode}
  >
    <Search size={22} className="color-text-2" />
  </button>
)

SearchButton.propTypes = {
  switchSearchMode: func.isRequired,
}
export default connect(null, { switchSearchMode })(SearchButton)
