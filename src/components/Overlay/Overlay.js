import React, { useRef, useEffect } from 'react'
import { arrayOf, element, func, oneOfType } from 'prop-types'
import './overlay.scss'

export const Overlay = ({ setMode, children }) => {
  const transitionElm = useRef()
  const handleCancel = (e) => {
    const clientX = e.clientX
    const elementPositon = transitionElm.current.getBoundingClientRect().left
    if (clientX < elementPositon) setMode(false)
  }
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => (document.body.style.overflow = 'visible')
  }, [])
  return (
    <div
      className="overlay position-absolute  end-0 w-100"
      style={{
        height: window.innerHeight + 'px',
        top: window.pageYOffset + 'px',
      }}
      onClick={handleCancel}
    >
      <div className="position-relative w-100 h-100 ">
        <div
          className="transition-elm position-absolute bg-light top-0 h-100 in"
          ref={transitionElm}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

Overlay.propTypes = {
  setMode: func,
  children: oneOfType([arrayOf(element), element]),
}
