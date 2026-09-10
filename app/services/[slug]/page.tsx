"use client";

import { use } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowRight, FileText, Key, ChevronRight, AlertCircle, Info, ShieldAlert } from "lucide-react";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

type ContentBlock = {
  title: string;
  description?: string;
  list?: string[];
  listTitle?: string;
  listDetailed?: { title: string; description: string }[];
};

type ServiceData = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  processTitle?: string;
  processSubtitle?: string;
  process?: ProcessStep[];
  contentBlocks?: ContentBlock[];
  considerationsTitle?: string;
  considerations?: { title: string; description: string }[];
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
};

const servicesData: Record<string, ServiceData> = {
  "first-home-buyers": {
    title: "First Home Buyers",
    subtitle: "Your first home starts with the right loan.",
    description: "Buying your first home is a major step. From understanding how much you can borrow to navigating government schemes, contracts and settlement, there is a lot to get right. We make the process easier by helping you understand your options, compare suitable lenders and move confidently from your first assessment to owning your home.",
    image: "https://images.pexels.com/photos/7599735/pexels-photo-7599735.jpeg?auto=compress&cs=tinysrgb&w=1600",
    processTitle: "From your first conversation to settlement",
    process: [
      { number: "01", title: "Understand your position", description: "Before you start looking at properties, we assess your income, expenses, existing commitments and deposit to establish your borrowing capacity. You'll know what you can realistically afford — and what your upfront costs may look like." },
      { number: "02", title: "Find the right loan", description: "We compare home loan options across a broad panel of Australian lenders to identify a structure that suits your circumstances, whether you're looking for a competitive rate, flexibility, a low-deposit option or specialist lending." },
      { number: "03", title: "Get pre-approved", description: "A pre-approval gives you a clearer price range before you start making offers. It can also put you in a stronger position when you're ready to negotiate on a property." },
      { number: "04", title: "Buy with confidence", description: "Once you've found the right property, we help coordinate the finance process and work alongside your lender and conveyancer through to settlement." }
    ],
    contentBlocks: [
      {
        title: "You may not need a 20% deposit",
        description: "A large deposit isn't the only pathway into your first home. Some eligible buyers may be able to purchase with a deposit as low as 5% without paying Lenders Mortgage Insurance under applicable government schemes. Eligibility and requirements vary by state and individual circumstances.",
        listTitle: "Depending on your circumstances and eligibility, you may be able to access:",
        list: [
          "First Home Guarantee schemes",
          "First Home Owner Grants",
          "Stamp duty concessions",
          "Low-deposit lending",
          "Guarantor arrangements",
          "Specialist lending solutions"
        ]
      },
      {
        title: "Your circumstances don't have to be straightforward.",
        description: "The right lender isn't always the biggest bank. Our job is to understand your situation and identify lenders whose policies fit it.",
        listTitle: "We work with a range of borrowers, including:",
        list: [
          "First-time buyers with smaller deposits",
          "Self-employed applicants",
          "Temporary visa holders",
          "Buyers with unusual income structures",
          "Applicants requiring specialist lending",
          "Buyers exploring guarantor arrangements",
          "Professionals eligible for LMI concessions"
        ]
      },
      {
        title: "What to have ready",
        listTitle: "Before applying, it helps to have:",
        list: [
          "Evidence of your income",
          "Details of your existing debts and expenses",
          "Your deposit and savings history",
          "Identification and visa documentation where applicable",
          "Information about your intended property",
          "Details of any government scheme you may qualify for"
        ]
      }
    ],
    considerationsTitle: "A few things first-home buyers often overlook",
    considerations: [
      { title: "Pre-approval isn't final approval.", description: "Your circumstances and the property itself may still need to be assessed before the loan is formally approved." },
      { title: "Don't stretch your budget to the absolute limit.", description: "Allow room for stamp duty, conveyancing, inspections, insurance, moving costs and unexpected expenses." },
      { title: "Be careful with your finances during the application.", description: "Changing employment, taking on new debt or significantly changing your financial position can affect your application." },
      { title: "Understand the contract before signing.", description: "Your mortgage broker and conveyancer play different roles, and both can be important before you commit to a purchase." }
    ],
    cta: {
      title: "Your first home. A clearer way forward.",
      description: "We'll help you understand your borrowing position, explore your loan options and guide you through the process from application to settlement.",
      buttonText: "Book a free, no-obligation consultation."
    }
  },
  "refinancing": {
    title: "Refinancing",
    subtitle: "Your current home loan doesn't have to be your forever loan.",
    description: "Your financial situation changes. Your home loan should be able to change with it. Refinancing can help you secure a more competitive loan, reduce repayments, access built-up equity or restructure your finances around your next goal. We compare your existing loan against options from a broad panel of lenders and help you understand whether switching actually makes financial sense.",
    image: "https://images.pexels.com/photos/28456460/pexels-photo-28456460.jpeg?auto=compress&cs=tinysrgb&w=1600",
    processTitle: "Before you switch, look at the whole picture.",
    processSubtitle: "The cheapest rate isn't necessarily the best loan. We look at the complete structure.",
    process: [
      { number: "01", title: "Calculate the real cost", description: "Refinancing can involve discharge fees, application costs, settlement charges, government registration fees and, in some cases, fixed-rate break costs or LMI. A lower interest rate only helps if the savings outweigh those costs." },
      { number: "02", title: "Find your break-even point", description: "We calculate how long your interest savings will take to recover the cost of refinancing. That gives you a much clearer answer to the question: \"Is switching actually worth it?\"" },
      { number: "03", title: "Look beyond the rate", description: "Your new loan may offer features that are more valuable over time, such as offset accounts, redraw facilities, flexible repayment options, additional repayment flexibility, or interest-only structures where appropriate." }
    ],
    contentBlocks: [
      {
        title: "Why refinance?",
        listTitle: "There isn't one reason to refinance. You might be looking to:",
        list: [
          "Reduce your interest rate",
          "Lower your regular repayments",
          "Access equity in your property",
          "Fund renovations",
          "Purchase another property",
          "Consolidate existing debts",
          "Add an offset account",
          "Access better redraw or repayment features",
          "Change your fixed or variable loan structure"
        ]
      },
      {
        title: "Refinancing can be particularly useful when...",
        list: [
          "Your current loan is no longer competitive.",
          "You've built enough equity to potentially improve your LVR.",
          "Your fixed-rate period is coming to an end.",
          "You want to access equity for another investment or renovation.",
          "Your financial circumstances have changed.",
          "Your current loan lacks features that would make managing your money easier."
        ]
      },
      {
        title: "Self-employed?",
        description: "Being self-employed doesn't automatically mean refinancing is difficult. Lenders assess self-employed income differently, and the documentation required can vary. For borrowers who don't yet have a complete two-year financial history, some lenders also offer low-documentation pathways.",
        listTitle: "Depending on your circumstances, this may include:",
        list: [
          "Tax returns",
          "Notices of assessment",
          "Business or trust financial statements",
          "BAS statements",
          "Business bank statements",
          "Evidence of consistent income"
        ]
      },
      {
        title: "A smarter way to refinance",
        description: "We compare your current position against available alternatives and show you: Current loan → Switching costs → Potential savings → Break-even point → Long-term benefit.\n\nIf refinancing doesn't stack up, we'll tell you."
      }
    ],
    considerationsTitle: "Refinancing isn't always the right answer.",
    considerations: [
      { title: "Sometimes staying with your existing lender makes more sense.", description: "We'll show you the numbers rather than simply recommending that you switch." },
      { title: "The potential savings are too small", description: "If the difference is negligible, switching might not be worth the effort." },
      { title: "Break costs or fees are too high", description: "Your fixed-rate break costs might be substantial, or your equity position could trigger additional LMI." },
      { title: "Your situation makes it difficult", description: "Your loan balance is relatively low, your income or credit position makes a new application difficult, or you're planning to sell the property soon." }
    ],
    cta: {
      title: "Is your home loan still working for you?",
      description: "Let's review your current loan and see whether there's a better structure available.",
      buttonText: "Book a free, no-obligation refinancing review."
    }
  },
  "investment-loans": {
    title: "Property Investment",
    subtitle: "Build your property portfolio with a financing strategy.",
    description: "Buying an investment property isn't simply about finding a property you like. The way your loans are structured can influence your cash flow, borrowing capacity and ability to purchase again in the future. We help investors structure finance around both the property they're buying today and the portfolio they want to build tomorrow.",
    image: "https://images.pexels.com/photos/8730057/pexels-photo-8730057.jpeg?auto=compress&cs=tinysrgb&w=1600",
    processTitle: "Three things every investor should understand",
    process: [
      { number: "01", title: "Cash flow", description: "Interest-only lending can reduce repayments during the interest-only period, potentially improving short-term cash flow. However, because the principal isn't being reduced, repayments can increase when the loan moves to principal and interest. The right structure depends on your overall strategy." },
      { number: "02", title: "Equity", description: "Existing property equity can potentially be used towards the deposit and costs of another investment. This can help you grow without relying entirely on additional cash savings — but it also increases your overall debt exposure." },
      { number: "03", title: "Growth and risk", description: "Property can create long-term wealth through capital growth and rental income, but neither is guaranteed. Markets fluctuate, properties can underperform and investment costs can exceed rental income. Your finance strategy needs to account for those risks." }
    ],
    contentBlocks: [
      {
        title: "Finance for your investment strategy",
        listTitle: "Depending on your circumstances, we can help you explore:",
        list: [
          "Investment property loans",
          "Principal & interest lending",
          "Interest-only structures",
          "Equity releases",
          "Low-deposit investment options",
          "Guarantor solutions",
          "Trust lending",
          "Portfolio lending strategies",
          "Refinancing for investment purposes"
        ]
      },
      {
        title: "How can you fund your next investment?",
        listDetailed: [
          { title: "Use existing equity", description: "If you've built equity in your home or another property, you may be able to access part of it to fund your next purchase. Potential advantage: Less reliance on cash savings. Consideration: Your total debt increases and your available equity decreases." },
          { title: "Use your savings", description: "A larger cash contribution can strengthen your application and may help reduce or avoid LMI. Potential advantage: Lower overall leverage. Consideration: Don't use every dollar you have. Maintaining a cash buffer is important." },
          { title: "Use family or guarantor support", description: "A guarantor arrangement may help some buyers enter the market with a smaller deposit. Potential advantage: Lower upfront contribution. Consideration: The guarantor takes on financial risk and should understand the arrangement fully." }
        ]
      },
      {
        title: "Growing beyond your first investment",
        description: "As your portfolio grows, your financing strategy becomes increasingly important. One lender may work well for your first property but become restrictive as your portfolio expands. That's why experienced investors often use multiple lenders and keep properties appropriately structured rather than putting everything with one bank.",
        listTitle: "Lenders assess your:",
        list: [
          "Income and living expenses",
          "Existing debts and overall serviceability",
          "Rental income",
          "Equity and loan structure",
          "Number and value of existing properties"
        ]
      },
      {
        title: "What we look at before your next purchase",
        description: "We assess the bigger picture: Current property → Available equity → Existing debt → Rental income → Borrowing capacity → Next purchase → Future borrowing capacity.\n\nThis allows us to consider not just whether you can buy the next property, but how that purchase affects what you can do afterwards."
      }
    ],
    considerationsTitle: "Investment finance isn't one-size-fits-all.",
    considerations: [
      { title: "Tailored to your goals", description: "Whether you're purchasing your first investment property or building an established portfolio, we'll compare lending options based on your goals and circumstances." },
      { title: "Understand the trade-offs", description: "We'll help you understand the trade-offs before you commit, ensuring you are well-informed." }
    ],
    cta: {
      title: "Your next property should fit into a bigger plan.",
      description: "Let's review your current position and explore what your next investment could look like.",
      buttonText: "Book a free, no-obligation portfolio review."
    }
  },
  "construction-loans": {
    title: "Construction Loans",
    subtitle: "Build your home with finance that moves with the build.",
    description: "Construction finance works differently from a standard home loan. Instead of receiving the entire loan amount upfront, funds are released progressively as construction reaches agreed milestones. That means your loan needs to be structured around your land purchase, building contract, construction schedule and expected costs.",
    image: "https://images.pexels.com/photos/37253217/pexels-photo-37253217.jpeg?auto=compress&cs=tinysrgb&w=1600",
    processTitle: "How progress payments work",
    processSubtitle: "Construction typically moves through a series of stages. During construction, interest is generally charged only on the amount that has been drawn.",
    process: [
      { number: "01", title: "Slab", description: "Site preparation and foundation work are completed." },
      { number: "02", title: "Frame", description: "The structural frame is erected." },
      { number: "03", title: "Lock-up", description: "External walls, roofing, doors and windows are installed." },
      { number: "04", title: "Fixing", description: "Internal plumbing, electrical, plastering and other internal works progress." },
      { number: "05", title: "Practical completion", description: "Finishing work is completed and the property is prepared for handover." },
      { number: "06", title: "Final drawdown", description: "The remaining approved funds are released following completion requirements." }
    ],
    contentBlocks: [
      {
        title: "Land + construction finance",
        description: "A construction loan can combine the finance required to purchase vacant land with the funding needed to build your new home. Rather than receiving the entire construction amount at the beginning, the lender releases funds through staged progress payments."
      },
      {
        title: "What can you build?",
        description: "Each project has different lender requirements, so the construction type and builder can affect which lenders are available.",
        listTitle: "Construction finance may be suitable for:",
        list: [
          "Custom-built homes",
          "House-and-land packages",
          "Knockdown and rebuild projects",
          "Duplexes and dual-occupancy projects",
          "Selected owner-builder projects",
          "New investment properties"
        ]
      },
      {
        title: "Why construction finance can work differently",
        listDetailed: [
          { title: "Pay interest on what's drawn", description: "Because funds are released progressively, you generally pay interest on the amount actually used during construction." },
          { title: "Plan around your building contract", description: "Your loan needs to reflect the approved construction cost and agreed progress payment schedule." },
          { title: "Greater control over your home", description: "Building allows you to select the design, layout, finishes and specifications around your needs." },
          { title: "Potential government support", description: "Eligible first-home buyers may qualify for government schemes or grants when building a new home, subject to current rules and state or territory eligibility." }
        ]
      },
      {
        title: "How much deposit do you need?",
        description: "Many lenders require around 10–20% of the combined land and construction cost, although eligible borrowers may have access to lower-deposit options through government schemes or other lending arrangements. Your required contribution depends on the lender, project, property value and your individual financial position."
      },
      {
        title: "From block of land to completed home",
        description: "We can help coordinate the finance strategy across the entire journey: Borrowing assessment → Land purchase → Construction approval → Progress payments → Build completion → Final loan structure.\n\nWe'll compare lenders, assess the project and help ensure your finance is structured around the construction timeline."
      }
    ],
    considerationsTitle: "Construction comes with risks.",
    considerations: [
      { title: "Cost variations", description: "Changes or upgrades can increase the final cost." },
      { title: "Construction delays", description: "Delays can affect your timeline and financial commitments." },
      { title: "Builder risk", description: "Builder insolvency or contractual issues can create significant complications." },
      { title: "Valuation risk", description: "If the completed property is valued below expectations, additional funds may be required." },
      { title: "Repayment changes", description: "Once construction is completed, your repayments may increase as the loan moves into its normal repayment structure." },
      { title: "Lender requirements", description: "Not every lender accepts every builder, project type or construction arrangement." }
    ],
    cta: {
      title: "Ready to build?",
      description: "Let's work through your land, construction costs and borrowing position before you commit to the build.",
      buttonText: "Book a free, no-obligation construction loan consultation."
    }
  }
,
  "smsf-loans": {
    title: "SMSF Loans",
    subtitle: "Strategic borrowing for your self-managed super fund.",
    description: "Investing in property through your Self-Managed Super Fund (SMSF) requires specialized lending solutions and strict compliance. We guide you through Limited Recourse Borrowing Arrangements (LRBAs) to ensure your fund is structured correctly for residential or commercial property acquisition.",
    image: "https://images.pexels.com/photos/33175650/pexels-photo-33175650.jpeg?auto=compress&cs=tinysrgb&w=1600",
    processTitle: "Structured for compliance and growth.",
    processSubtitle: "Navigating SMSF lending requires precision. Here is how we ensure your strategy aligns with regulations.",
    process: [
      { number: "01", title: "Strategy Alignment", description: "We work alongside your financial planner or accountant to ensure borrowing aligns with your SMSF investment strategy." },
      { number: "02", title: "Lender Selection", description: "Not all lenders offer SMSF loans. We connect you with specialized lenders who provide competitive rates for super funds." },
      { number: "03", title: "Structuring & Compliance", description: "Ensuring the Bare Trust and LRBA are established correctly before you commit to purchasing." }
    ],
    contentBlocks: [
      {
        title: "Commercial vs Residential",
        listTitle: "Your SMSF can invest in both, with unique benefits:",
        list: [
          "Purchase commercial premises for your own business to lease",
          "Acquire residential investment properties",
          "Tax-advantaged rental income within the fund",
          "Potential capital gains tax exemptions in pension phase"
        ]
      }
    ],
    considerations: [
      { title: "Strict Compliance", description: "The property must pass the 'sole purpose test' of providing retirement benefits to fund members." },
      { title: "No Personal Use", description: "You or your relatives cannot live in or rent a residential property owned by your SMSF." },
      { title: "Liquidity Requirements", description: "Lenders require your fund to retain adequate liquidity post-settlement." }
    ],
    cta: {
      title: "Scale your super fund's potential.",
      description: "Speak with an SMSF lending specialist today to explore your fund's borrowing capacity.",
      buttonText: "Request an SMSF assessment."
    }
  },
  "debt-consolidation": {
    title: "Debt Consolidation",
    subtitle: "Regain control with a single, simplified repayment.",
    description: "Multiple personal loans, credit cards, and car loans can create financial stress and attract exorbitant interest rates. By consolidating your debts into your home loan, you can dramatically reduce your overall monthly commitments, simplify your finances, and redirect your cash flow toward wealth creation.",
    image: "https://images.pexels.com/photos/7876501/pexels-photo-7876501.jpeg?auto=compress&cs=tinysrgb&w=1600",
    processTitle: "A clear path back to financial freedom.",
    processSubtitle: "Consolidating debt is about strategy, not just moving money around.",
    process: [
      { number: "01", title: "Assess Total Debt", description: "We review your current home loan alongside all unsecured debts, calculating your blended interest rate and total monthly commitments." },
      { number: "02", title: "Equity Valuation", description: "We determine the usable equity in your property to see how much debt can be absorbed into a new mortgage structure." },
      { number: "03", title: "Restructure & Simplify", description: "We transition your multiple high-interest debts into one manageable repayment at home loan rates." }
    ],
    contentBlocks: [
      {
        title: "Why consolidate?",
        listTitle: "The tangible benefits of rolling your debts into one:",
        list: [
          "Lower average interest rate across all borrowings",
          "Reduced total monthly repayment obligations",
          "One single payment to track and manage",
          "Improved monthly cash flow for living or investing"
        ]
      }
    ],
    considerations: [
      { title: "Long-term Costs", description: "Spreading a short-term debt (like a car loan) over a 30-year mortgage means you could pay more interest over the life of the loan. We'll show you how to maintain higher repayments to clear it faster." },
      { title: "Equity Limits", description: "Lenders typically cap consolidation at 80% to 90% of your property's value." }
    ],
    cta: {
      title: "Ready to simplify your finances?",
      description: "Let us calculate exactly how much you could save each month by restructuring your debts.",
      buttonText: "Start your free review."
    }
  },
  "healthcare-professionals": {
    title: "Healthcare & Professionals",
    subtitle: "Exclusive lending policies for medical and industry professionals.",
    description: "As a doctor, dentist, accountant, or legal professional, lenders view your income profile differently. You have access to exclusive policy exceptions, including the ability to borrow up to 90% of a property's value without paying Lenders Mortgage Insurance (LMI), and heavily discounted interest rates.",
    image: "https://images.pexels.com/photos/7579046/pexels-photo-7579046.jpeg?auto=compress&cs=tinysrgb&w=1600",
    processTitle: "Finance tailored to your profession.",
    processSubtitle: "We ensure you capitalize on the industry exceptions available to you.",
    process: [
      { number: "01", title: "Eligibility Check", description: "We confirm whether your specific degree, registration, and membership qualify you for professional waivers." },
      { number: "02", title: "Lender Matching", description: "Different lenders favor different professions. We align you with the bank offering the strongest concessions for your field." },
      { number: "03", title: "Fast-Track Approval", description: "Leveraging our premium lender relationships to expedite your application, recognizing your busy schedule." }
    ],
    contentBlocks: [
      {
        title: "The Professional Advantage",
        listTitle: "If eligible, you could benefit from:",
        list: [
          "Waived Lenders Mortgage Insurance (LMI) up to 90% LVR",
          "Specialized income assessment for private practice or locum work",
          "Significantly discounted variable and fixed rates",
          "Higher borrowing capacities based on projected earnings"
        ]
      }
    ],
    considerations: [
      { title: "Registration Requirements", description: "You typically need to be registered with the relevant governing body (e.g., AHPRA) to qualify." },
      { title: "Income Verification", description: "While exceptions exist, lenders still require evidence of sustainable income, especially for self-employed professionals." }
    ],
    cta: {
      title: "Unlock your professional benefits.",
      description: "Discover the exclusive rates and LMI waivers available for your profession.",
      buttonText: "Check your eligibility."
    }
  },
  "self-employed": {
    title: "Self-Employed Loans",
    subtitle: "Finance built for business owners and entrepreneurs.",
    description: "Getting a loan when you run your own business can feel overly complicated. We speak the language of self-employed finance. Whether you have full financial statements, are using an 'alt-doc' solution with BAS statements, or rely on add-backs, we know how to present your application for a fast approval.",
    image: "https://images.pexels.com/photos/8962225/pexels-photo-8962225.jpeg?auto=compress&cs=tinysrgb&w=1600",
    processTitle: "We look at the reality of your income.",
    processSubtitle: "Your tax return doesn't always tell the full story of your business.",
    process: [
      { number: "01", title: "Income Analysis", description: "We review your company financials, trusts, and personal returns to calculate your true servicing capacity." },
      { number: "02", title: "Policy Matching", description: "We navigate lender policies to find the bank that views your specific company structure and add-backs favorably." },
      { number: "03", title: "Application Preparation", description: "We present a comprehensive, logical case to the lender's credit team to avoid unnecessary questions." }
    ],
    contentBlocks: [
      {
        title: "Flexible Verification",
        listTitle: "Depending on your situation, we can verify income using:",
        list: [
          "Full company and personal tax returns",
          "Accountant's declaration (Alt-Doc)",
          "Business Activity Statements (BAS)",
          "Business bank statements"
        ]
      }
    ],
    considerations: [
      { title: "Trading History", description: "Most prime lenders require 2 years of ABN registration, but some specialist policies only require 1 year or even 6 months in certain industries." },
      { title: "Add-backs", description: "We can often add back one-off expenses, depreciation, and superannuation contributions to boost your borrowing power." }
    ],
    cta: {
      title: "Let's simplify your finance.",
      description: "Focus on running your business while we handle the banks.",
      buttonText: "Speak with a self-employed specialist."
    }
  },
  "owner-occupier": {
    title: "Owner-Occupier Loans",
    subtitle: "Your next move, expertly financed.",
    description: "Whether you are upgrading to a larger family home, downsizing, or renovating your current property, securing the right owner-occupier loan ensures you have the flexibility you need. We help you structure your finance to accommodate bridging loans, offset accounts, and redraw facilities to support your lifestyle.",
    image: "https://images.pexels.com/photos/31664773/pexels-photo-31664773.jpeg?auto=compress&cs=tinysrgb&w=1600",
    processTitle: "Seamless transition to your new home.",
    processSubtitle: "Timing is everything when upgrading or moving.",
    process: [
      { number: "01", title: "Borrowing Power", description: "We calculate exactly what you can afford for your next purchase, factoring in the sale of your current home." },
      { number: "02", title: "Bridging Strategies", description: "If you need to buy before you sell, we arrange bridging finance to facilitate a smooth transition." },
      { number: "03", title: "Loan Restructuring", description: "We ensure your new loan has the right features—like multiple offset accounts—to help you pay it down faster." }
    ],
    contentBlocks: [
      {
        title: "Key Features to Consider",
        listTitle: "Optimize your owner-occupier loan with:",
        list: [
          "100% Offset accounts to reduce interest",
          "Redraw facilities for unexpected expenses",
          "Fixed vs Variable rate strategies",
          "Portability features to take your loan with you"
        ]
      }
    ],
    considerations: [
      { title: "Bridging Risks", description: "Bridging loans can be expensive if your existing property takes longer to sell than anticipated." },
      { title: "Valuations", description: "The amount you can borrow heavily depends on the conservative bank valuation of your current property." }
    ],
    cta: {
      title: "Make your next move with confidence.",
      description: "We'll coordinate the finance so you can focus on finding the perfect home.",
      buttonText: "Discuss your upgrade strategy."
    }
  },
  "home-loans": {
    title: "Home Loans",
    subtitle: "Your foundation for the future.",
    description: "A well-structured loan can significantly impact your mortgage's overall cost. With access to a diverse range of lenders, we will assist you in evaluating and selecting a home loan that meets your criteria.",
    image: "https://images.pexels.com/photos/37079556/pexels-photo-37079556.jpeg?auto=compress&cs=tinysrgb&w=1600",
    cta: {
      title: "Ready to explore your home loan options?",
      description: "Speak with one of our brokers today to find the right loan for you.",
      buttonText: "Get Started"
    }
  },
  "pre-approval": {
    title: "Pre Approval",
    subtitle: "Know your borrowing capacity.",
    description: "Obtaining pre-approval allows you to know your borrowing capacity before making offers. We will assist you through the steps, prepare your application, and collaborate with the lender to obtain approval.",
    image: "https://images.pexels.com/photos/11731740/pexels-photo-11731740.jpeg?auto=compress&cs=tinysrgb&w=1600",
    cta: {
      title: "Get your pre-approval sorted.",
      description: "Contact us to start your pre-approval process today.",
      buttonText: "Apply Now"
    }
  },
  "personal-loans": {
    title: "Personal Loans",
    subtitle: "Finance for your personal needs.",
    description: "Whether managing debt, financing a significant purchase, or handling major expenses, a personal loan can assist in spreading the cost into manageable payments with a consistent repayment plan.",
    image: "https://images.pexels.com/photos/11637810/pexels-photo-11637810.jpeg?auto=compress&cs=tinysrgb&w=1600",
    cta: {
      title: "Need a personal loan?",
      description: "We can help you find a competitive personal loan for your needs.",
      buttonText: "Learn More"
    }
  },
  "commercial-loans": {
    title: "Commercial Loans",
    subtitle: "Grow your business with the right finance.",
    description: "We are an experienced team of commercial brokers that can provide guidance for large-scale development and construction deals as well as a wide array of other commercial transactions.",
    image: "https://images.pexels.com/photos/7599735/pexels-photo-7599735.jpeg?auto=compress&cs=tinysrgb&w=1600",
    cta: {
      title: "Discuss your commercial finance needs.",
      description: "Get in touch with our commercial lending experts today.",
      buttonText: "Contact Us"
    }
  },
  "business-lending": {
    title: "Business Lending",
    subtitle: "Fuel your business growth.",
    description: "We understand that obtaining business loans differs from getting a standard mortgage. We present you with the best loan options from numerous lenders, aiding your business's success.",
    image: "https://images.pexels.com/photos/28456460/pexels-photo-28456460.jpeg?auto=compress&cs=tinysrgb&w=1600",
    cta: {
      title: "Ready to scale your business?",
      description: "Let's explore your business lending options.",
      buttonText: "Get Started"
    }
  },
  "vehicle-finance": {
    title: "Vehicle Finance",
    subtitle: "Drive away with the right loan.",
    description: "We help you compare and secure vehicle finance for personal or business use. With access to a wide range of lenders, we'll find a competitive rate and repayment structure that suits you.",
    image: "https://images.pexels.com/photos/8730057/pexels-photo-8730057.jpeg?auto=compress&cs=tinysrgb&w=1600",
    cta: {
      title: "Looking for vehicle finance?",
      description: "Speak to our team about securing your car loan.",
      buttonText: "Enquire Now"
    }
  },
  "asset-finance": {
    title: "Asset Finance",
    subtitle: "Finance for your equipment and machinery.",
    description: "Asset finance encompasses lending options tailored for purchasing vehicles, machinery, and equipment. We can provide you with suitable options that align with your requirements.",
    image: "https://images.pexels.com/photos/37253217/pexels-photo-37253217.jpeg?auto=compress&cs=tinysrgb&w=1600",
    cta: {
      title: "Need equipment for your business?",
      description: "Discover our competitive asset finance solutions.",
      buttonText: "Learn More"
    }
  }

};

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const data = servicesData[slug];

  if (!data) {
    notFound();
  }

  return (
    <div className="flex flex-col font-sans overflow-x-hidden bg-white relative">
      
      {/* GLOBAL CONTINUOUS ORGANIC SIDEBAR */}
      <div className="hidden lg:block absolute left-0 top-0 w-full h-[1400px] z-10 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1440 1024" className="absolute top-0 left-[-20%] md:left-0 w-[140%] md:w-[60%] h-full opacity-95" preserveAspectRatio="none">
          <path d="M0,0 L800,0 C600,300 900,700 0,950 Z" fill="url(#sidebar-gradient)" />
          <defs>
            <linearGradient id="sidebar-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--color-brand-teal)" />
              <stop offset="100%" stopColor="var(--color-brand-teal-light)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* HERO SECTION */}
      <div className="relative h-[40vh] md:h-[50vh] w-full">
         <Image 
           src={data.image} 
           alt={data.title} 
           fill 
           className="object-cover object-top" 
           priority
           unoptimized
           referrerPolicy="no-referrer"
         />
         <div className="absolute inset-0 bg-black/20 z-0"></div>
      </div>

      {/* MAIN CONTENT SECTION (3-Column Layout) */}
      <section className="relative pb-12 z-20">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 relative pt-4 lg:pt-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* 1. Left Spacer */}
            <div className="hidden lg:block lg:w-[28%] xl:w-[28%] flex-shrink-0"></div>

            {/* 2. Middle Text Content */}
            <div className="w-full lg:w-[42%] xl:w-[42%]">
               {/* Breadcrumb */}
               <div className="text-[10px] text-slate-500 font-bold tracking-widest uppercase mb-12">
                 <Link href="/" className="hover:text-brand-navy transition-colors pointer-events-auto">HOME</Link> &nbsp;&gt;&nbsp; <Link href="/services" className="hover:text-brand-navy transition-colors pointer-events-auto">SERVICES</Link> &nbsp;&gt;&nbsp; <span className="text-[#4673A6]">{data.title.toUpperCase()}</span>
               </div>
               
               <h1 className="font-sans text-4xl md:text-5xl lg:text-[56px] font-bold text-brand-navy mb-8 leading-[1.1]">
                 {data.subtitle}
               </h1>
               
               <div className="space-y-6 text-slate-600 text-base leading-relaxed mb-10 whitespace-pre-line">
                 <p>{data.description}</p>
               </div>

               <Link href="/#contact" className="inline-flex items-center justify-center px-8 h-14 bg-brand-teal text-white font-bold rounded-full hover:bg-brand-teal/90 transition-all shadow-[0_4px_14px_0_rgba(0,157,218,0.39)] hover:shadow-[0_6px_20px_rgba(0,157,218,0.23)] hover:-translate-y-0.5 pointer-events-auto relative z-30">
                 Book a consultation
               </Link>
            </div>
            
            {/* 3. Right Media (Empty) */}
            <div className="w-full lg:w-[30%]"></div>
          </div>
        </div>
      </section>

      {/* 2. PROCESS / TIMELINE */}
      {data.process && data.process.length > 0 && (
        <section className="py-16 md:py-32 bg-slate-50 border-y border-slate-100">
          <div className="max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-sans text-4xl md:text-5xl text-brand-navy mb-4">
                {data.processTitle}
              </h2>
              {data.processSubtitle && (
                <p className="text-lg text-brand-text-muted">{data.processSubtitle}</p>
              )}
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.process.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 relative"
                >
                  <div className="text-brand-teal/20 font-sans text-5xl font-bold absolute top-6 right-6 pointer-events-none">
                    {step.number}
                  </div>
                  <h3 className="font-sans text-2xl md:text-3xl text-brand-navy mb-4 pr-12">{step.title}</h3>
                  <p className="text-brand-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. CONTENT BLOCKS */}
      {data.contentBlocks && data.contentBlocks.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {data.contentBlocks.map((block, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  className="bg-white border-l-4 border-brand-teal pl-6 md:pl-10"
                >
                  <h3 className="font-sans text-2xl md:text-3xl text-brand-navy mb-4">{block.title}</h3>
                  {block.description && (
                    <p className="text-lg text-brand-text-muted leading-relaxed mb-6 whitespace-pre-line">
                      {block.description}
                    </p>
                  )}
                  
                  {block.listTitle && (
                    <p className="font-medium text-brand-navy mb-4">{block.listTitle}</p>
                  )}

                  {block.list && block.list.length > 0 && (
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {block.list.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span className="text-brand-text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {block.listDetailed && block.listDetailed.length > 0 && (
                    <div className="space-y-6 mt-6">
                      {block.listDetailed.map((item, i) => (
                        <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                          <h4 className="font-bold text-brand-navy text-lg mb-2">{item.title}</h4>
                          <p className="text-brand-text-muted leading-relaxed">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. CONSIDERATIONS / WARNINGS */}
      {data.considerations && data.considerations.length > 0 && (
        <section className="py-16 md:py-24 bg-brand-warm">
          <div className="max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-brand-teal">
                <ShieldAlert className="w-8 h-8" />
              </div>
              <h2 className="font-sans text-4xl md:text-5xl text-brand-navy mb-4">
                {data.considerationsTitle || "Things to consider"}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {data.considerations.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex gap-4">
                  <div className="text-brand-teal flex-shrink-0 mt-1">
                    <Info className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy mb-2">{item.title}</h4>
                    <p className="text-brand-text-muted leading-relaxed text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. CUSTOM CTA */}
      <section className="bg-brand-navy py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none flex justify-center items-center">
           <div className="w-[100vw] h-[100vw] max-w-[800px] max-h-[800px] rounded-full border-[2px] border-white absolute"></div>
        </div>
        <div className="relative z-10 px-4 max-w-3xl mx-auto">
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            {data.cta.title}
          </h2>
          <p className="text-lg text-white/80 mb-10 leading-relaxed">
            {data.cta.description}
          </p>
          <Link href="/#contact" className="inline-flex items-center justify-center px-10 h-16 bg-brand-teal text-white font-bold rounded-full hover:bg-brand-teal/90 transition-all shadow-xl hover:-translate-y-1">
            {data.cta.buttonText}
          </Link>
        </div>
      </section>

      {/* 6. FAQ & CONTACT */}
      <FaqSection />
      <ContactSection />
    </div>
  );
}
