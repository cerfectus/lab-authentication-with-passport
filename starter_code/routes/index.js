const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

 router.post('/signup', (req, res, next)=>{
  User.register(req.body, req.body.password)
  .then(user => {
    res.redirect('/login')
  })
  .catch(error => next(error))
})
 router.get('/login', (req, res, next)=>{
  res.render('/login')
})
 router.get('/logout', (req, res)=>{
  req.logOut()
  res.redirect('/')
})
 

module.exports = router;
