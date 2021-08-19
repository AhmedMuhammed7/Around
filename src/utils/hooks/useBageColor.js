import { useEffect, useState, useRef } from 'react'

const useBadgeColor = (status) => {
  const colors = useRef(['#ffb15c', '#f74f78', '#16c995', '#0192d0'])
  const [badgeColor, setBadgeColor] = useState('')

  const isNew = (status) => status === 'new'
  const isSaled = (status) => status === 'saled'
  const isToRated = (status) => status === 'top rated'

  useEffect(() => {
    const randomColor = Math.floor(Math.random() * colors.current.length)
    setBadgeColor(
      isNew(status)
        ? '#16c995'
        : isSaled(status)
          ? '#f74f78'
          : isToRated(status)
            ? '#ffb15c'
            : colors.current[randomColor]
    )
  }, [badgeColor, status])
  return badgeColor
}

export default useBadgeColor
