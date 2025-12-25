"use client";
import React from "react";
import { Sheet } from "payit-ui";
import { motion, AnimatePresence } from "framer-motion"
import UserProfile from "./user-profile";
import Account from "../components/user-account";
import usesubSlideBar from "../lib/hooks/usesubSidebar";
import Balance from "../components/account-balance"
import useSlideBar from '../lib/hooks/useSlideBar'
import useSubSidebar from "../lib/hooks/usesubSidebar";
import { X } from "lucide-react"
export default function Subsidebar() {
  const { value } = usesubSlideBar()
  const { value: isSidebar, call_SlideBar_Dispatch } = useSlideBar()
  const { value: issubSideBar, call_subSlideBar_Dispatch } = useSubSidebar()
  const renderContent = (value: string | null) => {
    switch (value) {
      case "Profile":
        return <UserProfile />
      case "Account":
        return <Account />
      case "Balance":
        return <Balance />
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {value && (
        <Sheet open={value ? true : false} onOpenChange={() => { }}>
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="flex-1  h-screen   bg-black/10"
            />
          </div>

          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ type: "tween", duration: 0.25 }}
            className={`absolute top-0 left-0 z-30 h-full w-full bg-white dark:bg-card shadow-xl border-r border-r-black/20 dark:border-r-border sm:w-[350px] transition-colors duration-300 max-sm:fixed max-sm:!ml-0 overflow-hidden`}
            style={{ marginLeft: isSidebar ? "100%" : "40px" }} // Push it next to sidebar
          >
            {/* Close button - now fixed relative to the panel */}
            <div onClick={() => { call_subSlideBar_Dispatch(null) }} className="absolute w-fit hover:cursor-pointer top-4 right-4 z-50 bg-white/80 dark:bg-card/80 backdrop-blur-sm p-1 rounded-full">
              <X className="h-5 w-5 text-black/75 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors" />
            </div>

            {/* Scrollable content area */}
            <div className="h-full overflow-y-auto custom-scrollbar pt-12 pb-20">
              {value ? renderContent(value) : <></>}
            </div>
          </motion.div>
        </Sheet>
      )}
    </AnimatePresence>
  );
}
