import grpc from '@grpc/grpc-js';
import { loadTransactionProto } from 'shared-protos';
import { transactionConsumer } from '../transaction.js';

const TransactionService = loadTransactionProto()

const handlers = {
  CreateTransaction: async(call: any, callback: any) => {
     try{
       await transactionConsumer(call.request);
         callback(null, {
    transactionId:call.request.data.transactionId,
    status: 'SUCCESS',
  });
     }
     catch(error:any){
      console.log('Error processing transaction:', error.message);
        callback(null, {
    transactionId:call.request.data.transactionId,
    status: 'FAILED',
  });
     }

  },
};

export const startGrpcServer = async () => {
  const server = new grpc.Server();

  server.addService(
    TransactionService.service,
    handlers
  );

  const PORT = 50051;

  server.bindAsync(
    `0.0.0.0:${PORT}`,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) throw err;
      console.log(`gRPC server running on port ${port}`);
      server.start();
    }
  );
};
