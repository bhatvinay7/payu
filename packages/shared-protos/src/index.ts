import grpc, { GrpcObject, ServiceClientConstructor } from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Standard ESM replacement for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROTO_PATH = path.join(__dirname, './transaction.proto');

export const loadTransactionProto = (): ServiceClientConstructor => {
  const def = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  });

  const grpcObj = grpc.loadPackageDefinition(def) as unknown as GrpcObject;
  const transactionPkg = grpcObj.transaction as unknown as GrpcObject;

  return transactionPkg.TransactionService as ServiceClientConstructor;
};
