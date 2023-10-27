const express = require('express');
const {
  getPost,
  deletePost,
  editPost,
  getPosts,
  addPost,
} = require('../controllers/api-post-controller')

const router = express.Router();


// Get All Posts
router.get('/api/posts', getPosts);
//Add New Post
router.post('/api/post', addPost);
//Get Post by ID
router.get('/api/post/:id', getPost);
//Delete Post by ID
router.delete('/api/post/:id', deletePost);
//Edit Post by ID
router.put('/api/post/:id', editPost);
  

  
  

  module.exports = router;