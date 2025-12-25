"use client"
import React from 'react'
import Pay from "../../../components/send-money-form"
import { pay } from "../../../utils/pay"
import { useToast } from "../../../components/toast-provider";
type SendMoneyFormProps = {
  onSend: (receiverId: string, amount: number) => void;
  usersList?: { id: string; name: string }[];
}
export default function Page() {
  const { showToast } = useToast();

  async function transaction(receiverAccountId: string, amount: string, idempotencyKey: string) {
    try {
      const response = await pay(receiverAccountId, amount, idempotencyKey)
      if (response?.message && !response?.message.includes("success")) {
        showToast(response.message || "Transaction Failed", "error");
      } else {
        showToast("Transaction Successful", "success");
      }
    }
    catch (error: any) {
      console.log(error)
      showToast(error.message || "Transaction Failed", "error");
    }
  }
  return (
    <div className='flex justify-center w-full bg-slate-50 dark:bg-background h-full pt-10 transition-colors duration-300'>
      <Pay
        onSend={transaction}
        usersList={[{ id: "0", name: "" }]}
      />
    </div>
  )
}
