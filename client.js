const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });

  // prints any messages received from the server
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  // send a message to the server when connection is established
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: GW");
    // conn.write("Move: up");
    // setInterval(() => {
    //   conn.write("Move: up")
    // }, 50);

  });
  
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}

module.exports = {
  connect
}