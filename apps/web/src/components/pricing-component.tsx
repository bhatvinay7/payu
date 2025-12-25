import { Button, Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "payit-ui";
import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      title: "Starter",
      price: "₹0",
      period: "/ month",
      desc: "Perfect for side projects and learning",
      features: ["Wallet & Payments", "Basic Ledger", "Up to 100 transactions/mo", "Community Support"],
      buttonText: "Get Started",
      highlight: false
    },
    {
      title: "Growth",
      price: "₹499",
      period: "/ month",
      desc: "For scaling startups and businesses",
      features: ["Advanced Ledger", "Priority Email Support", "Unlimited transactions", "Analytics Dashboard"],
      buttonText: "Upgrade to Growth",
      highlight: true
    },
    {
      title: "Enterprise",
      price: "Custom",
      period: "",
      desc: "For large-scale financial institutions",
      features: ["Dedicated ledger instances", "SSO & Compliance", "24/7 Phone Support", "Custom SLA"],
      buttonText: "Contact Sales",
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-indigo-950 dark:text-indigo-100 sm:text-4xl">Transparent pricing</h2>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          Simple, predictable pricing that grows with your business.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 lg:max-w-6xl lg:mx-auto">
        {plans.map((plan) => (
          <Card key={plan.title} className={`flex flex-col bg-white dark:bg-card ${plan.highlight ? 'shadow-xl border-indigo-200 dark:border-indigo-600 ring-1 ring-indigo-200 dark:ring-indigo-600 relative' : 'shadow-sm border-slate-200 dark:border-border'}`}>
            {plan.highlight && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                Most Popular
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-xl font-bold text-indigo-950 dark:text-indigo-100">{plan.title}</CardTitle>
              <CardDescription className="text-slate-500 dark:text-slate-400 mt-2">{plan.desc}</CardDescription>
            </CardHeader>

            <CardContent className="flex-1">
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-indigo-950 dark:text-indigo-100">{plan.price}</span>
                <span className="text-slate-500 dark:text-slate-400 ml-1 text-sm font-medium">{plan.period}</span>
              </div>

              <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-indigo-600 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter>
              <Button className={`w-full border ${plan.highlight ? 'bg-indigo-600 hover:bg-indigo-700 border-indigo-700 text-white' : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'}`} variant={plan.highlight ? 'default' : 'outline'}>
                {plan.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
