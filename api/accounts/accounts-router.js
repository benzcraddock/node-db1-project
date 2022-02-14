const router = require('express').Router()

// middleware
const { 
  checkAccountPayload,
  checkAccountNameUnique,
  checkAccountId
 } = require('./accounts-middleware')

const Account = require('./accounts-model')

router.get('/', async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const data = await Account.getAll()
    res.json(data)
  }
  catch(err) {
    next(err)
  }
})

router.get('/:id', checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  // replaced w middleware
  // try {
  //   const data = await Account.getById(req.params.id)
  //   res.json(data)
  // }
  // catch(err) {
  //   next(err)
  // }
  res.json(req.account)
})

router.post('/', checkAccountPayload, checkAccountNameUnique, async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const data = await Account.create(req.body)
    res.json(data)
  }
  catch(err) {
    next(err)
  }
})

router.put('/:id', checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const data = await Account.updateById(req.params.id, req.body)
    res.json(data)
  }
  catch(err) {
    next(err)
  }
});

router.delete('/:id', checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const data = await Account.deleteById(req.params.id)
    res.json(data)
  }
  catch(err) {
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack
  })
})

module.exports = router;
