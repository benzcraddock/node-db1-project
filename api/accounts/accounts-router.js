const router = require('express').Router()

// middleware
const { 
  checkAccountPayload,
  checkAccountNameUnique,
  checkAccountId
 } = require('./accounts-middleware')

const Account = require('./accounts-model')

router.get('/', async (req, res, next) => {
  try {
    const accounts = await Account.getAll()
    res.json(accounts)
  }
  catch(err) {
    next(err)
  }
})

router.get('/:id', checkAccountId, async (req, res, next) => {
  // replaced w middleware
  // try {
  //   const account = await Account.getById(req.params.id)
  //   res.json(account)
  // }
  // catch(err) {
  //   next(err)
  // }
  res.json(req.account)
})

router.post('/', checkAccountPayload, checkAccountNameUnique, async (req, res, next) => {
  try {
    const newAccount = await Account.create({ name: req.body.name.trim(), budget: req.body.budget })
    res.status(201).json(newAccount)
  }
  catch(err) {
    next(err)
  }
})

router.put('/:id', checkAccountId, checkAccountPayload, async (req, res, next) => {
  try {
    const updatedAccount = await Account.updateById(req.params.id, req.body)
    res.json(updatedAccount)
  }
  catch(err) {
    next(err)
  }
});

router.delete('/:id', checkAccountId, async (req, res, next) => {
  try {
    const deletedAccount = await Account.deleteById(req.params.id)
    res.json(deletedAccount)
  }
  catch(err) {
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack
  })
})

module.exports = router;
