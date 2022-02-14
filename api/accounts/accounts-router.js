const router = require('express').Router()

// middleware
const{ 
  checkAccountPayload,
  checkAccountNameUnique,
  checkAccountId
 } = require('./accounts-middleware')

const Account = require('./accounts-model')

router.get('/', async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json('get accounts')
  }
  catch(err) {
    next(err)
  }
})

router.get('/:id', checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json('get account')
  }
  catch(err) {
    next(err)
  }
  
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json('create account')
  }
  catch(err) {
    next(err)
  }
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json('update account')
  }
  catch(err) {
    next(err)
  }
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json('delete account')
  }
  catch(err) {
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status || 500).json({
    message: err.message
  })
})

module.exports = router;
