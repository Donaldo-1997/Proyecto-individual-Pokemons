const server = require('./src/app.js');
const { getTypes } = require('./src/controllers/pokemon.controller.js');
const { conn } = require('./src/db.js');


conn.sync({ force: false }).then(() => {
  getTypes() // Llenando la base de datos con los types

  server.listen(process.env.PORT || 5000, () => {
    console.log(`server listening at http://localhost:${process.env.PORT}`); // eslint-disable-line no-console
  });
});