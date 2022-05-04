import React from 'react'
import { ArrowLeft } from 'phosphor-react'

interface ReturnButtonProps {
  handleReturn?: () => void
}

export function ReturnButton({ handleReturn }: ReturnButtonProps) {
  return (
    <button
      type="button"
      className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
      onClick={handleReturn}
    >
      <ArrowLeft weight="bold" className="w-4 h-4" />
    </button>
  )
}
