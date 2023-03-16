import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
  title: string
  className?: string
  to: string
}

const ButtonLink: React.FC<Props> = ({ title, className, to }) => {
  return (
    <Link to={to} className={`border px-3 rounded py-2 transition ease-out outline-0 inline-block ${className}`}>
      {title}
    </Link>
  )
}

export default ButtonLink
