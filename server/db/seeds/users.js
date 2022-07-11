/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      auth0_id: 'auth0|001',
      name: 'Rodrigo Reis',
      email: 'onlinebordados@gmail.com',
      password: '123456',
      avatar: './images/avatars/user.png',
    }  
  ])
}