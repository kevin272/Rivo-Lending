import { ComplianceSidebar } from "@/components/ComplianceSidebar";

export default function CreditGuidePage() {
  return (
    <div className="pt-32 pb-24 max-w-6xl mx-auto px-4 min-h-[60vh] flex flex-col lg:flex-row gap-12">
      <div className="lg:w-3/4">
        <h1 className="text-4xl font-bold text-brand-navy mb-10">Credit Guide</h1>
      <div className="prose prose-lg text-brand-text-muted max-w-none">
        <p>This Credit Guide sets out important information about the services we provide, how we are remunerated, and what you can do if you have a complaint.</p>
        
        <h2>About Us</h2>
        <p><strong>Business Name:</strong> Rivo Lending (a business name of Sanskriti Holdings Pty Ltd)</p>
        <p><strong>Credit Representative Number:</strong> 550551</p>
        <p><strong>Australian Credit Licence Number:</strong> 389087</p>
        <p><strong>Phone:</strong> 0451 178 375</p>
        <p><strong>Email:</strong> info@rivolending.com.au</p>
        
        <h2>Our Services</h2>
        <p>We provide credit assistance to help you secure a loan that meets your needs and objectives. We act in your best interests when recommending a credit product, ensuring it is appropriate for your financial situation.</p>
        
        <h2>Our Lenders</h2>
        <p>We source finance from a broad panel of over 30 lenders, including major banks, second-tier lenders, and specialist finance providers. While we work with a wide range of lenders, we do not have access to every lender in the market.</p>
        
        <h2>How We Are Paid</h2>
        <p>As a mortgage broker, we do not charge you a fee for our services. Instead, we are paid a commission by the lender if your loan settles. This commission is not an extra charge to you.</p>
        <ul>
          <li><strong>Upfront Commission:</strong> A one-off payment calculated as a percentage of the loan amount.</li>
          <li><strong>Trail Commission:</strong> An ongoing payment calculated on the outstanding loan balance for the life of the loan.</li>
        </ul>
        <p>We will provide you with a written Credit Proposal Disclosure document before you apply for a loan. This document will detail the exact commissions we will receive for your specific loan.</p>
        
        <h2>Fees Payable By You</h2>
        <p>We do not charge you a fee for our credit assistance. However, you may be required to pay fees to the lender, such as application fees, valuation fees, or settlement fees. These will be outlined in your loan documentation.</p>
        
        <h2>Acting in Your Best Interests</h2>
        <p>Under the law, we are required to act in your best interests. We will only recommend a loan that we believe is suitable for you, and we will prioritise your interests above our own when dealing with lenders.</p>
        
        <h2>What to Do if You Have a Complaint</h2>
        <p>If you are unhappy with our services, please let us know so we can resolve the issue. You can find our detailed complaints procedure on our <a href="/complaints">Complaints</a> page.</p>
      </div>
      </div>
      <div className="lg:w-1/4">
        <div className="sticky top-32">
          <ComplianceSidebar />
        </div>
      </div>
    </div>
  );
}
