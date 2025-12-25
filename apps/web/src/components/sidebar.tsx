"use client"
import React from "react"
import Link from "next/link"
import SidebarToggleComponent from "./sidebarToggleComponent"
import usesubSlideBar from "../lib/hooks/usesubSidebar"
import useSlideBar from '../lib/hooks/useSlideBar'
import {
  Coins,
  History,
  UserRound,
  Wallet,
  Building2,
  Settings,
  LogOut,
  HandCoins,
  PanelRight,
  Sun,
  Moon
} from "lucide-react"

import { Button } from "payit-ui"
import useTheme from "../lib/hooks/useTheme"

export default function Sidebar() {
  const { value: theme, call_Theme_Dispatch: toggleTheme } = useTheme()
  const { value, call_subSlideBar_Dispatch } = usesubSlideBar()
  const { value: isSidebar, call_SlideBar_Dispatch } = useSlideBar()
  // Navigation links
  const links = [
    {
      label: "Pay",
      href: "/main/pay",
      icon: <Coins size={18} className="mr-2" />,
    },
    {
      label: "Transactions",
      href: "/main/transactions",
      icon: <History size={18} className="mr-2" />,
    },
    {
      label: "Wallet",
      href: "/main/wallet",
      icon: <Wallet size={18} className="mr-2" />,
    },
  ]

  const menuItems = [
    {
      label: "Profile",
      href: "/profile",
      icon: <UserRound size={18} className="mr-2" />,
    },
    {
      label: "Account",
      href: "/account",
      icon: <Building2 size={18} className="mr-2" />,
    },
    {
      label: "Balance",
      href: "/balance",
      icon: <HandCoins size={18} className="mr-2" />,
    },
    {
      label: "Settings",
      href: "/settings",
      icon: <Settings size={18} className="mr-2" />,
    },
  ]

  const dangerItems = [
    {
      label: "Logout",
      href: "/logout",
      icon: <LogOut size={18} className="mr-2" />,
      isDanger: true,
    },
  ]

  return (
    <div className={`${isSidebar ? " w-full sm:min-w-[300px] border-r border-r-black/15 dark:border-border" : "w-fit"} h-full bg-white dark:bg-background flex flex-col transition-colors duration-300`}>
      <div onClick={() => call_SlideBar_Dispatch(!isSidebar)} className={`${isSidebar ? "left-[90%]" : " left-[30%] "} relative mt-2`}>
        <SidebarToggleComponent />
      </div>

      <div className="w-full flex-1 overflow-y-auto bg-white dark:bg-card p-0 transition-colors duration-300">
        {isSidebar ?
          <nav className="p-2 space-y-1">

            {/* Regular links */}
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 dark:hover:text-indigo-400 hover:border-indigo-100 dark:hover:border-indigo-800 border border-transparent transition-all duration-200 group"
              >
                <span className="group-hover:text-indigo-600 text-slate-500 transition-colors duration-200">{item.icon}</span>
                {item.label}
              </Link>
            ))}

            <div className="my-2 border-t border-slate-100" />

            {/* Button-type menu items */}
            {menuItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                onClick={() => call_subSlideBar_Dispatch(item.label)}
                className="flex hover:cursor-pointer items-center w-full justify-start px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-100 border border-transparent transition-all duration-200 font-normal"
              >
                {item.icon}
                {item.label}
              </Button>
            ))}

            {/* Danger section */}
            <div className="pt-4 mt-auto space-y-2">
              <Button
                variant="ghost"
                onClick={() => toggleTheme()}
                className="flex hover:cursor-pointer items-center w-full justify-start px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-all duration-200"
              >
                {theme === 'light' ? (
                  <Moon size={18} className="mr-2" />
                ) : (
                  <Sun size={18} className="mr-2" />
                )}
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
              </Button>
              {dangerItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center hover:cursor-pointer px-3 py-2 rounded-md text-sm font-medium text-red-600 hover:bg-red-50 hover:border-red-100 border border-transparent transition"
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </div>

          </nav> :
          <nav className={`p-2 space-y-2 flex flex-col items-center`}>
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-center w-10 h-10 rounded-lg text-slate-500 hover:bg-indigo-50 hover:text-indigo-600 border border-transparent hover:border-indigo-100 transition-all duration-200"
                title={item.label}
              >
                {item.icon}
              </Link>
            ))}

            <div className="w-8 border-t border-slate-100 my-1" />

            {/* Button-type menu items */}
            {menuItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                size="icon"
                onClick={() => call_subSlideBar_Dispatch(item.label)}
                className="flex items-center justify-center w-10 h-10 rounded-lg text-slate-500 hover:bg-indigo-50 hover:text-indigo-600 border border-transparent hover:border-indigo-100 transition-all duration-200"
                title={item.label}
              >
                {item.icon}
              </Button>
            ))}

            {/* Danger section */}
            <div className="pt-4 mt-auto space-y-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => toggleTheme()}
                className="flex items-center justify-center w-10 h-10 rounded-lg text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-all duration-200"
                title={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </Button>

              {dangerItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-center w-10 h-10 rounded-md text-red-400 hover:bg-red-50 hover:text-red-600 transition"
                  title={item.label}
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </nav>}
      </div>
    </div>
  )
}
