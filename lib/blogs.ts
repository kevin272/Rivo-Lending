export interface BlogAuthor {
  name: string;
  role: string;
  avatar: string;
}

export interface BlogSection {
  heading: string;
  paragraphs: string[];
  subheadings?: {
    title: string;
    content: string;
  }[];
  callout?: {
    type: "tip" | "info" | "warning";
    title: string;
    message: string;
  };
  bulletPoints?: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: string;
  publishedDate: string;
  readTime: string;
  coverImage: string;
  author: BlogAuthor;
  keyTakeaways: string[];
  sections: BlogSection[];
  tags: string[];
  faq?: { question: string; answer: string }[];
}

export const blogs: BlogPost[] = [
  {
    id: "1",
    slug: "first-home-buyers-guide-sydney",
    title: "The First Home Buyer's Guide to Sydney: What You Actually Need to Know in 2026",
    subtitle: "Deposits, LMI, grants and pre-approval — what matters, what's a myth, and the one conversation that turns 'someday' into a dated plan.",
    excerpt: "If you've ever closed a property app at 11pm feeling further from a home than when you opened it, this guide is for you. Buying your first home in Sydney is genuinely hard — but most of what makes it feel impossible is jargon, not reality. Let's clear it up, in plain English.",
    category: "First Home Buyers",
    publishedDate: "7 July 2026",
    readTime: "7 min read",
    coverImage: "https://images.pexels.com/photos/8482895/pexels-photo-8482895.jpeg?auto=compress&cs=tinysrgb&w=1200",
    author: {
      name: "Arun Rizal",
      role: "Principal Mortgage Broker",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    keyTakeaways: [
      "20% deposit is the point where you avoid Lenders Mortgage Insurance (LMI) — it is not the mandatory entry ticket to property ownership.",
      "Government schemes like the Home Guarantee Scheme let eligible first home buyers purchase with as little as a 5% deposit and zero LMI.",
      "A guarantor (typically parents using home equity) can reduce or remove the upfront deposit hurdle entirely without gifting cash.",
      "Pre-approval gives you a concrete budget, credibility at auctions, and lasts ~90 days — apply once strategically rather than hurting your credit file across multiple banks.",
      "Since 2021, Australian mortgage brokers are legally bound by the Best Interests Duty to put your interests first; banks carry no such duty when selling their own products."
    ],
    sections: [
      {
        heading: "1. Your deposit: 20% is the goal, not the rule",
        paragraphs: [
          "You've probably heard you need a 20% deposit. Here's the truth: 20% is the point at which you avoid Lenders Mortgage Insurance (LMI) — it is not the entry ticket.",
          "The right answer depends on your income, the property, and how fast prices are moving in your target suburbs. Sometimes paying LMI to buy two years sooner is the cheaper path. That's a maths question — one a broker can model for you in a single conversation."
        ],
        bulletPoints: [
          "With less than 20%, many lenders will still say yes; you'll usually pay LMI, a one-off insurance premium that protects the lender (not you).",
          "Government schemes like the Home Guarantee Scheme can let eligible first home buyers purchase with as little as 5% deposit and no LMI — places are capped each year, so timing matters.",
          "A guarantor (typically a parent offering equity in their own home as security) can reduce or remove the deposit hurdle entirely."
        ],
        callout: {
          type: "tip",
          title: "Sydney Market Reality",
          message: "If property prices in your target suburb rise 6% over two years, saving for a 20% deposit can cost far more in missed equity growth than a one-off LMI fee."
        }
      },
      {
        heading: "2. Grants and schemes: free money has fine print",
        paragraphs: [
          "First home buyers in NSW may have access to stamp duty exemptions or concessions, first home owner grants for new builds, and federal guarantee schemes. Each has its own price caps, property types and income tests — and they change with budgets and elections.",
          "Don't memorise the rules. Just know this: before you set your budget, have someone check every scheme you qualify for. Missing one can cost tens of thousands."
        ],
        bulletPoints: [
          "NSW First Home Buyers Assistance Scheme: Full transfer duty exemption on eligible homes up to $800,000, and concessional rates up to $1,000,000.",
          "First Home Owner Grant (FHOG): A $10,000 grant for purchasing or building a brand-new home.",
          "First Home Super Saver Scheme (FHSSS): Build your deposit inside superannuation with tax advantages."
        ]
      },
      {
        heading: "3. Pre-approval: your permission slip to bid with confidence",
        paragraphs: [
          "Pre-approval (or 'conditional approval') is a lender's in-principle yes to a loan amount. It matters for three critical reasons:",
          "Two cautions: pre-approvals typically last around 90 days, and every formal application can leave a mark on your credit file — so the 'apply to five banks and see' approach can actually hurt you. Compare first, apply once, and apply well."
        ],
        bulletPoints: [
          "You know your real budget — not a calculator's guess.",
          "Real estate agents take you seriously, especially at private treaty and auction negotiations.",
          "You can move fast when the right place appears, without risking your deposit on finance delays."
        ]
      },
      {
        heading: "4. What lenders actually look at",
        paragraphs: [
          "Behind every approval are the same fundamentals: your income and its stability, your existing debts and credit limits (yes, that unused credit card counts against you), your spending patterns over the last few months, your deposit and where it came from, and your credit history.",
          "The practical takeaway: in the 3–6 months before applying, tidy your spending, cancel unused cards and buy-now-pay-later accounts, and keep savings landing in one account. Small changes here can shift your borrowing power more than a pay rise."
        ]
      },
      {
        heading: "5. Why the lender you've never heard of might beat your own bank",
        paragraphs: [
          "Your bank sees one set of products: theirs. Across the market there are dozens of lenders with genuinely different policies — some are sharper on rates, some are friendlier to casual income, some assess bonuses or overtime more generously. The 'best' lender is the one whose policy fits your situation.",
          "This is the actual job of a mortgage broker: compare across a whole panel (ours spans 30+ lenders), pick the right fit, and package your application so it's approved the first time. And because lenders pay brokers on settlement, this costs you nothing in almost all cases — we disclose exactly how we're paid, up front.",
          "One more thing your bank can't offer: since 2021, mortgage brokers are bound by a legal Best Interests Duty. We are required by law to put your interests first. Banks have no such duty when they sell you their own product."
        ]
      },
      {
        heading: "Your first step (it's smaller than you think)",
        paragraphs: [
          "You don't need a deposit ready or a suburb picked to talk to a broker. The best first conversation happens early — it turns 'someday' into a dated plan: what you could borrow today, what schemes fit, and what to adjust so you're auction-ready in six months."
        ]
      }
    ],
    tags: ["First Home Buyers", "Sydney Property", "Home Loans", "LMI", "Pre-Approval"],
    faq: [
      {
        question: "Do I need a 20% deposit to buy a home in Sydney?",
        answer: "No. While 20% avoids LMI, government schemes allow eligible first home buyers to purchase with as little as 5% deposit and no LMI, and guarantor loans can reduce the deposit requirement even further."
      },
      {
        question: "How long does home loan pre-approval last?",
        answer: "Pre-approvals in Australia are generally valid for 90 days. If your search takes longer, your broker can refresh the pre-approval with updated payslips."
      }
    ]
  },
  {
    id: "2",
    slug: "is-a-mortgage-broker-really-free",
    title: "Is a Mortgage Broker Really Free? Here's Exactly How We Get Paid",
    subtitle: "Upfront and trail commissions, conflicts of interest, and the questions worth asking any broker — nothing left out.",
    excerpt: "It's the question every smart borrower asks — usually with one eyebrow raised: 'If your service is free, what's the catch?' Fair question. Nobody works for nothing, and an industry that says 'free' without explaining itself deserves your suspicion. So here's the full answer, with nothing left out.",
    category: "How Broking Works",
    publishedDate: "7 July 2026",
    readTime: "5 min read",
    coverImage: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200",
    author: {
      name: "Amit Kumar Basnet",
      role: "Director & Lending Specialist",
      avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    keyTakeaways: [
      "When your loan settles, the lender pays the broker a commission. That's the entire business model.",
      "Commissions come out of the lender's operating margin — they are never added to your loan or deducted from your repayments.",
      "Lenders do not have a separate 'broker rate' — broker customers draw from the same or sharper pricing due to negotiated discounts.",
      "The legal Best Interests Duty obligates Australian mortgage brokers to recommend the optimal loan for you, regardless of commission rates.",
      "Before signing, your broker must provide full written disclosure detailing the exact commission earned."
    ],
    sections: [
      {
        heading: "The short version",
        paragraphs: [
          "When your loan settles, the lender pays the broker a commission. That's it. That's the business model. You get whole-of-market comparison, application handling and negotiation; the lender pays for the introduction because it's cheaper for them than running more branches and call centres."
        ]
      },
      {
        heading: "The longer version: two kinds of commission",
        paragraphs: [
          "Broker commissions in Australia come in two parts:",
          "Both come out of the lender's margin — not added to your loan, not deducted from your account."
        ],
        bulletPoints: [
          "Upfront commission — a one-off percentage of the loan amount, paid by the lender shortly after settlement.",
          "Trail commission — a much smaller ongoing percentage, paid while the loan stays healthy. Trail is why good brokers keep looking after you for years: it aligns our income with your loan actually working out."
        ]
      },
      {
        heading: "\"So doesn't the lender just charge me more to cover it?\"",
        paragraphs: [
          "No — and this is the part most people find surprising. Lenders don't have a separate, more expensive 'broker rate.' Branch customers and broker customers draw from the same pricing.",
          "In practice it often works the other way: because brokers compare the whole market, lenders sharpen their pricing to win broker-introduced customers, and a broker who knows a lender's discretionary pricing can negotiate below the advertised rate."
        ]
      },
      {
        heading: "What about conflicts of interest?",
        paragraphs: [
          "The honest risk in a commission model is obvious: could a broker steer you toward whoever pays them most? Two protections deal with this directly:",
          "Worth knowing: banks selling their own products carry no Best Interests Duty. The legal obligation to put you first exists on only one side of the counter — the broker's."
        ],
        bulletPoints: [
          "The Best Interests Duty. Since 2021, brokers are legally required to act in your best interests. Recommending a worse loan because it pays better isn't just poor form — it's unlawful.",
          "Disclosure. Before you sign anything, your broker must give you documents showing how they're paid, including the actual commission on your recommended loan. At Rivo we walk you through those numbers rather than hoping you don't read them."
        ]
      },
      {
        heading: "When it isn't free",
        paragraphs: [
          "'Almost all cases' is doing some work in our tagline, so let's define it. A small number of situations — typically complex commercial lending or loans too small for lenders to pay commission on — may involve a fee for service. If that ever applies to you, you'll know the exact amount before we do a single hour of work, in writing. No Rivo client discovers a fee after the fact."
        ]
      },
      {
        heading: "Questions worth asking any broker (including us)",
        paragraphs: [
          "A good broker enjoys these questions. If one seems uncomfortable answering them, you've learned something valuable for free:"
        ],
        bulletPoints: [
          "1. How many lenders are on your panel, and which ones do you actually use?",
          "2. What commission will you earn on the loan you're recommending?",
          "3. Why this lender over the next-best option?",
          "4. What happens after settlement — will you review my loan, and how often?"
        ]
      },
      {
        heading: "Ask us anything — including how we're paid",
        paragraphs: [
          "Book a free, no-obligation assessment and we'll show you our numbers along with yours. Complete transparency from day one."
        ]
      }
    ],
    tags: ["Mortgage Broker", "How Broking Works", "Commissions", "Best Interests Duty", "Home Loans"],
    faq: [
      {
        question: "Does using a broker cost me more on my interest rate?",
        answer: "No. Lenders do not charge higher interest rates to broker clients. In fact, brokers can often access discretionary pricing discounts below the bank's advertised branch rates."
      },
      {
        question: "What is the Best Interests Duty?",
        answer: "Introduced in 2021 under Australian law, the Best Interests Duty legally requires mortgage brokers to prioritize the borrower's best interests above all else when providing credit assistance."
      }
    ]
  },
  {
    id: "3",
    slug: "fixed-vs-variable-home-loans",
    title: "Fixed vs Variable Home Loans, Explained Plainly",
    subtitle: "How each option works, the fine print nobody mentions, and why the right answer depends on your life — not on predicting rates.",
    excerpt: "\"Should I fix my rate?\" might be the most-Googled home loan question in Australia — and most of what comes back is either rate speculation dressed up as advice, or a shrug. Here's what actually matters: how each option works, what each one costs you in flexibility, and why the right answer depends far more on your life than on where rates go next.",
    category: "Loan Structure",
    publishedDate: "7 July 2026",
    readTime: "6 min read",
    coverImage: "https://images.pexels.com/photos/5849570/pexels-photo-5849570.jpeg?auto=compress&cs=tinysrgb&w=1200",
    author: {
      name: "Arun Rizal",
      role: "Principal Mortgage Broker",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    keyTakeaways: [
      "Variable rate loans provide maximum agility: unlimited extra repayments, 100% offset accounts, and zero break fees to sell or refinance.",
      "Fixed rate loans deliver absolute repayment certainty for 1 to 5 years, shielding households from interest rate fluctuations.",
      "The major trap of fixed loans is break costs: refinancing or selling during a fixed period can trigger thousands of dollars in exit fees.",
      "Split loans enable borrowers to fix a portion of their balance for certainty while leaving the remainder variable for offset savings.",
      "Nobody can reliably forecast RBA interest rate moves; choose a loan structure based on your household cash flow buffers and life plans."
    ],
    sections: [
      {
        heading: "Variable: the flexible default",
        paragraphs: [
          "A variable rate moves when your lender moves it — usually (but not always) tracking the Reserve Bank's cash rate. In exchange for living with that uncertainty, you typically get the loan's most useful features:",
          "The trade-off is the obvious one: when rates rise, so do your repayments — sometimes several times in a year."
        ],
        bulletPoints: [
          "Unlimited extra repayments — pay the loan down as fast as you like without penalty.",
          "Offset accounts and redraw — your savings reduce the interest you pay daily while staying immediately accessible.",
          "Freedom to leave — refinance or sell whenever it suits you, without expensive break costs."
        ]
      },
      {
        heading: "Fixed: certainty, at the cost of flexibility",
        paragraphs: [
          "Fixing locks your rate — and your repayment — for a set term, usually one to five years. For a household on a tight budget, that certainty can be genuinely valuable: you know exactly what the mortgage costs until the fixed term ends.",
          "The fine print is where fixed loans surprise people:"
        ],
        bulletPoints: [
          "Break costs. Leave early — sell, refinance, sometimes even repay too much — and the exit fee can run to thousands. It's the single most painful surprise in Australian lending.",
          "Capped extra repayments. Most fixed loans limit how much extra you can pay each year (often $10,000–$20,000 maximum).",
          "Usually no full offset. Your savings generally can't work against a fixed loan the way they can against a variable one.",
          "The revert rate. When the fixed term ends, you roll onto a rate that's rarely the lender's best. Diarise it — this is where the loyalty tax is born."
        ],
        callout: {
          type: "warning",
          title: "Watch the Revert Date",
          message: "Always mark your calendar 90 days before your fixed rate expires. Rolling onto the default revert rate without negotiation can add thousands to your annual payments."
        }
      },
      {
        heading: "Split loans: the both/and option",
        paragraphs: [
          "You don't have to choose one or the other. A split loan fixes part of the balance and leaves the rest variable — certainty on the fixed slice, offset and extra repayments on the variable slice.",
          "For many borrowers the real question isn't 'fixed or variable?' but 'what split ratio fits my budget and my savings pattern?'"
        ]
      },
      {
        heading: "The honest truth about predicting rates",
        paragraphs: [
          "Nobody reliably knows where rates are going — not the economists, not the banks, and certainly not anyone posting with confidence online. Fixing because you're sure rates will rise is a bet. Fixing because your budget can't absorb a rise is a plan. Those are very different reasons, and only one of them depends on being right.",
          "So instead of asking 'where are rates headed?', ask: How much repayment increase could we absorb before it hurt? Are we likely to sell, move or renovate in the next few years? Do we keep meaningful savings that an offset would put to work? Your answers point to a structure — and that's a conversation a broker can map with you in under an hour."
        ]
      },
      {
        heading: "Not sure which structure fits?",
        paragraphs: [
          "Book a free assessment — we'll model fixed, variable and split against your actual budget, across 30+ lenders."
        ]
      }
    ],
    tags: ["Fixed Rates", "Variable Rates", "Split Loan", "Loan Structure", "Offset Account"],
    faq: [
      {
        question: "Can I make extra repayments on a fixed rate loan?",
        answer: "Most Australian lenders restrict additional repayments on fixed loans, typically capping them at $10,000 to $20,000 per annum without penalty."
      },
      {
        question: "What is a split mortgage loan?",
        answer: "A split loan divides your total borrowing into two accounts: one portion with a fixed interest rate and the other with a variable interest rate, balancing security with flexibility."
      }
    ]
  },
  {
    id: "4",
    slug: "home-loan-loyalty-tax",
    title: "The Loyalty Tax: What Staying With Your Lender Could Be Costing You",
    subtitle: "Lenders save their sharpest rates for new customers. How the loyalty tax works, how to spot it on your loan, and two ways to stop paying it.",
    excerpt: "Here's a pattern the mortgage industry doesn't advertise: the customers who get the sharpest rates are the ones walking in the door — not the ones who've faithfully paid on time for eight years. Regulators have studied it, economists have named it, and if your loan is more than a couple of years old, you may be paying it right now. It's called the loyalty tax.",
    category: "Refinancing",
    publishedDate: "7 July 2026",
    readTime: "5 min read",
    coverImage: "https://images.pexels.com/photos/29336323/pexels-photo-29336323.jpeg?auto=compress&cs=tinysrgb&w=1200",
    author: {
      name: "Amit Kumar Basnet",
      role: "Director & Lending Specialist",
      avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    keyTakeaways: [
      "Banks offer aggressive rate discounts to attract new customers while quietly letting existing loyal borrowers pay higher margins.",
      "The ACCC's home loan inquiry confirmed that loans older than 3 years pay significantly higher interest rates on average.",
      "On a $700,000 Sydney mortgage, a 0.50% loyalty tax gap costs approximately $3,500 in avoidable interest every year.",
      "The 'reprice call' allows your broker to request a discretionary discount from your current bank without you having to switch lenders.",
      "Annual mortgage reviews ensure you maintain top-tier pricing throughout the entire life of your loan."
    ],
    sections: [
      {
        heading: "How it happens (no villain required)",
        paragraphs: [
          "Lenders compete hard for new business, so advertised rates and new-customer discounts keep getting sharper. Existing borrowers, meanwhile, sit on the pricing they signed up with. Rate cuts get passed on partially or slowly; discretionary discounts offered to newcomers never reach the 'back book.' No one decides to punish you — the system simply rewards the customers who are shopping and quietly drifts everyone else upward.",
          "Australia's competition watchdog (ACCC) found exactly this in its home loan pricing inquiry: on average, the longer a loan had been open, the bigger the gap between what existing borrowers and new borrowers paid."
        ],
        callout: {
          type: "warning",
          title: "The Compounding Cost",
          message: "On a $750,000 loan balance, an extra 0.60% in loyalty tax costs $4,500 per year — money that could otherwise pay down your principal or build household savings."
        }
      },
      {
        heading: "Signs you're probably paying it",
        paragraphs: [
          "Look at your most recent loan statement. If any of the following apply, you are almost certainly paying a loyalty tax:"
        ],
        bulletPoints: [
          "Your loan is more than two or three years old and you've never asked for a reprice.",
          "You rolled off a fixed term onto the lender's revert rate and left it there.",
          "Your lender advertises rates to new customers that are lower than what you're paying for the same kind of loan.",
          "You don't actually know your rate. No judgement — most people don't. That's precisely what the pricing model counts on."
        ]
      },
      {
        heading: "Two ways to stop paying it",
        paragraphs: [
          "1. The reprice call. Sometimes the fix doesn't require moving at all. A well-argued repricing request — backed by what other lenders would offer you — often lands a discount within days, because keeping you is cheaper than replacing you. This is routine work for a broker: we know each lender's discretionary pricing and how to ask.",
          "2. Refinancing. If your lender won't sharpen up, another one will. Refinancing means real admin — discharge forms, a new application, settlement — which is exactly the friction the loyalty tax hides behind. A broker absorbs that friction: we run the comparison across 30+ lenders, manage the paperwork, and only recommend the move if the numbers genuinely clear the switching costs."
        ]
      },
      {
        heading: "The habit that beats the tax permanently",
        paragraphs: [
          "A loan that was right when you got it doesn't stay right by itself — rates move, lenders reprice, your life changes. The durable fix is a yearly review: one short check of your rate against the current market. It's built into how Rivo works — every client's loan gets a free annual health check, because our job doesn't end at settlement."
        ]
      },
      {
        heading: "When did you last check your rate?",
        paragraphs: [
          "Send us your current loan details — if you're already on a great deal, we'll happily tell you so. If you're not, you'll see exactly what's possible before you decide anything."
        ]
      }
    ],
    tags: ["Loyalty Tax", "Refinancing", "Interest Rates", "Loan Review", "ACCC"],
    faq: [
      {
        question: "Can I get a rate cut without changing banks?",
        answer: "Yes. Many Australian lenders will lower your interest rate if an accredited broker lodges a formal pricing review based on competing market offers."
      },
      {
        question: "How often should I review my home loan rate?",
        answer: "We recommend reviewing your home loan every 12 to 18 months, or whenever the Reserve Bank alters monetary policy."
      }
    ]
  },
  {
    id: "5",
    slug: "low-deposit-home-loans-guarantor",
    title: "Buying With a Small Deposit: Guarantors, Guarantee Schemes and LMI, Explained",
    subtitle: "There isn't one door into home ownership — there are three. LMI, 5%-deposit guarantee schemes and guarantor loans, compared honestly.",
    excerpt: "Saving a Sydney-sized deposit can feel like chasing a train that's already moving — every year you save, prices may move further than your savings did. What most buyers don't realise is that there isn't one door into home ownership; there are at least three, and they open at very different deposit levels.",
    category: "First Home Buyers",
    publishedDate: "7 July 2026",
    readTime: "6 min read",
    coverImage: "https://images.pexels.com/photos/28456460/pexels-photo-28456460.jpeg?auto=compress&cs=tinysrgb&w=1200",
    author: {
      name: "Arun Rizal",
      role: "Principal Mortgage Broker",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    keyTakeaways: [
      "Path 1 (Paying LMI): Paying LMI can be the fastest, most economical path when target property price appreciation exceeds savings velocity.",
      "Path 2 (Government Guarantee Schemes): Federal backing allows eligible first home buyers to purchase with 5% deposit and zero LMI.",
      "Path 3 (Guarantor Loans): Allows parents to pledge home equity as security, reducing deposit needs to 0% without transferring cash.",
      "A responsible guarantor structure must always feature a limited guarantee cap, an exit milestone, and independent legal advice.",
      "Select occupations (e.g. medical practitioners, nurses, lawyers) qualify for specialized bank LMI waivers."
    ],
    sections: [
      {
        heading: "Path 1: Pay LMI and buy sooner",
        paragraphs: [
          "Lenders Mortgage Insurance is a one-off premium you pay when borrowing more than 80% of a property's value. Two things about it are widely misunderstood:",
          "The premium scales with how little deposit you have and how much you're borrowing, it can often be added to the loan, and — a detail few buyers hear — some professions and some lenders have LMI waivers or discounts. Which is exactly the kind of policy quirk a whole-of-market broker exists to find."
        ],
        bulletPoints: [
          "It protects the lender if you default — not you. You're paying for their peace of mind.",
          "It is not automatically a rip-off. If paying LMI gets you into a rising market two years earlier, the premium can cost far less than the price growth you'd have missed. Sometimes it's the smartest money in the whole transaction."
        ]
      },
      {
        heading: "Path 2: Government guarantee schemes — 5% down, no LMI",
        paragraphs: [
          "Under the federal Home Guarantee Scheme, the government effectively stands behind part of your loan so that eligible buyers can purchase with as little as a 5% deposit without paying LMI. Variants have existed for first home buyers, regional buyers and single parents (with even lower deposit requirements for the latter).",
          "The catches are real but manageable: property price caps, income tests, owner-occupier requirements — and the details change with budgets and elections. Two rules of thumb:",
          "Never rule yourself out from memory, and never rely on a two-year-old article. Eligibility is a ten-minute check against current rules — have someone run it before you set your budget."
        ]
      },
      {
        heading: "Path 3: A guarantor — the family shortcut, taken seriously",
        paragraphs: [
          "A guarantor loan lets a family member — usually a parent — offer equity in their own home as extra security for yours. Done well, it can shrink or remove the deposit hurdle and dodge LMI entirely, all without your parents handing over cash.",
          "But we won't sugar-coat it: a guarantee is a real legal commitment. If the loan goes bad, the guarantor's own home backs the shortfall. So a responsible guarantor setup always includes:"
        ],
        bulletPoints: [
          "A limited guarantee — capped at a specific amount, never 'everything.'",
          "An exit plan — the guarantee gets released once your equity reaches a safe level, typically after a few years of repayments and growth.",
          "Independent advice for the guarantor — lenders generally require it, and good brokers insist on it. If anyone waves this away, walk."
        ]
      },
      {
        heading: "Which path is yours?",
        paragraphs: [
          "It depends on the numbers: your savings, your income, your family's situation, the property, and what each option costs over its life — not just at settlement. That's a modelling exercise, not a guess, and it's exactly what a free assessment is for. Bring your situation; we'll bring the comparison across 30+ lenders and every scheme you qualify for."
        ]
      },
      {
        heading: "Find your fastest safe path to keys",
        paragraphs: [
          "Book a free, no-obligation assessment — we'll check your scheme eligibility and model all three paths side by side."
        ]
      }
    ],
    tags: ["Guarantor Loan", "Low Deposit", "Home Guarantee Scheme", "LMI", "First Home Buyer"],
    faq: [
      {
        question: "How does a guarantor loan work in Australia?",
        answer: "A guarantor (typically a parent) uses the equity in their property as security for a portion of your loan, enabling you to borrow up to 100% of the purchase price without paying LMI."
      },
      {
        question: "When can a guarantor be removed from my home loan?",
        answer: "A guarantor can be formally discharged once your property's value rises or you pay down the loan so your Loan-to-Value Ratio (LVR) drops to 80% or below."
      }
    ]
  }
];

export function getAllBlogs(): BlogPost[] {
  return blogs;
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  const normalizedSlug = slug.replace(/\.html$/, "");
  return blogs.find((blog) => blog.slug === normalizedSlug);
}

export function getRelatedBlogs(currentSlug: string, limit = 2): BlogPost[] {
  const normalizedSlug = currentSlug.replace(/\.html$/, "");
  return blogs.filter((blog) => blog.slug !== normalizedSlug).slice(0, limit);
}
