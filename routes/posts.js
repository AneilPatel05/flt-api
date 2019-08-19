const express = require('express');
const _ = require('lodash');
const mongoClient = require('../helpers/mongo_utils');
const router = express.Router();
var Post = require('../models/post').Post;
var ValidationError = require('mongoose/lib/error/validation')

// All Posts
router.get('/', async (req, res) => {
    Post.findAsync().then(function(foundItems){
        res.send(foundItems)
      })
});


/* SAVE Post */
router.post('/', async (req, res) => {
    console.log(req.body)
    Post.createAsync(req.body)
    .then(function (Post) {
        res.json(Post);
      }).catch(ValidationError, function(err) {
        err.logError = false
        err.productionMessage = true
        throw err
      });
  });
  
  /* UPDATE Post */
  router.put('/:id', async (req, res) => {
    Post.findByIdAndUpdateAsync(req.params.id, req.body).then(function (Post) {
        res.json(Post);
      }).catch(ValidationError, function(err) {
        err.logError = false
        err.productionMessage = true
        throw err
      }) ;
  });
  
  /* DELETE Post */
  router.delete('/:id', function(req, res) {
    Post.findByIdAndRemoveAsync(req.params.id).then(function (Post) {
        res.json(Post);
      }).catch(ValidationError, function(err) {
        err.logError = false
        err.productionMessage = true
        throw err
      }) ;
  });

//Post by ID
router.get('/:id', async (req, res) => {
    Post.findByIdAsync(req.params.id).then(function(foundItems){
        res.send(foundItems)
      })
});

// All Posts by ad ID
router.get('/by_ad/:ad_id', async (req, res) => {
    Post.findAsync({ad_id:req.params.ad_id}).then(function(foundItems){
        res.send(foundItems)
      })
});

// All Posts for user
router.get('/by_creator/:user', async (req, res) => {
    Post.findAsync({createdby:req.params.user}).then(function(foundItems){
        res.send(foundItems)
      })
});

// All Posts for user
router.get('/by_reciever/:user', async (req, res) => {
    Post.findAsync({createdfor:req.params.user}).then(function(foundItems){
        res.send(foundItems)
      })
});
module.exports = router;
