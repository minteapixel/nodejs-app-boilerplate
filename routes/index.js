const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Homepage' });
});

router.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

router.get('/my-routine', (req, res) => {
  res.render('my-routine', { title: 'Routines' });
});

router.get('/products', (req, res) => {
  res.render('products', { title: 'Browse Products' });
});

router.get('*', (req, res) => {
  res.render('404', { title: '404' });
});



module.exports = router;