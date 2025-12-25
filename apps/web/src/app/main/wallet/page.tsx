"use client"
import { Tabs, TabsList, TabsTrigger, TabsContent, Avatar, AvatarImage, AvatarFallback, ScrollArea, Button, Card, CardHeader, CardTitle, CardContent, Progress } from "payit-ui";
import { Wallet, ArrowDownCircle, ArrowUpCircle, PlusCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Walletui() {
  return (
    <div className="w-full min-h-full border border-black/15 dark:border-border rounded-2xl text-black/75 dark:text-slate-300 p-4 bg-white dark:bg-card space-y-4 transition-colors duration-300">
      {/* Header */}
      <div className="flex mx-auto w-full items-center space-x-1.5 justify-start">
        <h1 className="text-3xl font-bold flex items-center gap-2 text-indigo-950 dark:text-indigo-100">
          <Wallet className="h-7 w-7 text-indigo-600 dark:text-indigo-400" /> Wallet
        </h1>
      </div>

      {/* Balance Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-6 text-white shadow-xl"
      >
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm opacity-80">Current Balance</p>
            <p className="text-4xl font-semibold mt-1">₹ 12,450.00</p>
          </div>
          {/* <Avatar className="h-14 w-14 border border-white/30 shadow-md"> */}
          {/* <AvatarImage src="" /> */}
          {/* <AvatarFallback>U</AvatarFallback> */}
          {/* </Avatar> */}
        </div>

        <div className="mt-6">
          <p className="text-sm mb-1 opacity-80">Monthly Spend</p>
          {/* <Progress value={65} className="h-2 bg-white/30" /> */}
          <div className="text-xs mt-1 opacity-80">65% of your monthly limit used</div>
        </div>
      </motion.div>
      <Button className="flex items-center p-1 gap-2 bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm border border-indigo-700">
        <PlusCircle className="h-4 w-4" /> Add money to wallet
      </Button>
      {/* Tabs */}
      <Tabs defaultValue="transactions" className="w-full">
        <TabsList className="grid grid-cols-3 w-full bg-slate-100 dark:bg-muted p-1 rounded-lg">
          <TabsTrigger className="border-none data-[state=active]:bg-white dark:data-[state=active]:bg-card data-[state=active]:shadow-sm rounded-md transition-all" value="transactions">Transactions</TabsTrigger>
          <TabsTrigger className="border-none data-[state=active]:bg-white dark:data-[state=active]:bg-card data-[state=active]:shadow-sm rounded-md transition-all" value="received">Received</TabsTrigger>
          <TabsTrigger className="border-none data-[state=active]:bg-white dark:data-[state=active]:bg-card data-[state=active]:shadow-sm rounded-md transition-all" value="sent">Sent</TabsTrigger>
        </TabsList>

        {/* Transactions */}
        <TabsContent value="transactions" className="rounded-md">
          <Card className="rounded-md border border-black/10 dark:border-border bg-white dark:bg-card">
            <CardHeader>
              <CardTitle className="text-indigo-950 dark:text-indigo-100">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent >
              <ScrollArea className="h-64  overflow-y-auto custom-scrollbar  pr-3">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="flex items-center justify-between p-3 border-b dark:border-border last:border-none hover:bg-slate-50 dark:hover:bg-accent/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-slate-100 dark:bg-red-900/20">
                        <ArrowUpCircle className="h-5 w-5 text-red-500 dark:text-red-400" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-slate-200">Payment to Merchant</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Today • 4:20 PM</p>
                      </div>
                    </div>
                    <p className="text-red-500 dark:text-red-400 font-medium">- ₹350</p>
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Received */}
        <TabsContent value="received">
          <Card className="border border-black/10 dark:border-border bg-white dark:bg-card">
            <CardHeader>
              <CardTitle className="text-indigo-950 dark:text-indigo-100">Received Money</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-64 overflow-y-auto custom-scrollbar  pr-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex items-center justify-between p-3 border-b dark:border-border last:border-none hover:bg-slate-50 dark:hover:bg-accent/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-green-100 dark:bg-green-900/20">
                        <ArrowDownCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-slate-200">Received from User</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Yesterday</p>
                      </div>
                    </div>
                    <p className="text-green-600 dark:text-green-400 font-medium">+ ₹950</p>
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Sent */}
        <TabsContent value="sent">
          <Card className="border border-black/15 dark:border-border bg-white dark:bg-card">
            <CardHeader>
              <CardTitle className="text-indigo-950 dark:text-indigo-100">Sent Money</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-64 overflow-y-auto custom-scrollbar pr-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="flex items-center justify-between p-3 border-b dark:border-border last:border-none hover:bg-slate-50 dark:hover:bg-accent/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-red-100 dark:bg-red-900/20">
                        <ArrowUpCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-slate-200">Sent to Friend</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">2 days ago</p>
                      </div>
                    </div>
                    <p className="text-red-500 dark:text-red-400 font-medium">- ₹1200</p>
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
