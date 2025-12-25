'use client'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  Input,
} from "payit-ui";

import { Wallet, CreditCard, Database, Shield, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (

    <main className="max-w-7xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-2 bg-inherit items-center">

      {/* Left section */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        {/* <Badge className="px-3 py-1">New · Ledger-backed</Badge> */}

        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-600/80 dark:text-indigo-400 leading-tight">
          Payments, Wallets, and Auditable Ledger — Made Simple
        </h1>

        <p className="text-slate-600 dark:text-slate-300 max-w-xl">
          PayIt is a secure payment platform with built-in wallet support and an immutable ledger for auditability.
        </p>

        <div className="flex items-center gap-3">
          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white border border-indigo-700 shadow-md">Create Account</Button>
          <Button variant="ghost" size="lg" className="border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300">Explore Docs</Button>
        </div>

        <div className="mt-4 flex gap-6 items-center text-sm text-slate-600 dark:text-slate-400">
          {/* <span className="flex items-center gap-2"> */}
          {/* <Check className="h-4 w-4" /> PCI-ready */}
          {/* </span> */}
          <span className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-blue-400" /> Secure Wallets
          </span>
          <span className="flex items-center gap-2">
            <Database className="h-4 w-4" /> Immutable Ledger
          </span>
        </div>
      </motion.div>

      {/* Right mockup */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="rounded-2xl shadow-xl p-6 bg-pink-50 dark:bg-slate-900 border dark:border-slate-800 transition-colors duration-300">

          <div className="flex justify-between items-start">
            <div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Wallet balance</div>
              <div className="text-3xl font-semibold text-indigo-950 dark:text-indigo-100">₹ 12,450.00</div>
            </div>

            <div className="flex gap-2">
              <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white border-none shadow-sm">Top up</Button>
              <Button variant="ghost" size="sm" className="text-slate-700 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-800">Withdraw</Button>
            </div>
          </div>

          {/* Cards */}
          <div className="mt-6 grid grid-cols-2 gap-4">

            <Card className="border-0 shadow-sm bg-white dark:bg-slate-800">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-indigo-950 dark:text-white gap-2 font-medium text-base">
                  <Wallet className="h-4 w-4 text-black/60 dark:text-indigo-400" /> Wallet
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Multiple currencies, instant transfers
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white dark:bg-slate-800">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-indigo-950 dark:text-white gap-2 font-medium text-base">
                  <CreditCard className="h-4 w-4 text-black/60 dark:text-indigo-400" /> Payments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Card, UPI and bank transfers
                </p>
              </CardContent>
            </Card>

          </div>

          {/* Input */}
          {/* <div className="mt-6 flex items-center gap-3"> */}
          {/* <Input placeholder="Email or phone" /> */}
          {/* <Button>Notify Me</Button> */}
          {/* </div> */}
        </div>
      </motion.div>
    </main>
  );
}
