import React from 'react'
import useDocumentTitle from '../../utils/hooks/useDocumentTitle'
import Header from '../../components/UnAthenticated/Header/Header'

const Landing = () => {
  useDocumentTitle('Landing')
  return (
    <>
      <Header />
    </>
  )
}

export default Landing
