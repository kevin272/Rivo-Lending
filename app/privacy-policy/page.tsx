import { ComplianceSidebar } from "@/components/ComplianceSidebar";

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 max-w-6xl mx-auto px-4 min-h-[60vh] flex flex-col lg:flex-row gap-12">
      <div className="lg:w-3/4">
        <h1 className="text-4xl font-bold text-brand-navy mb-10">Privacy Policy</h1>
      <div className="prose prose-lg text-brand-text-muted max-w-none">
        <h2>Who we are</h2>
        <p>‘We’, ‘us’ and ‘our’ refer to Rivo Lending, a business name of Sanskriti Holdings Pty Ltd (Credit Representative No. 550551), authorised under Australian Credit Licence No. 389087, and our related businesses.</p>
        
        <h2>Our commitment to protect your privacy</h2>
        <p>At Rivo Lending, we understand that the details you provide us are private and personal. It’s important that you feel secure whenever you deal with us. Our policies are designed to ensure that your personal information is protected under Australian privacy laws, including the Australian Privacy Principles set out in the Privacy Act.</p>
        
        <h2>Personal information we collect</h2>
        <p>When we refer to personal information, we mean information that can identify you. This may include your name, date of birth, address, account details, occupation, and any other information we need to identify you. If you are applying for finance, we may also collect details about your dependents, employment, and proof of earnings and expenses.</p>
        <p>We may also collect credit information, which is used to assess your eligibility for finance. This includes outstanding loans, repayment history, and any defaults.</p>
        
        <h2>Why we collect your personal information</h2>
        <p>We collect personal information to assess your application for finance and manage that finance. We may also use it for direct marketing and to manage our relationship with you. To maintain a successful business relationship, we may disclose your information to other organisations that provide products or services we use, or to anyone considering an interest in your finance or our business.</p>

        <h2>How we collect your personal information</h2>
        <p>Where reasonable and practical, we collect your personal information directly from you. We may also collect it from finance brokers, accountants, lawyers, or other representatives.</p>

        <h2>Who we share your information with</h2>
        <p>We may disclose your personal information to:</p>
        <ul>
            <li>Prospective lenders or intermediaries related to your finance requirements</li>
            <li>Organisations involved in managing your finance, such as third-party suppliers, IT systems, and postal services</li>
            <li>Anyone who represents you, such as lawyers and accountants</li>
            <li>Anyone you have given us consent to share it with</li>
            <li>Government or regulatory bodies where required by law (e.g., Anti-Money Laundering laws)</li>
        </ul>
        <p>We take reasonable steps to ensure that any organisation we share your information with has a commitment to protecting your privacy at least equal to ours.</p>

        <h2>Direct marketing</h2>
        <p>We may use your personal information to provide you with updates on finance, offers, or new products. If you do not wish to receive marketing information, you can opt out at any time by calling us on 0451 178 375 or emailing info@rivolending.com.au.</p>

        <h2>Keeping your information accurate</h2>
        <p>It is important that the information we hold about you is accurate and up to date. Please inform us if any of your details change. You can request access to or correction of your personal information at any time by contacting us.</p>

        <h2>Safe and secure storage</h2>
        <p>We take reasonable steps to protect your personal information by storing it in a secure environment, both in paper and electronic forms, to prevent misuse, loss, or unauthorised access.</p>

        <h2>Complaints</h2>
        <p>If you are dissatisfied with how we have handled your personal information, or have a complaint about our privacy practices, please contact us at info@rivolending.com.au or call 0451 178 375. We will acknowledge your complaint within seven days and provide a decision within 30 days. If you remain dissatisfied, you can contact the Office of the Australian Information Commissioner (OAIC) at www.oaic.gov.au or 1300 363 992.</p>
        
        <h2>Changes to our privacy policy</h2>
        <p>We regularly review our policies to keep up with market expectations and legal changes. As a result, we may update this privacy policy from time to time.</p>
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
