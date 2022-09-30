import React from 'react'
import HeaderInner from './HeaderInner'
import Navigation from './Navigation'

export default function Header({content}) {
  return (
    <header>
        <h1>{content}</h1>
        <HeaderInner />
        <Navigation />
    </header>
  )
}