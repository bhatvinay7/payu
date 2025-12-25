import { getTransactionClient } from './grpcClient.js';
import {  TransactionEvent  } from 'types'
enum paymentStatus  {
  PENDING= "PENDING",
  SUCCESS="SUCCESS",
  FAILED="FAILED",
}

export type response={
  transactionId: string;
  status: paymentStatus;
}

const transactionClient = getTransactionClient();
export async function grpcTransaction(
  input: TransactionEvent 
):Promise<response> {
  const { data, metadata } = input;

  return new Promise((resolve, reject) => {
    transactionClient.CreateTransaction(
      {
        data: {
          ...data,
          debit: Number(data.debit),
          credit: Number(data.credit)
        },
        metadata,
      },
      (err: any, response: any) => {
        if (err) return reject(err);
        resolve(response);
      }
    );
  });
}
