const express = require('express');
const _ = require('lodash');
const mongoClient = require('../helpers/mongo_utils');
const router = express.Router();
var User = require('./../models/user').User;
var ValidationError = require('mongoose/lib/error/validation')

// All Users
router.get('/', async (req, res) => {
    User.findAsync().then(function(foundItems){
        res.send(foundItems)
      })
});


/* SAVE User */
  router.post('/', async (req, res) => {
    User.findOneAndUpdate(
      {username: req.body.username},
        req.body, //doc when no doc found
        {upsert: true, new: true, runValidators: true})
    .then(function (user) {
        res.json(user);
      }).catch(ValidationError, function(err) {
        err.logError = false
        err.productionUser = true
        throw err
      });
  });
  
  /* UPDATE User */
  router.put('/:id', async (req, res) => {
    User.findByIdAndUpdateAsync(req.params.id, req.body).then(function (user) {
        res.json(user);
      }).catch(ValidationError, function(err) {
        err.logError = false
        err.productionUser = true
        throw err
      }) ;
  });
  
  /* DELETE User */
  router.delete('/:id', function(req, res) {
    User.findByIdAndRemoveAsync(req.params.id).then(function (user) {
        res.json(user);
      }).catch(ValidationError, function(err) {
        err.logError = false
        err.productionUser = true
        throw err
      }) ;
  });

//Users by  ID
router.get('/:id', async (req, res) => {
    User.findByIdAsync(req.params.id).then(function(foundItems){
        res.send(foundItems)
      })
});

// All details for user
router.get('/by_username/:username', async (req, res) => {
  User.findAsync({createdby:req.params.username}).then(function(foundItems){
      res.send(foundItems)
    })
});

// All referred users for user
router.get('/by_referrer/:username', async (req, res) => {
  User.findAsync({referredby:req.params.username}).then(function(foundItems){
      res.send(foundItems)
    })
});

module.exports = router;
