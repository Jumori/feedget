import React, { useState } from 'react'
import { Header } from '../Header/Index'
import { FeedbackType, feedbackTypes } from '../Index'
import { ScreenshotButton } from '../ScreenshotButton'

interface FeedbackContentStepProps {
  feedbackType: FeedbackType
  onFeedbackRestartRequested: () => void
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null)

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
            scrollbar-thumb-zinc-700
            scrollbar-track-transparent
            scrollbar-thin
          "
          placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />

          <button
            type="submit"
            className="
              p-2
              bg-brand-500
              rounded-md
              border-transparent
              flex-1
              flex
              justify-center
              items-center
              text-sm
              hover:bg-brand-300
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-offset-zinc-900
              focus:ring-brand-500
              transition-colors
            "
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  )
}