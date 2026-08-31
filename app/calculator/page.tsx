"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronRight, Calculator, Landmark } from "lucide-react";

export default function CalculatorPage() {
  const [activeTab, setActiveTab] = useState<"repayment" | "borrowing">("repayment");

  // Repayment State
  const [loanAmount, setLoanAmount] = useState(650000);
  const [interestRate, setInterestRate] = useState(5.88);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyRepayment, setMonthlyRepayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  // Borrowing Power State
  const [incomeSingle, setIncomeSingle] = useState(100000);
  const [incomePartner, setIncomePartner] = useState(0);
  const [monthlyExpenses, setMonthlyExpenses] = useState(3000);
  const [dependants, setDependants] = useState(0);
  const [borrowingPower, setBorrowingPower] = useState(0);

  // Repayment Effect
  useEffect(() => {
    const p = loanAmount;
    const r = (interestRate / 100) / 12;
    const n = loanTerm * 12;
    
    if (r > 0) {
      const repayment = p * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setMonthlyRepayment(repayment);
      setTotalInterest((repayment * n) - p);
    } else {
      setMonthlyRepayment(p / n);
      setTotalInterest(0);
    }
  }, [loanAmount, interestRate, loanTerm]);

  // Borrowing Power Effect (Simplified estimate)
  useEffect(() => {
    // Very rough heuristic for educational purposes
    const totalIncome = incomeSingle + incomePartner;
    const annualExpenses = (monthlyExpenses * 12) + (dependants * 5000);
    const netIncome = totalIncome * 0.7; // rough after-tax estimate
    const availableForLoan = netIncome - annualExpenses;
    
    // Assume 7% assessment rate over 30 years
    const r = 0.07 / 12;
    const n = 30 * 12;
    const monthlyAvailable = availableForLoan / 12;
    
    if (monthlyAvailable > 0) {
      const maxLoan = monthlyAvailable * ((Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n)));
      setBorrowingPower(Math.max(0, maxLoan));
    } else {
      setBorrowingPower(0);
    }
  }, [incomeSingle, incomePartner, monthlyExpenses, dependants]);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* HERO SECTION */}
      <div className="bg-brand-navy py-24 md:py-32 text-center text-white pt-40 relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-20">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#3a5a8c] rounded-full blur-[100px]"></div>
        </div>
        
        <div className="relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Financial Tools
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto px-4"
          >
            Plan your next property move with confidence. Use our calculators to estimate your repayments or borrowing capacity.
          </motion.p>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-white relative -mt-10 z-20 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tabs */}
          <div className="flex justify-center mb-16">
            <div className="bg-slate-100 p-1.5 rounded-full inline-flex relative shadow-inner">
              <button 
                onClick={() => setActiveTab("repayment")}
                className={`relative z-10 px-6 md:px-10 py-3 rounded-full font-bold text-sm md:text-base transition-colors flex items-center gap-2 ${activeTab === "repayment" ? "text-brand-navy" : "text-brand-text-muted hover:text-brand-navy"}`}
              >
                <Calculator className="w-4 h-4" /> Repayments
              </button>
              <button 
                onClick={() => setActiveTab("borrowing")}
                className={`relative z-10 px-6 md:px-10 py-3 rounded-full font-bold text-sm md:text-base transition-colors flex items-center gap-2 ${activeTab === "borrowing" ? "text-brand-navy" : "text-brand-text-muted hover:text-brand-navy"}`}
              >
                <Landmark className="w-4 h-4" /> Borrowing Power
              </button>
              
              {/* Tab Highlight Background */}
              <div 
                className={`absolute top-1.5 bottom-1.5 w-[calc(50%-0.375rem)] bg-white rounded-full shadow-sm transition-all duration-300 ease-out z-0`}
                style={{ left: activeTab === "repayment" ? "0.375rem" : "calc(50%)" }}
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* CALCULATOR CONTROLS */}
            <div className="bg-brand-warm p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-sm w-full">
              
              {activeTab === "repayment" ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10">
                  <div>
                    <div className="flex justify-between mb-4">
                      <span className="font-bold text-brand-navy">Loan amount</span>
                      <span className="font-bold text-brand-teal text-xl">${loanAmount.toLocaleString()}</span>
                    </div>
                    <input type="range" min="100000" max="3000000" step="10000" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-teal" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-4">
                      <span className="font-bold text-brand-navy">Interest rate</span>
                      <span className="font-bold text-brand-teal text-xl">{interestRate.toFixed(2)}%</span>
                    </div>
                    <input type="range" min="1" max="10" step="0.01" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-teal" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-4">
                      <span className="font-bold text-brand-navy">Loan term</span>
                      <span className="font-bold text-brand-teal text-xl">{loanTerm} years</span>
                    </div>
                    <input type="range" min="5" max="40" step="1" value={loanTerm} onChange={(e) => setLoanTerm(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-teal" />
                  </div>
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10">
                  <div>
                    <div className="flex justify-between mb-4">
                      <span className="font-bold text-brand-navy">Your gross income (Before tax)</span>
                      <span className="font-bold text-brand-teal text-xl">${incomeSingle.toLocaleString()}</span>
                    </div>
                    <input type="range" min="40000" max="400000" step="5000" value={incomeSingle} onChange={(e) => setIncomeSingle(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-teal" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-4">
                      <span className="font-bold text-brand-navy">Partner's income (Optional)</span>
                      <span className="font-bold text-brand-teal text-xl">${incomePartner.toLocaleString()}</span>
                    </div>
                    <input type="range" min="0" max="400000" step="5000" value={incomePartner} onChange={(e) => setIncomePartner(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-teal" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-4">
                      <span className="font-bold text-brand-navy">Monthly living expenses</span>
                      <span className="font-bold text-brand-teal text-xl">${monthlyExpenses.toLocaleString()}</span>
                    </div>
                    <input type="range" min="1000" max="15000" step="500" value={monthlyExpenses} onChange={(e) => setMonthlyExpenses(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-teal" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-4">
                      <span className="font-bold text-brand-navy">Number of dependants</span>
                      <span className="font-bold text-brand-teal text-xl">{dependants}</span>
                    </div>
                    <input type="range" min="0" max="5" step="1" value={dependants} onChange={(e) => setDependants(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-teal" />
                  </div>
                </motion.div>
              )}
            </div>

            {/* RESULTS PANEL */}
            <div>
              {activeTab === "repayment" ? (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <p className="text-brand-teal font-bold tracking-widest text-xs uppercase mb-2">Your Results</p>
                  <h2 className="font-serif text-3xl md:text-4xl text-brand-navy mb-8">Repayment Breakdown</h2>
                  
                  <div className="mb-10">
                    <p className="text-6xl font-serif text-brand-navy mb-2">${Math.round(monthlyRepayment).toLocaleString()}</p>
                    <p className="text-brand-text-muted font-bold text-sm uppercase tracking-wider">Monthly Repayment (P&I)</p>
                  </div>

                  {/* Visual Breakdown Bar */}
                  <div className="mb-10">
                    <div className="flex justify-between text-sm font-bold mb-3">
                      <span className="text-brand-navy">Principal: ${loanAmount.toLocaleString()}</span>
                      <span className="text-brand-teal">Interest: ${Math.round(totalInterest).toLocaleString()}</span>
                    </div>
                    <div className="w-full h-4 rounded-full overflow-hidden flex shadow-inner">
                      <div className="bg-brand-navy h-full transition-all duration-500" style={{ width: `${(loanAmount / (loanAmount + totalInterest)) * 100}%` }}></div>
                      <div className="bg-brand-teal h-full transition-all duration-500" style={{ width: `${(totalInterest / (loanAmount + totalInterest)) * 100}%` }}></div>
                    </div>
                    <div className="mt-3 text-right">
                       <p className="text-sm font-bold text-slate-500">Total over {loanTerm} years: ${(loanAmount + totalInterest).toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="bg-brand-warm p-6 rounded-2xl border border-slate-100 flex items-start gap-4 mb-8">
                     <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 text-brand-teal font-bold">!</div>
                     <p className="text-sm text-brand-text-muted leading-relaxed">
                       A slight change in interest rate makes a huge difference over {loanTerm} years. Our brokers negotiate with lenders to shave off fractions of a percent, potentially saving you tens of thousands.
                     </p>
                  </div>

                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <p className="text-brand-teal font-bold tracking-widest text-xs uppercase mb-2">Your Results</p>
                  <h2 className="font-serif text-3xl md:text-4xl text-brand-navy mb-8">Estimated Borrowing Power</h2>
                  
                  <div className="mb-10">
                    <p className="text-6xl font-serif text-brand-teal mb-2">${Math.round(borrowingPower).toLocaleString()}</p>
                    <p className="text-brand-text-muted font-bold text-sm uppercase tracking-wider">Maximum Loan Amount</p>
                  </div>

                  <p className="text-brand-text-muted text-lg leading-relaxed mb-8">
                    This is a rough estimate based on a standard assessment rate. Every lender assesses living expenses and income shading differently. Some lenders might lend you $50k more, while others might lend you $50k less based on the exact same numbers.
                  </p>
                  
                  <ul className="space-y-3 mb-10">
                    {['We analyze lender-specific policies', 'We identify which bank favors your income type', 'We help structure debts to increase capacity'].map((benefit, i) => (
                       <li key={i} className="flex items-start gap-3">
                         <div className="w-5 h-5 mt-0.5 rounded-full bg-brand-soft-teal flex items-center justify-center flex-shrink-0">
                           <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                         </div>
                         <span className="text-brand-navy font-medium">{benefit}</span>
                       </li>
                    ))}
                  </ul>

                </motion.div>
              )}
              
              <Link href="/contact" className="inline-flex items-center justify-center px-8 h-14 bg-brand-navy text-white font-bold rounded-full hover:bg-brand-teal transition-colors shadow-lg">
                Get a formal assessment <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              
              <p className="text-[10px] text-brand-text-muted mt-8 leading-tight max-w-md">
                Disclaimer: The results from this calculator should be used as an indication only. Results do not represent either quotes or pre-qualifications for a product. It is advised that you consult your financial adviser before taking out a loan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
