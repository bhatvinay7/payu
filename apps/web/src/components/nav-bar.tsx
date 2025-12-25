import { Button } from "payit-ui";
import { Bell } from "lucide-react";
import React from 'react'

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-40 p-2 sm:px-4 mx-auto py-6 border-b border-b-black/15 dark:border-b-border bg-white dark:bg-background flex items-center justify-start transition-colors duration-300">
      <div className="w-[95%] flex items-center justify-between mx-auto">

        <div className="flex justify-between items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center shadow-md text-white font-semibold">
            PI
          </div>
          <div>
            <div className="text-lg font-semibold text-indigo-900 dark:text-indigo-100">PayIt</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Payments • Wallets • Ledger</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-4">
            <a className="text-sm hover:underline text-black/75 dark:text-slate-300" href="#features">Features</a>
            <a className="text-sm hover:underline text-black/75 dark:text-slate-300" href="#pricing">Pricing</a>
            <a className="text-sm hover:underline text-black/75 dark:text-slate-300" href="#docs">Docs</a>
          </nav>

          {/* Notification Icon - Kept from previous design */}
          <Button variant="ghost" size="icon" className="relative text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-accent rounded-full">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-background"></span>
          </Button>

          <div className="md:hidden">
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
