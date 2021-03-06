exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('products')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {
          id: '1',
          user_id: 'auth0|001',
          name: 'Mousepad',
          price: 19.99,
          image: './images/mouse-pad.jpeg',
        },
        {
          id: '2',
          user_id: 'auth0|001',
          name: 'Mouse',
          price: 28.90,
          image: './images/mouse.jpeg',
        },
        {
          id: '3',
          user_id: 'auth0|001',
          name: 'Keyboard',
          price: 179.99,
          image: './images/keyboard.jpeg',
        },
        {
          id: '4',
          user_id: 'auth0|001',
          name: 'Headphone',
          price: 189.99,
          image: './images/headphone.jpeg',
        },
        {
          id: '5',
          user_id: 'auth0|001',
          name: 'Speaker',
          price: 159.90,
          image: './images/speaker.jpeg',
        },
        {
          id: '6',
          user_id: 'auth0|001',
          name: 'Asus Monitor',
          price: 499.95,
          image: './images/asus-monitor.jpeg',
        },
        {
          id: '7',
          user_id: 'auth0|001',
          name: 'LG Monitor',
          price: 399.99,
          image: './images/lg-monitor.jpeg',
        },
        {
          id: '8',
          user_id: 'auth0|001',
          name: 'Asus Hero Laptop',
          price: 1790.90,
          image: './images/asus-hero.jpeg',
        },
        {
          id: '9',
          user_id: 'auth0|001',
          name: 'Macbook-Pro',
          price: 2300.00,
          image: './images/macbook-pro.jpeg',
        },  
      ])
    })
}