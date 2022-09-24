import express from 'express'

import * as publicationController from '../controllers/publicationController'

const router = express.Router()

router.route('/').get(publicationController.getPosts)


//router.route('/post').post(createPost);

//router.route('/:postId')
    //.get(getPost)
    //.delete(deletePost)
    //.put(updatePost);

export default router
