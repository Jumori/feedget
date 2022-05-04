import React from 'react'
import { Header } from '../Header/Index'
import { FeedbackType, feedbackTypes } from '../Index'

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void
}

export function FeedbackTypeStep({
  onFeedbackTypeChanged
}: FeedbackTypeStepProps) {
  return (
    <>
      <Header title="Deixe seu feedback" />

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="
                bg-zinc-800
                rounded-lg
                py-5
                w-24
                flex-1
                flex
                flex-col
                items-center
                gap-2
                border-2
                border-transparent
                hover:border-brand-500
                focus:border-brand-500
                focus:outline-none
                scrollbar-thumb-zinc-700
                scrollbar-track-transparent
                scrollbar-thin
              "
              type="button"
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            >
              <img src={value.image.src} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          )
        })}
      </div>
    </>
  )
}
