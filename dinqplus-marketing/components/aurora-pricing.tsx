"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Zap } from "lucide-react";

const cn = (...classes: (string | boolean | undefined)[]) =>
  classes.filter(Boolean).join(" ");

const AuroraPricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      name: "Starter",
      price: { monthly: 29, yearly: 23 },
      description: "Perfect for salons, auto shops and property managers.",
      features: [
        "DinqBook, DinqShop or DinqProp",
        "Unlimited clients & records",
        "Invoicing & payments",
        "Analytics dashboard",
        "7-day free trial",
      ],
      isFeatured: false,
      action: () => window.open("https://app.dinqdigital.com/signup", "_blank"),
      buttonText: "Start free trial",
    },
    {
      name: "Pro",
      price: { monthly: 49, yearly: 39 },
      description: "For agencies and care businesses needing more power.",
      features: [
        "DinqAgency or DinqCare",
        "Multi-role team access",
        "Advanced workflows",
        "Priority support",
        "7-day free trial",
      ],
      isFeatured: true,
      action: () => window.open("https://app.dinqdigital.com/signup", "_blank"),
      buttonText: "Start free trial",
    },
    {
      name: "Custom",
      price: { monthly: 0, yearly: 0 },
      description: "For large organizations with custom needs.",
      features: [
        "DinqFactory + all verticals",
        "Custom vertical development",
        "Dedicated account manager",
        "Custom integrations & SLA",
      ],
      isFeatured: false,
      action: () => {
        window.location.href = "mailto:dinqdigital@gmail.com";
      },
      buttonText: "Contact us",
    },
  ];

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15 + 0.3,
        duration: 0.6,
        ease: "easeInOut" as const,
      },
    }),
  };

  return (
    <div className="relative w-full min-h-screen bg-gray-950 flex flex-col items-center justify-center p-8 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="aurora-bg">
          <div className="aurora-shape-1"></div>
          <div className="aurora-shape-2"></div>
        </div>
      </div>
      <style>{`
                .aurora-bg { position: absolute; inset: 0; filter: blur(100px); }
                .aurora-shape-1, .aurora-shape-2 { position: absolute; border-radius: 50%; }
                .aurora-shape-1 { width: 600px; height: 600px; background-color: rgba(107, 33, 168, 0.6); top: 10%; left: 10%; animation: moveAurora1 20s infinite alternate ease-in-out; }
                .aurora-shape-2 { width: 500px; height: 500px; background-color: rgba(79, 70, 229, 0.5); bottom: 10%; right: 10%; animation: moveAurora2 25s infinite alternate ease-in-out; }
                @keyframes moveAurora1 { from { transform: translate(0, 0) rotate(0deg); } to { transform: translate(100px, 50px) rotate(180deg); } }
                @keyframes moveAurora2 { from { transform: translate(0, 0) rotate(0deg); } to { transform: translate(-100px, -50px) rotate(-180deg); } }
                .card-aurora, .card-aurora-featured { background-size: 300% 300%; animation: gradient-animation 10s ease infinite; filter: blur(50px); }
                .card-aurora { background-image: linear-gradient(45deg, #6B21A8, #4F46E5); }
                .card-aurora-featured { background-image: linear-gradient(45deg, #6B21A8, #4F46E5); }
                div:hover > .card-aurora, div:hover > .card-aurora-featured { opacity: 0.3; }
            `}</style>

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
        >
          <Zap className="h-4 w-4 text-purple-300" />
          <span className="text-sm font-medium text-gray-200">
            Flexible & Transparent Pricing
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
          className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 text-white"
        >
          Find the Perfect Plan
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
          className="flex items-center justify-center space-x-4 mb-12"
        >
          <span
            className={cn(
              "text-lg",
              billingCycle === "monthly" ? "text-white" : "text-gray-500"
            )}
          >
            Monthly
          </span>
          <div
            className="w-14 h-8 flex items-center bg-gray-700 rounded-full p-1 cursor-pointer"
            onClick={() =>
              setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")
            }
          >
            <motion.div
              className="w-6 h-6 bg-purple-500 rounded-full"
              layout
              transition={{ type: "spring", stiffness: 700, damping: 30 }}
              style={{ marginLeft: billingCycle === "yearly" ? "auto" : "0" }}
            />
          </div>
          <span
            className={cn(
              "text-lg",
              billingCycle === "yearly" ? "text-white" : "text-gray-500"
            )}
          >
            Yearly
          </span>
          <span className="text-sm text-purple-400 font-semibold">
            (Save 20%)
          </span>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full relative z-10">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            custom={index}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ y: -10, scale: 1.02 }}
            className={cn(
              "relative p-8 rounded-2xl border border-gray-700/50 overflow-hidden min-h-[480px] flex flex-col",
              plan.isFeatured
                ? "bg-gray-900/80"
                : "bg-gray-950/50 backdrop-blur-sm"
            )}
          >
            <div
              className={cn(
                "absolute inset-0 opacity-0 transition-opacity duration-500",
                plan.isFeatured ? "card-aurora-featured" : "card-aurora"
              )}
            ></div>
            {plan.isFeatured && (
              <div className="absolute top-0 right-0 text-xs font-bold text-white bg-purple-600 px-4 py-1.5 rounded-bl-lg">
                MOST POPULAR
              </div>
            )}
            <div className="relative z-10 flex flex-col h-full gap-2">
              <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
              <p className="text-gray-400 mt-2">{plan.description}</p>

              <div className="flex items-baseline mt-8">
                {plan.name === "Custom" ? (
                  <span className="text-5xl font-bold text-white tracking-tight">
                    Let's talk
                  </span>
                ) : (
                  <>
                    <span className="text-5xl font-bold text-white tracking-tight">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={billingCycle}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          ${plan.price[billingCycle as "monthly" | "yearly"]}
                        </motion.span>
                      </AnimatePresence>
                    </span>
                    <span className="text-gray-400 ml-2">
                      /{billingCycle === "monthly" ? "mo" : "yr"}
                    </span>
                  </>
                )}
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-purple-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={plan.action}
                className={cn(
                  "w-full mt-8 text-lg font-semibold rounded-lg py-3 transition-colors cursor-pointer border-none",
                  plan.isFeatured
                    ? "bg-purple-600 text-white hover:bg-purple-700"
                    : "bg-gray-700 text-gray-200 hover:bg-gray-600"
                )}
              >
                {plan.buttonText}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AuroraPricing;
