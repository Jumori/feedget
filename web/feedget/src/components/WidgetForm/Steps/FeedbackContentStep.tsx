import React from 'react'
import { Header } from '../Header/Index'
import { FeedbackType, feedbackTypes } from '../Index'

interface FeedbackContentStepProps {
  feedbackType: FeedbackType
  onFeedbackRestartRequested: () => void
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested
}: FeedbackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType]

  return (
    <>
      <Header
        title={feedbackTypeInfo.title}
        image={feedbackTypeInfo.image}
        returnButton
        handleReturn={onFeedbackRestartRequested}
      />

      <form className="my-4 w-full">
        <textarea
          className="
            min-w-[340px]
            w-full
            min-h-[112px]
            text-sm
            placeholder-zinc-400
            text-zinc-100
            border-zinc-600
            bg-transparent
            rounded-md
            focus:border-brand-500
            focus:ring-brand-500
            focus:ring-1
            focus:outline-none
            resize-none
          "
          placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        ></textarea>
      </form>
    </>
  )
}
