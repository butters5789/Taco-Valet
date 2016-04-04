// module.exports = {
//
//   development: {
//     client: 'postgresql',
//     connection: 'postgresql://localhost/taco-valet'
//   }
//
// };

require('dotenv').load();

module.exports = {

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool : {
      min: 2,
      max: 10
    }
  }
};
