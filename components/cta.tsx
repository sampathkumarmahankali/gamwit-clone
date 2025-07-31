"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

export default function CTA() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "Cost of Data Analytics Services",
      subtitle: "Data analytics services can be expensive. How can we justify the investment?",
      answer: "Our analytics for gaming provide flexible pricing to suit different business sizes and budgets, ensuring you get the most value out of your investment. We take the time to understand your needs before giving you a customized quote. Most of our customers recover their investment within a year."
    },
    {
      question: "Data Privacy and Security",
      subtitle: "We're concerned about player data privacy and security. How can we ensure data is handled responsibly?",
      answer: "We never collect personal or identifiable information (PII) from your players, so your data stays secure and protected at all times."
    },
    {
      question: "Ease of Integration",
      subtitle: "Our existing systems are complex. How easily can your services be integrated into our infrastructure?",
      answer: "We work closely with your IT team to guide them step-by-step in automating the data transfer needed for GAMWIT. If your team's bandwidth is limited, we can provide additional support at a minimal charge."
    },
    {
      question: "Data Quality and Availability",
      subtitle: "Our data quality is inconsistent, and some data may not be available. How can you work with such data?",
      answer: "Our experts assess your available data and integrate it smoothly into GAMWIT. If some data is inconsistent, we'll guide you through the process to get it on track."
    },
    {
      question: "Resistance to New Data-Driven Strategies",
      subtitle: "Our team may be resistant to adopting new data-driven strategies.",
      answer: "We understand! Our experts provide step-by-step guidance on how to incorporate analytics for gaming operations, helping your team easily adapt to data-driven strategies."
    },
    {
      question: "Lack of Data Expertise",
      subtitle: "We don't have the expertise in-house to handle data analytics.",
      answer: "Don't worry! With game analytics tools from GAMWIT, you can easily access actionable insights without the need for specialized experts. However, if you need additional support, we also offer consulting services for other data needs."
    },
    {
      question: "Skepticism of Data's Impact",
      subtitle: "Can you prove that GAMWIT will actually improve our games and revenue?",
      answer: "The best proof is to give GAMWIT a try yourself, and experience firsthand how AI-powered gaming analytics will improve your games and revenue. But, to reassure you, our parent company, BizAcuity, has been in the data analytics business for over 12 years, with a loyal customer base. Our leadership team brings decades of combined experience, and we're happy to share references from long-term customers."
    },
    {
      question: "Time and Resource Constraints",
      subtitle: "We're already stretched thin with development and operations. How much time and resources will this require?",
      answer: "GAMWIT is designed for easy integration and smooth operation. Our AI-powered gaming analytics models work with minimal intervention, freeing up your team to focus on running and growing your business while we handle the heavy lifting."
    },
    {
      question: "Regulatory Risks",
      subtitle: "How can we ensure we stay compliant with changing data privacy laws and avoid potential legal issues?",
      answer: "We don't handle personal or identifiable information (PII), and we always sign GDPR and Data Processing Agreements. Plus, our Responsible Gaming and Anti-Money Laundering models ensure you stay compliant with the latest regulations."
    }
  ]

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <section id="faqs" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            FAQs
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-6 text-left bg-white hover:bg-slate-50 transition-colors flex items-center justify-between"
              >
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900">{faq.question}</h3>
                  <p className="text-sm text-slate-600">{faq.subtitle}</p>
                </div>
                {openFaq === index ? (
                  <ChevronUp className="h-5 w-5 text-slate-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-slate-500 flex-shrink-0" />
                )}
              </button>
              
              {openFaq === index && (
                <div className="px-6 pb-6 bg-slate-50">
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Gaming Analytics?</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of gaming operators who trust GAMWIT's AI-powered platform to drive growth, ensure compliance, and deliver exceptional player experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200"
              >
                Try for Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent px-8 py-4 rounded-full font-bold"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
