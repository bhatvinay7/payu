import grpc from '@grpc/grpc-js';
import { loadTransactionProto } from 'shared-protos';

let client: any = null;

export const getTransactionClient = () => {
  if (!client) {
    const TransactionService = loadTransactionProto();

    client = new TransactionService(
      'transaction-worker:50051',
      grpc.credentials.createInsecure()
    );
  }

  return client;
};
