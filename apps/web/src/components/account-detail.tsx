// AccountDetail.tsx
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "payit-ui";

type AccountDetailProps = {
  username: string;
  bankName: string;
  totalAmount: number;
};

export function AccountDetail({ username, bankName, totalAmount }: AccountDetailProps) {
  return (
    <Card className="w-full max-w-md shadow-md border-slate-200 dark:border-border bg-white dark:bg-card">
      <CardHeader>
        <CardTitle className="text-indigo-950 dark:text-indigo-100">Account Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p>
          <span className="font-medium text-slate-600 dark:text-slate-400">User:</span> <span className="text-slate-900 dark:text-slate-100">{username}</span>
        </p>
        <p>
          <span className="font-medium text-slate-600 dark:text-slate-400">Bank:</span> <span className="text-slate-900 dark:text-slate-100">{bankName}</span>
        </p>
        <p className="mt-2 text-xl font-bold text-indigo-700 dark:text-indigo-400">
          Total Balance: ₹ {totalAmount.toFixed(2)}
        </p>
      </CardContent>
    </Card>
  );
}
