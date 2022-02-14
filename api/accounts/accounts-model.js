// DATABASE
const db = require('../../data/db-config')

const getAll = () => {
  // DO YOUR MAGIC
  // select * from accounts;
  return db('accounts') // http get :9000/api/accounts returns all data from accounts database
}

const getById = id => {
  // DO YOUR MAGIC
  return db('accounts')
    .where({ id: id }) // http get :9000/api/accounts/1 returns id 1 from accounts database
}

const create = account => {
  // DO YOUR MAGIC
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
