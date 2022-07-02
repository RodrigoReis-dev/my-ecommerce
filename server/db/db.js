const config = require('./knexfile').development
const connection = require('knex')(config)

function getProducts(db = connection) {
  return db('products').select()
}

// function dbAddTask(taskName, db = connection) {
//   return db('todos').insert({ task: taskName })
// }

// function dbDeleteTaskById(id, db = connection) {
//   return db('todos').delete().where({ id: id })
// }

// function dbUpdateTaskById(id, task, db = connection) {
//   return db('todos').update({ task }).where({ id })
// }

// function dbSearchTasks(searchFor, db = connection) {
//   return db('todos').select().whereLike('task', `%${searchFor}%`)
// }


function close(db = connection) {
  db.destroy()
}

module.exports = {
  getProducts,
  close,
}