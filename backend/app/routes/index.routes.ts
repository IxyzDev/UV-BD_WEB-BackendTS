import express from 'express'

import * as diaryServices from '../controllers/diaryServices'
import toNewDiaryEntry from '../controllers/utilsDiary'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getNoComment())
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id)
  //res.send(diary?.weather)
  return (diary != null)
    ? res.send(diary)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)
  
    const addedDiaryEntry = diaryServices.addEntry(newDiaryEntry)
  
    res.json(addedDiaryEntry)
  } catch (error) {
      console.log(error)
      res.status(400).send(error);
  }
})

export default router
