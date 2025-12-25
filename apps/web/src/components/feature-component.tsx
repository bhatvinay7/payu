'use client'
import React from 'react'
import { motion } from "framer-motion";
import { Wallet, Database, Shield } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Flexible Wallets",
      icon: <Wallet className="h-6 w-6 text-indigo-600" />,
      desc: "Complete user wallet management with transfers, top-ups and detailed transaction history."
    },
    {
      title: "Immutable Ledger",
      icon: <Database className="h-6 w-6 text-indigo-600" />,
      desc: "Append-only ledger architecture ensuring complete data integrity and audit reliability."
    },
    {
      title: "Security & Compliance",
      icon: <Shield className="h-6 w-6 text-indigo-600" />,
      desc: "Enterprise-grade security with built-in tokenization and compliance ready features."
    }
  ];

  return (
    <section id="features" className="container mx-auto px-4 py-16 md:py-24 bg-slate-50/50 dark:bg-background transition-colors duration-300">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-indigo-950 dark:text-indigo-100 sm:text-4xl">Everything you need</h2>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          Powerful features to build the next generation of fintech applications.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="p-8 bg-white dark:bg-card rounded-2xl shadow-sm border border-slate-100 dark:border-border hover:shadow-md transition-all"
          >
            <div className="w-12 h-12 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center mb-6">
              {f.icon}
            </div>
            <h3 className="text-xl font-semibold text-indigo-950 dark:text-indigo-100 mb-3">{f.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
