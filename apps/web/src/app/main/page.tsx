"use client";
import React from 'react'
import { Button, Card, CardContent, CardHeader, CardTitle } from "payit-ui";
import { Plus, ArrowRight, Wallet, History } from "lucide-react";
import Link from 'next/link';

export default function page() {
  return (
    <div className='w-full h-full overflow-y-auto bg-slate-50 dark:bg-background p-6 space-y-8 transition-colors duration-300'>

      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-indigo-950 dark:text-indigo-100">Welcome back, Manik</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Here's what's happening with your account today.</p>
        </div>
        <Link href="/main/pay">
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-md">
            <Plus className="mr-2 h-4 w-4" /> Start Payment
          </Button>
        </Link>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white dark:bg-card border-slate-200 dark:border-border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Balance</CardTitle>
            <Wallet className="h-4 w-4 text-indigo-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-indigo-950 dark:text-indigo-100">₹ 45,231.89</div>
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">+20.1% from last month</p>
          </CardContent>
        </Card>

        {/* Placeholder Stats */}
        <Card className="bg-white dark:bg-card border-slate-200 dark:border-border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-500 dark:text-slate-400">Monthly Spending</CardTitle>
            <History className="h-4 w-4 text-indigo-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-indigo-950 dark:text-indigo-100">₹ 12,450.00</div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">45 transactions</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions / Recent */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="bg-white dark:bg-card border-slate-200 dark:border-border shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg text-indigo-950 dark:text-indigo-100">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Link href="/main/pay" className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <Plus className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-indigo-950 dark:text-indigo-100">Send Money</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Transfer funds instantly</p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-indigo-500 transition-colors" />
            </Link>
          </CardContent>
        </Card>

        <div className="flex items-center justify-center h-full min-h-[200px] border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl p-6 text-center">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">More analytics coming soon...</p>
          </div>
        </div>
      </div>

    </div>
  )
}
