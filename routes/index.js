const { Router } = require('express');
const controllers = require('../controllers/Controller1');
const router = Router();

router.get('/posts', controllers.getAllPosts);

router.get('/users', controllers.getAllUsers);

router.get('/simUser', controllers.simPosts);

router.post('/createPosts', controllers.createPost);

router.delete('/deletePost', controllers.deletePost);

router.delete('/deleteUser', controllers.deleteUser);

router.put('/updatePost/:id', controllers.updatePost);

module.exports = router;

