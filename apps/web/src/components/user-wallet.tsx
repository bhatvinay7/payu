"use client";
import { Button, Separator, Card, CardContent } from "payit-ui"
export default function Wallet() {
  return (
    <div className="w-full h-full bg-white dark:bg-card flex flex-col p-4 space-y-4 transition-colors duration-300">
      <div className="text-center py-6 bg-slate-50 dark:bg-muted rounded-2xl border border-slate-100 dark:border-border">
        <h2 className="text-4xl font-bold text-indigo-950 dark:text-indigo-100">₹ 12,500</h2>
        <p className="text-sm font-medium text-slate-500 dark:text-muted-foreground mt-1">Available Balance</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Add Money</Button>
        <Button variant="outline" className="w-full">Withdraw</Button>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Quick Actions</h3>
        <div className="grid grid-cols-1 gap-3">
          <Card className="shadow-sm hover:shadow-md transition-shadow cursor-pointer border-slate-200 dark:border-border bg-white dark:bg-card">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-medium text-indigo-950 dark:text-indigo-100">Send Money</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Transfer to another wallet</span>
              </div>
              <Button size="icon" variant="ghost"><span className="text-xl">→</span></Button>
            </CardContent>
          </Card>

          <Card className="shadow-sm hover:shadow-md transition-shadow cursor-pointer border-slate-200 dark:border-border bg-white dark:bg-card">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-medium text-indigo-950 dark:text-indigo-100">History</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">View past transactions</span>
              </div>
              <Button size="icon" variant="ghost"><span className="text-xl">→</span></Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
