import express from 'express'

import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository'
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter'
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case'

export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {
  try {
    const { type, comment, screenshot } = req.body

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const nodemailerMailAdapter = new NodemailerMailAdapter()

    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
      prismaFeedbacksRepository,
      nodemailerMailAdapter
    )

    await submitFeedbackUseCase.execute({
      type,
      comment,
      screenshot
    })

    return res.status(200).send()
  } catch (error) {
    console.error(error)

    return res.status(500).json({ data: 'Erro interno, checar logs' })
  }
})
