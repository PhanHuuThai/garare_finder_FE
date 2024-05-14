import { useEffect } from 'react'

const RouteWithTitle = ({ title, children }) => {
  useEffect(() => {
    document.title = title
  }, [title])

  return children
}

export default RouteWithTitle