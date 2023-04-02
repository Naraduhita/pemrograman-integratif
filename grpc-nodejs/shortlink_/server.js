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
    link.link.push(_link);
    callback(null, _link);
  },
  // Read
  getAll: (call, callback) => {
    connection.connect(function (err) {
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
      connection.query(`SELECT * FROM links WHERE id='1`, function (err, result) {
        console.log(linkId);
        callback(null, { link: Object.values(JSON.parse(JSON.stringify(result))) });
      });
    });
  },

  // Update
  editLink: (call, callback) => {
    const linkId = call.request.id;
    const linkItem = link.link.find(({ id }) => linkId == id);
    linkItem.nama = call.request.nama;
    linkItem.nrp = call.request.nrp;
    linkItem.nilai = call.request.nilai;
    callback(null, linkItem);
  },
  // editLink: (call, callback) => {
  //   const linkId = call.request.id;
  //   const linkItem = link.link.find(({ id }) => linkId == id);
  //   if (!linkItem) {
  //     const error = new Error(`Link dengan id ${linkId} tidak ditemukan`);
  //     console.error(error);
  //     callback(error, null);
  //     return;
  //   }
  //   linkItem.nama = call.request.nama;
  //   linkItem.nrp = call.request.nrp;
  //   linkItem.nilai = call.request.nilai;
  //   callback(null, linkItem);
  // },

  // Delete
  deleteLink: (call, callback) => {
    const linkId = call.request.id;
    // connection.connect(function (err) {
    connection.query(`SELECT * FROM links WHERE id=${linkId}`, function (err, result) {
      console.log(linkId);
      callback(null, { link: Object.values(JSON.parse(JSON.stringify(result))) });
    });
  },
});

// Start server
server.bindAsync('127.0.0.1:50051', grpc.ServerCredentials.createInsecure(), (error, port) => {
  console.log('Server running at http://127.0.0.1:50051');
  server.start();
});
