// Stores the active TCP connection object.
let connection;

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = (key) => {
    if (key === '\u0003') {
      process.stdout.write('\nShutting down client!\n');
      process.exit();
    } else if (key === '\u0077') { // w
      conn.write("Move: up");
    } else if (key === '\u0061') { // a
      conn.write("Move: left");
    } else if (key === '\u0073') { // s
      conn.write("Move: down");
    } else if (key === '\u0064') { // d
      conn.write("Move: right");
    } else if (key === '\u0067') { // g
      conn.write('Say: GG');
    }
  };
  stdin.on('data', handleUserInput);
  return stdin;
};

module.exports = {
  setupInput
};