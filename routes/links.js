const express = require('express');
const _ = require('lodash');
const mongoClient = require('../helpers/mongo_utils');
const router = express.Router();
var Link = require('../models/link').Link;
var ValidationError = require('mongoose/lib/error/validation')

// All Links
router.get('/', async (req, res) => {
    Link.findAsync().then(function(foundItems){
        res.send(foundItems)
      })
});


/* SAVE Link */
router.post('/', async (req, res) => {
    console.log(req.body)
    Link.createAsync(req.body)
    .then(function (Link) {
        res.json(Link);
      }).catch(ValidationError, function(err) {
        err.logError = false
        err.productionLink = true
        throw err
      });
  });
  
  /* UPDATE Link */
  router.put('/:id', async (req, res) => {
    Link.findByIdAndUpdateAsync(req.params.id, req.body).then(function (Link) {
        res.json(Link);
      }).catch(ValidationError, function(err) {
        err.logError = false
        err.productionLink = true
        throw err
      }) ;
  });
  
  /* DELETE Link */
  router.delete('/:id', function(req, res) {
    Link.findByIdAndRemoveAsync(req.params.id).then(function (Link) {
        res.json(Link);
      }).catch(ValidationError, function(err) {
        err.logError = false
        err.productionLink = true
        throw err
      }) ;
  });

//Links by  ID
router.get('/:id', async (req, res) => {
    Link.findByIdAsync(req.params.id).then(function(foundItems){
        res.send(foundItems)
      })
});

// All Links for order ID
router.get('/by_order/:order_id', async (req, res) => {
    Link.findAsync({order_id:req.params.order_id}).then(function(foundItems){
        res.send(foundItems)
      })
});

// All Links for order creator user
router.get('/by_creator/:user', async (req, res) => {
    Link.findAsync({createdby:req.params.user}).then(function(foundItems){
        res.send(foundItems)
      })
});

// All Links for order reciever
router.get('/by_reciever/:user', async (req, res) => {
    Order.findAsync({createdfor:req.params.user}).then(function(foundItems){
        res.send(foundItems)
      })
});
module.exports = router;
