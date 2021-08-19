import React from 'react'
import useDocumentTitle from '../../utils/hooks/useDocumentTitle'
import Header from '../../components/AuthenticatedUser/Header/Header'
import CategoriesSilder from '../../components/AuthenticatedUser/CategoriesSlider/CategoriesSlider'

const Home = () => {
  useDocumentTitle('Home')
  return (
    <>
      <Header />
      <CategoriesSilder />
    </>
  )
}



export default Home
