// Import package
const grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');

// Define Proto path
const PROTO_PATH = './mahasiswa.proto';

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

var packageDefinition = protoLoader.loadSync(PROTO_PATH, options);

// Load Proto
const mahasiswaProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

// Dummy data
const mahasiswa = {
  mahasiswa: [
    {
      id: '1',
      nama: 'Oska',
      nrp: '5027211046',
      nilai: 88,
    },
    {
      id: '2',
      nama: 'Rindu',
      nrp: '5027211055',
      nilai: 90,
    },
  ],
};

server.addService(mahasiswaProto.MahasiswaService.service, {
  getAll: (_, callback) => {
    callback(null, mahasiswa);
  },
});

// Start server
server.bindAsync('127.0.0.1:50051', grpc.ServerCredentials.createInsecure(), (error, port) => {
  console.log('Server running at http://127.0.0.1:50051');
  server.start();
});
