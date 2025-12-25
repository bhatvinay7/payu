"use client"
import { Label, Input, Button, Avatar, AvatarFallback, AvatarImage, Separator } from "payit-ui";

export default function UserProfile() {
  return (
    <div className="w-full h-auto bg-white dark:bg-card flex flex-col transition-colors duration-300">
      <div className="flex flex-col items-center gap-4 py-6 bg-slate-50/50 dark:bg-muted/30">
        <Avatar className="h-24 w-24 ring-4 ring-white dark:ring-card shadow-md">
          {/* <AvatarImage src="/avatar.png" /> */}
          <AvatarFallback className="text-xl font-bold bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-100">VB</AvatarFallback>
        </Avatar>

        <Button variant="outline" size="sm" className="bg-white dark:bg-background border-slate-300 dark:border-border hover:bg-slate-50 dark:hover:bg-accent text-indigo-700 dark:text-indigo-300">
          Change Avatar
        </Button>
      </div>

      <div className="p-4 space-y-4 flex-1">
        <form className="flex flex-col gap-4">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="name" className="text-slate-700 dark:text-slate-300">Name</Label>
            <Input id="name" placeholder="Your name" defaultValue="Vinay Bhat" className="border-slate-300 dark:border-border bg-white dark:bg-background focus-visible:ring-indigo-500 text-slate-900 dark:text-slate-100" />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email" className="text-slate-700 dark:text-slate-300">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Email address"
              defaultValue="you@example.com"
              className="border-slate-300 dark:border-border bg-white dark:bg-background focus-visible:ring-indigo-500 text-slate-900 dark:text-slate-100"
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="phone" className="text-slate-700 dark:text-slate-300">Phone</Label>
            <Input
              id="phone"
              disabled
              className="bg-slate-50 dark:bg-muted text-muted-foreground dark:text-muted-foreground border-slate-200 dark:border-border"
              type="tel"
              placeholder="+91-XXXXXXXXXX"
            />
          </div>

          <Button className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white border border-indigo-700 shadow-sm">Save Changes</Button>
        </form>

        <Separator />

        <div className="rounded-lg border border-red-100 dark:border-red-900/30 bg-red-50/50 dark:bg-red-900/10 p-4">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium text-red-900 dark:text-red-400">Danger Zone</span>
            <Button variant="destructive" className="w-full bg-red-500 hover:bg-red-600 shadow-sm">Logout</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
