// Import package
const grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');

// Define proto path
const PROTO_PATH = './shortlink.proto';

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

var packageDefinition = protoLoader.loadSync(PROTO_PATH, options);

// Load service
const LinkService = grpc.loadPackageDefinition(packageDefinition).LinkService;

// Define client
const client = new LinkService('127.0.0.1:50052', grpc.credentials.createInsecure());

module.exports = client;
