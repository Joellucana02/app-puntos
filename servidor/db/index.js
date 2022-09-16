const { Client } = require("pg");

const client = new Client({
  connectionString: `postgresql://postgres:password@localhost/puntos_inteligentes`,
});

client.connect();

module.exports = client;
