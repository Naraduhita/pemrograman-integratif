// Import package
const grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');
let mysql = require('mysql');

let connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'shortlink',
});

// Define Proto path
const PROTO_PATH = './shortlink.proto';

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

var packageDefinition = protoLoader.loadSync(PROTO_PATH, options);

// Load Proto
const linkProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

// Add service in proto
server.addService(linkProto.LinkService.service, {
  // Create
  addLink: (call, callback) => {
    const _link = { ...call.request };
    let data = [];
    connection.connect(function (err) {
      console.log(err);
      connection.query(`INSERT INTO links (title, destination,shortlink) VALUES ('${_link.title}', '${_link.destination}', '${_link.shortlink}')`, function (err, result) {
        const response = {
          title: _link.title,
        };
        callback(null, response);
      });
    });
  },

  // Read
  getAll: (call, callback) => {
    connection.connect(function (err) {
      console.log(err);
      connection.query('SELECT * FROM links', function (err, result) {
        console.log(result);
        callback(null, {
          links: Object.values(JSON.parse(JSON.stringify(result))),
        });
      });
    });
  },

  getLink: (call, callback) => {
    const linkId = call.request.id;
    connection.connect(function (err) {
      connection.query(`SELECT * FROM links WHERE id=${linkId} LIMIT 1`, function (err, result) {
        let res = JSON.parse(JSON.stringify(result));
        callback(null, {
          link: res[0],
        });
      });
    });
  },

  // Update
  editLink: (call, callback) => {
    const _link = { ...call.request };
    connection.connect(function (err) {
      connection.query(
        `UPDATE links SET ? WHERE id=?`,
        [
          {
            title: _link.title,
            destination: _link.destination,
            shortlink: _link.shortlink,
          },
          _link.id,
        ],
        function (err, result) {
          callback(null, _link);
        }
      );
    });
  },

  openLink: (call, callback) => {
    const linkId = call.request.id;
    connection.connect(function (err) {
      connection.query(`UPDATE links SET count = count + 1 WHERE id=${linkId}`, function (err, result) {
        callback(null, linkId);
      });
    });
  },

  // Delete
  deleteLink: (call, callback) => {
    const linkId = call.request.id;
    connection.connect(function (err) {
      connection.query(`DELETE  FROM links WHERE id=${linkId}`, function (err, result) {
        let res = JSON.parse(JSON.stringify(result));
        callback(null, null);
      });
    });
  },
});

// Start server
server.bindAsync('127.0.0.1:50052', grpc.ServerCredentials.createInsecure(), (error, port) => {
  console.log('Server running at http://127.0.0.1:50052');
  server.start();
});
