import React from 'react'
import { ReturnButton } from './ReturnButton'
import { CloseButton } from './CloseButton'

interface HeaderProps {
  title: string
  image?: { src: string; alt: string }
  returnButton?: boolean
  handleReturn?: () => void
}

export function Header({
  title,
  image,
  returnButton,
  handleReturn
}: HeaderProps) {
  return (
    <header>
      {returnButton && <ReturnButton handleReturn={handleReturn} />}

      <span className="text-xl leading-6 flex items-center justify-center gap-2">
        {image && <img src={image.src} alt={image.alt} className="w-6 h-6" />}
        {title}
      </span>

      <CloseButton />
    </header>
  )
}
