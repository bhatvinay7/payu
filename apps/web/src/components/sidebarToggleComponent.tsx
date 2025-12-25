import React from "react"
import {
  PanelRight
} from "lucide-react"
export default function ToggleSideBar() {
  return (
    <div className="w-fit p-1 ">
      <PanelRight className="w-5 h-5 text-black/60 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors" />
    </div>
  )
}