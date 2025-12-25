"use client";

import { useState } from "react";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle, Button, Separator } from "payit-ui";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL!;

      if (!baseUrl) {
        throw new Error("NEXT_PUBLIC_FRONTENDURL is not configured");
      }

      window.location.href = `${baseUrl}/api/auth/googleAuth`;
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        // setError(err.response?.data?.message || "Failed to initiate Google login");
      } else {
        // setError(err.message || "Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 dark:bg-background p-4 transition-colors duration-300">
      <Card className="w-full max-w-sm shadow-xl border-slate-200 dark:border-border bg-white dark:bg-card">
        <CardHeader className="space-y-2 text-center pb-6">
          <div className="mx-auto w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center shadow-md mb-2">
            <span className="text-white font-bold text-lg">PI</span>
          </div>
          <CardTitle className="text-2xl font-bold text-indigo-950 dark:text-indigo-100">Welcome back</CardTitle>
          <p className="text-sm text-slate-500 dark:text-slate-400">Sign in to your PayIt account</p>
        </CardHeader>

        <CardContent className="space-y-4">
          <Button
            className="w-full flex items-center justify-center gap-3 bg-white dark:bg-background border border-slate-200 dark:border-border hover:bg-slate-50 dark:hover:bg-accent text-slate-700 dark:text-slate-200 h-11 transition-all shadow-sm"
            onClick={handleGoogleLogin}
            disabled={loading}
          >
            <FcGoogle className="h-5 w-5" />
            <span className="font-medium">{loading ? "Redirecting..." : "Continue with Google"}</span>
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-200 dark:border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-card px-2 text-slate-400">or</span>
            </div>
          </div>

          <p className="text-center text-xs text-slate-400 px-4 leading-relaxed">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
