"use client";
import React, { useState } from "react";
import { Input, SelectTrigger, SelectValue, SelectContent, SelectItem, Button, Label, Select } from "payit-ui"
import { v4 as uuid } from 'uuid';
type SendMoneyFormProps = {
  onSend: (receiverAccountId: string, amount: string, idempotencyKey: string) => void;
  usersList?: { id: string; name: string }[];
};

export default function SendMoneyForm({ onSend, usersList }: SendMoneyFormProps) {
  const [receiverAccountId, setReceiverAccountId] = useState("");
  const [amount, setAmount] = useState("");
  const [idempotencyKey, setidEmpotencyKey] = useState(uuid())
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const amt = parseFloat(amount);

    if (!receiverAccountId) {
      alert("Please select a receiver");
      return;
    }
    if (isNaN(amt) || amt <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    onSend(receiverAccountId, "" + amt, idempotencyKey);
    setAmount("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white dark:bg-card rounded-xl border border-slate-200 dark:border-border shadow-lg w-full max-w-md space-y-6 transition-colors duration-300"
    >
      <div className="space-y-1 text-center">
        <h2 className="text-2xl font-bold text-indigo-950 dark:text-indigo-100">Send Money</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">Secure transfer to any account</p>
      </div>

      <div className="space-y-4">
        {/* Receiver selection */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">Receiver</Label>
          {usersList && (
            <>
              <Select onValueChange={setReceiverAccountId}>
                <SelectTrigger className="w-full border-slate-300 dark:border-border focus:ring-indigo-500 text-slate-900 dark:text-slate-100 bg-white dark:bg-background">
                  <SelectValue placeholder="Select a user" />
                </SelectTrigger>
                <SelectContent>
                  {usersList.map((user) => (
                    <SelectItem key={user.id} value={user.id}>
                      {user.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="relative flex py-1 items-center">
                <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
                <span className="flex-shrink-0 mx-2 text-slate-400 text-[10px]">OR ENTER ID</span>
                <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
              </div>
            </>
          )}
          <Input
            value={receiverAccountId}
            onChange={(e) => setReceiverAccountId(e.target.value)}
            placeholder="Receiver Account ID"
            className="font-mono text-sm border-slate-300 dark:border-border focus-visible:ring-indigo-500 text-slate-900 dark:text-slate-100 bg-white dark:bg-background"
          />
        </div>

        {/* Amount input */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">Amount (₹)</Label>
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-slate-400 font-bold">₹</span>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="pl-8 text-lg font-semibold border-slate-300 dark:border-border focus-visible:ring-indigo-500 bg-white dark:bg-background text-slate-900 dark:text-white"
            />
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 h-11 text-base border border-indigo-700 shadow-md">
        Transfer Money
      </Button>
    </form>
  );

}



