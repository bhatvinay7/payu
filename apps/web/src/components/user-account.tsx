"use client";
import {
  Badge,
  Label,
  Separator,
  Card,
  CardContent,
  Button,
  Input,
} from "payit-ui";
import { useToast } from "./toast-provider";
import { fetch_user_accounts, accountDetail } from "../utils/fetch_user_accounts";
import { add_account } from "../utils/add_account"
import { update_primary_acount } from "../utils/set_primary_account"
import { useEffect, useState } from "react";

export default function UserBankAccounts() {
  const { showToast } = useToast();
  const [accounts, setAccounts] = useState<accountDetail[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    bankName: "",
    accountNumber: "",
    ifsc: "",
    branch: ""
  });

  // Fetch accounts
  useEffect(() => {
    fetchAccounts();
  }, []);

  async function fetchAccounts() {
    try {
      const data = await fetch_user_accounts();
      setAccounts(data);
    } catch (err) {
      console.error(err);
    }
  }

  // Add account
  async function handleAddAccount() {
    try {
      setLoading(true);
      setError(null);
      await add_account(form)

      setForm({ bankName: "", accountNumber: "", ifsc: "", branch: "" });

      fetchAccounts();
      showToast("Account added successfully", "success");
    } catch (err: any) {
      const msg = err.message || "Failed to add account";
      setError(msg);
      showToast(msg, "error");
    } finally {
      setLoading(false);
    }
  }
  async function handleSetPrimaryAccount(accountId: string) {
    try {
      setLoading(true);
      setError(null);
      await update_primary_acount(accountId)
      fetchAccounts();
      showToast("Primary account updated", "success");
    }
    catch (error: any) {
      const msg = error.message || "Failed to set primary account";
      setError(msg);
      showToast(msg, "error");
    }
  }
  return (
    <div className="w-full flex flex-col p-4 space-y-4 bg-white dark:bg-card transition-colors duration-300">
      <div>
        <h3 className="text-lg font-semibold text-indigo-950 dark:text-indigo-100">Bank Accounts</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Manage your linked bank accounts used for transfers.
        </p>
      </div>

      <div className="card p-4 rounded-xl border border-slate-200 dark:border-border bg-slate-50/50 dark:bg-muted/50 space-y-4">
        <h4 className="font-medium text-sm text-slate-700 dark:text-slate-300">Add New Account</h4>
  

        <div className="space-y-3">
          <div className="space-y-1">
            <Label htmlFor="bankName" className="text-slate-700 dark:text-slate-300">Bank Name</Label>
            <Input
              id="bankName"
              value={form.bankName}
              onChange={(e) => setForm({ ...form, bankName: e.target.value })}
              placeholder="Ex: HDFC Bank"
              className="bg-white dark:bg-background border-slate-300 dark:border-border text-slate-900 dark:text-slate-100 focus-visible:ring-indigo-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label htmlFor="ifsc" className="text-slate-700 dark:text-slate-300">IFSC</Label>
              <Input
                id="ifsc"
                value={form.ifsc}
                onChange={(e) => setForm({ ...form, ifsc: e.target.value.toUpperCase() })}
                placeholder="IFSC Code"
                className="bg-white dark:bg-background border-slate-300 dark:border-border text-slate-900 dark:text-slate-100 focus-visible:ring-indigo-500"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="branch" className="text-slate-700 dark:text-slate-300">Branch</Label>
              <Input
                id="branch"
                value={form.branch}
                onChange={(e) => setForm({ ...form, branch: e.target.value.toUpperCase() })}
                placeholder="Branch Name"
                className="bg-white dark:bg-background border-slate-300 dark:border-border text-slate-900 dark:text-slate-100 focus-visible:ring-indigo-500"
              />
            </div>
          </div>

          <Button onClick={handleAddAccount} disabled={loading} className="w-full mt-2">
            {loading ? "Adding..." : "Link Account"}
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="font-medium text-sm text-slate-700 dark:text-slate-300">Linked Accounts</h4>
        {accounts.length === 0 && <p className="text-sm text-slate-400 italic">No accounts linked yet.</p>}

        <div className="space-y-3 pb-8">
          {accounts.map((acc) => (
            <Card key={acc.details.accountId} className="overflow-hidden border-slate-200 dark:border-border shadow-sm bg-white dark:bg-card">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-semibold text-indigo-950 dark:text-indigo-100">{acc.details.bankName}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{acc.details.branch}</p>
                  </div>
                  {acc.details.isPrimary && (
                    <Badge variant="outline" className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-900 text-[10px] uppercase">Primary</Badge>
                  )}
                </div>

                <div className="flex items-center justify-between mt-4">
                  <p className="font-mono text-sm text-slate-600 dark:text-slate-400 tracking-wider">
                    •••• {acc.details.accountNumber.slice(-4)}
                  </p>

                  <div className="flex gap-2">
                    {!acc.details.isPrimary && (
                      <Button variant="ghost" size="sm" className="h-7 text-xs" onClick={() => { handleSetPrimaryAccount(acc.details.accountId) }}>Set Primary</Button>
                    )}
                    <Button variant="ghost" size="sm" className="h-7 text-xs text-red-600 hover:text-red-700 hover:bg-red-50">Remove</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
