"use client"

import { Card, CardContent } from "payit-ui"
import { Button } from "payit-ui"
import { Wallet, Eye, EyeOff, TrendingDown } from "lucide-react"
import { useState, useEffect } from "react"
import { fetch_account_detail, accountDetail } from "../utils/fetch_user_account_detail"
export default function AccountBalance() {
  const [accountsInfo, setAccountsInfo] = useState<accountDetail>({ user_account_detail: { accountId: "", balance: 0, spent: 0 } });
  const [hidden, setHidden] = useState(false)
  useEffect(() => {
    fetchAccounts();
  }, []);
  async function fetchAccounts() {
    try {
      const respose = await fetch_account_detail();
      setAccountsInfo(respose);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <Card className="w-full h-auto shadow-sm border-slate-200 dark:border-border bg-white dark:bg-card">
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center">
              <Wallet className="text-indigo-600 dark:text-indigo-400 h-5 w-5" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-indigo-950 dark:text-indigo-100">Total Balance</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">Live updates</p>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setHidden(!hidden)}
            className="text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full"
          >
            {hidden ? <EyeOff size={18} /> : <Eye size={18} />}
          </Button>
        </div>

        {/* Balance */}
        <div className="mb-8 text-center">
          <p className="text-4xl font-bold text-indigo-950 dark:text-indigo-100 tracking-tight">
            {hidden ? "••••••" : `${accountsInfo.user_account_detail.balance.toLocaleString('en-IN')} ₹`}
          </p>
        </div>

        {/* Total Spent */}
        <div className="p-4 bg-slate-50 dark:bg-muted rounded-xl flex items-center gap-4 border border-slate-100 dark:border-border">
          <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
            <TrendingDown className="text-red-600 dark:text-red-400 h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Spent</p>
            <p className="text-lg font-bold text-slate-900 dark:text-white">
              {hidden ? "•••••" : `${accountsInfo.user_account_detail?.spent || 0} ₹`}
            </p>
          </div>
        </div>

      </CardContent>
    </Card>
  )
}
