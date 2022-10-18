// DB
import { connect } from '../config/_database'
import { Request, Response } from 'express'
import { PublicationInterface } from '../interfaces/types'

export async function getPosts (_req: Request, res: Response): Promise<Response | void> {
  try {
    const conn = await connect()
    const posts = await conn.query('SELECT * FROM publicacion')
    return res.json(posts[0])
  } catch (e) {
    console.log(e)
  }
}

export async function createPost (req: Request, res: Response) {
  const newPost: PublicationInterface = req.body
  const conn = await connect()
  await conn.query('INSERT INTO PublicationInterfacee SET ?', [newPost])
  res.json({
    message: 'New Post Created'
  })
}

export async function getPost (req: Request, res: Response) {
  const id = req.params.postId
  const conn = await connect()
  const posts = await conn.query('SELECT * FROM posts WHERE id = ?', [id])
  res.json(posts[0])
}

export async function deletePost (req: Request, res: Response) {
  const id = req.params.postId
  const conn = await connect()
  await conn.query('DELETE FROM posts WHERE id = ?', [id])
  res.json({
    message: 'Post deleted'
  })
}

export async function updatePost (req: Request, res: Response) {
  const id = req.params.postId
  const updatePost: PublicationInterface = req.body
  const conn = await connect()
  await conn.query('UPDATE posts set ? WHERE id = ?', [updatePost, id])
  res.json({
    message: 'Post Updated'
  })
}
