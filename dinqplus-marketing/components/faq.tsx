"use client"

export function FAQ() {
  const faqs = [
    {
      question: "What happens after my 7-day trial?",
      answer: "You will be prompted to pick a plan. No charge until you do. You can cancel anytime before the trial ends."
    },
    {
      question: "Can I switch verticals?",
      answer: "Yes, contact us and we will migrate your data to the new vertical at no extra cost."
    },
    {
      question: "Do you support Ethiopian Birr?",
      answer: "Currently USD via Stripe. Ethiopian Birr support is coming soon."
    },
    {
      question: "Is my data safe?",
      answer: "Yes. We use Supabase with row-level security. Your data is completely isolated from other accounts."
    },
    {
      question: "Can I add team members?",
      answer: "Yes, multi-role access is built into every vertical. Admin, manager, and staff roles are included."
    },
    {
      question: "What if I need a custom vertical?",
      answer: "Contact us at dinqdigital@gmail.com. We build custom verticals for enterprise clients."
    },
  ]

  return (
    <section className="py-16 md:py-32" style={{ background: "linear-gradient(135deg, #0A0A0F 0%, #1a0a2e 50%, #0f0820 100%)" }}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-y-12 px-2 lg:grid-cols-[1fr_auto]">
          <div className="text-center lg:text-left">
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl text-white">
              Frequently <br className="hidden lg:block" /> Asked <br className="hidden lg:block" />
              Questions
            </h2>
            <p className="text-white/40">Everything you need to know about Dinq+</p>
          </div>
          <div className="divide-y sm:mx-auto sm:max-w-lg lg:mx-0" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            {faqs.map((faq, i) => (
              <div key={i} className="py-6" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                <h3 className="font-medium text-white">{faq.question}</h3>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
