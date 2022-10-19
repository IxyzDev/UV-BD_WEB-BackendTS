import express from 'express'

import * as diaryServices from '../controllers/_diaryServices'
import toNewDiaryEntry from '../controllers/_utilsDiary'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getNoComment())
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id)
  // res.send(diary?.weather)
  return (diary != null)
    ? res.send(diary)
    : res.sendStatus(404)
})

export default router
