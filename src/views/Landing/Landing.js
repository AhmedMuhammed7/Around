import React from 'react'
import useDocumentTitle from '../../utils/hooks/useDocumentTitle'
import {Header} from '../../components/Header/Header'
import { LandingHeader } from '../../components/Header/LandingHeader'

const Landing = () => {
  useDocumentTitle('Landing')
  return (
    <>
      <Header >
        <LandingHeader/>
      </Header>
    </>
  )
}

export default Landing
