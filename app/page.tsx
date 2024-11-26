import { Check, X, ChevronDown, Shield, DollarSign, Workflow, Layers } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 blur-2xl animate-pulse" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl" />
      <div className="absolute top-40 left-0 w-1 h-1 bg-white rounded-full" />
      <div className="absolute bottom-40 right-20 w-2 h-2 bg-white rounded-full" />
      
      {/* Header */}
      <header className="relative z-10 border-b border-slate-800">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-yellow-400 rounded-full" />
            <span className="text-xl font-bold">MoonEX</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="#" className="hover:text-yellow-400">Home</Link>
            <Link href="#" className="hover:text-yellow-400">About Us</Link>
            <Link href="#" className="hover:text-yellow-400">Roadmap</Link>
            <Link href="#" className="hover:text-yellow-400">FAQs</Link>
            <Link href="#" className="hover:text-yellow-400">Contact Us</Link>
          </div>
          
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
            Connect Wallet
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Trusted Multi-Chain
            <span className="block text-yellow-400">DEX Platform</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-8">
            Trade, earn, and own crypto on the all-in-one multi-chain DEX
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
              Connect Wallet
            </Button>
            <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10">
              Trade Crypto
            </Button>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="relative z-10 bg-slate-900/50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Why <span className="text-yellow-400">MoonEX</span> ?
          </h2>
          
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="font-bold text-lg">Comparison</div>
            <div className="font-bold text-lg text-yellow-400">MoonEX</div>
            <div className="font-bold text-lg text-pink-500">UniSwap</div>
          </div>
          
          {[
            "Point no one",
            "Point no two this",
            "Point no two this",
            "Point no two this",
            "Point no two this"
          ].map((point, index) => (
            <div key={index} className="grid grid-cols-3 gap-4 py-4 border-t border-slate-800">
              <div className="text-slate-400">{point}</div>
              <div><Check className="text-green-500 w-6 h-6" /></div>
              <div><X className="text-red-500 w-6 h-6" /></div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 container mx-auto px-4 py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Our <span className="text-yellow-400">Features</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <DollarSign className="w-8 h-8" />,
              title: "Cheapest TXs",
              description: "Exchange popular digital currencies at the cheapest possible transaction price"
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "CerTIK",
              description: "We are Audited by CerTik. CerTik is the leading security-focused ranking platform to"
            },
            {
              icon: <Workflow className="w-8 h-8" />,
              title: "No Contract Sells",
              description: "No contract sells to fund the marketing wallet"
            },
            {
              icon: <Layers className="w-8 h-8" />,
              title: "CrossDex Support",
              description: "Exchange popular digital currencies at the cheapest possible transaction price"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-slate-800/50 p-6 rounded-lg">
              <div className="text-yellow-400 mb-4">{feature.icon}</div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 container mx-auto px-4 py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-yellow-400">FAQs</span>
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible>
            {[
              {
                question: "How do I get a Referral Code?",
                answer: "Contact our support team to get your unique referral code."
              },
              {
                question: "Do I get rewarded in tokens or ETH when I refer buyers?",
                answer: "You receive your rewards in ETH instantly once someone you refer makes a transaction"
              },
              {
                question: "How do I get a Referral Code?",
                answer: "You can get a referral code by signing up and completing your profile verification."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-yellow-400 rounded-full" />
              <span className="text-xl font-bold">MoonEX</span>
            </div>
            
            <div className="flex gap-8">
              <Link href="#" className="hover:text-yellow-400">About Us</Link>
              <Link href="#" className="hover:text-yellow-400">Roadmap</Link>
              <Link href="#" className="hover:text-yellow-400">FAQs</Link>
              <Link href="#" className="hover:text-yellow-400">Contact Us</Link>
            </div>
            
            <div className="flex gap-4">
              <Link href="#" className="hover:text-yellow-400">
                <span className="sr-only">Telegram</span>
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.178.12.13.145.309.164.433-.001.062.001.13-.003.217z"/>
                  </svg>
                </div>
              </Link>
              <Link href="#" className="hover:text-yellow-400">
                <span className="sr-only">Reddit</span>
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                  </svg>
                </div>
              </Link>
              <Link href="#" className="hover:text-yellow-400">
                <span className="sr-only">Twitter</span>
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1
.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

