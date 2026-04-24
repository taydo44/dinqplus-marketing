"use client"

import { useRouter } from "next/navigation"

const SparklesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
    <path d="M20 2v4" /><path d="M22 4h-4" /><circle cx="4" cy="20" r="2" />
  </svg>
)

const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
)

const BuildingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
    <path d="M9 9h6v6H9z" />
    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
  </svg>
)

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="hsl(240, 15%, 9%)" stroke="hsl(240, 15%, 9%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

const plans = [
  {
    name: "Starter",
    description: "Perfect for salons, auto shops and property managers",
    price: "$29",
    priceDescription: "/ month",
    icon: <SparklesIcon />,
    iconBgClass: "from-emerald-500/20 to-teal-500/20",
    features: [
      "DinqBook, DinqShop or DinqProp",
      "Unlimited clients & records",
      "Invoicing & payments",
      "Analytics dashboard",
      "7-day free trial",
    ],
    buttonText: "Start free trial",
    buttonAction: "signup",
    isPopular: false,
  },
  {
    name: "Pro",
    description: "For agencies and care businesses needing more power",
    price: "$49",
    priceDescription: "/ month",
    icon: <BriefcaseIcon />,
    iconBgClass: "from-blue-500/20 to-cyan-500/20",
    features: [
      "DinqAgency or DinqCare",
      "Multi-role team access",
      "Advanced workflows",
      "Priority support",
      "7-day free trial",
    ],
    buttonText: "Start free trial",
    buttonAction: "signup",
    isPopular: true,
  },
  {
    name: "Custom",
    description: "For large organizations with custom needs",
    price: "Let's talk",
    priceDescription: "",
    icon: <BuildingIcon />,
    iconBgClass: "from-purple-500/20 to-indigo-500/20",
    features: [
      "DinqFactory + all verticals",
      "Custom vertical development",
      "Dedicated account manager",
      "Custom integrations & SLA",
    ],
    buttonText: "Contact us",
    buttonAction: "contact",
    isPopular: false,
  },
]

function PricingCard({ plan }: { plan: typeof plans[0] }) {
  const router = useRouter()

  const cardStyle = {
    width: "100%",
    backgroundColor: "hsla(240, 15%, 9%, 1)",
    backgroundImage:
      "radial-gradient(at 88% 40%, hsla(240, 15%, 9%, 1) 0px, transparent 85%)," +
      "radial-gradient(at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%)," +
      "radial-gradient(at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%)," +
      "radial-gradient(at 0% 64%, hsla(263, 93%, 56%, 1) 0px, transparent 85%)," +
      "radial-gradient(at 41% 94%, hsla(284, 100%, 84%, 1) 0px, transparent 85%)," +
      "radial-gradient(at 100% 99%, hsla(306, 100%, 57%, 1) 0px, transparent 85%)",
    boxShadow: "0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset",
  }

  const borderContainerStyle: React.CSSProperties = {
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: -10,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "calc(100% + 2px)",
    height: "calc(100% + 2px)",
    backgroundImage: "linear-gradient(0deg, hsl(0, 0%, 100%) -50%, hsl(0, 0%, 40%) 100%)",
    borderRadius: "1rem",
  }

  const rotatingBorderStyle: React.CSSProperties = {
    pointerEvents: "none",
    position: "fixed",
    zIndex: 200,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) rotate(0deg)",
    transformOrigin: "left",
    width: "200%",
    height: "10rem",
    backgroundImage: "linear-gradient(0deg, hsla(0, 0%, 100%, 0) 0%, hsl(277, 95%, 60%) 40%, hsl(277, 95%, 60%) 60%, hsla(0, 0%, 40%, 0) 100%)",
    animation: "rotate 8s linear infinite",
  }

  return (
    <div
      className="relative hover:bg-white/[0.04] transition-all duration-300 group rounded-2xl p-6 flex flex-col"
      style={cardStyle}
    >
      <style>{`@keyframes rotate { to { transform: translate(-50%, -50%) rotate(360deg); } }`}</style>

      {plan.isPopular && (
        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <span className="bg-purple-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
            MOST POPULAR
          </span>
        </div>
      )}

      <div className="flex-grow">
        <div style={borderContainerStyle}>
          <div style={rotatingBorderStyle} />
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className={`h-10 w-10 rounded-xl border border-white/20 bg-gradient-to-br ${plan.iconBgClass} flex items-center justify-center`}>
              {plan.icon}
            </div>
            <div>
              <h3 className="text-xl font-medium tracking-tight text-white">{plan.name}</h3>
              <p className="text-xs text-neutral-500">{plan.description}</p>
            </div>
          </div>
          <div className="h-5 w-5 rounded-full border-2 border-white/30" />
        </div>

        <div className="mb-6">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-semibold tracking-tight text-white">{plan.price}</span>
            <span className="text-sm text-neutral-400">{plan.priceDescription}</span>
          </div>
          <p className="text-xs text-neutral-500 mt-1">No credit card required</p>
        </div>

        <ul className="space-y-3 text-sm text-neutral-300">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="flex items-center justify-center w-4 h-4 bg-violet-500 rounded-full flex-shrink-0 mt-0.5">
                <CheckIcon />
              </div>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <button
          onClick={() => {
            if (plan.buttonAction === "contact") {
              window.location.href = "mailto:dinqdigital@gmail.com"
            } else {
              window.open("https://app.dinqdigital.com/signup", "_blank")
            }
          }}
          className="w-full h-12 bg-white rounded-lg text-neutral-900 font-bold hover:bg-neutral-200 transition-colors cursor-pointer border-none"
        >
          {plan.buttonText}
        </button>
      </div>
    </div>
  )
}

export default function AuroraPricing() {
  return (
    <div
      className="relative w-full flex flex-col items-center px-8 py-24"
      style={{ background: "linear-gradient(135deg, #0A0A0F 0%, #1a0a2e 50%, #0f0820 100%)" }}
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
          Simple, transparent pricing
        </h1>
        <p className="text-lg text-neutral-400">
          Start free for 7 days. No credit card required.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 max-w-5xl w-full">
        {plans.map((plan) => (
          <div key={plan.name} className="flex-1">
            <PricingCard plan={plan} />
          </div>
        ))}
      </div>
    </div>
  )
}