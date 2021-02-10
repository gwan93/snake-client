const net = require('net');
const { IP, port } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: port
  });

  // prints any messages received from the server
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  // send a message to the server when connection is established
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: GW");
  });
  
  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
};

module.exports = {
  connect
};