import React from 'react'

interface Props {
  title: string
  className?: string
  type: 'button' | 'submit' | undefined
  onClick?: () => void
}

const Button: React.FC<Props> = ({ title, className, type, onClick }) => {
  return (
    <button
      type={type}
      className={`border px-3 rounded py-2 transition ease-out outline-0 ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default Button
