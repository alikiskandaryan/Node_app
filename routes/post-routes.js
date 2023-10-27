const express = require('express');
const {
  getPost,
  deletePost,
  getEditPost,
  editPost,
  getPosts,
  getAddPost,
  addPost,
} = require('../controllers/post-controller')

const router = express.Router();

  router.get('/posts/:id', getPost);
    
  router.delete('/posts/:id', deletePost);

  router.put('/edit/:id', getEditPost);
  
  router.get('/edit/:id', editPost);
  
  router.get('/posts', getPosts);

  router.post('/add-post', getAddPost);

  router.get('/add-post', addPost);

  module.exports = router;