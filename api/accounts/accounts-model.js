// DATABASE
const db = require('../../data/db-config')

const getAll = () => {
  // DO YOUR MAGIC
  // select * from accounts;
  return db('accounts') // http get :9000/api/accounts returns all data from accounts database
}

const getById = id => {
  // DO YOUR MAGIC
  // select * from accounts where id = ___;
  return db('accounts')
    .where({ 'id': id }).first() // http get :9000/api/accounts/1 returns id 1 from accounts database
}

const create = async (account) => {
  // DO YOUR MAGIC
  // MAKE ASYNC FUNCTION
  // insert into accounts (name, budget) values ('foo', 1000);
  // NOTE that with posgres we would do: .insert(account, ['id', 'name', 'budget'])
  const [id] = await db('accounts')
    .insert({ account }) // http post :9000/api/accounts
  return getById(id) // return the id that was specified while creating the new account
}

const updateById = async (id, account) => {
  // DO YOUR MAGIC
  // update accounts set name='foo', budget='1111' where id=1;
  await db('accounts')
    .where({ 'id': id })
    .update({ account })
  return getById(id) 
}

const deleteById = id => {
  // DO YOUR MAGIC
  return db('accounts')
    .where({ 'id': id })
    .del()
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
