import React from 'react'

export default function Icone({ icone, style}) {
  return (
    <li>
        <img src={icone.path} alt={icone.alt} />
        <a href="/">{icone.link}</a>
    </li>
  )
}
