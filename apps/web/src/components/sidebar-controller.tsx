"use client"
import Sidebar from "../components/sidebar";
import Subsidebar from "../components/subsidebar";
import useSlideBar from '../lib/hooks/useSlideBar'
export default function SidebarController() {
  const { value: isSidebar, call_SlideBar_Dispatch } = useSlideBar()
  return (
    <div className={`h-full grid grid-cols-1 transition-all duration-300 ease-in-out border-r border-slate-200 dark:border-border bg-white dark:bg-background
      ${isSidebar
        ? "fixed inset-y-0 left-0 z-50 w-[85%] sm:static sm:w-[260px] md:w-[300px] shadow-2xl sm:shadow-none"
        : "relative w-[60px]"
      }
    `}>
      <div className="flex w-full h-full relative">
        < Sidebar />
        <Subsidebar />
      </div>
    </div>
  )
}

