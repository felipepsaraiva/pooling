'use strict';

const express = require('express');
const router = express.Router();

const co = require('co');
const common = require('./config/common');
const Poll = require('./models/Poll');

router.get('/', function(req, res, next) {
  co(function* () {
    let data = yield {
      popular: Poll.find({}).limit(4).sort({ voteCount: -1 }).populate('author').exec(),
      recent: Poll.find({}).limit(4).sort({ createdAt: -1 }).populate('author').exec()
    };

    return data;
  }).then(function(data) {
    res.render('home', {
      user: req.user,
      polls: {
        popular: data.popular,
        recent: data.recent
      }
    });
  }).catch(function(err) {
    res.render('home', { user: req.user });
  });
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/register', function(req, res, next) {
  res.render('register', { user: req.user });
});

router.get('/settings', function(req, res, next) {
  if (!req.user)
    return res.redirect('/');

  res.render('settings', { user: req.user });
});

router.get('/search', function(req, res, next) {
  res.render('search', { user: req.user, query: req.query });
});

module.exports = router;