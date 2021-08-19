import React from 'react'
import {connect} from 'react-redux'
import { bool } from 'prop-types'
import useDocumentTitle from '../../utils/hooks/useDocumentTitle'
import Header from '../../components/AuthenticatedUser/Header/Header'
import Loading from '../../components/Global/Loading/Loading'

const Home = ({ loading }) => {
  useDocumentTitle('Home')
  return loading ? (
    <Loading />
  ) : (
    <>
      <Header />
    </>
  )
}

const mapStateToProps = state => ({loading : state.loading.GET_PRODUCTS > 0})

Home.propTypes = {
  loading : bool
}


export default connect(mapStateToProps)(Home)
